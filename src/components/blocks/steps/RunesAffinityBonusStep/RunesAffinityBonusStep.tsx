import * as React from 'react';
import { connect } from 'react-redux';
import { GlobalState } from '../../../../store/storeTypes';
import {
    decrementFreeCharacteristicsPoints,
    incrementFreeCharacteristicsPoints,
    nextStep,
    prevStep,
    resetInitialCharacteristics,
    setCharacteristicsMode,
    setFreeCharacteristicsPoints,
    setPrimaryRune,
    setSecondaryRune
} from '../../../../store/stepsStore/stepsActions';
import { CharacteristicsMode } from '../../../../store/stepsStore/stepsStoreTypes';
import { Characteristics, RuneElementalTitle } from '../../../../gameEntities/gameEntitiesTypes';
import { getRunesList } from '../../../../gameEntities/gameEntities';
import { CharacteristicsStore } from '../../../../store/characterStore/characterStoreTypes';
import { setCharacteristics } from '../../../../store/characterStore/characterActions';
import { rollD6 } from '../../../../utils/diceRolls';
import {
    saveInitialCharacteristicsValues,
    selectPrimaryRuneBonusChar,
    selectSecondaryRuneBonusChar
} from '../../../../store/stepsStore/stepsThunks';
import { getMaxRunes } from '../../../../store/characterStore/characterRunesStore/characterRunesSelectors';
import { MAX_FREE_CHARACTERISTICS_POINTS } from '../../../../gameEntities/rules';

const CSS = require('./RunesAffinityBonusStep.css');

interface CharacteristicsStepOwnProps {}

interface CharacteristicsStepPropsFromState {
    characteristics: CharacteristicsStore,
    maxRunes: RuneElementalTitle[][],
    runesAffinity: RuneElementalTitle[],
    runesCharacteristicsBonus: Characteristics[],
}

interface CharacteristicsStepDispatchProps {
    setPrimaryRune(runeName: RuneElementalTitle): void;
    setSecondaryRune(runeName: RuneElementalTitle): void;
    selectPrimaryRuneBonusChar(char: Characteristics): void;
    selectSecondaryRuneBonusChar(char: Characteristics): void;
    nextStep(): void;
    prevStep(): void;
}

type Props = CharacteristicsStepOwnProps & CharacteristicsStepPropsFromState & CharacteristicsStepDispatchProps;

const mapStateToProps = (state: GlobalState): CharacteristicsStepPropsFromState => ({
    characteristics: state.character.characteristics,
    maxRunes: getMaxRunes(state),
    runesAffinity: state.steps.characteristicsStep.elementalRunesAffinity,
    runesCharacteristicsBonus: state.steps.characteristicsStep.runesCharacteristicsBonus
});

const mapDispatchToProps = (dispatch): CharacteristicsStepDispatchProps => ({
    setPrimaryRune: (runeName: RuneElementalTitle) => dispatch(setPrimaryRune(runeName)),
    setSecondaryRune: (runeName: RuneElementalTitle) => dispatch(setSecondaryRune(runeName)),
    selectPrimaryRuneBonusChar: (char: Characteristics) => dispatch(selectPrimaryRuneBonusChar(char)),
    selectSecondaryRuneBonusChar: (char: Characteristics) => dispatch(selectSecondaryRuneBonusChar(char)),
    nextStep: () => dispatch(nextStep()),
    prevStep: () => dispatch(prevStep()),
});

class RunesAffinityBonusStepView extends React.PureComponent<Props> {

    componentDidMount() {
        if (!this.props.runesAffinity[0]) {
            const initialPrimaryRune = this.props.maxRunes[0][0];
            this.props.setPrimaryRune(initialPrimaryRune);
        }

        if (!this.props.runesAffinity[1]) {
            const initialSecondaryRune =
                this.props.maxRunes[0].length > 1
                    ? this.props.maxRunes[0][1]
                    : this.props.maxRunes[1][0];
            this.props.setSecondaryRune(initialSecondaryRune);
        }
    }

    undo = () => {
        this.setSecondaryRune(null);
        this.setPrimaryRune(null);
        this.props.prevStep();
    };

    renderBonusSelectPrimary() {
        const [currentPrimaryRune]  = this.props.runesAffinity;
        if (!currentPrimaryRune) {
            return null;
        }

        const [primaryRuneBonus, secondaryRuneBonus] = this.props.runesCharacteristicsBonus;
        const charismaDisabled = secondaryRuneBonus === Characteristics.CHA;
        const charismaIsActive = primaryRuneBonus === Characteristics.CHA;

        const primeRuneChar = getRunesList()
            .elemental
            .find(r => r.title === currentPrimaryRune)
            .characteristic;

        const primeRuneCharSelected = primaryRuneBonus === primeRuneChar;

        return <ul>
            <li
                className={primeRuneCharSelected ? CSS.selected : ''}
                onClick={() => this.props.selectPrimaryRuneBonusChar(primeRuneCharSelected ? null : primeRuneChar)}
            >
                {primeRuneChar}
            </li>
            <li
                className={charismaDisabled
                    ? CSS.unactive
                    : charismaIsActive
                    ? CSS.selected
                    : ''}
                onClick={() => this.props.selectPrimaryRuneBonusChar(charismaIsActive ? null : Characteristics.CHA)}
            >
                {Characteristics.CHA}
                {charismaDisabled && '(can be chosen only once)'}
            </li>
        </ul>;
    }

