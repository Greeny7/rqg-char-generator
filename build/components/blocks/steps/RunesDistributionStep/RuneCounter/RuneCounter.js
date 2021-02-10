import * as React from "../../../../../_snowpack/pkg/react.js";
const CSS = require("./RuneCounter.css");
export const RuneCounter = (props) => {
  return /* @__PURE__ */ React.createElement("li", null, props.title, ":", /* @__PURE__ */ React.createElement("button", {
    className: !props.canBeDecremented ? CSS.unactive : "",
    disabled: !props.canBeDecremented,
    onClick: () => props.onReduce(props.title)
  }, "reduce"), props.value, " %", /* @__PURE__ */ React.createElement("button", {
    className: !props.canBeIncremented ? CSS.unactive : "",
    disabled: !props.canBeIncremented,
    onClick: () => props.onIncrease(props.title)
  }, "increase"));
};
