import * as React from "../../../_snowpack/pkg/react.js";
import CSS from "./SpellCard.css.proxy.js";
export const SpellCard = (props) => {
  const {spell, bookmark, isBookmarked} = props;
  const containerClasses = [CSS.container];
  if (isBookmarked) {
    containerClasses.push(CSS.bookmarked);
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: containerClasses.join(" ")
  }, /* @__PURE__ */ React.createElement("div", {
    className: CSS.title
  }, /* @__PURE__ */ React.createElement("button", {
    className: CSS.buttonMark,
    onClick: () => bookmark(spell.title, !isBookmarked)
  }, "*"), /* @__PURE__ */ React.createElement("span", null, spell.title)), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, spell.mpCost && `${spell.mpCost} MP, `, spell.ritual && "ritual, ", spell.enchantment && "enchantment, ", [spell.range, spell.duration, spell.type].filter(Boolean).join(", "))), /* @__PURE__ */ React.createElement("div", {
    className: CSS.text,
    contentEditable: true
  }, spell.description.split("/n").map((line) => /* @__PURE__ */ React.createElement("p", null, line))));
};
