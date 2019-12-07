import * as React from 'react';
import { connect } from 'react-redux';
import { GlobalState } from '../../../store/storeTypes';
import { CharacterStore } from '../../../store/characterStore/characterStoreTypes';
import { Characteristics, HitLocation } from '../../../gameEntities/gameEntitiesTypes';
import {
    getCharacterHealingRate,
    getCharacterMaxHp,
    getCharacterMaxLocationsHp
} from '../../../store/characterStore/characterSelectors';
// import { makeLovelyAction } from '../../../store/actions';
const CSS = require('./CharacterDetails.css');

interface CharacterDetailsOwnProps {
}

interface CharacterDetailsPropsFromState {
    character: CharacterStore,
    maxHp: number,
    maxLocationsHp: Object,
    healingRate: number,
}

interface CharacterDetailsDispatchProps {}

type CharacterDetailsProps = CharacterDetailsOwnProps & CharacterDetailsPropsFromState & CharacterDetailsDispatchProps;

const mapStateToProps = (state: GlobalState): CharacterDetailsPropsFromState => ({
    character: state.character,
    maxHp: getCharacterMaxHp(state),
    maxLocationsHp: getCharacterMaxLocationsHp(state),
    healingRate: getCharacterHealingRate(state)
});

const mapDispatchToProps = (): CharacterDetailsDispatchProps => ({});

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

    renderAttrubutes() {
        const mana = this.props.character.characteristics[Characteristics.POW];
        const {maxHp, maxLocationsHp, healingRate} = this.props;

        return <ul>
            <li>HP: {maxHp}</li>
            <li>MP: {mana}</li>
            <li>
                Max location hp:
                <ul>
                    {Object.keys(maxLocationsHp).map((location: HitLocation, index) => <li key={index}>
                        {location}: {maxLocationsHp[location]}
                    </li>)}
                </ul>
            </li>
            <li>Healing rate: {healingRate}</li>
        </ul>
    }

    render() {
        return <>
            <h2>Character</h2>
            {this.renderHomeland()}
            {this.renderCharacteristics()}
            {this.renderRunes()}
            {this.renderPassions()}
            {this.renderAttrubutes()}
        </>
    }
}

export const CharacterDetails = connect(mapStateToProps, mapDispatchToProps)(CharacterDetailsView);