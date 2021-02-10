import * as React from "../../../_snowpack/pkg/react.js";
import {connect} from "../../../_snowpack/pkg/react-redux.js";
import {Characteristics} from "../../../gameEntities/gameEntitiesTypes.js";
import {
  getCharacterHealingRate,
  getCharacterMaxHp,
  getCharacterMaxLocationsHp,
  getDamageBonus,
  getDexStrikeRank,
  getEncumbrancePoints,
  getSizeStrikeRank,
  getSpiritCombatDamage
} from "../../../store/characterStore/characterSelectors.js";
import {diceToString} from "../../../utils/diceRolls.js";
const CSS = require("./CharacterDetails.css");
const mapStateToProps = (state) => ({
  character: state.character,
  maxHp: getCharacterMaxHp(state),
  maxLocationsHp: getCharacterMaxLocationsHp(state),
  healingRate: getCharacterHealingRate(state),
  damageBonus: getDamageBonus(state),
  spiritCombatDamage: getSpiritCombatDamage(state),
  encumbrancePoints: getEncumbrancePoints(state),
  dexStrikeRank: getDexStrikeRank(state),
  sizeStrikeRank: getSizeStrikeRank(state)
});
const mapDispatchToProps = () => ({});
class CharacterDetailsView extends React.Component {
  renderPassions() {
    const {passions} = this.props.character;
    if (passions.length === 0)
      return null;
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", null, "Passions"), /* @__PURE__ */ React.createElement("ul", null, passions.map((passion, index) => /* @__PURE__ */ React.createElement("li", {
      key: index
    }, /* @__PURE__ */ React.createElement("b", null, passion.name, " ", passion.target && `(${passion.target})`), ": ", passion.value, "%"))));
  }
  renderHomeland() {
    const homeland = this.props.character.homeland;
    if (homeland) {
      return /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Homeland:"), " ", homeland);
    }
    return null;
  }
  renderRunes() {
    const {elemental, form, power} = this.props.character.runes;
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", null, "Runes"), /* @__PURE__ */ React.createElement("h5", null, "Elemental"), /* @__PURE__ */ React.createElement("ul", null, Object.keys(elemental).map((runeName, index) => /* @__PURE__ */ React.createElement("li", {
      key: index
    }, runeName, " - ", elemental[runeName], "%"))), /* @__PURE__ */ React.createElement("h5", null, "Power"), /* @__PURE__ */ React.createElement("ul", null, Object.keys(power).map((runeName, index) => /* @__PURE__ */ React.createElement("li", {
      key: index
    }, runeName, " - ", power[runeName], "%"))), /* @__PURE__ */ React.createElement("h5", null, "Form"), /* @__PURE__ */ React.createElement("ul", null, Object.keys(form).map((runeName, index) => /* @__PURE__ */ React.createElement("li", {
      key: index
    }, runeName, " - ", form[runeName], "%"))));
  }
  renderCharacteristics() {
    const {characteristics} = this.props.character;
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", null, "Characteristics"), /* @__PURE__ */ React.createElement("ul", null, Object.keys(characteristics).map((charKey, index) => /* @__PURE__ */ React.createElement("li", {
      key: index
    }, charKey, ": ", characteristics[charKey]))));
  }
  renderAttrubutes() {
    const mana = this.props.character.characteristics[Characteristics.POW];
    const {
      maxHp,
      maxLocationsHp,
      healingRate,
      damageBonus,
      spiritCombatDamage,
      encumbrancePoints,
      dexStrikeRank,
      sizeStrikeRank
    } = this.props;
    return /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "HP: ", maxHp), /* @__PURE__ */ React.createElement("li", null, "MP: ", mana), /* @__PURE__ */ React.createElement("li", null, "Max location hp:", /* @__PURE__ */ React.createElement("ul", null, Object.keys(maxLocationsHp).map((location, index) => /* @__PURE__ */ React.createElement("li", {
      key: index
    }, location, ": ", maxLocationsHp[location])))), /* @__PURE__ */ React.createElement("li", null, "Healing rate: ", healingRate), /* @__PURE__ */ React.createElement("li", null, "Damage bonus: ", diceToString(damageBonus, true)), /* @__PURE__ */ React.createElement("li", null, "Spirit combat damage: ", diceToString(spiritCombatDamage)), /* @__PURE__ */ React.createElement("li", null, "Encumbrance points: ", encumbrancePoints), /* @__PURE__ */ React.createElement("li", null, "DEX Strike Rank: ", dexStrikeRank), /* @__PURE__ */ React.createElement("li", null, "SIZ Strike Rank: ", sizeStrikeRank));
  }
  render() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Character"), this.renderHomeland(), this.renderCharacteristics(), this.renderRunes(), this.renderPassions(), this.renderAttrubutes());
  }
}
export const CharacterDetails = connect(mapStateToProps, mapDispatchToProps)(CharacterDetailsView);
