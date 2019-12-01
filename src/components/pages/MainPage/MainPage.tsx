import * as React from 'react';
import { connect } from 'react-redux';
import { CharacterDetails } from '../../blocks/CharacterDetails/CharacterDetails';
import {HomelandStep} from "../../blocks/steps/HomelandStep/HomelandStep";
import {RunesStep} from "../../blocks/steps/RunesStep/RunesStep";
import {Step} from "../../../store/stepsStore/stepsStoreTypes";
import {GlobalState} from "../../../store/storeTypes";
import {RunesDistributionStep} from "../../blocks/steps/RunesDistributionStep/RunesDistributionStep";
import {CharacteristicsStep} from "../../blocks/steps/CharacteristicsStep/CharacteristicsStep";
import { RunesAffinityBonusStep } from '../../blocks/steps/RunesAffinityBonusStep/RunesAffinityBonusStep';
const CSS = require('./MainPage.css');

interface MainPagePropsFromState {
    step: Step;
}

const mapStateToProps = (state: GlobalState): MainPagePropsFromState => ({
    step: state.steps.currentStep
});

class MainPageView extends React.PureComponent<MainPagePropsFromState> {

    render() {
        return <div>
            <h1>Character Generator for Runequest: Roleplaying in Glorantha</h1>
            <div className={CSS.content}>
                <main className={CSS.main}>
                    {
                        this.props.step === Step.HOMELAND
                            ? <HomelandStep />
                            : this.props.step === Step.RUNES
                            ? <RunesStep />
                            : this.props.step === Step.RUNES_DISTRIBUTION
                            ? <RunesDistributionStep />
                            : this.props.step === Step.CHARACTERISTICS
                            ? <CharacteristicsStep />
                            : this.props.step === Step.RUNES_AFFINITY
                            ? <RunesAffinityBonusStep />
                            : null
                    }

                </main>
                <aside className={CSS.asideRight}>
                    <CharacterDetails />
                </aside>
            </div>
        </div>
    }
}

export const MainPage = connect(mapStateToProps)(MainPageView);