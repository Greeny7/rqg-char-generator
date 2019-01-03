import * as React from 'react';
import { connect } from 'react-redux';
import { GlobalState } from '../../../store/store';
import { Character, Homeland, HomelandTitle } from '../../../store/storeTypes';
// import { makeLovelyAction } from '../../../store/actions';
const CSS = require('./CharacterDetails.css');

interface CharacterDetailsOwnProps {
}

interface CharacterDetailsPropsFromState {
    character: Character,
}

interface CharacterDetailsDispatchProps {

}

type CharacterDetailsProps = CharacterDetailsOwnProps & CharacterDetailsPropsFromState & CharacterDetailsDispatchProps;

const mapStateToProps = (state: GlobalState): CharacterDetailsPropsFromState => {
    return {
        character: state.character,
    };
};

const mapDispatchToProps = (dispatch): CharacterDetailsDispatchProps => {
    return {

    };
};

class CharacterDetailsView extends React.Component<CharacterDetailsProps> {

    renderPassions() {
        const passions = this.props.character.passions;
        if (passions.length > 0) {
            return <>
                <h3>Passions</h3>
                <ul>
                    {passions.map((passion, index) => <li key={index}>
                        <b>{passion.name} {passion.target && `(${passion.target})`}</b>: {passion.value}%
                    </li>)}
                </ul>
            </>
        }

        return null;
    }

    renderHomeland() {
        const homeland = this.props.character.homeland;
        if (homeland) {
            return <p><b>Homeland:</b> {homeland}</p>
        }

        return null;
    }

    render() {
        return <>
            <h2>Character</h2>
            {this.renderHomeland()}
            {this.renderPassions()}
        </>
    }
}

export const CharacterDetails = connect(mapStateToProps, mapDispatchToProps)(CharacterDetailsView);