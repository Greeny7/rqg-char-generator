import * as React from "../../../../_snowpack/pkg/react.js";
import {connect} from "../../../../_snowpack/pkg/react-redux.js";
import {
  decrementFreeCharacteristicsPoints,
  incrementFreeCharacteristicsPoints,
  nextStep,
  prevStep,
  resetInitialCharacteristics,
  setCharacteristicsMode,
  setFreeCharacteristicsPoints,
  setPrimaryRune,
  setSecondaryRune
} from "../../../../store/stepsStore/stepsActions.js";
import {CharacteristicsMode} from "../../../../store/stepsStore/stepsStoreTypes.js";
import {Characteristics} from "../../../../gameEntities/gameEntitiesTypes.js";
import {setCharacteristics} from "../../../../store/characterStore/characterActions.js";
import {CharacteristicsCounter} from "./CharacteristicsCounter/CharacteristicsCounter.js";
import {rollD6} from "../../../../utils/diceRolls.js";
import {
  saveInitialCharacteristicsValues,
  selectPrimaryRuneBonusChar,
  selectSecondaryRuneBonusChar
} from "../../../../store/stepsStore/stepsThunks.js";
import {getMaxRunes} from "../../../../store/characterStore/characterRunesStore/characterRunesSelectors.js";
import {MAX_FREE_CHARACTERISTICS_POINTS} from "../../../../gameEntities/rules.js";
const CSS = require("./CharacteristicsStep.css");
const mapStateToProps = (state) => ({
  characteristics: state.character.characteristics,
  freePoints: state.steps.characteristicsStep.freePoints,
  initialCharacteristics: state.steps.characteristicsStep.initialCharacteristics,
  mode: state.steps.characteristicsStep.mode,
  maxRunes: getMaxRunes(state),
  runesAffinity: state.steps.characteristicsStep.elementalRunesAffinity,
  runesCharacteristicsBonus: state.steps.characteristicsStep.runesCharacteristicsBonus
});
const mapDispatchToProps = (dispatch) => ({
  setCharacteristics: (characteristicsMap) => dispatch(setCharacteristics(characteristicsMap)),
  saveInitialCharacteristicsValues: () => dispatch(saveInitialCharacteristicsValues()),
  resetInitialCharacteristics: () => dispatch(resetInitialCharacteristics()),
  decrementFreeCharacteristicsPoints: () => dispatch(decrementFreeCharacteristicsPoints()),
  incrementFreeCharacteristicsPoints: () => dispatch(incrementFreeCharacteristicsPoints()),
  setFreeCharacteristicsPoints: (value) => dispatch(setFreeCharacteristicsPoints(value)),
  setCharacteristicsMode: (mode) => dispatch(setCharacteristicsMode(mode)),
  setPrimaryRune: (runeName) => dispatch(setPrimaryRune(runeName)),
  setSecondaryRune: (runeName) => dispatch(setSecondaryRune(runeName)),
  selectPrimaryRuneBonusChar: (char) => dispatch(selectPrimaryRuneBonusChar(char)),
  selectSecondaryRuneBonusChar: (char) => dispatch(selectSecondaryRuneBonusChar(char)),
  nextStep: () => dispatch(nextStep()),
  prevStep: () => dispatch(prevStep())
});
class CharacteristicsStepView extends React.PureComponent {
  constructor() {
    super(...arguments);
    this.undo = () => {
      this.resetCharacteristics();
      this.props.resetInitialCharacteristics();
      this.props.prevStep();
    };
  }
  componentDidMount() {
    if (this.props.initialCharacteristics[Characteristics.SIZ] === null) {
      this.props.saveInitialCharacteristicsValues();
    }
  }
  incrementChar(charKey) {
    this.props.setCharacteristics({[charKey]: this.props.characteristics[charKey] + 1});
    this.props.decrementFreeCharacteristicsPoints();
  }
  decrementChar(charKey) {
    this.props.setCharacteristics({[charKey]: this.props.characteristics[charKey] - 1});
    this.props.incrementFreeCharacteristicsPoints();
  }
  resetCharacteristics() {
    this.props.setCharacteristics(this.props.initialCharacteristics);
    this.props.setFreeCharacteristicsPoints(0);
  }
  randomDistribution() {
    this.resetCharacteristics();
    const newCharRoll = {
      [Characteristics.STR]: rollD6(3),
      [Characteristics.SIZ]: rollD6(2) + 6,
      [Characteristics.DEX]: rollD6(3),
      [Characteristics.CON]: rollD6(3),
      [Characteristics.INT]: rollD6(2) + 6,
      [Characteristics.CHA]: rollD6(3),
      [Characteristics.POW]: rollD6(3)
    };
    const finalChars = Object.keys(newCharRoll).reduce((acc, charKey) => {
      acc[charKey] = this.props.initialCharacteristics[charKey] + newCharRoll[charKey];
      return acc;
    }, {});
    this.props.setCharacteristics(finalChars);
    const sum = Object.keys(newCharRoll).reduce((sum2, charKey) => sum2 + newCharRoll[charKey], 0);
    if (sum <= 92) {
      this.props.setFreeCharacteristicsPoints(3);
    }
  }
  fixedDistribution() {
    this.resetCharacteristics();
    this.props.setCharacteristicsMode(CharacteristicsMode.FIXED_NUMBER);
    this.props.setFreeCharacteristicsPoints(MAX_FREE_CHARACTERISTICS_POINTS);
  }
  render() {
    const nextStepReady = Object.keys(this.props.characteristics).every((charKey) => this.props.characteristics[charKey] > 0) && this.props.freePoints === 0;
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", null, "Set characteristics:"), /* @__PURE__ */ React.createElement("button", {
      type: "button",
      onClick: () => this.randomDistribution()
    }, "Set random"), /* @__PURE__ */ React.createElement("p", null, "or"), /* @__PURE__ */ React.createElement("button", {
      type: "button",
      onClick: () => this.fixedDistribution()
    }, "Distribute fixed points number"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("b", null, "Free points:"), " ", this.props.freePoints), /* @__PURE__ */ React.createElement("ul", null, Object.keys(this.props.characteristics).map((charKey, index) => {
      const value = this.props.characteristics[charKey];
      const minValue = Math.max(1, 1 + this.props.initialCharacteristics[charKey]);
      const maxValue = charKey === Characteristics.SIZ ? 999 : Math.min(18 + this.props.initialCharacteristics[charKey], 21);
      const canBeIncremented = this.props.freePoints > 0 && value < maxValue;
      const canBeDecremented = this.props.mode !== CharacteristicsMode.RANDOM && value > minValue;
      return /* @__PURE__ */ React.createElement(CharacteristicsCounter, {
        key: index,
        value,
        title: charKey,
        onIncrease: () => this.incrementChar(charKey),
        onReduce: () => this.decrementChar(charKey),
        canBeIncremented,
        canBeDecremented
      });
    })), /* @__PURE__ */ React.createElement("button", {
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
export const CharacteristicsStep = connect(mapStateToProps, mapDispatchToProps)(CharacteristicsStepView);
