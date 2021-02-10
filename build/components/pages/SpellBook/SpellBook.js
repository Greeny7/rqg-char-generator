import * as React from "../../../_snowpack/pkg/react.js";
import {connect} from "../../../_snowpack/pkg/react-redux.js";
import {spiritSpells} from "../../../gameEntities/magic/spiritSpells.js";
import {SpellCard} from "../../blocks/SpellCard/SpellCard.js";
import {runeSpells} from "../../../gameEntities/magic/runeSpells.js";
import {RuneSpellCard} from "../../blocks/SpellCard/RuneSpellCard.js";
import CSS from "./SpellBook.module.css.proxy.js";
const mapStateToProps = (state) => ({
  step: state.steps.currentStep
});
class SpellBookView extends React.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      filterText: "",
      bookmarkedSpells: [],
      filterMagicType: "spirit"
    };
    this.onSearch = (e) => {
      this.setState({filterText: e.target.value});
    };
    this.bookmarkSpell = (spellTitle, mark) => {
      let spells = [...this.state.bookmarkedSpells];
      console.log(this.state.bookmarkedSpells, spells);
      if (mark) {
        spells.push(spellTitle);
      } else {
        spells.splice(spells.indexOf(spellTitle), 1);
      }
      this.setState({bookmarkedSpells: spells});
      console.log(spells, JSON.stringify(spells));
      localStorage.setItem("bookmarkedSpells", JSON.stringify(spells));
    };
    this.changeMagicType = (e) => {
      this.setState({filterMagicType: e.target.value});
    };
    this.checkIsSpellBookmarked = (spell) => this.state.bookmarkedSpells.includes(spell.title);
    this.sortSpells = (s1, s2) => {
      const s1b = this.checkIsSpellBookmarked(s1);
      const s2b = this.checkIsSpellBookmarked(s2);
      if (s1b && s2b) {
        return s1.title < s2.title ? -1 : 1;
      } else if (s1b) {
        return -1;
      } else if (s2b) {
        return 1;
      } else {
        return s1.title < s2.title ? -1 : 1;
      }
    };
  }
  componentDidMount() {
    const bookmarkedSpells = localStorage.getItem("bookmarkedSpells");
    if (bookmarkedSpells) {
      console.log(bookmarkedSpells);
      this.setState({bookmarkedSpells: JSON.parse(bookmarkedSpells)});
    }
  }
  renderSpiritSpells() {
    const spiritSpellsFiltered = this.state.filterText ? spiritSpells.filter((s) => s.title.toLowerCase().includes(this.state.filterText.toLowerCase())) : spiritSpells;
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", {
      className: CSS.subtitle
    }, "Spirit Magic Spells"), /* @__PURE__ */ React.createElement("div", {
      className: CSS.spellsContainer
    }, spiritSpellsFiltered.sort(this.sortSpells).map((spell) => /* @__PURE__ */ React.createElement(SpellCard, {
      spell,
      bookmark: this.bookmarkSpell,
      isBookmarked: this.state.bookmarkedSpells.includes(spell.title),
      key: spell.title
    }))));
  }
  renderRuneSpells() {
    const runeSpellsFiltered = this.state.filterText ? runeSpells.filter((s) => s.title.toLowerCase().includes(this.state.filterText.toLowerCase())) : runeSpells;
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", {
      className: CSS.subtitle
    }, "Rune Magic Spells"), /* @__PURE__ */ React.createElement("div", {
      className: CSS.spellsContainer
    }, runeSpellsFiltered.sort(this.sortSpells).map((spell) => /* @__PURE__ */ React.createElement(RuneSpellCard, {
      spell,
      bookmark: this.bookmarkSpell,
      isBookmarked: this.state.bookmarkedSpells.includes(spell.title),
      key: "rune_spell_" + spell.title
    }))));
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
      className: CSS.container
    }, /* @__PURE__ */ React.createElement("form", {
      action: "#",
      className: CSS.filters
    }, /* @__PURE__ */ React.createElement("label", {
      className: CSS.filter
    }, "magic type:", /* @__PURE__ */ React.createElement("select", {
      name: "magicType",
      id: "magicType",
      onChange: this.changeMagicType
    }, /* @__PURE__ */ React.createElement("option", {
      value: "spirit"
    }, "Spirit Magic"), /* @__PURE__ */ React.createElement("option", {
      value: "rune"
    }, "Rune Magic"))), /* @__PURE__ */ React.createElement("label", {
      className: CSS.filter
    }, "Search by title:", /* @__PURE__ */ React.createElement("input", {
      type: "text",
      id: "searchSpell",
      onChange: this.onSearch
    }))), this.state.filterMagicType === "spirit" ? this.renderSpiritSpells() : this.renderRuneSpells()));
  }
}
export const SpellBook = connect(mapStateToProps)(SpellBookView);
