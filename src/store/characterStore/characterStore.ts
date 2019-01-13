import {characterRunesReducer, defaultCharacterRunesState} from "./characterRunesStore/characterRunesStore";
import {CharacterStore} from "./characterStoreTypes";
import {combineReducers} from "redux";
import {SET_HOMELAND_TITLE_ACTION, SET_PASSIONS_ACTION} from "./characterActions";
import {
    SET_PRIMARY_RUNE_TITLE_ACTION, SET_RUNE_ACTION,
    SET_SECONDARY_RUNE_TITLE_ACTION, SET_TERTIARY_RUNE_TITLE_ACTION
} from "./characterRunesStore/characterRunesActions";

export const defaultCharacterState = {
    name: null,
    homeland: null,
    passions: [],
    cult: null,
    runes: defaultCharacterRunesState
};

export const characterReducer = (state = defaultCharacterState, action): CharacterStore => {
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

        case SET_PRIMARY_RUNE_TITLE_ACTION:
        case SET_SECONDARY_RUNE_TITLE_ACTION:
        case SET_TERTIARY_RUNE_TITLE_ACTION:
        case SET_RUNE_ACTION:
            return {
                ...state,
                runes: characterRunesReducer(state.runes, action)
            };
        default:
            return state;
    }
}