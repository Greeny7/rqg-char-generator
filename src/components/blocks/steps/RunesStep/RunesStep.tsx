import * as React from "react";
import { connect } from 'react-redux';
import {GlobalState} from "../../../../store/storeTypes";
import {setStep} from "../../../../store/stepsStore/stepsActions";
import {Step} from "../../../../store/stepsStore/stepsStoreTypes";
import {
    selectPrimaryElementalRune,
    selectSecondaryElementalRune, selectTertiaryElementalRune, toggleFormRuneAffinity, togglePowerRuneAffinity
} from "../../../../store/characterStore/characterRunesStore/characterRunesThunks";
import {RuneElementalTitle, RuneFormTitle, RunePowerTitle} from "../../../../gameEntities/gameEntitiesTypes";
import {getRunesList} from "../../../../gameEntities/gameEntities";
const CSS = require('./RunesStep.css');

interface RunesStepOwnProps {}

interface RunesStepPropsFromState {
    elementalRunesAffinity,
    formAndPowerRunesAffinities
}

interface RunesStepDispatchProps {
    selectPrimaryElementalRune(runeName: RuneElementalTitle): void;
    selectSecondaryElementalRune(runeName: RuneElementalTitle): void;
    selectTertiaryElementalRune(runeName: RuneElementalTitle): void;
    toggleFormRuneAffinity(runeName: RuneFormTitle): void;
    togglePowerRuneAffinity(runeName: RunePowerTitle): void;
    nextStep(): void;
    prevStep(): void;
}

type RunesStepProps = RunesStepOwnProps & RunesStepPropsFromState & RunesStepDispatchProps;

const mapStateToProps = (state: GlobalState): RunesStepPropsFromState => ({
    elementalRunesAffinity: state.character.runes.elementalRunesAffinity,
    formAndPowerRunesAffinities: state.character.runes.formAndPowerRunesAffinities,
});

const mapDispatchToProps = (dispatch): RunesStepDispatchProps => ({
    selectPrimaryElementalRune: (runeName: RuneElementalTitle) => dispatch(selectPrimaryElementalRune(runeName)),
    selectSecondaryElementalRune: (runeName: RuneElementalTitle) => dispatch(selectSecondaryElementalRune(runeName)),
    selectTertiaryElementalRune: (runeName: RuneElementalTitle) => dispatch(selectTertiaryElementalRune(runeName)),
    toggleFormRuneAffinity: (runeName: RuneFormTitle) => dispatch(toggleFormRuneAffinity(runeName)),
    togglePowerRuneAffinity: (runeName: RunePowerTitle) => dispatch(togglePowerRuneAffinity(runeName)),
    nextStep: () => dispatch(setStep(Step.HOMELAND)),
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
        this.props.selectPrimaryElementalRune(null);
        this.props.selectSecondaryElementalRune(null);
        this.props.selectTertiaryElementalRune(null);
        this.props.prevStep();
    }

    render() {
        const nextStepReady =
            this.props.elementalRunesAffinity[0] &&
            this.props.elementalRunesAffinity[1] &&
            this.props.elementalRunesAffinity[2] &&
            this.props.formAndPowerRunesAffinities.length === 2;
        const elementalRunes: RuneElementalTitle[] = getRunesList().elemental.map(rune => rune.title);
        const powerRunes: RunePowerTitle[] = getRunesList().power.map(rune => rune.title);
        const formRunes: RuneFormTitle[] = getRunesList().form.map(rune => rune.title);
        return <div>
            <h4>Choose primary elemental rune (+60%):</h4>
            <ul>
                {elementalRunes
                    .map((runeName, index) => {
                        const unactive =
                            runeName === this.props.elementalRunesAffinity[1] ||
                            runeName === this.props.elementalRunesAffinity[2];
                        const selected = runeName === this.props.elementalRunesAffinity[0];

                        return <li
                            key={index}
                            onClick={() => !unactive && this.props.selectPrimaryElementalRune(runeName)}
                            className={unactive ? CSS.unactive : ''}
                        >
                            {runeName} {selected && <b> - selected</b>}
                        </li>
                    }
                )}
            </ul>

            <h4>Choose secondary elemental rune (+40%):</h4>
            <ul>
                {elementalRunes
                    .map((runeName, index) => {
                            const unactive =
                                runeName === this.props.elementalRunesAffinity[0] ||
                                runeName === this.props.elementalRunesAffinity[2];
                            const selected = runeName === this.props.elementalRunesAffinity[1];

                            return <li
                                key={index}
                                onClick={() => !unactive && this.props.selectSecondaryElementalRune(runeName)}
                                className={unactive ? CSS.unactive : ''}
                            >
                                {runeName} {selected && <b> - selected</b>}
                            </li>
                        }
                    )}
            </ul>

            <h4>Choose tertiary elemental rune (+20%):</h4>
            <ul>
                {elementalRunes
                    .map((runeName, index) => {
                            const unactive =
                                runeName === this.props.elementalRunesAffinity[0] ||
                                runeName === this.props.elementalRunesAffinity[1];
                            const selected = runeName === this.props.elementalRunesAffinity[2];

                            return <li
                                key={index}
                                onClick={() => !unactive && this.props.selectTertiaryElementalRune(runeName)}
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
                            const oppositeRune = getRunesList().power.find(r => r.title === runeName).oppositeRune;
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
                            const oppositeRune = getRunesList().form.find(r => r.title === runeName).oppositeRune;
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
            <button type={'button'} disabled={!nextStepReady} onClick={this.props.nextStep}>next</button>
        </div>;
    }
}

export const RunesStep = connect(mapStateToProps, mapDispatchToProps)(RunesStepView);