    renderBonusSelectSecondary() {
        const [currentPrimaryRune, currentSecondaryRune]  = this.props.runesAffinity;
        if (!currentSecondaryRune) {
            return null;
        }

        const [primaryRuneBonus, secondaryRuneBonus] = this.props.runesCharacteristicsBonus;
        const charismaDisabled = primaryRuneBonus === Characteristics.CHA;
        const charismaIsActive = secondaryRuneBonus === Characteristics.CHA;

        const secondRuneChar = getRunesList()
            .elemental
            .find(r => r.title === currentSecondaryRune)
            .characteristic;

        const secondRuneCharSelected = secondaryRuneBonus === secondRuneChar;

        return <ul>
            <li
                className={secondRuneCharSelected ? CSS.selected : ''}
                onClick={() => this.props.selectSecondaryRuneBonusChar(secondRuneCharSelected ? null : secondRuneChar)}
            >
                {secondRuneChar}
            </li>
            <li
                className={charismaDisabled
                    ? CSS.unactive
                    : charismaIsActive
                        ? CSS.selected
                        : ''}
                onClick={() => this.props.selectSecondaryRuneBonusChar(charismaIsActive ? null : Characteristics.CHA)}
            >
                {Characteristics.CHA}
                {charismaDisabled && '(can be chosen only once)'}
            </li>
        </ul>;
    }

    //TODO move to thunk
    setPrimaryRune(rune: RuneElementalTitle) {
        this.props.selectPrimaryRuneBonusChar(null);
        if (rune === this.props.runesAffinity[1]) {
            this.props.selectSecondaryRuneBonusChar(null);
        }
        this.props.setPrimaryRune(rune);
    };

    setSecondaryRune(rune: RuneElementalTitle) {
        this.props.selectSecondaryRuneBonusChar(null);
        if (rune === this.props.runesAffinity[0]) {
            this.props.selectPrimaryRuneBonusChar(null);
        }
        this.props.setSecondaryRune(rune);
    };

    render() {
        const nextStepReady =
            this.props.runesAffinity.every(Boolean) &&
            this.props.runesCharacteristicsBonus.every(Boolean);

        const primaryRunesChoice = this.props.maxRunes[0];
        const secondaryRunesChoice =
            primaryRunesChoice.length > 1
                ? primaryRunesChoice
                : this.props.maxRunes[1];

        const [currentPrimaryRune, currentSecondaryRune]  = this.props.runesAffinity;

        return <div>
            <h4>Set affinity runes and their bonuses:</h4>
            <ul>
                <li>
                    <b>Primary rune: </b>
                    {primaryRunesChoice.map((runeName, index) => {
                        const nextRune = primaryRunesChoice[index + 1];
                        const selected = currentPrimaryRune === runeName;
                        return <span key={index}>
                            <span
                                onClick={() => this.setPrimaryRune(runeName)}
                                className={selected ? CSS.selected : ''}
                            >
                                    {runeName}
                            </span>
                            {nextRune && ' or '}
                        </span>
                    })
                    }
                    {currentPrimaryRune && <p>Select bonus characteristic for primary rune (+2)</p>}
                    {this.renderBonusSelectPrimary()}

                    <br/>

                </li>
                <li>
                    <b>Secondary rune: </b>
                    {secondaryRunesChoice.map((runeName, index) => {
                        const nextRune = secondaryRunesChoice[index + 1];
                        const selected = currentSecondaryRune === runeName;
                        return <span key={index}>
                        <span
                            onClick={() => this.setSecondaryRune(runeName)}
                            className={selected ? CSS.selected : ''}
                        >
                                {runeName}
                        </span>
                            {nextRune && ' or '}
                    </span>
                    })}
                    {currentSecondaryRune && <p>Select bonus characteristic for secondary rune (+1)</p>}
                    {this.renderBonusSelectSecondary()}
                </li>
            </ul>

            <button type={'button'} onClick={this.undo}>undo</button>
            <button
                type={'button'}
                disabled={!nextStepReady}
                className={!nextStepReady ? CSS.unactive : ''}
                onClick={this.props.nextStep}>next</button>
        </div>;
    }
}

export const RunesAffinityBonusStep = connect(mapStateToProps, mapDispatchToProps)(RunesAffinityBonusStepView);