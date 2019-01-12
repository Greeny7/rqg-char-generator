import {
    selectHomeland, selectPrimaryElementalRune, selectSecondaryElementalRune,
    selectTertiaryElementalRune
} from "../../../../store/thunks";
import {Homeland, HomelandTitle, RuneElemental, Step} from "../../../../store/storeTypes";
import {GlobalState} from "../../../../store/store";
import * as React from "react";
import { connect } from 'react-redux';
import {setStep} from "../../../../store/actions";
const CSS = require('./RunesStep.css');

interface RunesStepOwnProps {}

interface RunesStepPropsFromState {
    elementalRunesAffinity
}

interface RunesStepDispatchProps {
    selectPrimaryElementalRune(runeName: RuneElemental): void;
    selectSecondaryElementalRune(runeName: RuneElemental): void;
    selectTertiaryElementalRune(runeName: RuneElemental): void;
    nextStep(): void;
}

type RunesStepProps = RunesStepOwnProps & RunesStepPropsFromState & RunesStepDispatchProps;

const mapStateToProps = (state: GlobalState): RunesStepPropsFromState => ({
    elementalRunesAffinity: state.character.elementalRunesAffinity
});

const mapDispatchToProps = (dispatch): RunesStepDispatchProps => ({
    selectPrimaryElementalRune: (runeName: RuneElemental) => dispatch(selectPrimaryElementalRune(runeName)),
    selectSecondaryElementalRune: (runeName: RuneElemental) => dispatch(selectSecondaryElementalRune(runeName)),
    selectTertiaryElementalRune: (runeName: RuneElemental) => dispatch(selectTertiaryElementalRune(runeName)),
    nextStep: () => dispatch(setStep(Step.HOMELAND))
});

class RunesStepView extends React.Component<RunesStepProps> {
    render() {
        const nextStepReady =
            this.props.elementalRunesAffinity[0] &&
            this.props.elementalRunesAffinity[1] &&
            this.props.elementalRunesAffinity[2];
        const runes: RuneElemental[] = [
            'wind',
            'earth',
            'water',
            'fire',
            'moon',
            'darkness',
        ];
        return <div>
            <h4>Choose primary elemental rune:</h4>
            <ul>
                {runes
                    .map((runeName, index) => {
                        const unactive =
                            runeName === this.props.elementalRunesAffinity[1] ||
                            runeName === this.props.elementalRunesAffinity[2];
                        const selected = runeName === this.props.elementalRunesAffinity[0];
                        const active = !unactive && !selected;

                        return <li
                            key={index}
                            onClick={() => active && this.props.selectPrimaryElementalRune(runeName)}
                            className={unactive ? CSS.unactive : ''}
                        >
                            {runeName} {selected && <b> - selected</b>}
                        </li>
                    }
                )}
            </ul>

            <h4>Choose secondary elemental rune:</h4>
            <ul>
                {runes
                    .map((runeName, index) => {
                            const unactive =
                                runeName === this.props.elementalRunesAffinity[0] ||
                                runeName === this.props.elementalRunesAffinity[2];
                            const selected = runeName === this.props.elementalRunesAffinity[1];
                            const active = !unactive && !selected;

                            return <li
                                key={index}
                                onClick={() => active && this.props.selectSecondaryElementalRune(runeName)}
                                className={unactive ? CSS.unactive : ''}
                            >
                                {runeName} {selected && <b> - selected</b>}
                            </li>
                        }
                    )}
            </ul>
            <h4>Choose tertiary elemental rune:</h4>
            <ul>
                {runes
                    .map((runeName, index) => {
                            const unactive =
                                runeName === this.props.elementalRunesAffinity[0] ||
                                runeName === this.props.elementalRunesAffinity[1];
                            const selected = runeName === this.props.elementalRunesAffinity[2];
                        const active = !unactive && !selected;

                            return <li
                                key={index}
                                onClick={() => active && this.props.selectTertiaryElementalRune(runeName)}
                                className={unactive ? CSS.unactive : ''}
                            >
                                {runeName} {selected && <b> - selected</b>}
                            </li>
                        }
                    )}
            </ul>
            {nextStepReady && <button type={'button'} onClick={this.props.nextStep}>next</button>}
        </div>;
    }
}

export const RunesStep = connect(mapStateToProps, mapDispatchToProps)(RunesStepView);