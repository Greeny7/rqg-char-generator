import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CharacterDetails } from '../../blocks/CharacterDetails/CharacterDetails';
import {Step} from "../../../store/storeTypes";
import {GlobalState} from "../../../store/store";
import {HomelandStep} from "../../blocks/steps/HomelandStep/HomelandStep";
import {RunesStep} from "../../blocks/steps/RunesStep/RunesStep";
const CSS = require('./MainPage.css');

interface MainPagePropsFromState {
    step: Step;
}

const mapStateToProps = (state: GlobalState): MainPagePropsFromState => ({
    step: state.step
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