import {HomelandTitle, Passion} from "../../gameEntities/gameEntitiesTypes";

export const SET_HOMELAND_TITLE_ACTION = 'SET_HOMELAND_TITLE_ACTION';
export const SET_PASSIONS_ACTION = 'SET_PASSIONS_ACTION';

export const setHomelandTitle = (homelandTitle: HomelandTitle) => ({
    type: SET_HOMELAND_TITLE_ACTION,
    payload: homelandTitle
});

export const setPassions = (passions: Passion[]) => ({
    type: SET_PASSIONS_ACTION,
    payload: passions
});