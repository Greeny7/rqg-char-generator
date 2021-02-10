import {
  addPowerOrFromRunesAffinity,
  choosePrimaryRuneBonusChar,
  chooseSecondaryRuneBonusChar,
  removePrimaryRuneBonusChar,
  removeSecondaryRuneBonusChar,
  setInitialCharacteristics,
  setInitialRunes,
  setMainRuneTitle
} from "./stepsActions.js";
import {
  setAndBalanceFormRune,
  setAndBalancePowerRune
} from "../characterStore/characterRunesStore/characterRunesThunks.js";
import {adjustElementalRune} from "../characterStore/characterRunesStore/characterRunesActions.js";
import {
  MAIN_RUNE_BONUSES,
  POWER_FORM_RUNE_AFFINITY_BONUS
} from "../../gameEntities/rules.js";
const getCharacterRunes = (state) => state.character.runes;
const getCharacterCharacteristics = (state) => state.character.characteristics;
const getMainCharacterRunes = (state) => state.steps.runesStep.elementalRunesAffinity;
export const saveInitialRuneValues = () => (dispatch, getState) => {
  const {elemental, form, power} = getCharacterRunes(getState());
  dispatch(setInitialRunes(elemental, power, form));
};
export const saveInitialCharacteristicsValues = () => (dispatch, getState) => {
  const characteristics = getCharacterCharacteristics(getState());
  dispatch(setInitialCharacteristics(characteristics));
};
export function selectMainElementalRune(newRune, runeImportancy) {
  return function(dispatch, getState) {
    const oldRune = getMainCharacterRunes(getState())[runeImportancy];
    if (newRune && newRune === oldRune) {
      return;
    }
    const bonus = MAIN_RUNE_BONUSES[runeImportancy];
    if (oldRune) {
      dispatch(adjustElementalRune(oldRune, -bonus));
    }
    if (newRune) {
      dispatch(adjustElementalRune(newRune, bonus));
    }
    dispatch(setMainRuneTitle(newRune, runeImportancy));
  };
}
export function togglePowerRuneAffinity(runeTitle) {
  return function(dispatch, getState) {
    const affinitiesList = getState().steps.runesStep.formAndPowerRunesAffinities;
    if (affinitiesList.includes(runeTitle)) {
      const oldValue2 = getState().character.runes.power[runeTitle];
      affinitiesList.splice(affinitiesList.indexOf(runeTitle), 1);
      dispatch(setAndBalancePowerRune(runeTitle, oldValue2 - POWER_FORM_RUNE_AFFINITY_BONUS));
      dispatch(addPowerOrFromRunesAffinity([...affinitiesList]));
      return;
    }
    if (affinitiesList.length >= 2) {
      return;
    }
    const oldValue = getState().character.runes.power[runeTitle];
    affinitiesList.push(runeTitle);
    dispatch(setAndBalancePowerRune(runeTitle, oldValue + POWER_FORM_RUNE_AFFINITY_BONUS));
    dispatch(addPowerOrFromRunesAffinity([...affinitiesList]));
  };
}
export function toggleFormRuneAffinity(runeTitle) {
  return function(dispatch, getState) {
    const affinitiesList = getState().steps.runesStep.formAndPowerRunesAffinities;
    if (affinitiesList.includes(runeTitle)) {
      const oldValue = getState().character.runes.form[runeTitle];
      affinitiesList.splice(affinitiesList.indexOf(runeTitle), 1);
      dispatch(setAndBalanceFormRune(runeTitle, oldValue - POWER_FORM_RUNE_AFFINITY_BONUS));
      dispatch(addPowerOrFromRunesAffinity([...affinitiesList]));
      return;
    }
    if (affinitiesList.length >= 2) {
      return;
    }
  };
}
export function selectPrimaryRuneBonusChar(char) {
  return function(dispatch, getState) {
    const state = getState();
    const currentPrimaryRuneBonusChar = state.steps.characteristicsStep.runesCharacteristicsBonus[0];
    if (char === currentPrimaryRuneBonusChar) {
      return;
    }
    if (!char && currentPrimaryRuneBonusChar) {
      dispatch(removePrimaryRuneBonusChar(currentPrimaryRuneBonusChar));
    } else if (char && !currentPrimaryRuneBonusChar) {
      dispatch(choosePrimaryRuneBonusChar(char));
    } else if (char && currentPrimaryRuneBonusChar) {
      dispatch(removePrimaryRuneBonusChar(currentPrimaryRuneBonusChar));
      dispatch(choosePrimaryRuneBonusChar(char));
    }
  };
}
export function selectSecondaryRuneBonusChar(char) {
  return function(dispatch, getState) {
    const state = getState();
    const currentSecondaryRuneBonusChar = state.steps.characteristicsStep.runesCharacteristicsBonus[1];
    if (char === currentSecondaryRuneBonusChar) {
      return;
    }
    if (!char && currentSecondaryRuneBonusChar) {
      dispatch(removeSecondaryRuneBonusChar(currentSecondaryRuneBonusChar));
    } else if (char && !currentSecondaryRuneBonusChar) {
      dispatch(chooseSecondaryRuneBonusChar(char));
    } else if (char && currentSecondaryRuneBonusChar) {
      dispatch(removeSecondaryRuneBonusChar(currentSecondaryRuneBonusChar));
      dispatch(chooseSecondaryRuneBonusChar(char));
    }
  };
}
