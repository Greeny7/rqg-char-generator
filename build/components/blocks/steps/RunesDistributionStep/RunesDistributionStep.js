import * as React from "../../../../_snowpack/pkg/react.js";
import {connect} from "../../../../_snowpack/pkg/react-redux.js";
import {
  decrementFreeRunePoints,
  incrementFreeRunePoints,
  nextStep,
  prevStep,
  resetInitialRuneValues,
  setFreeRunePoints
} from "../../../../store/stepsStore/stepsActions.js";
import {getRunesList} from "../../../../gameEntities/gameEntities.js";
import {
  setElementalRune,
  setRunes
} from "../../../../store/characterStore/characterRunesStore/characterRunesActions.js";
import {RuneCounter} from "./RuneCounter/RuneCounter.js";
import {
  setAndBalanceFormRune,
  setAndBalancePowerRune
} from "../../../../store/characterStore/characterRunesStore/characterRunesThunks.js";
import {saveInitialRuneValues} from "../../../../store/stepsStore/stepsThunks.js";
import {MAX_FREE_RUNE_POINTS} from "../../../../gameEntities/rules.js";
const CSS = require("./RunesDistributionStep.css");
const mapStateToProps = (state) => ({
  elementalRunes: state.character.runes.elemental,
  powerRunes: state.character.runes.power,
  formRunes: state.character.runes.form,
  freePoints: state.steps.runesDistributionStep.freePoints,
  initialRunesValue: state.steps.runesDistributionStep.initialRunesValue
});
const mapDispatchToProps = (dispatch) => ({
  setElementalRune: (runeName, value) => dispatch(setElementalRune(runeName, value)),
  setPowerRune: (runeName, value) => dispatch(setAndBalancePowerRune(runeName, value)),
  setFormRune: (runeName, value) => dispatch(setAndBalanceFormRune(runeName, value)),
  setRunes: (elementalRunes, powerRunes, formRunes) => dispatch(setRunes(elementalRunes, powerRunes, formRunes)),
  nextStep: () => dispatch(nextStep()),
  prevStep: () => dispatch(prevStep()),
  incrementFreeRunePoints: () => dispatch(incrementFreeRunePoints()),
  decrementFreeRunePoints: () => dispatch(decrementFreeRunePoints()),
  setFreeRunePoints: (value) => dispatch(setFreeRunePoints(value)),
  saveInitialRuneValues: () => dispatch(saveInitialRuneValues()),
  resetInitialRuneValues: () => dispatch(resetInitialRuneValues())
});
class RunesDistributionStepView extends React.PureComponent {
  constructor() {
    super(...arguments);
    this.undo = () => {
      this.resetValues();
      this.props.resetInitialRuneValues();
      this.props.prevStep();
    };
    this.resetValues = () => {
      this.props.setRunes(this.props.initialRunesValue.elemental, this.props.initialRunesValue.power, this.props.initialRunesValue.form);
      this.props.setFreeRunePoints(MAX_FREE_RUNE_POINTS);
    };
    this.decrementPowerRune = (runeName) => {
      const currentValue = this.props.powerRunes[runeName];
      this.props.setPowerRune(runeName, currentValue - 1);
      this.props.incrementFreeRunePoints();
    };
    this.incrementPowerRune = (runeName) => {
      const currentValue = this.props.powerRunes[runeName];
      this.props.decrementFreeRunePoints();
      this.props.setPowerRune(runeName, currentValue + 1);
    };
    this.decrementFormRune = (runeName) => {
      const currentValue = this.props.formRunes[runeName];
      this.props.setFormRune(runeName, currentValue - 1);
      this.props.incrementFreeRunePoints();
    };
    this.incrementFormRune = (runeName) => {
      const currentValue = this.props.formRunes[runeName];
      this.props.decrementFreeRunePoints();
      this.props.setFormRune(runeName, currentValue + 1);
    };
    this.decrementElementalRune = (runeName) => {
      const currentValue = this.props.elementalRunes[runeName];
      this.props.setElementalRune(runeName, currentValue - 1);
      this.props.incrementFreeRunePoints();
    };
    this.incrementElementalRune = (runeName) => {
      const currentValue = this.props.elementalRunes[runeName];
      this.props.decrementFreeRunePoints();
      this.props.setElementalRune(runeName, currentValue + 1);
    };
  }
  componentDidMount() {
    if (this.props.initialRunesValue.elemental.air === null) {
      this.props.saveInitialRuneValues();
    }
  }
  renderPowerRune(runeName) {
    const currentValue = this.props.powerRunes[runeName];
    const increaseActive = this.props.freePoints > 0 && currentValue < 100;
    const decreaseActive = currentValue > 0 && currentValue > this.props.initialRunesValue.power[runeName];
    return /* @__PURE__ */ React.createElement(RuneCounter, {
      key: runeName,
      title: runeName,
      onIncrease: this.incrementPowerRune,
      onReduce: this.decrementPowerRune,
      value: currentValue,
      canBeDecremented: decreaseActive,
      canBeIncremented: increaseActive
    });
  }
  renderFormRune(runeName) {
    const currentValue = this.props.formRunes[runeName];
    const increaseActive = this.props.freePoints > 0 && currentValue < 100;
    const decreaseActive = currentValue > 0 && currentValue > this.props.initialRunesValue.form[runeName];
    return /* @__PURE__ */ React.createElement(RuneCounter, {
      key: runeName,
      title: runeName,
      onIncrease: this.incrementFormRune,
      onReduce: this.decrementFormRune,
      value: currentValue,
      canBeDecremented: decreaseActive,
      canBeIncremented: increaseActive
    });
  }
  renderElementalRune(runeName) {
    const currentValue = this.props.elementalRunes[runeName];
    const increaseActive = this.props.freePoints > 0;
    const decreaseActive = currentValue > 0 && currentValue > this.props.initialRunesValue.elemental[runeName];
    return /* @__PURE__ */ React.createElement(RuneCounter, {
      key: runeName,
      title: runeName,
      onIncrease: this.incrementElementalRune,
      onReduce: this.decrementElementalRune,
      value: currentValue,
      canBeDecremented: decreaseActive,
      canBeIncremented: increaseActive
    });
  }
  render() {
    const nextStepReady = this.props.freePoints === 0;
    const runesList = getRunesList();
    const elementalRunes = runesList.elemental.map((rune) => rune.title);
    const powerRunes = runesList.power.map((rune) => rune.title);
    const formRunes = runesList.form.map((rune) => rune.title);
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", null, "Free points: ", this.props.freePoints), /* @__PURE__ */ React.createElement("button", {
      onClick: this.resetValues
    }, "reset"), /* @__PURE__ */ React.createElement("h4", null, "Elemental runes"), /* @__PURE__ */ React.createElement("ul", null, elementalRunes.map((runeName) => this.renderElementalRune(runeName))), /* @__PURE__ */ React.createElement("h4", null, "Power/Form runes"), /* @__PURE__ */ React.createElement("ul", null, powerRunes.map((runeName) => this.renderPowerRune(runeName))), /* @__PURE__ */ React.createElement("ul", null, formRunes.map((runeName) => this.renderFormRune(runeName))), /* @__PURE__ */ React.createElement("button", {
      type: "button",
      onClick: this.undo
    }, "undo"), /* @__PURE__ */ React.createElement("button", {
      type: "button",
      disabled: !nextStepReady,
      onClick: this.props.nextStep
    }, "next"));
  }
}
export const RunesDistributionStep = connect(mapStateToProps, mapDispatchToProps)(RunesDistributionStepView);
