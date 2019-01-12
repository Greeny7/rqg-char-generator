import {HomelandTitle, Passion, RuneElemental, RuneForm, RunePower, RuneType, Step} from './storeTypes';

export const SELECT_HOMELAND_ACTION = 'SELECT_HOMELAND_ACTION';
export const SET_HOMELAND_TITLE_ACTION = 'SET_HOMELAND_TITLE_ACTION';
export const SET_PASSIONS_ACTION = 'SET_PASSIONS_ACTION';
export const SET_STEP_ACTION = 'SET_STEP_ACTION';
export const SET_RUNE_ACTION = 'SET_RUNE_ACTION';
export const SET_PRIMARY_RUNE_TITLE_ACTION = 'SET_PRIMARY_RUNE_TITLE_ACTION';
export const SET_SECONDARY_RUNE_TITLE_ACTION = 'SET_SECONDARY_RUNE_TITLE_ACTION';
export const SET_TERTIARY_RUNE_TITLE_ACTION = 'SET_TERTIARY_RUNE_TITLE_ACTION';

export const setHomelandTitle = (homelandTitle: HomelandTitle) => ({
    type: SET_HOMELAND_TITLE_ACTION,
    payload: homelandTitle
});

export const setPassions = (passions: Passion[]) => ({
    type: SET_PASSIONS_ACTION,
    payload: passions
});

export const setStep = (step: Step) => ({
    type: SET_STEP_ACTION,
    payload: step
});

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