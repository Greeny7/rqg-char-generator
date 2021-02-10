import * as React from "../../../../_snowpack/pkg/react.js";
import {connect} from "../../../../_snowpack/pkg/react-redux.js";
import {setStep} from "../../../../store/stepsStore/stepsActions.js";
import {Step} from "../../../../store/stepsStore/stepsStoreTypes.js";
import {selectHomeland} from "../../../../store/characterStore/characterThunks.js";
import {getHomelandsList} from "../../../../gameEntities/gameEntities.js";
const CSS = require("./HomelandStep.css");
const homelandList = getHomelandsList();
const mapStateToProps = (state) => ({
  selectedHomeland: state.character.homeland
});
const mapDispatchToProps = (dispatch) => ({
  selectHomeland: (homelandTitle) => dispatch(selectHomeland(homelandTitle)),
  nextStep: () => dispatch(setStep(Step.RUNES))
});
class HomelandStepView extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      hoveredItem: null
    };
  }
  renderDetails() {
    const homelandTitle = this.state.hoveredItem || this.props.selectedHomeland;
    if (!homelandTitle) {
      return null;
    }
    const homeland = homelandList.find((item) => item.title === homelandTitle);
    return /* @__PURE__ */ React.createElement(React.Fragment, null, homeland.description.map((desc, index) => /* @__PURE__ */ React.createElement("div", {
      key: desc.title + index
    }, desc.title && /* @__PURE__ */ React.createElement("h5", null, desc.title), /* @__PURE__ */ React.createElement("p", null, desc.text))), /* @__PURE__ */ React.createElement("ul", null, homeland.passions.map((passion, index) => /* @__PURE__ */ React.createElement("li", {
      key: passion.name + index
    }, /* @__PURE__ */ React.createElement("b", null, passion.name, " ", passion.target && `(${passion.target})`), ": ", passion.value, "%"))), /* @__PURE__ */ React.createElement("p", null, "rune bonus: ", /* @__PURE__ */ React.createElement("b", null, homeland.runeBonus.title), ": +", homeland.runeBonus.value, "%"), homeland.characteristicsBonus && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("p", null, "Characteristics bonus:"), /* @__PURE__ */ React.createElement("ul", null, Object.keys(homeland.characteristicsBonus).map((charKey, index) => {
      return /* @__PURE__ */ React.createElement("li", {
        key: index
      }, /* @__PURE__ */ React.createElement("b", null, charKey), ": ", homeland.characteristicsBonus[charKey]);
    }))));
  }
  onItemClick(item) {
    this.props.selectHomeland(item.title);
  }
  render() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", null, "Homeland"), /* @__PURE__ */ React.createElement("ul", null, homelandList.map((item, index) => /* @__PURE__ */ React.createElement("li", {
      key: item.title + index
    }, /* @__PURE__ */ React.createElement("div", {
      onClick: () => this.onItemClick(item)
    }, /* @__PURE__ */ React.createElement("h4", null, item.title, " ", this.props.selectedHomeland === item.title && " Selected"))))), this.renderDetails(), this.props.selectedHomeland && /* @__PURE__ */ React.createElement("button", {
      type: "button",
      onClick: this.props.nextStep
    }, "next"));
  }
}
export const HomelandStep = connect(mapStateToProps, mapDispatchToProps)(HomelandStepView);
