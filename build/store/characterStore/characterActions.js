export const SET_HOMELAND_TITLE = "SET_HOMELAND_TITLE";
export const SET_PASSIONS = "SET_PASSIONS";
export const SET_CHARACTERISTICS = "SET_CHARACTERISTICS";
export const ADJUST_CHARACTERISTICS = "ADJUST_CHARACTERISTICS";
export const setHomelandTitle = (homelandTitle) => ({
  type: SET_HOMELAND_TITLE,
  payload: homelandTitle
});
export const setPassions = (passions) => ({
  type: SET_PASSIONS,
  payload: passions
});
export const setCharacteristics = (characteristicsMap) => ({
  type: SET_CHARACTERISTICS,
  payload: characteristicsMap
});
export const adjustCharacteristics = (characteristicsMap) => ({
  type: ADJUST_CHARACTERISTICS,
  payload: characteristicsMap
});
