import {RuneForm, RuneFormTitle, RuneType} from "../gameEntitiesTypes";

export const runeBeast: RuneForm = {
    type: RuneType.FORM,
    title: RuneFormTitle.BEAST,
    description: '',
    oppositeRune: RuneFormTitle.MAN
};

export const runeMan: RuneForm = {
    type: RuneType.FORM,
    title: RuneFormTitle.MAN,
    description: '',
    oppositeRune: RuneFormTitle.BEAST
};