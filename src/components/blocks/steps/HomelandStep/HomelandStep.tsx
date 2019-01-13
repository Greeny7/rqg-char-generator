import * as React from 'react';
import { connect } from 'react-redux';
import {GlobalState} from "../../../../store/storeTypes";
import {setStep} from "../../../../store/stepsStore/stepsActions";
import {Step} from "../../../../store/stepsStore/stepsStoreTypes";
import {selectHomeland} from "../../../../store/characterStore/characterThunks";
import {Homeland, HomelandTitle} from "../../../../gameEntities/gameEntitiesTypes";
import {getHomelandsList} from "../../../../gameEntities/gameEntities";
const CSS = require('./HomelandStep.css');
const homelandList = getHomelandsList();

interface HomelandStepOwnProps {}

interface HomelandStepPropsFromState {
    selectedHomeland: HomelandTitle
}

interface HomelandStepDispatchProps {
    selectHomeland(homelandTitle: HomelandTitle): void;
    nextStep(): void;
}

type HomelandStepProps = HomelandStepOwnProps & HomelandStepPropsFromState & HomelandStepDispatchProps;

const mapStateToProps = (state: GlobalState): HomelandStepPropsFromState => ({
    selectedHomeland: state.character.homeland
});

const mapDispatchToProps = (dispatch): HomelandStepDispatchProps => ({
    selectHomeland: (homelandTitle: HomelandTitle) => dispatch(selectHomeland(homelandTitle)),
    nextStep: () => dispatch(setStep(Step.RUNES))
});

interface HomelandSelectViewState {
    hoveredItem: Homeland;
}

class HomelandStepView extends React.Component<HomelandStepProps, HomelandSelectViewState> {

    state = {
        hoveredItem: null
    };

    renderDetails() {
        const homelandTitle = this.state.hoveredItem || this.props.selectedHomeland;
        if (!homelandTitle) {
            return null;
        }
        const homeland = homelandList.find(item => item.title === homelandTitle);
        return <>
            {homeland.description.map((desc, index) => <div key={desc.title+index}>
                {desc.title && <h5>{desc.title}</h5>}
                <p>{desc.text}</p>
            </div>)}
            <ul>
                {homeland.passions.map((passion, index) => <li key={passion.name + index}>
                    <b>{passion.name} {passion.target && `(${passion.target})`}</b>: {passion.value}%
                </li>)}
            </ul>
            <p>rune bonus: <b>{homeland.runeBonus.title}</b>: +{homeland.runeBonus.value}%</p>
        </>
    };

    onItemClick(item: Homeland) {
        this.props.selectHomeland(item.title);
    };

    render() {
        return <>
            <h3>Homeland</h3>
            <ul>
               {homelandList.map((item, index) => <li key={item.title + index}>
                   <div onClick={() => this.onItemClick(item)}>
                       <h4>{item.title} {this.props.selectedHomeland === item.title && ' Selected'}</h4>
                   </div>
               </li>)}
            </ul>
            {this.renderDetails()}
            {this.props.selectedHomeland && <button type={'button'} onClick={this.props.nextStep}>next</button>}
        </>
    }
}

export const HomelandStep = connect(mapStateToProps, mapDispatchToProps)(HomelandStepView);