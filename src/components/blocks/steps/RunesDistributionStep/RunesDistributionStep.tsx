import * as React from "react";
import { connect } from 'react-redux';
import {GlobalState} from "../../../../store/storeTypes";
import {
    decrementFreeRunePoints, incrementFreeRunePoints, nextStep, prevStep, resetInitialRuneValues, setFreeRunePoints,
    setStep
} from "../../../../store/stepsStore/stepsActions";
import {Step} from "../../../../store/stepsStore/stepsStoreTypes";
import {RuneElementalTitle, RuneFormTitle, RunePowerTitle, RuneType} from "../../../../gameEntities/gameEntitiesTypes";
import {getRunesList} from "../../../../gameEntities/gameEntities";
import {
    setElementalRune, setFormRune,
    setPowerRune, setRunes
} from "../../../../store/characterStore/characterRunesStore/characterRunesActions";
import {RuneCounter} from "./RuneCounter/RuneCounter";
import {
    setAndBalanceFormRune,
    setAndBalancePowerRune
} from "../../../../store/characterStore/characterRunesStore/characterRunesThunks";
import {MAX_FREE_RUNE_POINTS} from "../../../../store/stepsStore/stepsStore";
import {objectForEach} from "../../../../utils/iterateObject";
import {saveInitialRuneValues} from "../../../../store/stepsStore/stepsThunks";
import {
    ElementalRunesStore,
    FormRunesStore, PowerRunesStore
} from "../../../../store/characterStore/characterRunesStore/characterRunesStoreTypes";
const CSS = require('./RunesDistributionStep.css');

interface RunesDistributionStepOwnProps {}

interface RunesDistributionStepPropsFromState {
    elementalRunes,
    powerRunes,
    formRunes,
    freePoints,
    initialRunesValue
}

interface RunesDistributionStepDispatchProps {
    setElementalRune(runeName: RuneElementalTitle, value: number): void;
    setPowerRune(runeName: RunePowerTitle, value: number): void;
    setFormRune(runeName: RuneFormTitle, value: number): void;
    nextStep(): void;
    prevStep(): void;
    incrementFreeRunePoints(): void;
    decrementFreeRunePoints(): void;
    setFreeRunePoints(value: number): void;
    saveInitialRuneValues(): void;
    resetInitialRuneValues(): void;
    setRunes: (
        elementalRunes: ElementalRunesStore,
        powerRunes: PowerRunesStore,
        formRunes: FormRunesStore,
    ) => void
}

type RunesDistributionStepProps = RunesDistributionStepOwnProps & RunesDistributionStepPropsFromState & RunesDistributionStepDispatchProps;

const mapStateToProps = (state: GlobalState): RunesDistributionStepPropsFromState => ({
    elementalRunes: state.character.runes.elemental,
    powerRunes: state.character.runes.power,
    formRunes: state.character.runes.form,
    freePoints: state.steps.runesDistributionStep.freePoints,
    initialRunesValue: state.steps.runesDistributionStep.initialRunesValue
});

const mapDispatchToProps = (dispatch): RunesDistributionStepDispatchProps => ({
    setElementalRune: (runeName: RuneElementalTitle, value: number) => dispatch(setElementalRune(runeName, value)),
    setPowerRune: (runeName: RunePowerTitle, value: number) => dispatch(setAndBalancePowerRune(runeName, value)),
    setFormRune: (runeName: RuneFormTitle, value: number) => dispatch(setAndBalanceFormRune(runeName, value)),
    setRunes: (
        elementalRunes: ElementalRunesStore,
        powerRunes: PowerRunesStore,
        formRunes: FormRunesStore,
    ) => dispatch(setRunes(elementalRunes, powerRunes, formRunes)),
    nextStep: () => dispatch(nextStep()),
    prevStep: () => dispatch(prevStep()),
    incrementFreeRunePoints: () => dispatch(incrementFreeRunePoints()),
    decrementFreeRunePoints: () => dispatch(decrementFreeRunePoints()),
    setFreeRunePoints: (value: number) => dispatch(setFreeRunePoints(value)),
    saveInitialRuneValues: () => dispatch(saveInitialRuneValues()),
    resetInitialRuneValues: () => dispatch(resetInitialRuneValues()),
});

class RunesDistributionStepView extends React.PureComponent<RunesDistributionStepProps> {

    componentDidMount() {
        if (this.props.initialRunesValue.elemental.air === null) {
            this.props.saveInitialRuneValues();
        }
    }

    undo = () => {
        this.resetValues();
        this.props.resetInitialRuneValues();
        this.props.prevStep();
    }

