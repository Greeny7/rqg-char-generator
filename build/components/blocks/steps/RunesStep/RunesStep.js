import * as React from "../../../../_snowpack/pkg/react.js";
import {connect} from "../../../../_snowpack/pkg/react-redux.js";
import {setStep} from "../../../../store/stepsStore/stepsActions.js";
import {Step} from "../../../../store/stepsStore/stepsStoreTypes.js";
import {RuneFormTitle} from "../../../../gameEntities/gameEntitiesTypes.js";
import {getRunesList} from "../../../../gameEntities/gameEntities.js";
import {
  selectMainElementalRune,
  toggleFormRuneAffinity,
  togglePowerRuneAffinity
} from "../../../../store/stepsStore/stepsThunks.js";
import {MAIN_RUNE_BONUSES} from "../../../../gameEntities/rules.js";
const CSS = require("./RunesStep.css");
const mapStateToProps = (state) => ({
  elementalRunesAffinity: state.steps.runesStep.elementalRunesAffinity,
  formAndPowerRunesAffinities: state.steps.runesStep.formAndPowerRunesAffinities
});
const mapDispatchToProps = (dispatch) => ({
  selectMainElementalRune: (runeName, runeImportancy) => dispatch(selectMainElementalRune(runeName, runeImportancy)),
  toggleFormRuneAffinity: (runeName) => dispatch(toggleFormRuneAffinity(runeName)),
  togglePowerRuneAffinity: (runeName) => dispatch(togglePowerRuneAffinity(runeName)),
  nextStep: () => dispatch(setStep(Step.RUNES_DISTRIBUTION)),
  prevStep: () => dispatch(setStep(Step.HOMELAND))
});
class RunesStepView extends React.PureComponent {
  constructor() {
    super(...arguments);
    this.undo = () => {
      [...this.props.formAndPowerRunesAffinities].forEach((runeName) => {
        if (runeName === RuneFormTitle.MAN || runeName === RuneFormTitle.BEAST) {
          this.props.toggleFormRuneAffinity(runeName);
        } else {
          this.props.togglePowerRuneAffinity(runeName);
        }
      });
      this.props.selectMainElementalRune(null, 0);
      this.props.selectMainElementalRune(null, 1);
      this.props.selectMainElementalRune(null, 2);
      this.props.prevStep();
    };
  }
  render() {
    const nextStepReady = this.props.elementalRunesAffinity[0] && this.props.elementalRunesAffinity[1] && this.props.elementalRunesAffinity[2] && this.props.formAndPowerRunesAffinities.length === 2;
    const runesList = getRunesList();
    const elementalRunes = runesList.elemental.map((rune) => rune.title);
    const powerRunes = runesList.power.map((rune) => rune.title);
    const formRunes = runesList.form.map((rune) => rune.title);
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", null, "Choose primary elemental rune (+$", MAIN_RUNE_BONUSES[0], "%):"), /* @__PURE__ */ React.createElement("ul", null, elementalRunes.map((runeName, index) => {
      const unactive = runeName === this.props.elementalRunesAffinity[1] || runeName === this.props.elementalRunesAffinity[2];
      const selected = runeName === this.props.elementalRunesAffinity[0];
      return /* @__PURE__ */ React.createElement("li", {
        key: index,
        onClick: () => !unactive && this.props.selectMainElementalRune(runeName, 0),
        className: unactive ? CSS.unactive : ""
      }, runeName, " ", selected && /* @__PURE__ */ React.createElement("b", null, " - selected"));
    })), /* @__PURE__ */ React.createElement("h4", null, "Choose secondary elemental rune (+$", MAIN_RUNE_BONUSES[1], "%):"), /* @__PURE__ */ React.createElement("ul", null, elementalRunes.map((runeName, index) => {
      const unactive = runeName === this.props.elementalRunesAffinity[0] || runeName === this.props.elementalRunesAffinity[2];
      const selected = runeName === this.props.elementalRunesAffinity[1];
      return /* @__PURE__ */ React.createElement("li", {
        key: index,
        onClick: () => !unactive && this.props.selectMainElementalRune(runeName, 1),
        className: unactive ? CSS.unactive : ""
      }, runeName, " ", selected && /* @__PURE__ */ React.createElement("b", null, " - selected"));
    })), /* @__PURE__ */ React.createElement("h4", null, "Choose tertiary elemental rune (+$", MAIN_RUNE_BONUSES[2], "%):"), /* @__PURE__ */ React.createElement("ul", null, elementalRunes.map((runeName, index) => {
      const unactive = runeName === this.props.elementalRunesAffinity[0] || runeName === this.props.elementalRunesAffinity[1];
      const selected = runeName === this.props.elementalRunesAffinity[2];
      return /* @__PURE__ */ React.createElement("li", {
        key: index,
        onClick: () => !unactive && this.props.selectMainElementalRune(runeName, 2),
        className: unactive ? CSS.unactive : ""
      }, runeName, " ", selected && /* @__PURE__ */ React.createElement("b", null, " - selected"));
    })), /* @__PURE__ */ React.createElement("h4", null, "Choose power/form rune affinities:"), /* @__PURE__ */ React.createElement("ul", null, powerRunes.map((runeName, index) => {
      const selected = this.props.formAndPowerRunesAffinities.includes(runeName);
      const oppositeRune = runesList.power.find((r) => r.title === runeName).oppositeRune;
      const oppositeSelected = this.props.formAndPowerRunesAffinities.includes(oppositeRune);
      const unactive = oppositeSelected || !selected && this.props.formAndPowerRunesAffinities.length >= 2;
      return /* @__PURE__ */ React.createElement("li", {
        key: index,
        onClick: () => !unactive && this.props.togglePowerRuneAffinity(runeName),
        className: unactive ? CSS.unactive : ""
      }, runeName, " ", selected && /* @__PURE__ */ React.createElement("b", null, " - selected"));
    }), formRunes.map((runeName, index) => {
      const selected = this.props.formAndPowerRunesAffinities.includes(runeName);
      const oppositeRune = runesList.form.find((r) => r.title === runeName).oppositeRune;
      const oppositeSelected = this.props.formAndPowerRunesAffinities.includes(oppositeRune);
      const unactive = oppositeSelected || !selected && this.props.formAndPowerRunesAffinities.length >= 2;
      return /* @__PURE__ */ React.createElement("li", {
        key: index,
        onClick: () => !unactive && this.props.toggleFormRuneAffinity(runeName),
        className: unactive ? CSS.unactive : ""
      }, runeName, " ", selected && /* @__PURE__ */ React.createElement("b", null, " - selected"));
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
export const RunesStep = connect(mapStateToProps, mapDispatchToProps)(RunesStepView);
