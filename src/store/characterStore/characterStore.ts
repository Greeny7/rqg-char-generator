import {characterRunesReducer, defaultCharacterRunesState} from "./characterRunesStore/characterRunesStore";
import {CharacterStore} from "./characterStoreTypes";
import {combineReducers} from "redux";
import {
    ADJUST_CHARACTERISTICS_ACTION, SET_CHARACTERISTICS_ACTION, SET_HOMELAND_TITLE_ACTION,
    SET_PASSIONS_ACTION
} from "./characterActions";
import {
    SET_PRIMARY_RUNE_TITLE_ACTION, SET_ELEMENTAL_RUNE_ACTION,
    SET_SECONDARY_RUNE_TITLE_ACTION, SET_TERTIARY_RUNE_TITLE_ACTION, SET_POWER_RUNE_ACTION, SET_FORM_RUNE_ACTION,
    SET_POWER_OR_FORM_RUNE_AFFINITY_TITLES_ACTION, ADJUST_ELEMENTAL_RUNE_ACTION, ADJUST_FORM_RUNE_ACTION,
    ADJUST_POWER_RUNE_ACTION
} from "./characterRunesStore/characterRunesActions";
import {Characteristics, HomelandTitle} from "../../gameEntities/gameEntitiesTypes";
import {
    CHOOSE_PRIMARY_RUNE_BONUS_CHAR,
    CHOOSE_SECONDARY_RUNE_BONUS_CHAR,
    REMOVE_PRIMARY_RUNE_BONUS_CHAR, REMOVE_SECONDARY_RUNE_BONUS_CHAR
} from '../stepsStore/stepsActions';
import { AFFINITY_RUNE_CHAR_BONUS_PRIMARY, AFFINITY_RUNE_CHAR_BONUS_SECONDARY } from '../../gameEntities/rules';

export const defaultCharacterState: CharacterStore = {
    name: null,
    homeland: null,
    passions: [],
    cult: null,
    runes: defaultCharacterRunesState,
    characteristics: {
        [Characteristics.STR]: 0,
        [Characteristics.SIZ]: 0,
        [Characteristics.DEX]: 0,
        [Characteristics.CON]: 0,
        [Characteristics.INT]: 0,
        [Characteristics.CHA]: 0,
        [Characteristics.POW]: 0,
    }
};

export const characterReducer = (state = defaultCharacterState, action): CharacterStore => {
    let newCharacteristics;
    switch (action.type) {
        case SET_PASSIONS_ACTION:
            return {
                ...state,
                passions: action.payload
            };

        case SET_HOMELAND_TITLE_ACTION:
            return {
                ...state,
                homeland: action.payload
            };

        case SET_CHARACTERISTICS_ACTION:
            return {
                ...state,
                characteristics: {
                    ...state.characteristics,
                    ...action.payload
                }
            };

        case ADJUST_CHARACTERISTICS_ACTION:
            newCharacteristics = {
                ...state.characteristics
            };
            Object.keys(action.payload)
                .forEach(charKey => newCharacteristics[charKey] += action.payload[charKey]);
            return {
                ...state,
                characteristics: {
                    ...newCharacteristics
                }
            };

        case CHOOSE_PRIMARY_RUNE_BONUS_CHAR:
            return {
                ...state,
                characteristics: {
                    ...state.characteristics,
                    [action.payload]: state.characteristics[action.payload] + AFFINITY_RUNE_CHAR_BONUS_PRIMARY
                }
            };

        case CHOOSE_SECONDARY_RUNE_BONUS_CHAR:
            return {
                ...state,
                characteristics: {
                    ...state.characteristics,
                    [action.payload]: state.characteristics[action.payload] + AFFINITY_RUNE_CHAR_BONUS_SECONDARY
                }
            };

        case REMOVE_PRIMARY_RUNE_BONUS_CHAR:
            return {
                ...state,
                characteristics: {
                    ...state.characteristics,
                    [action.payload]: state.characteristics[action.payload] - AFFINITY_RUNE_CHAR_BONUS_PRIMARY
                }
            };

        case REMOVE_SECONDARY_RUNE_BONUS_CHAR:
            return {
                ...state,
                characteristics: {
                    ...state.characteristics,
                    [action.payload]: state.characteristics[action.payload] - AFFINITY_RUNE_CHAR_BONUS_SECONDARY
                }
            };

        default:
            return {
                ...state,
                runes: characterRunesReducer(state.runes, action)
            };
    }
}