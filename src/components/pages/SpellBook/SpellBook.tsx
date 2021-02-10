import * as React from 'react';
import { connect } from 'react-redux';
import {Step} from "../../../store/stepsStore/stepsStoreTypes";
import {GlobalState} from "../../../store/storeTypes";
import {spiritSpells} from "../../../gameEntities/magic/spiritSpells";
import {SpellCard} from "../../blocks/SpellCard/SpellCard";
import {Spell} from "../../../gameEntities/magic/types";
import {runeSpells} from "../../../gameEntities/magic/runeSpells";
import {RuneSpellCard} from "../../blocks/SpellCard/RuneSpellCard";
import CSS from './SpellBook.module.css';

interface SpellListPropsFromState {
    step: Step;
}

const mapStateToProps = (state: GlobalState): SpellListPropsFromState => ({
    step: state.steps.currentStep
});

class SpellBookView extends React.PureComponent<SpellListPropsFromState> {

    state={
        filterText: '',
        bookmarkedSpells: [],
        filterMagicType: 'spirit'
    }

    componentDidMount() {
        const bookmarkedSpells = localStorage.getItem('bookmarkedSpells');
        if (bookmarkedSpells) {
            console.log(bookmarkedSpells);
            this.setState({bookmarkedSpells: JSON.parse(bookmarkedSpells)});
        }
    }

    onSearch = e => {
        this.setState({filterText: e.target.value})
    };

    bookmarkSpell = (spellTitle: string, mark: boolean) => {
        let spells = [...this.state.bookmarkedSpells];
        console.log(this.state.bookmarkedSpells, spells);
        if (mark) {
            spells.push(spellTitle);
        } else {
            spells.splice(spells.indexOf(spellTitle), 1)
        }
        this.setState({bookmarkedSpells: spells});

        console.log(spells, JSON.stringify(spells))
        localStorage.setItem('bookmarkedSpells', JSON.stringify(spells));
    }

    changeMagicType = e => {
        this.setState({filterMagicType: e.target.value});
    }

    checkIsSpellBookmarked = (spell: Spell) => this.state.bookmarkedSpells.includes(spell.title)

    sortSpells = (s1: Spell, s2: Spell) => {
        const s1b = this.checkIsSpellBookmarked(s1);
        const s2b = this.checkIsSpellBookmarked(s2)
        if (s1b && s2b) {
            return s1.title < s2.title ? -1 : 1;
        } else if (s1b) {
            return -1
        } else if (s2b) {
            return 1;
        } else {
            return s1.title < s2.title ? -1 : 1;
        }
    }

    renderSpiritSpells() {
        const spiritSpellsFiltered = this.state.filterText
            ? spiritSpells.filter(s => (s.title.toLowerCase()).includes(this.state.filterText.toLowerCase()))
            : spiritSpells;

        return <React.Fragment>
            <h3 className={CSS.subtitle}>Spirit Magic Spells</h3>
            <div className={CSS.spellsContainer}>
                {spiritSpellsFiltered.sort(this.sortSpells).map(spell => <SpellCard
                    spell={spell}
                    bookmark={this.bookmarkSpell}
                    isBookmarked={this.state.bookmarkedSpells.includes(spell.title)}
                    key={spell.title}
                />)}
            </div>
        </React.Fragment>
    }

    renderRuneSpells() {
        const runeSpellsFiltered = this.state.filterText
            ? runeSpells.filter(s => (s.title.toLowerCase()).includes(this.state.filterText.toLowerCase()))
            : runeSpells;

        return <React.Fragment>
            <h3 className={CSS.subtitle}>Rune Magic Spells</h3>
            <div className={CSS.spellsContainer}>
                {runeSpellsFiltered.sort(this.sortSpells).map(spell => <RuneSpellCard
                    spell={spell}
                    bookmark={this.bookmarkSpell}
                    isBookmarked={this.state.bookmarkedSpells.includes(spell.title)}
                    key={'rune_spell_' + spell.title}
                />)}
            </div>
        </React.Fragment>
    }

    render() {
        return <div>
            <div  className={CSS.container}>

                <form action="#" className={CSS.filters}>
                    <label className={CSS.filter}>
                        magic type:
                        <select name="magicType" id="magicType" onChange={this.changeMagicType}>
                            <option value="spirit">Spirit Magic</option>
                            <option value="rune">Rune Magic</option>
                            {/*<option value="sorcery">Sorcery</option>*/}
                        </select>
                    </label>


                    <label className={CSS.filter}>
                        Search by title:
                        <input type="text" id={'searchSpell'} onChange={this.onSearch}/>
                    </label>
                </form>

                {this.state.filterMagicType === 'spirit' ? this.renderSpiritSpells() : this.renderRuneSpells()}
            </div>
        </div>
    }
}

export const SpellBook = connect(mapStateToProps)(SpellBookView);