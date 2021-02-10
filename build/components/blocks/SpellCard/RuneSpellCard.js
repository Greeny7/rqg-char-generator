import * as React from "../../../_snowpack/pkg/react.js";
import CSS from "./SpellCard.css.proxy.js";
export const RuneSpellCard = (props) => {
  const {spell, bookmark, isBookmarked} = props;
  const containerClasses = [CSS.container];
  if (isBookmarked) {
    containerClasses.push(CSS.bookmarked);
  }
  const descr = [];
  if (spell.ritual) {
    descr.push("ritual");
  }
  if (spell.enchantment) {
    descr.push("enchantment");
  }
  if (spell.duration) {
    if (spell.duration !== "temporal" && spell.duration !== "instant") {
      descr.push("duration(" + spell.duration + ")");
    } else {
      descr.push(spell.duration);
    }
  }
  if (spell.oneUse) {
    descr.push("one use");
  }
  if (spell.range) {
    descr.push("range");
  }
  if (spell.stackable !== void 0) {
    descr.push(spell.stackable ? "stackable" : "nonstackable");
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: containerClasses.join(" ")
  }, /* @__PURE__ */ React.createElement("div", {
    className: CSS.title
  }, /* @__PURE__ */ React.createElement("button", {
    className: CSS.buttonMark,
    onClick: () => bookmark(spell.title, !isBookmarked)
  }, "*"), /* @__PURE__ */ React.createElement("span", null, spell.title)), spell.runes.length && /* @__PURE__ */ React.createElement("p", {
    className: CSS.runes
  }, "Runes: ", spell.runes.join(", ")), spell.rpCost && /* @__PURE__ */ React.createElement("p", {
    className: CSS.mpCost
  }, "RP cost: ", spell.rpCost), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, descr.join(", "))), /* @__PURE__ */ React.createElement("div", {
    className: CSS.text,
    contentEditable: true
  }, spell.description.split("/n").map((line) => /* @__PURE__ */ React.createElement("p", null, line))));
};
