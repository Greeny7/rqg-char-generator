import {GlobalState} from "../../storeTypes";
import {
    setPrimaryRuneTitle, setElementalRune, setSecondaryRuneTitle, setTertiaryRuneTitle, setPowerRune, setFormRune,
    addPowerOrFromRunesAffinity
} from "./characterRunesActions";
import {RuneElementalTitle, RuneFormTitle, RunePowerTitle, RuneType} from "../../../gameEntities/gameEntitiesTypes";
import {getRunesList} from "../../../gameEntities/gameEntities";

// only on initial character creation; later primary, secondary and tertiary runes could be changed
export function selectPrimaryElementalRune(runeName: RuneElementalTitle) {
    return function(dispatch, getState: () => GlobalState) {
        const state = getState();

        const oldPrimaryRune = state.character.runes.elementalRunesAffinity[0];
        if (runeName && oldPrimaryRune === runeName) {
            const oldPrimaryRuneValue = state.character.runes.elemental[oldPrimaryRune];
            const newOldRuneValue = oldPrimaryRuneValue - 60;
            dispatch(setElementalRune(oldPrimaryRune, newOldRuneValue));
            dispatch(setPrimaryRuneTitle(null));
            return;
        }

        if (oldPrimaryRune) {
            const oldPrimaryRuneValue = state.character.runes.elemental[oldPrimaryRune];
            const newOldRuneValue = oldPrimaryRuneValue - 60;
            dispatch(setElementalRune(oldPrimaryRune, newOldRuneValue));
        }

        if (runeName) {
            dispatch(setElementalRune(runeName, state.character.runes.elemental[runeName] + 60));
        }

        dispatch(setPrimaryRuneTitle(runeName));
    }
}

// only on initial character creation; later primary, secondary and tertiary runes could be changed
export function selectSecondaryElementalRune(runeName: RuneElementalTitle) {
    return function(dispatch, getState: () => GlobalState) {
        const state = getState();

        const oldSecondaryRune = state.character.runes.elementalRunesAffinity[1];
        if (runeName && oldSecondaryRune === runeName) {
            const oldPrimaryRuneValue = state.character.runes.elemental[oldSecondaryRune];
            const newOldRuneValue = oldPrimaryRuneValue - 40;
            dispatch(setElementalRune(oldSecondaryRune, newOldRuneValue));
            dispatch(setSecondaryRuneTitle(null));
            return;
        }

        if (oldSecondaryRune) {
            const oldSecondaryRuneValue = state.character.runes.elemental[oldSecondaryRune];
            const newOldRuneValue = oldSecondaryRuneValue - 40;
            dispatch(setElementalRune(oldSecondaryRune, newOldRuneValue));
        }

        if (runeName) {
            dispatch(setElementalRune(runeName, state.character.runes.elemental[runeName] + 40));
        }
        dispatch(setSecondaryRuneTitle(runeName));
    }
}

// only on initial character creation; later primary, secondary and tertiary runes could be changed
export function selectTertiaryElementalRune(runeName: RuneElementalTitle) {
    return function(dispatch, getState: () => GlobalState) {
        const state = getState();

        const oldTertiaryRune = state.character.runes.elementalRunesAffinity[2];
        if (runeName && oldTertiaryRune === runeName) {
            const oldPrimaryRuneValue = state.character.runes.elemental[oldTertiaryRune];
            const newOldRuneValue = oldPrimaryRuneValue - 20;
            dispatch(setElementalRune(oldTertiaryRune, newOldRuneValue));
            dispatch(setTertiaryRuneTitle(null));
            return;
        }

        if (oldTertiaryRune) {
            const oldTertiaryRuneValue = state.character.runes.elemental[oldTertiaryRune];
            const newOldRuneValue = oldTertiaryRuneValue - 20;
            dispatch(setElementalRune(oldTertiaryRune, newOldRuneValue));
        }

        if (runeName) {
            dispatch(setElementalRune(runeName, state.character.runes.elemental[runeName] + 20));
        }
        dispatch(setTertiaryRuneTitle(runeName));
    }
}

export function togglePowerRuneAffinity(runeTitle: RunePowerTitle) {
    return function(dispatch, getState: () => GlobalState) {
        const affinitiesList = getState().character.runes.formAndPowerRunesAffinities;

        if (affinitiesList.includes(runeTitle)) {
            const oldValue = getState().character.runes.power[runeTitle];
            affinitiesList.splice(affinitiesList.indexOf(runeTitle), 1);

            dispatch(setAndBalancePowerRune(runeTitle, oldValue - 25));
            dispatch(addPowerOrFromRunesAffinity([...affinitiesList]))
            return;
        }

        if (affinitiesList.length >= 2) {
            return;
        }

        const oldValue = getState().character.runes.power[runeTitle];
        affinitiesList.push(runeTitle);
        dispatch(setAndBalancePowerRune(runeTitle, oldValue + 25));
        dispatch(addPowerOrFromRunesAffinity([...affinitiesList]))
    }
}

export function toggleFormRuneAffinity(runeTitle: RuneFormTitle) {
    return function(dispatch, getState: () => GlobalState) {
        const affinitiesList = getState().character.runes.formAndPowerRunesAffinities;

        if (affinitiesList.includes(runeTitle)) {
            const oldValue = getState().character.runes.form[runeTitle];
            affinitiesList.splice(affinitiesList.indexOf(runeTitle), 1);

            dispatch(setAndBalanceFormRune(runeTitle, oldValue - 25));
            dispatch(addPowerOrFromRunesAffinity([...affinitiesList]))
            return;
        }

        if (affinitiesList.length >= 2) {
            return;
        }

        const oldValue = getState().character.runes.form[runeTitle];
        affinitiesList.push(runeTitle);
        dispatch(setAndBalanceFormRune(runeTitle, oldValue + 25));
        dispatch(addPowerOrFromRunesAffinity([...affinitiesList]))
    }
}

export function setAndBalancePowerRune(runeTitle: RunePowerTitle, value: number) {
    return function(dispatch, getState: () => GlobalState) {
        const runes: any = getRunesList();
        const rune = [...runes.power].find(r => r.title === runeTitle);
        const oppositeRuneTitle = rune.oppositeRune;

        dispatch(setPowerRune(runeTitle, value));
        dispatch(setPowerRune(oppositeRuneTitle, 100 - value));
    }
}

export function setAndBalanceFormRune(runeTitle: RuneFormTitle, value: number) {
    return function(dispatch, getState: () => GlobalState) {
        const runes: any = getRunesList();
        const rune = [...runes.form].find(r => r.title === runeTitle);
        const oppositeRuneTitle = rune.oppositeRune;

        dispatch(setFormRune(runeTitle, value));
        dispatch(setFormRune(oppositeRuneTitle, 100 - value));
    }
}