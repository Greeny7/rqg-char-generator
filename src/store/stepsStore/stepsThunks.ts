import {GlobalState} from "../storeTypes";
import {
    addPowerOrFromRunesAffinity,
    choosePrimaryRuneBonusChar,
    chooseSecondaryRuneBonusChar,
    removePrimaryRuneBonusChar,
    removeSecondaryRuneBonusChar,
    setInitialCharacteristics,
    setInitialRunes, setMainRuneTitle,
} from './stepsActions';
import {
    setAndBalanceFormRune,
    setAndBalancePowerRune
} from "../characterStore/characterRunesStore/characterRunesThunks";
import {
    Characteristics,
    RuneElementalTitle,
    RuneFormTitle,
    RunePowerTitle
} from '../../gameEntities/gameEntitiesTypes';
import {adjustElementalRune} from "../characterStore/characterRunesStore/characterRunesActions";
import {
    MAIN_RUNE_BONUSES,
    POWER_FORM_RUNE_AFFINITY_BONUS,
    RuneImportancy,
} from '../../gameEntities/rules';
import { CharacterRunes } from '../characterStore/characterRunesStore/characterRunesStoreTypes';
import { CharacteristicsStore } from '../characterStore/characterStoreTypes';

const getCharacterRunes = (state: GlobalState): CharacterRunes => state.character.runes;
const getCharacterCharacteristics = (state: GlobalState): CharacteristicsStore => state.character.characteristics;
const getMainCharacterRunes = (state: GlobalState): RuneElementalTitle[] => state.steps.runesStep.elementalRunesAffinity;

export const saveInitialRuneValues = () => (dispatch, getState: () => GlobalState) => {
    const {elemental, form, power} = getCharacterRunes(getState());
    dispatch(setInitialRunes(elemental, power, form));
};

export const saveInitialCharacteristicsValues = () => (dispatch, getState: () => GlobalState) => {
    const characteristics = getCharacterCharacteristics(getState());
    dispatch(setInitialCharacteristics(characteristics));
};

// export function selectPrimaryElementalRune(runeName: RuneElementalTitle) {
//     return function(dispatch, getState: () => GlobalState) {
//         const state = getState();
//
//         const oldPrimaryRune = state.steps.runesStep.elementalRunesAffinity[0];
//         if (runeName && oldPrimaryRune === runeName) {
//             dispatch(adjustElementalRune(oldPrimaryRune, -PRIMARY_RUNE_BONUS));
//             dispatch(setPrimaryRuneTitle(null));
//             return;
//         }
//
//         if (oldPrimaryRune) {
//             dispatch(adjustElementalRune(oldPrimaryRune, -PRIMARY_RUNE_BONUS));
//         }
//
//         if (runeName) {
//             dispatch(adjustElementalRune(runeName, PRIMARY_RUNE_BONUS));
//         }
//
//         dispatch(setPrimaryRuneTitle(runeName));
//     }
// }
//
// export function selectSecondaryElementalRune(runeName: RuneElementalTitle) {
//     return function(dispatch, getState: () => GlobalState) {
//         const state = getState();
//
//         const oldSecondaryRune = state.steps.runesStep.elementalRunesAffinity[1];
//         if (runeName && oldSecondaryRune === runeName) {
//             dispatch(adjustElementalRune(oldSecondaryRune, -SECONDARY_RUNE_BONUS));
//             dispatch(setSecondaryRuneTitle(null));
//             return;
//         }
//
//         if (oldSecondaryRune) {
//             dispatch(adjustElementalRune(oldSecondaryRune, -SECONDARY_RUNE_BONUS));
//         }
//
//         if (runeName) {
//             dispatch(adjustElementalRune(runeName, SECONDARY_RUNE_BONUS));
//         }
//         dispatch(setSecondaryRuneTitle(runeName));
//     }
// }
//
// export function selectTertiaryElementalRune(runeName: RuneElementalTitle) {
//     return function(dispatch, getState: () => GlobalState) {
//         const state = getState();
//
//         const oldTertiaryRune = state.steps.runesStep.elementalRunesAffinity[2];
//         if (runeName && oldTertiaryRune === runeName) {
//             dispatch(adjustElementalRune(oldTertiaryRune, -TERTIARY_RUNE_BONUS));
//             dispatch(setTertiaryRuneTitle(null));
//             return;
//         }
//
//         if (oldTertiaryRune) {
//             dispatch(adjustElementalRune(oldTertiaryRune, -TERTIARY_RUNE_BONUS));
//         }
//
//         if (runeName) {
//             dispatch(adjustElementalRune(runeName, TERTIARY_RUNE_BONUS));
//         }
//         dispatch(setTertiaryRuneTitle(runeName));
//     }
// }

