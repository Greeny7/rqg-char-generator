import {RuneForm, RuneFormTitle} from "../gameEntitiesTypes";

export const runeBeast: RuneForm = {
    title: RuneFormTitle.BEAST,
    description: '',
    oppositeRune: RuneFormTitle.MAN
};

export const runeMan: RuneForm = {
    title: RuneFormTitle.MAN,
    description: '',
    oppositeRune: RuneFormTitle.BEAST
};