    resetValues = () => {
        this.props.setRunes(
            this.props.initialRunesValue.elemental,
            this.props.initialRunesValue.power,
            this.props.initialRunesValue.form,
        );
        this.props.setFreeRunePoints(MAX_FREE_RUNE_POINTS);
    }

    renderPowerRune(runeName) {
        const currentValue = this.props.powerRunes[runeName];
        const increaseActive = this.props.freePoints > 0 && currentValue < 100;
        const decreaseActive = currentValue > 0 && currentValue > this.props.initialRunesValue.power[runeName];
        return <RuneCounter
            key={runeName}
            title={runeName}
            onIncrease={this.incrementPowerRune}
            onReduce={this.decrementPowerRune}
            value={currentValue}
            canBeDecremented={decreaseActive}
            canBeIncremented={increaseActive}
        />
    }

    renderFormRune(runeName) {
        const currentValue = this.props.formRunes[runeName];
        const increaseActive = this.props.freePoints > 0 && currentValue < 100;
        const decreaseActive = currentValue > 0 && currentValue > this.props.initialRunesValue.form[runeName];
        return <RuneCounter
            key={runeName}
            title={runeName}
            onIncrease={this.incrementFormRune}
            onReduce={this.decrementFormRune}
            value={currentValue}
            canBeDecremented={decreaseActive}
            canBeIncremented={increaseActive}
        />
    }

    renderElementalRune(runeName) {
        const currentValue = this.props.elementalRunes[runeName];
        const increaseActive = this.props.freePoints > 0;
        const decreaseActive = currentValue > 0 && currentValue > this.props.initialRunesValue.elemental[runeName];
        return <RuneCounter
            key={runeName}
            title={runeName}
            onIncrease={this.incrementElementalRune}
            onReduce={this.decrementElementalRune}
            value={currentValue}
            canBeDecremented={decreaseActive}
            canBeIncremented={increaseActive}
        />
    }

    decrementPowerRune = (runeName: RunePowerTitle) => {
        const currentValue = this.props.powerRunes[runeName];
        this.props.setPowerRune(runeName, currentValue - 1);
        this.props.incrementFreeRunePoints();
    }

    incrementPowerRune = (runeName: RunePowerTitle) => {
        const currentValue = this.props.powerRunes[runeName];
        this.props.decrementFreeRunePoints();
        this.props.setPowerRune(runeName, currentValue + 1);
    }

    decrementFormRune = (runeName: RuneFormTitle) => {
        const currentValue = this.props.formRunes[runeName];
        this.props.setFormRune(runeName, currentValue - 1);
        this.props.incrementFreeRunePoints();
    }

    incrementFormRune = (runeName: RuneFormTitle) => {
        const currentValue = this.props.formRunes[runeName];
        this.props.decrementFreeRunePoints();
        this.props.setFormRune(runeName, currentValue + 1);
    }

    decrementElementalRune = (runeName: RuneElementalTitle) => {
        const currentValue = this.props.elementalRunes[runeName];
        this.props.setElementalRune(runeName, currentValue - 1);
        this.props.incrementFreeRunePoints();
    }

    incrementElementalRune = (runeName: RuneElementalTitle) => {
        const currentValue = this.props.elementalRunes[runeName];
        this.props.decrementFreeRunePoints();
        this.props.setElementalRune(runeName, currentValue + 1);
    }

    render() {
        const nextStepReady = this.props.freePoints === 0;
        const runesList = getRunesList();

        const elementalRunes: RuneElementalTitle[] = runesList.elemental.map(rune => rune.title);
        const powerRunes: RunePowerTitle[] = runesList.power.map(rune => rune.title);
        const formRunes: RuneFormTitle[] = runesList.form.map(rune => rune.title);

        return <div>

            <h4>Free points: {this.props.freePoints}</h4>

            <button onClick={this.resetValues}>reset</button>

            <h4>Elemental runes</h4>
            <ul>
                {elementalRunes.map(runeName => this.renderElementalRune(runeName))}
            </ul>

            <h4>Power/Form runes</h4>
            <ul>
                {powerRunes.map(runeName => this.renderPowerRune(runeName))}
            </ul>
            <ul>
                {formRunes.map(runeName => this.renderFormRune(runeName))}
            </ul>

            <button type={'button'} onClick={this.undo}>undo</button>
            <button type={'button'} disabled={!nextStepReady} onClick={this.props.nextStep}>next</button>
        </div>;
    }
}

export const RunesDistributionStep = connect(mapStateToProps, mapDispatchToProps)(RunesDistributionStepView);