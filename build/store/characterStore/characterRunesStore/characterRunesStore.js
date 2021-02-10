import {
  SET_ELEMENTAL_RUNE,
  SET_POWER_RUNE,
  SET_FORM_RUNE,
  ADJUST_ELEMENTAL_RUNE,
  ADJUST_POWER_RUNE,
  ADJUST_FORM_RUNE,
  SET_RUNES
} from "./characterRunesActions.js";
export const defaultCharacterRunesState = {
  elemental: {
    air: 0,
    water: 0,
    earth: 0,
    "fire/sky": 0,
    moon: 0,
    darkness: 0
  },
  power: {
    stasis: 50,
    movement: 50,
    truth: 50,
    illusion: 50,
    fertility: 50,
    death: 50,
    harmony: 50,
    disorder: 50
  },
  form: {
    man: 50,
    beast: 50
  }
};
export const characterRunesReducer = (state = defaultCharacterRunesState, action) => {
  let runeName, value;
  switch (action.type) {
    case SET_ELEMENTAL_RUNE:
      runeName = action.payload.runeName;
      value = action.payload.value;
      return {
        ...state,
        elemental: {
          ...state.elemental,
          [action.payload.runeName]: value
        }
      };
    case SET_POWER_RUNE:
      runeName = action.payload.runeName;
      value = action.payload.value;
      return {
        ...state,
        power: {
          ...state.power,
          [action.payload.runeName]: value
        }
      };
    case SET_FORM_RUNE:
      runeName = action.payload.runeName;
      value = action.payload.value;
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.runeName]: value
        }
      };
    case ADJUST_ELEMENTAL_RUNE:
      runeName = action.payload.runeName;
      value = action.payload.value;
      return {
        ...state,
        elemental: {
          ...state.elemental,
          [runeName]: state.elemental[runeName] + value
        }
      };
    case ADJUST_POWER_RUNE:
      runeName = action.payload.runeName;
      value = action.payload.value;
      return {
        ...state,
        power: {
          ...state.power,
          [runeName]: state.power[runeName] + value
        }
      };
    case ADJUST_FORM_RUNE:
      runeName = action.payload.runeName;
      value = action.payload.value;
      return {
        ...state,
        form: {
          ...state.form,
          [runeName]: state.form[runeName] + value
        }
      };
    case SET_RUNES:
      const {elemental, power, form} = action.payload;
      return {
        ...state,
        elemental: {
          ...state.elemental,
          ...elemental
        },
        power: {
          ...state.power,
          ...power
        },
        form: {
          ...state.form,
          ...form
        }
      };
    default:
      return state;
  }
};
