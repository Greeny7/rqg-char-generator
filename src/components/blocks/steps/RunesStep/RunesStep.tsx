import * as React from "react";
import { connect } from 'react-redux';
import {GlobalState} from "../../../../store/storeTypes";
import {setStep} from "../../../../store/stepsStore/stepsActions";
import {Step} from "../../../../store/stepsStore/stepsStoreTypes";
import {RuneElementalTitle, RuneFormTitle, RunePowerTitle} from "../../../../gameEntities/gameEntitiesTypes";
import {getRunesList} from "../../../../gameEntities/gameEntities";
import {
    selectMainElementalRune,
    toggleFormRuneAffinity, togglePowerRuneAffinity
} from '../../../../store/stepsStore/stepsThunks';
import { MAIN_RUNE_BONUSES, RuneImportancy } from '../../../../gameEntities/rules';
const CSS = require('./RunesStep.css');

interface RunesStepOwnProps {}

interface RunesStepPropsFromState {
    elementalRunesAffinity,
    formAndPowerRunesAffinities,
}

interface RunesStepDispatchProps {
    selectMainElementalRune(runeName: RuneElementalTitle, runeImportancy: RuneImportancy): void;
    toggleFormRuneAffinity(runeName: RuneFormTitle): void;
    togglePowerRuneAffinity(runeName: RunePowerTitle): void;
    nextStep(): void;
    prevStep(): void;
}

type RunesStepProps = RunesStepOwnProps & RunesStepPropsFromState & RunesStepDispatchProps;

const mapStateToProps = (state: GlobalState): RunesStepPropsFromState => ({
    elementalRunesAffinity: state.steps.runesStep.elementalRunesAffinity,
    formAndPowerRunesAffinities: state.steps.runesStep.formAndPowerRunesAffinities,
});

const mapDispatchToProps = (dispatch): RunesStepDispatchProps => ({
    selectMainElementalRune: (
        runeName: RuneElementalTitle,
        runeImportancy: RuneImportancy
    ) => dispatch(selectMainElementalRune(runeName, runeImportancy)),
    toggleFormRuneAffinity: (runeName: RuneFormTitle) => dispatch(toggleFormRuneAffinity(runeName)),
    togglePowerRuneAffinity: (runeName: RunePowerTitle) => dispatch(togglePowerRuneAffinity(runeName)),
    nextStep: () => dispatch(setStep(Step.RUNES_DISTRIBUTION)),
    prevStep: () => dispatch(setStep(Step.HOMELAND)),
});

class RunesStepView extends React.PureComponent<RunesStepProps> {

    undo = () => {
        [...this.props.formAndPowerRunesAffinities]
            .forEach(runeName => {
                if (runeName === RuneFormTitle.MAN || runeName === RuneFormTitle.BEAST) {
                    this.props.toggleFormRuneAffinity(runeName);
                } else {
                    this.props.togglePowerRuneAffinity(runeName);
                }
            });
        this.props.selectMainElementalRune(null, 0);
        this.props.selectMainElementalRune(null, 1);
        this.props.selectMainElementalRune(null, 2);
        this.props.prevStep();
    }

    render() {
        const nextStepReady =
            this.props.elementalRunesAffinity[0] &&
            this.props.elementalRunesAffinity[1] &&
            this.props.elementalRunesAffinity[2] &&
            this.props.formAndPowerRunesAffinities.length === 2;

        const runesList = getRunesList();
        const elementalRunes: RuneElementalTitle[] = runesList.elemental.map(rune => rune.title);
        const powerRunes: RunePowerTitle[] = runesList.power.map(rune => rune.title);
        const formRunes: RuneFormTitle[] = runesList.form.map(rune => rune.title);

        return <div>
            <h4>Choose primary elemental rune (+${MAIN_RUNE_BONUSES[0]}%):</h4>
            <ul>
                {elementalRunes
                    .map((runeName, index) => {
                        const unactive =
                            runeName === this.props.elementalRunesAffinity[1] ||
                            runeName === this.props.elementalRunesAffinity[2];
                        const selected = runeName === this.props.elementalRunesAffinity[0];

                        return <li
                            key={index}
                            onClick={() => !unactive && this.props.selectMainElementalRune(runeName, 0)}
                            className={unactive ? CSS.unactive : ''}
                        >
                            {runeName} {selected && <b> - selected</b>}
                        </li>
                    }
                )}
            </ul>

            <h4>Choose secondary elemental rune (+${MAIN_RUNE_BONUSES[1]}%):</h4>
            <ul>
                {elementalRunes
                    .map((runeName, index) => {
                            const unactive =
                                runeName === this.props.elementalRunesAffinity[0] ||
                                runeName === this.props.elementalRunesAffinity[2];
                            const selected = runeName === this.props.elementalRunesAffinity[1];

                            return <li
                                key={index}
                                onClick={() => !unactive && this.props.selectMainElementalRune(runeName, 1)}
                                className={unactive ? CSS.unactive : ''}
                            >
                                {runeName} {selected && <b> - selected</b>}
                            </li>
                        }
                    )}
            </ul>

            <h4>Choose tertiary elemental rune (+${MAIN_RUNE_BONUSES[2]}%):</h4>
            <ul>
                {elementalRunes
                    .map((runeName, index) => {
                            const unactive =
                                runeName === this.props.elementalRunesAffinity[0] ||
                                runeName === this.props.elementalRunesAffinity[1];
                            const selected = runeName === this.props.elementalRunesAffinity[2];

                            return <li
                                key={index}
                                onClick={() => !unactive && this.props.selectMainElementalRune(runeName, 2)}
                                className={unactive ? CSS.unactive : ''}
                            >
                                {runeName} {selected && <b> - selected</b>}
                            </li>
                        }
                    )}
            </ul>

            <h4>Choose power/form rune affinities:</h4>
            <ul>
                {powerRunes
                    .map((runeName, index) => {
                            const selected = this.props.formAndPowerRunesAffinities.includes(runeName);
                            const oppositeRune = runesList.power.find(r => r.title === runeName).oppositeRune;
                            const oppositeSelected = this.props.formAndPowerRunesAffinities.includes(oppositeRune);
                            const unactive =
                                oppositeSelected ||
                                (!selected && this.props.formAndPowerRunesAffinities.length >= 2);

                            return <li
                                key={index}
                                onClick={() => !unactive && this.props.togglePowerRuneAffinity(runeName)}
                                className={unactive ? CSS.unactive : ''}
                            >
                                {runeName} {selected && <b> - selected</b>}
                        </li>
                    }
                )}
                {formRunes
                    .map((runeName, index) => {
                            const selected = this.props.formAndPowerRunesAffinities.includes(runeName);
                            const oppositeRune = runesList.form.find(r => r.title === runeName).oppositeRune;
                            const oppositeSelected = this.props.formAndPowerRunesAffinities.includes(oppositeRune);
                            const unactive =
                                oppositeSelected ||
                                (!selected && this.props.formAndPowerRunesAffinities.length >= 2);

                            return <li
                                key={index}
                                onClick={() => !unactive && this.props.toggleFormRuneAffinity(runeName)}
                                className={unactive ? CSS.unactive : ''}
                            >
                                {runeName} {selected && <b> - selected</b>}
                            </li>
                        }
                    )}
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

export const RunesStep = connect(mapStateToProps, mapDispatchToProps)(RunesStepView);