import * as React from 'react';
import { connect } from 'react-redux';
import { GlobalState } from '../../../store/store';
import { Homeland, HomelandTitle } from '../../../store/storeTypes';
import { getGameEntity } from '../../../gameEntities/gameEntities';
import { selectHomeland } from '../../../store/thunks';
const CSS = require('./HomelandSelectList.css');
const homelandList = getGameEntity('homelands');

interface HomelandSelectOwnProps {}

interface HomelandSelectPropsFromState {
    selectedHomeland: HomelandTitle
}

interface HomelandSelectDispatchProps {
    selectHomeland(homelandTitle: HomelandTitle): void;
}

type HomelandSelectProps = HomelandSelectOwnProps & HomelandSelectPropsFromState & HomelandSelectDispatchProps;

const mapStateToProps = (state: GlobalState): HomelandSelectPropsFromState => {
    return {
        selectedHomeland: state.character.homeland
    };
};

const mapDispatchToProps = (dispatch): HomelandSelectDispatchProps => {
    return {
        selectHomeland: (homelandTitle: HomelandTitle) => dispatch(selectHomeland(homelandTitle))
    };
};

interface HomelandSelectViewState {
    hoveredItem: Homeland;
}

class HomelandSelectListView extends React.Component<HomelandSelectProps, HomelandSelectViewState> {

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
            {this.props.selectedHomeland && <button type={'button'}>next</button>}
        </>
    }
}

export const HomelandSelectList = connect(mapStateToProps, mapDispatchToProps)(HomelandSelectListView);