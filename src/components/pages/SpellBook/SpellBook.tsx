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
import {spiritMagicSpells} from "../../../gameEntities/magic/spiritMagicSpells";
import {SpellCard} from "../../blocks/SpellCard/SpellCard";
const CSS = require('./SpellBook.css');

interface SpellListPropsFromState {
    step: Step;
}

const mapStateToProps = (state: GlobalState): SpellListPropsFromState => ({
    step: state.steps.currentStep
});

class SpellBookView extends React.PureComponent<SpellListPropsFromState> {

    state={
        filterText: ''
    }

    onSearch = e => {
        this.setState({filterText: e.target.value})
    };

    render() {
        const spells = this.state.filterText
            ? spiritMagicSpells.filter(s => (s.title.toLowerCase()).includes(this.state.filterText.toLowerCase()))
            : spiritMagicSpells;
        return <div>
            <h1>Spell List</h1>

            <div  className={CSS.container}>

                <form action="#" className={CSS.filters}>
                    <select name="magicType" id="magicType">
                        <option value="SpiritMagic">Spirit Magic</option>
                        <option value="RuneMagic">Rune Magic</option>
                        <option value="Sorcery">Sorcery</option>
                    </select>
                    <br/>
                    <br/>
                    <label>Search: <input type="text" id={'searchSpell'} onChange={this.onSearch}/></label>
                </form>

                <div className={CSS.spellsContainer}>
                    {spells.map(spell => <SpellCard {...spell} key={spell.title} />)}
                </div>
            </div>
        </div>
    }
}

export const SpellBook = connect(mapStateToProps)(SpellBookView);