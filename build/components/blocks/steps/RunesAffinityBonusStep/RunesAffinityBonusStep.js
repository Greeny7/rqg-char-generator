import * as React from "../../../../_snowpack/pkg/react.js";
import {connect} from "../../../../_snowpack/pkg/react-redux.js";
import {
  nextStep,
  prevStep,
  setPrimaryRune,
  setSecondaryRune
} from "../../../../store/stepsStore/stepsActions.js";
import {Characteristics} from "../../../../gameEntities/gameEntitiesTypes.js";
import {getRunesList} from "../../../../gameEntities/gameEntities.js";
import {
  selectPrimaryRuneBonusChar,
  selectSecondaryRuneBonusChar
} from "../../../../store/stepsStore/stepsThunks.js";
import {getMaxRunes} from "../../../../store/characterStore/characterRunesStore/characterRunesSelectors.js";
const CSS = require("./RunesAffinityBonusStep.css");
const mapStateToProps = (state) => ({
  characteristics: state.character.characteristics,
  maxRunes: getMaxRunes(state),
  runesAffinity: state.steps.characteristicsStep.elementalRunesAffinity,
  runesCharacteristicsBonus: state.steps.characteristicsStep.runesCharacteristicsBonus
});
const mapDispatchToProps = (dispatch) => ({
  setPrimaryRune: (runeName) => dispatch(setPrimaryRune(runeName)),
  setSecondaryRune: (runeName) => dispatch(setSecondaryRune(runeName)),
  selectPrimaryRuneBonusChar: (char) => dispatch(selectPrimaryRuneBonusChar(char)),
  selectSecondaryRuneBonusChar: (char) => dispatch(selectSecondaryRuneBonusChar(char)),
  nextStep: () => dispatch(nextStep()),
  prevStep: () => dispatch(prevStep())
});
class RunesAffinityBonusStepView extends React.PureComponent {
  constructor() {
    super(...arguments);
    this.undo = () => {
      this.setSecondaryRune(null);
      this.setPrimaryRune(null);
      this.props.prevStep();
    };
  }
  componentDidMount() {
    if (!this.props.runesAffinity[0]) {
      const initialPrimaryRune = this.props.maxRunes[0][0];
      this.props.setPrimaryRune(initialPrimaryRune);
    }
    if (!this.props.runesAffinity[1]) {
      const initialSecondaryRune = this.props.maxRunes[0].length > 1 ? this.props.maxRunes[0][1] : this.props.maxRunes[1][0];
      this.props.setSecondaryRune(initialSecondaryRune);
    }
  }
  renderBonusSelectPrimary() {
    const [currentPrimaryRune] = this.props.runesAffinity;
    if (!currentPrimaryRune) {
      return null;
    }
    const [primaryRuneBonus, secondaryRuneBonus] = this.props.runesCharacteristicsBonus;
    const charismaDisabled = secondaryRuneBonus === Characteristics.CHA;
    const charismaIsActive = primaryRuneBonus === Characteristics.CHA;
    const primeRuneChar = getRunesList().elemental.find((r) => r.title === currentPrimaryRune).characteristic;
    const primeRuneCharSelected = primaryRuneBonus === primeRuneChar;
    return /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", {
      className: primeRuneCharSelected ? CSS.selected : "",
      onClick: () => this.props.selectPrimaryRuneBonusChar(primeRuneCharSelected ? null : primeRuneChar)
    }, primeRuneChar), /* @__PURE__ */ React.createElement("li", {
      className: charismaDisabled ? CSS.unactive : charismaIsActive ? CSS.selected : "",
      onClick: () => this.props.selectPrimaryRuneBonusChar(charismaIsActive ? null : Characteristics.CHA)
    }, Characteristics.CHA, charismaDisabled && "(can be chosen only once)"));
  }
  renderBonusSelectSecondary() {
    const [currentPrimaryRune, currentSecondaryRune] = this.props.runesAffinity;
    if (!currentSecondaryRune) {
      return null;
    }
    const [primaryRuneBonus, secondaryRuneBonus] = this.props.runesCharacteristicsBonus;
    const charismaDisabled = primaryRuneBonus === Characteristics.CHA;
    const charismaIsActive = secondaryRuneBonus === Characteristics.CHA;
    const secondRuneChar = getRunesList().elemental.find((r) => r.title === currentSecondaryRune).characteristic;
    const secondRuneCharSelected = secondaryRuneBonus === secondRuneChar;
    return /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", {
      className: secondRuneCharSelected ? CSS.selected : "",
      onClick: () => this.props.selectSecondaryRuneBonusChar(secondRuneCharSelected ? null : secondRuneChar)
    }, secondRuneChar), /* @__PURE__ */ React.createElement("li", {
      className: charismaDisabled ? CSS.unactive : charismaIsActive ? CSS.selected : "",
      onClick: () => this.props.selectSecondaryRuneBonusChar(charismaIsActive ? null : Characteristics.CHA)
    }, Characteristics.CHA, charismaDisabled && "(can be chosen only once)"));
  }
  setPrimaryRune(rune) {
    this.props.selectPrimaryRuneBonusChar(null);
    if (rune === this.props.runesAffinity[1]) {
      this.props.selectSecondaryRuneBonusChar(null);
    }
    this.props.setPrimaryRune(rune);
  }
  setSecondaryRune(rune) {
    this.props.selectSecondaryRuneBonusChar(null);
    if (rune === this.props.runesAffinity[0]) {
      this.props.selectPrimaryRuneBonusChar(null);
    }
    this.props.setSecondaryRune(rune);
  }
  render() {
    const nextStepReady = this.props.runesAffinity.every(Boolean) && this.props.runesCharacteristicsBonus.every(Boolean);
    const primaryRunesChoice = this.props.maxRunes[0];
    const secondaryRunesChoice = primaryRunesChoice.length > 1 ? primaryRunesChoice : this.props.maxRunes[1];
    const [currentPrimaryRune, currentSecondaryRune] = this.props.runesAffinity;
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", null, "Set affinity runes and their bonuses:"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("b", null, "Primary rune: "), primaryRunesChoice.map((runeName, index) => {
      const nextRune = primaryRunesChoice[index + 1];
      const selected = currentPrimaryRune === runeName;
      return /* @__PURE__ */ React.createElement("span", {
        key: index
      }, /* @__PURE__ */ React.createElement("span", {
        onClick: () => this.setPrimaryRune(runeName),
        className: selected ? CSS.selected : ""
      }, runeName), nextRune && " or ");
    }), currentPrimaryRune && /* @__PURE__ */ React.createElement("p", null, "Select bonus characteristic for primary rune (+2)"), this.renderBonusSelectPrimary(), /* @__PURE__ */ React.createElement("br", null)), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("b", null, "Secondary rune: "), secondaryRunesChoice.map((runeName, index) => {
      const nextRune = secondaryRunesChoice[index + 1];
      const selected = currentSecondaryRune === runeName;
      return /* @__PURE__ */ React.createElement("span", {
        key: index
      }, /* @__PURE__ */ React.createElement("span", {
        onClick: () => this.setSecondaryRune(runeName),
        className: selected ? CSS.selected : ""
      }, runeName), nextRune && " or ");
    }), currentSecondaryRune && /* @__PURE__ */ React.createElement("p", null, "Select bonus characteristic for secondary rune (+1)"), this.renderBonusSelectSecondary())), /* @__PURE__ */ React.createElement("button", {
      type: "button",
      onClick: this.undo
    }, "undo"), /* @__PURE__ */ React.createElement("button", {
      type: "button",
      disabled: !nextStepReady,
      className: !nextStepReady ? CSS.unactive : "",
      onClick: this.props.nextStep
    }, "next"));
  }
}
export const RunesAffinityBonusStep = connect(mapStateToProps, mapDispatchToProps)(RunesAffinityBonusStepView);
