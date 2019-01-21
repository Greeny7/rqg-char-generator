import {Characteristics, HomelandTitle, Passion} from "../../gameEntities/gameEntitiesTypes";
import {CharacteristicsStore} from "./characterStoreTypes";

export const SET_HOMELAND_TITLE_ACTION = 'SET_HOMELAND_TITLE_ACTION';
export const SET_PASSIONS_ACTION = 'SET_PASSIONS_ACTION';
export const SET_CHARACTERISTICS_ACTION = 'SET_CHARACTERISTICS_ACTION';
export const ADJUST_CHARACTERISTICS_ACTION = 'ADJUST_CHARACTERISTICS_ACTION';

export const setHomelandTitle = (homelandTitle: HomelandTitle) => ({
    type: SET_HOMELAND_TITLE_ACTION,
    payload: homelandTitle
});

export const setPassions = (passions: Passion[]) => ({
    type: SET_PASSIONS_ACTION,
    payload: passions
});

export const setCharacteristics = (characteristicsMap: CharacteristicsStore) => ({
    type: SET_CHARACTERISTICS_ACTION,
    payload: characteristicsMap
});

export const adjustCharacteristics = (characteristicsMap: CharacteristicsStore) => ({
    type: ADJUST_CHARACTERISTICS_ACTION,
    payload: characteristicsMap
});