export function selectMainElementalRune(newRune: RuneElementalTitle, runeImportancy: RuneImportancy) {
    return function(dispatch, getState: () => GlobalState) {
        const oldRune = getMainCharacterRunes(getState())[runeImportancy];

        if (newRune && newRune === oldRune) {
            return;
        }

        const bonus = MAIN_RUNE_BONUSES[runeImportancy];

        if (oldRune) {
            dispatch(adjustElementalRune(oldRune, -bonus));
        }

        if (newRune) {
            dispatch(adjustElementalRune(newRune, bonus));
        }

        dispatch(setMainRuneTitle(newRune, runeImportancy));
    }
}

export function togglePowerRuneAffinity(runeTitle: RunePowerTitle) {
    return function(dispatch, getState: () => GlobalState) {
        const affinitiesList = getState().steps.runesStep.formAndPowerRunesAffinities;

        if (affinitiesList.includes(runeTitle)) {
            const oldValue = getState().character.runes.power[runeTitle];
            affinitiesList.splice(affinitiesList.indexOf(runeTitle), 1);

            dispatch(setAndBalancePowerRune(runeTitle, oldValue - POWER_FORM_RUNE_AFFINITY_BONUS));
            dispatch(addPowerOrFromRunesAffinity([...affinitiesList]));
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
    }
}

export function selectPrimaryRuneBonusChar(char: Characteristics) {
    return function(dispatch, getState: () => GlobalState) {
        const state = getState();
        const currentPrimaryRuneBonusChar = state.steps.characteristicsStep.runesCharacteristicsBonus[0];

        if (char === currentPrimaryRuneBonusChar) {
            return;
        }

        if (!char && currentPrimaryRuneBonusChar) {
            dispatch(removePrimaryRuneBonusChar(currentPrimaryRuneBonusChar));
        } else if (char && !currentPrimaryRuneBonusChar) {
            dispatch(choosePrimaryRuneBonusChar(char));
        } else if (char && currentPrimaryRuneBonusChar ) {
            dispatch(removePrimaryRuneBonusChar(currentPrimaryRuneBonusChar));
            dispatch(choosePrimaryRuneBonusChar(char));
        }
    }
}

export function selectSecondaryRuneBonusChar(char: Characteristics) {
    return function(dispatch, getState: () => GlobalState) {
        const state = getState();
        const currentSecondaryRuneBonusChar = state.steps.characteristicsStep.runesCharacteristicsBonus[1];

        if (char === currentSecondaryRuneBonusChar) {
            return;
        }

        if (!char && currentSecondaryRuneBonusChar) {
            dispatch(removeSecondaryRuneBonusChar(currentSecondaryRuneBonusChar));
        } else if (char && !currentSecondaryRuneBonusChar) {
            dispatch(chooseSecondaryRuneBonusChar(char));
        } else if (char && currentSecondaryRuneBonusChar ) {
            dispatch(removeSecondaryRuneBonusChar(currentSecondaryRuneBonusChar));
            dispatch(chooseSecondaryRuneBonusChar(char));
        }
    }
}