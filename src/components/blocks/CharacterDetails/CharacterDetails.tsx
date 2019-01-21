import * as React from 'react';
import { connect } from 'react-redux';
import {GlobalState} from "../../../store/storeTypes";
import {CharacterStore} from "../../../store/characterStore/characterStoreTypes";
// import { makeLovelyAction } from '../../../store/actions';
const CSS = require('./CharacterDetails.css');

interface CharacterDetailsOwnProps {
}

interface CharacterDetailsPropsFromState {
    character: CharacterStore,
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
        const { passions } = this.props.character;
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

    renderRunes() {
        const {elemental, form, power} = this.props.character.runes;

        return <div>
            <h4>Runes</h4>
            <h5>Elemental</h5>
            <ul>
                {Object.keys(elemental).map((runeName, index) =>
                    <li key={index}>{runeName} - {elemental[runeName]}%</li>
                )}
            </ul>
            <h5>Power</h5>
            <ul>
                {Object.keys(power).map((runeName, index) =>
                    <li key={index}>{runeName} - {power[runeName]}%</li>
                )}
            </ul>
            <h5>Form</h5>
            <ul>
                {Object.keys(form).map((runeName, index) =>
                    <li key={index}>{runeName} - {form[runeName]}%</li>
                )}
            </ul>
        </div>
    }

    renderCharacteristics() {
        const {characteristics} = this.props.character;

        return <div>
            <h4>Characteristics</h4>
            <ul>
                {Object.keys(characteristics).map((charKey, index) =>
                    <li key={index}>{charKey}: {characteristics[charKey]}</li>
                )}
            </ul>
        </div>
    }

    render() {
        return <>
            <h2>Character</h2>
            {this.renderHomeland()}
            {this.renderCharacteristics()}
            {this.renderRunes()}
            {this.renderPassions()}
        </>
    }
}

export const CharacterDetails = connect(mapStateToProps, mapDispatchToProps)(CharacterDetailsView);