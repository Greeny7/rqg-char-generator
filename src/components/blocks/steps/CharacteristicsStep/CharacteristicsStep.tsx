import * as React from "react";
import { connect } from 'react-redux';
import {GlobalState} from "../../../../store/storeTypes";
import {setStep} from "../../../../store/stepsStore/stepsActions";
import {Step} from "../../../../store/stepsStore/stepsStoreTypes";
import {
    selectPrimaryElementalRune,
    selectSecondaryElementalRune, selectTertiaryElementalRune, toggleFormRuneAffinity, togglePowerRuneAffinity
} from "../../../../store/characterStore/characterRunesStore/characterRunesThunks";
import {
    Characteristics, RuneElementalTitle, RuneFormTitle,
    RunePowerTitle
} from "../../../../gameEntities/gameEntitiesTypes";
import {getRunesList} from "../../../../gameEntities/gameEntities";
import {CharacteristicsStore} from "../../../../store/characterStore/characterStoreTypes";
import {setCharacteristics} from "../../../../store/characterStore/characterActions";
import {CharacteristicsCounter} from "./CharacteristicsCounter/CharacteristicsCounter";
import {rollD6} from "../../../../utils/dN";
const CSS = require('./CharacteristicsStep.css');

interface CharacteristicsStepOwnProps {}

interface CharacteristicsStepPropsFromState {
    characteristics: CharacteristicsStore,
}

interface CharacteristicsStepDispatchProps {
    setCharacteristics(characteristicsMap: CharacteristicsStore): void;
    nextStep(): void;
    prevStep(): void;
}

type CharacteristicsStepProps = CharacteristicsStepOwnProps & CharacteristicsStepPropsFromState & CharacteristicsStepDispatchProps;

interface CharacteristicsStepState {
    freePoints: number;
    runeCharBoostUsed: boolean;
}

const mapStateToProps = (state: GlobalState): CharacteristicsStepPropsFromState => ({
    characteristics: state.character.characteristics,
});

const mapDispatchToProps = (dispatch): CharacteristicsStepDispatchProps => ({
    setCharacteristics: (characteristicsMap: CharacteristicsStore) =>
        dispatch(setCharacteristics(characteristicsMap)),
    nextStep: () => dispatch(setStep(Step.HOMELAND)),
    prevStep: () => dispatch(setStep(Step.RUNES_DISTRIBUTION)),
});

const FIXED_DIST_NUMBER = 95;

class CharacteristicsStepView extends React.PureComponent<CharacteristicsStepProps, CharacteristicsStepState> {

    state = {
        freePoints: 0,
        runeCharBoostUsed: false
    }

    initialCharacteristics: CharacteristicsStore = {};

    componentDidMount() {
        this.initialCharacteristics = {...this.props.characteristics};
    }

    undo = () => {
        this.props.setCharacteristics(this.initialCharacteristics);
        this.props.prevStep();
    }

    renderRandom() {
        return <div>

        </div>
    }

    incrementChar(charKey: Characteristics) {
        this.props.setCharacteristics({[charKey]: this.props.characteristics[charKey] + 1});
    }

    decrementChar(charKey: Characteristics) {
        this.props.setCharacteristics({[charKey]: this.props.characteristics[charKey] - 1});
    }

    reset() {
        this.props.setCharacteristics(this.initialCharacteristics);
        this.setState({freePoints: 0});
    }

    randomDistribution() {
        this.reset();
        const newCharRoll = {
            [Characteristics.STR]: rollD6(3),
            [Characteristics.SIZ]: rollD6(2) + 6,
            [Characteristics.DEX]: rollD6(3),
            [Characteristics.CON]: rollD6(3),
            [Characteristics.INT]: rollD6(2) + 6,
            [Characteristics.CHA]: rollD6(3),
            [Characteristics.POW]: rollD6(3),
        };
        const finalChars = Object.keys(newCharRoll).reduce((acc, charKey) => {
            acc[charKey] = this.initialCharacteristics[charKey] + newCharRoll[charKey];
            return acc;
        }, {});
        this.props.setCharacteristics(finalChars);

        const sum = Object.keys(newCharRoll)
            .reduce((sum, charKey) => sum + newCharRoll[charKey], 0);

        if (sum <= 92) {
            this.setState({freePoints: 3});
        }
    }

    fixedDistribution() {
        this.reset();
        this.setState({freePoints: FIXED_DIST_NUMBER});
    }

    render() {
        const nextStepReady =
            false;

        return <div>
            <h4>Set characteristics:</h4>
            <button type={'button'} onClick={() => this.randomDistribution()}>Set random</button>
            <p>or</p>
            <button type={'button'} onClick={() => this.fixedDistribution()}>
                Distribute fixed number of points ({FIXED_DIST_NUMBER})
            </button>

            <ul>
                {Object.keys(this.props.characteristics).map((charKey: Characteristics) => {
                    const value = this.initialCharacteristics[charKey];
                    const canBeIncremented = this.state.freePoints > 0 && value < 18 + this.initialCharacteristics[charKey];
                    const canBeDecremented = value > this.initialCharacteristics[charKey];
                    return <CharacteristicsCounter
                        value={this.initialCharacteristics[charKey]}
                        title={charKey}
                        onIncrease={() => this.incrementChar(charKey)}
                        onReduce={() => this.decrementChar(charKey)}
                        canBeIncremented={canBeIncremented}
                        canBeDecremented={canBeDecremented}
                    />
                })}
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

export const CharacteristicsStep = connect(mapStateToProps, mapDispatchToProps)(CharacteristicsStepView);