import * as React from "react";
import { connect } from 'react-redux';
import {GlobalState} from "../../../../store/storeTypes";
import {setStep} from "../../../../store/stepsStore/stepsActions";
import {Step} from "../../../../store/stepsStore/stepsStoreTypes";
import {RuneElementalTitle, RuneFormTitle, RunePowerTitle} from "../../../../gameEntities/gameEntitiesTypes";
import {getRunesList} from "../../../../gameEntities/gameEntities";
import {
    setElementalRune, setFormRune,
    setPowerRune
} from "../../../../store/characterStore/characterRunesStore/characterRunesActions";
import {RuneCounter} from "./RuneCounter/RuneCounter";
import {
    setAndBalanceFormRune,
    setAndBalancePowerRune
} from "../../../../store/characterStore/characterRunesStore/characterRunesThunks";
const CSS = require('./RunesDistributionStep.css');

interface RunesDistributionStepOwnProps {}

interface RunesDistributionStepPropsFromState {
    elementalRunes,
    powerRunes,
    formRunes
}

interface RunesDistributionStepDispatchProps {
    setElementalRune(runeName: RuneElementalTitle, value: number): void;
    setPowerRune(runeName: RunePowerTitle, value: number): void;
    setFormRune(runeName: RuneFormTitle, value: number): void;
    nextStep(): void;
    prevStep(): void;
}

type RunesDistributionStepProps = RunesDistributionStepOwnProps & RunesDistributionStepPropsFromState & RunesDistributionStepDispatchProps;

const mapStateToProps = (state: GlobalState): RunesDistributionStepPropsFromState => ({
    elementalRunes: state.character.runes.elemental,
    powerRunes: state.character.runes.power,
    formRunes: state.character.runes.form,
});

const mapDispatchToProps = (dispatch): RunesDistributionStepDispatchProps => ({
    setElementalRune: (runeName: RuneElementalTitle, value: number) => dispatch(setElementalRune(runeName, value)),
    setPowerRune: (runeName: RunePowerTitle, value: number) => dispatch(setAndBalancePowerRune(runeName, value)),
    setFormRune: (runeName: RuneFormTitle, value: number) => dispatch(setAndBalanceFormRune(runeName, value)),
    nextStep: () => dispatch(setStep(Step.CHARACTERISTICS)),
    prevStep: () => dispatch(setStep(Step.RUNES)),
});

interface RunesDistributionStepViewState {
    freePoints: number;
}

class RunesDistributionStepView extends React.PureComponent<RunesDistributionStepProps, RunesDistributionStepViewState> {

    initialRunesValues: any = {
        elemental: {},
        power: {},
        form: {}
    };

    state = {
        freePoints: 50
    };

    componentDidMount() {
        this.initialRunesValues.elemental = {...this.props.elementalRunes};
        this.initialRunesValues.power = {...this.props.powerRunes};
        this.initialRunesValues.form = {...this.props.formRunes};
    }

    undo = () => {
        this.resetRunes();
        this.props.prevStep();
    }

    resetRunes = () => {
        Object.keys(this.initialRunesValues.elemental).forEach((runeName: RuneElementalTitle) => {
            this.props.setElementalRune(runeName, this.initialRunesValues.elemental[runeName]);
        });
        Object.keys(this.initialRunesValues.form).forEach((runeName: RuneFormTitle) => {
            this.props.setFormRune(runeName, this.initialRunesValues.form[runeName]);
        });
        Object.keys(this.initialRunesValues.power).forEach((runeName: RunePowerTitle) => {
            this.props.setPowerRune(runeName, this.initialRunesValues.power[runeName]);
        });
        this.setState({freePoints: 50});
    }

    renderPowerRune(runeName) {
        const currentValue = this.props.powerRunes[runeName];
        const increaseActive = this.state.freePoints > 0 && currentValue < 100;
        const decreaseActive = currentValue > 0 && currentValue > this.initialRunesValues.power[runeName];
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
        const increaseActive = this.state.freePoints > 0 && currentValue < 100;
        const decreaseActive = currentValue > 0 && currentValue > this.initialRunesValues.form[runeName];
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
        const increaseActive = this.state.freePoints > 0;
        const decreaseActive = currentValue > 0 && currentValue > this.initialRunesValues.elemental[runeName];
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
        this.incrementFreePoints();
    }

    incrementPowerRune = (runeName: RunePowerTitle) => {
        const currentValue = this.props.powerRunes[runeName];
        this.decrementFreePoints();
        this.props.setPowerRune(runeName, currentValue + 1);
    }

    decrementFormRune = (runeName: RuneFormTitle) => {
        const currentValue = this.props.formRunes[runeName];
        this.props.setFormRune(runeName, currentValue - 1);
        this.incrementFreePoints();
    }

    incrementFormRune = (runeName: RuneFormTitle) => {
        const currentValue = this.props.formRunes[runeName];
        this.decrementFreePoints();
        this.props.setFormRune(runeName, currentValue + 1);
    }

    decrementElementalRune = (runeName: RuneElementalTitle) => {
        const currentValue = this.props.elementalRunes[runeName];
        this.props.setElementalRune(runeName, currentValue - 1);
        this.incrementFreePoints();
    }

    incrementElementalRune = (runeName: RuneElementalTitle) => {
        const currentValue = this.props.elementalRunes[runeName];
        this.decrementFreePoints();
        this.props.setElementalRune(runeName, currentValue + 1);
    }

    incrementFreePoints() {
        this.setState({freePoints: this.state.freePoints + 1});
    }

    decrementFreePoints() {
        this.setState({freePoints: this.state.freePoints - 1});
    }

    render() {
        const nextStepReady = this.state.freePoints === 0;
        const runesList = getRunesList();

        const elementalRunes: RuneElementalTitle[] = runesList.elemental.map(rune => rune.title);
        const powerRunes: RunePowerTitle[] = runesList.power.map(rune => rune.title);
        const formRunes: RuneFormTitle[] = runesList.form.map(rune => rune.title);

        return <div>

            <h4>Free points: {this.state.freePoints}</h4>

            <button onClick={this.resetRunes}>reset</button>

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