import * as React from "../../../_snowpack/pkg/react.js";
import {connect} from "../../../_snowpack/pkg/react-redux.js";
import {CharacterDetails} from "../../blocks/CharacterDetails/CharacterDetails.js";
import {HomelandStep} from "../../blocks/steps/HomelandStep/HomelandStep.js";
import {RunesStep} from "../../blocks/steps/RunesStep/RunesStep.js";
import {Step} from "../../../store/stepsStore/stepsStoreTypes.js";
import {RunesDistributionStep} from "../../blocks/steps/RunesDistributionStep/RunesDistributionStep.js";
import {CharacteristicsStep} from "../../blocks/steps/CharacteristicsStep/CharacteristicsStep.js";
import {RunesAffinityBonusStep} from "../../blocks/steps/RunesAffinityBonusStep/RunesAffinityBonusStep.js";
const CSS = require("./MainPage.css");
const mapStateToProps = (state) => ({
  step: state.steps.currentStep
});
class MainPageView extends React.PureComponent {
  constructor() {
    super(...arguments);
    this.stepMap = {
      [Step.HOMELAND]: () => /* @__PURE__ */ React.createElement(HomelandStep, null),
      [Step.RUNES]: () => /* @__PURE__ */ React.createElement(RunesStep, null),
      [Step.RUNES_DISTRIBUTION]: () => /* @__PURE__ */ React.createElement(RunesDistributionStep, null),
      [Step.CHARACTERISTICS]: () => /* @__PURE__ */ React.createElement(CharacteristicsStep, null),
      [Step.RUNES_AFFINITY]: () => /* @__PURE__ */ React.createElement(RunesAffinityBonusStep, null)
    };
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Character Generator for Runequest: Roleplaying in Glorantha"), /* @__PURE__ */ React.createElement("div", {
      className: CSS.content
    }, /* @__PURE__ */ React.createElement("main", {
      className: CSS.main
    }, this.stepMap[this.props.step]() || null), /* @__PURE__ */ React.createElement("aside", {
      className: CSS.asideRight
    }, /* @__PURE__ */ React.createElement(CharacterDetails, null))));
  }
}
export const MainPage = connect(mapStateToProps)(MainPageView);
