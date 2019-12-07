import {RuneElementalTitle, RuneFormTitle, RunePowerTitle, RuneType} from "../../../gameEntities/gameEntitiesTypes";
import {ElementalRunesStore, FormRunesStore, PowerRunesStore} from "./characterRunesStoreTypes";

export const SET_ELEMENTAL_RUNE = 'SET_ELEMENTAL_RUNE';
export const SET_FORM_RUNE = 'SET_FORM_RUNE';
export const SET_POWER_RUNE = 'SET_POWER_RUNE';

export const SET_RUNES = 'SET_RUNES';

export const ADJUST_ELEMENTAL_RUNE = 'ADJUST_ELEMENTAL_RUNE';
export const ADJUST_FORM_RUNE = 'ADJUST_FORM_RUNE';
export const ADJUST_POWER_RUNE = 'ADJUST_POWER_RUNE';

export const SET_POWER_OR_FORM_RUNE_AFFINITY_TITLES = 'SET_POWER_OR_FORM_RUNE_AFFINITY_TITLES';

export const setElementalRune = (runeName: RuneElementalTitle, value: number) => ({
    type: SET_ELEMENTAL_RUNE,
    payload: {runeName, value}
});

export const setPowerRune = (runeName: RunePowerTitle, value: number) => ({
    type: SET_POWER_RUNE,
    payload: {runeName, value}
});

export const setFormRune = (runeName: RuneFormTitle, value: number) => ({
    type: SET_FORM_RUNE,
    payload: {runeName, value}
});

export const adjustElementalRune = (runeName: RuneElementalTitle, value: number) => ({
    type: ADJUST_ELEMENTAL_RUNE,
    payload: {runeName, value}
});

export const adjustPowerRune = (runeName: RunePowerTitle, value: number) => ({
    type: ADJUST_POWER_RUNE,
    payload: {runeName, value}
});

export const adjustFormRune = (runeName: RuneFormTitle, value: number) => ({
    type: ADJUST_FORM_RUNE,
    payload: {runeName, value}
});

export const setRunes = (
    elemental: ElementalRunesStore,
    power: PowerRunesStore,
    form: FormRunesStore
) => ({
    type: SET_RUNES,
    payload: {elemental, power, form},
});