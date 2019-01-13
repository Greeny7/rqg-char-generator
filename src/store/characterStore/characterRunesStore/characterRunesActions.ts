import {RuneElemental, RuneForm, RunePower, RuneType} from "../../../gameEntities/gameEntitiesTypes";

export const SET_RUNE_ACTION = 'SET_RUNE_ACTION';
export const SET_PRIMARY_RUNE_TITLE_ACTION = 'SET_PRIMARY_RUNE_TITLE_ACTION';
export const SET_SECONDARY_RUNE_TITLE_ACTION = 'SET_SECONDARY_RUNE_TITLE_ACTION';
export const SET_TERTIARY_RUNE_TITLE_ACTION = 'SET_TERTIARY_RUNE_TITLE_ACTION';

export const setRune = (
    runeType: RuneType,
    runeName: RuneElemental | RuneForm | RunePower,
    value: number
) => ({
    type: SET_RUNE_ACTION,
    payload: {
        runeType,
        runeName,
        value
    }
});

export const setPrimaryRuneTitle = (runeName: RuneElemental) => ({
    type: SET_PRIMARY_RUNE_TITLE_ACTION,
    payload: runeName,
});

export const setSecondaryRuneTitle = (runeName: RuneElemental) => ({
    type: SET_SECONDARY_RUNE_TITLE_ACTION,
    payload: runeName,
});

export const setTertiaryRuneTitle = (runeName: RuneElemental) => ({
    type: SET_TERTIARY_RUNE_TITLE_ACTION,
    payload: runeName,
});