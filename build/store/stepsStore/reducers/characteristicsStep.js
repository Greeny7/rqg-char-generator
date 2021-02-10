import {
  CHOOSE_PRIMARY_RUNE_BONUS_CHAR,
  CHOOSE_SECONDARY_RUNE_BONUS_CHAR,
  DECREMENT_FREE_CHARACTERISTICS_POINTS,
  INCREMENT_FREE_CHARACTERISTICS_POINTS,
  REMOVE_PRIMARY_RUNE_BONUS_CHAR,
  REMOVE_SECONDARY_RUNE_BONUS_CHAR,
  RESET_INITIAL_CHARACTERISTICS,
  SET_FREE_CHARACTERISTICS_POINTS,
  SET_INITIAL_CHARACTERISTICS,
  SET_PRIMARY_RUNE,
  SET_SECONDARY_RUNE
} from "../stepsActions.js";
import {Characteristics} from "../../../gameEntities/gameEntitiesTypes.js";
import {MAX_FREE_CHARACTERISTICS_POINTS} from "../../../gameEntities/rules.js";
import {combineReducers} from "../../../_snowpack/pkg/redux.js";
const nullCharacteristics = {
  [Characteristics.STR]: null,
  [Characteristics.SIZ]: null,
  [Characteristics.DEX]: null,
  [Characteristics.CON]: null,
  [Characteristics.INT]: null,
  [Characteristics.CHA]: null,
  [Characteristics.POW]: null
};
export const defaultCharacteristicsStepStore = {
  elementalRunesAffinity: [null, null],
  initialCharacteristics: nullCharacteristics,
  freePoints: 0,
  mode: null,
  runesCharacteristicsBonus: []
};
const freePoints = (state = 0, action) => {
  switch (action.type) {
    case DECREMENT_FREE_CHARACTERISTICS_POINTS:
      return state > 0 ? state - 1 : 0;
    case INCREMENT_FREE_CHARACTERISTICS_POINTS:
      return state < MAX_FREE_CHARACTERISTICS_POINTS ? state + 1 : MAX_FREE_CHARACTERISTICS_POINTS;
    case SET_FREE_CHARACTERISTICS_POINTS:
      return action.payload;
    default:
      return state;
  }
};
const initialCharacteristics = (state = nullCharacteristics, action) => {
  switch (action.type) {
    case SET_INITIAL_CHARACTERISTICS:
      return {
        ...state,
        ...action.payload
      };
    case RESET_INITIAL_CHARACTERISTICS:
      return {...nullCharacteristics};
    default:
      return state;
  }
};
const elementalRunesAffinity = (state = [], action) => {
  let newElementalRunesAffinity;
  switch (action.type) {
    case SET_PRIMARY_RUNE:
      newElementalRunesAffinity = [...state];
      if (newElementalRunesAffinity[1] === action.payload) {
        newElementalRunesAffinity[1] = newElementalRunesAffinity[0];
      }
      newElementalRunesAffinity[0] = action.payload;
      return newElementalRunesAffinity;
    case SET_SECONDARY_RUNE:
      newElementalRunesAffinity = [...state];
      if (newElementalRunesAffinity[0] === action.payload) {
        newElementalRunesAffinity[0] = newElementalRunesAffinity[1];
      }
      newElementalRunesAffinity[1] = action.payload;
      return newElementalRunesAffinity;
    default:
      return state;
  }
};
const runesCharacteristicsBonus = (state = [], action) => {
  switch (action.type) {
    case CHOOSE_PRIMARY_RUNE_BONUS_CHAR:
      return [action.payload, state[1]];
    case CHOOSE_SECONDARY_RUNE_BONUS_CHAR:
      return [state[0], action.payload];
    case REMOVE_PRIMARY_RUNE_BONUS_CHAR:
      return [null, state[1]];
    case REMOVE_SECONDARY_RUNE_BONUS_CHAR:
      return [state[0], null];
    default:
      return state;
  }
};
export const characteristicsStep = combineReducers({
  freePoints,
  initialCharacteristics,
  elementalRunesAffinity,
  mode: () => null,
  runesCharacteristicsBonus
});
