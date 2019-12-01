import {
    CHOOSE_PRIMARY_RUNE_BONUS_CHAR,
    CHOOSE_SECONDARY_RUNE_BONUS_CHAR,
    DECREMENT_FREE_CHARACTERISTICS_POINTS,
    INCREMENT_FREE_CHARACTERISTICS_POINTS,
    REMOVE_PRIMARY_RUNE_BONUS_CHAR, REMOVE_SECONDARY_RUNE_BONUS_CHAR,
    RESET_INITIAL_CHARACTERISTICS,
    SET_FREE_CHARACTERISTICS_POINTS,
    SET_INITIAL_CHARACTERISTICS,
    SET_PRIMARY_RUNE,
    SET_SECONDARY_RUNE
} from '../stepsActions';
import { CharacteristicsMode } from '../stepsStoreTypes';
import { CharacteristicsStore } from '../../characterStore/characterStoreTypes';
import { Characteristics, RuneElementalTitle } from '../../../gameEntities/gameEntitiesTypes';
import { MAX_FREE_CHARACTERISTICS_POINTS } from '../../../gameEntities/rules';
import { combineReducers } from 'redux';

export interface CharacteristicsStepStore {
    initialCharacteristics: CharacteristicsStore,
    freePoints: number,
    mode: CharacteristicsMode,
    elementalRunesAffinity: RuneElementalTitle[];
    runesCharacteristicsBonus: Characteristics[]
}

const nullCharacteristics = {
    [Characteristics.STR]: null,
    [Characteristics.SIZ]: null,
    [Characteristics.DEX]: null,
    [Characteristics.CON]: null,
    [Characteristics.INT]: null,
    [Characteristics.CHA]: null,
    [Characteristics.POW]: null,
};

export const defaultCharacteristicsStepStore = {
    elementalRunesAffinity: [null, null],
    initialCharacteristics: nullCharacteristics,
    freePoints: 0,
    mode: null,
    runesCharacteristicsBonus: []
};

const freePoints = (state: number = 0, action): number => {
    switch (action.type) {
        case DECREMENT_FREE_CHARACTERISTICS_POINTS:
            return state > 0
                ? state - 1
                : 0;

        case INCREMENT_FREE_CHARACTERISTICS_POINTS:
            return state < MAX_FREE_CHARACTERISTICS_POINTS
                ? state + 1
                : MAX_FREE_CHARACTERISTICS_POINTS;

        case SET_FREE_CHARACTERISTICS_POINTS:
            return action.payload;

        default:
            return state;
    }
};

const initialCharacteristics = (state: CharacteristicsStore = nullCharacteristics, action): CharacteristicsStore => {
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

const elementalRunesAffinity = (state: RuneElementalTitle[] = [], action): RuneElementalTitle[] => {
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

const runesCharacteristicsBonus = (state: Characteristics[] = [], action):Characteristics[]  => {
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

type CharacteristicsStep = (state: CharacteristicsStepStore, action) => CharacteristicsStepStore

export const characteristicsStep: CharacteristicsStep = combineReducers({
    freePoints,
    initialCharacteristics,
    elementalRunesAffinity,
    mode: () => null,
    runesCharacteristicsBonus,
});