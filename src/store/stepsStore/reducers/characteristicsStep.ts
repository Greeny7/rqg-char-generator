import {
    DECREMENT_FREE_CHARACTERISTICS_POINTS,
    INCREMENT_FREE_CHARACTERISTICS_POINTS, RESET_INITIAL_CHARACTERISTICS, SET_FREE_CHARACTERISTICS_POINTS,
    SET_INITIAL_CHARACTERISTICS, SET_PRIMARY_RUNE, SET_SECONDARY_RUNE
} from '../stepsActions';
import { CharacteristicsMode } from '../stepsStoreTypes';
import { CharacteristicsStore } from '../../characterStore/characterStoreTypes';
import { Characteristics, RuneElementalTitle } from '../../../gameEntities/gameEntitiesTypes';
import { MAX_FREE_CHARACTERISTICS_POINTS } from '../../../gameEntities/rules';

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

export const characteristicsStep = (state: CharacteristicsStepStore = defaultCharacteristicsStepStore, action): CharacteristicsStepStore => {
    let newElementalRunesAffinity;

    switch (action.type) {
        case DECREMENT_FREE_CHARACTERISTICS_POINTS:
            return {
                ...state,
                freePoints: state.freePoints > 0
                    ? state.freePoints - 1
                    : 0
            };

        case INCREMENT_FREE_CHARACTERISTICS_POINTS:
            return {
                ...state,
                freePoints: state.freePoints < MAX_FREE_CHARACTERISTICS_POINTS
                    ? state.freePoints + 1
                    : MAX_FREE_CHARACTERISTICS_POINTS
            };
        case SET_INITIAL_CHARACTERISTICS:

            return {
                ...state,
                initialCharacteristics: {
                    ...action.payload
                }
            };
        case RESET_INITIAL_CHARACTERISTICS:

            return {
                ...state,
                initialCharacteristics: {
                    ...nullCharacteristics
                }
            };

        case SET_FREE_CHARACTERISTICS_POINTS:
            return {
                ...state,
                freePoints: action.payload
            };
        case SET_PRIMARY_RUNE:
            newElementalRunesAffinity = state.elementalRunesAffinity;
            if (newElementalRunesAffinity[1] === action.payload) {
                newElementalRunesAffinity[1] = newElementalRunesAffinity[0];
            }
            newElementalRunesAffinity[0] = action.payload;
            return {
                ...state,
                elementalRunesAffinity: [...newElementalRunesAffinity]
            };

        case SET_SECONDARY_RUNE:
            newElementalRunesAffinity = state.elementalRunesAffinity;
            if (newElementalRunesAffinity[0] === action.payload) {
                newElementalRunesAffinity[0] = newElementalRunesAffinity[1];
            }
            newElementalRunesAffinity[1] = action.payload;
            return {
                ...state,
                elementalRunesAffinity: [...newElementalRunesAffinity]
            };

        default:
            return state;
    }
};