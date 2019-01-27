import {GlobalState} from "../storeTypes";
import {
    addPowerOrFromRunesAffinity,
    setInitialCharacteristics, setInitialRunes, setPrimaryRuneTitle, setSecondaryRuneTitle,
    setTertiaryRuneTitle
} from "./stepsActions";
import {
    setAndBalanceFormRune,
    setAndBalancePowerRune
} from "../characterStore/characterRunesStore/characterRunesThunks";
import {RuneElementalTitle, RuneFormTitle, RunePowerTitle} from "../../gameEntities/gameEntitiesTypes";
import {adjustElementalRune} from "../characterStore/characterRunesStore/characterRunesActions";


export const saveInitialRuneValues = () => (dispatch, getState: () => GlobalState) => {
    const {elemental, form, power} = getState().character.runes;
    dispatch(setInitialRunes(elemental, power, form));
};

export const saveInitialCharacteristicsValues = () => (dispatch, getState: () => GlobalState) => {
    const {characteristics} = getState().character;
    dispatch(setInitialCharacteristics(characteristics));
};

const PRIMARY_RUNE_BONUS = 60;
const SECONDARY_RUNE_BONUS = 40;
const TERTIARY_RUNE_BONUS = 20;
const POWER_FORM_RUNE_AFFINITY_BONUS = 25;

export function selectPrimaryElementalRune(runeName: RuneElementalTitle) {
    return function(dispatch, getState: () => GlobalState) {
        const state = getState();

        const oldPrimaryRune = state.steps.runesStep.elementalRunesAffinity[0];
        if (runeName && oldPrimaryRune === runeName) {
            dispatch(adjustElementalRune(oldPrimaryRune, -PRIMARY_RUNE_BONUS));
            dispatch(setPrimaryRuneTitle(null));
            return;
        }

        if (oldPrimaryRune) {
            dispatch(adjustElementalRune(oldPrimaryRune, -PRIMARY_RUNE_BONUS));
        }

        if (runeName) {
            dispatch(adjustElementalRune(runeName, PRIMARY_RUNE_BONUS));
        }

        dispatch(setPrimaryRuneTitle(runeName));
    }
}

export function selectSecondaryElementalRune(runeName: RuneElementalTitle) {
    return function(dispatch, getState: () => GlobalState) {
        const state = getState();

        const oldSecondaryRune = state.steps.runesStep.elementalRunesAffinity[1];
        if (runeName && oldSecondaryRune === runeName) {
            dispatch(adjustElementalRune(oldSecondaryRune, -SECONDARY_RUNE_BONUS));
            dispatch(setSecondaryRuneTitle(null));
            return;
        }

        if (oldSecondaryRune) {
            dispatch(adjustElementalRune(oldSecondaryRune, -SECONDARY_RUNE_BONUS));
        }

        if (runeName) {
            dispatch(adjustElementalRune(runeName, SECONDARY_RUNE_BONUS));
        }
        dispatch(setSecondaryRuneTitle(runeName));
    }
}

export function selectTertiaryElementalRune(runeName: RuneElementalTitle) {
    return function(dispatch, getState: () => GlobalState) {
        const state = getState();

        const oldTertiaryRune = state.steps.runesStep.elementalRunesAffinity[2];
        if (runeName && oldTertiaryRune === runeName) {
            dispatch(adjustElementalRune(oldTertiaryRune, -TERTIARY_RUNE_BONUS));
            dispatch(setTertiaryRuneTitle(null));
            return;
        }

        if (oldTertiaryRune) {
            dispatch(adjustElementalRune(oldTertiaryRune, -TERTIARY_RUNE_BONUS));
        }

        if (runeName) {
            dispatch(adjustElementalRune(runeName, TERTIARY_RUNE_BONUS));
        }
        dispatch(setTertiaryRuneTitle(runeName));
    }
}

export function togglePowerRuneAffinity(runeTitle: RunePowerTitle) {
    return function(dispatch, getState: () => GlobalState) {
        const affinitiesList = getState().steps.runesStep.formAndPowerRunesAffinities;

        if (affinitiesList.includes(runeTitle)) {
            const oldValue = getState().character.runes.power[runeTitle];
            affinitiesList.splice(affinitiesList.indexOf(runeTitle), 1);

            dispatch(setAndBalancePowerRune(runeTitle, oldValue - POWER_FORM_RUNE_AFFINITY_BONUS));
            dispatch(addPowerOrFromRunesAffinity([...affinitiesList]))
            return;
        }

        if (affinitiesList.length >= 2) {
            return;
        }

        const oldValue = getState().character.runes.power[runeTitle];
        affinitiesList.push(runeTitle);
        dispatch(setAndBalancePowerRune(runeTitle, oldValue + POWER_FORM_RUNE_AFFINITY_BONUS));
        dispatch(addPowerOrFromRunesAffinity([...affinitiesList]))
    }
}

export function toggleFormRuneAffinity(runeTitle: RuneFormTitle) {
    return function(dispatch, getState: () => GlobalState) {
        const affinitiesList = getState().steps.runesStep.formAndPowerRunesAffinities;

        if (affinitiesList.includes(runeTitle)) {
            const oldValue = getState().character.runes.form[runeTitle];
            affinitiesList.splice(affinitiesList.indexOf(runeTitle), 1);

            dispatch(setAndBalanceFormRune(runeTitle, oldValue - POWER_FORM_RUNE_AFFINITY_BONUS));
            dispatch(addPowerOrFromRunesAffinity([...affinitiesList]));
            return;
        }

        if (affinitiesList.length >= 2) {
            return;
        }

        const oldValue = getState().character.runes.form[runeTitle];
        affinitiesList.push(runeTitle);
        dispatch(setAndBalanceFormRune(runeTitle, oldValue + POWER_FORM_RUNE_AFFINITY_BONUS));
        dispatch(addPowerOrFromRunesAffinity([...affinitiesList]))
    }
}