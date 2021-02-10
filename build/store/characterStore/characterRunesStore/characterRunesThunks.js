import {getRunesList} from "../../../gameEntities/gameEntities.js";
import {setFormRune, setPowerRune} from "./characterRunesActions.js";
export function setAndBalancePowerRune(runeTitle, value) {
  return function(dispatch, getState) {
    const runes = getRunesList();
    const rune = [...runes.power].find((r) => r.title === runeTitle);
    const oppositeRuneTitle = rune.oppositeRune;
    dispatch(setPowerRune(runeTitle, value));
    dispatch(setPowerRune(oppositeRuneTitle, 100 - value));
  };
}
export function setAndBalanceFormRune(runeTitle, value) {
  return function(dispatch, getState) {
    const runes = getRunesList();
    const rune = [...runes.form].find((r) => r.title === runeTitle);
    const oppositeRuneTitle = rune.oppositeRune;
    dispatch(setFormRune(runeTitle, value));
    dispatch(setFormRune(oppositeRuneTitle, 100 - value));
  };
}
