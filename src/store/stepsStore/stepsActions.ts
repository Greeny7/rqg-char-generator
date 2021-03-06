import {CharacteristicsMode, Step} from "./stepsStoreTypes";
import {
    Characteristics,
    RuneElementalTitle, RuneFormTitle, RunePowerTitle,
    RuneType
} from '../../gameEntities/gameEntitiesTypes';
import {
    ElementalRunesStore, FormRunesStore,
    PowerRunesStore
} from "../characterStore/characterRunesStore/characterRunesStoreTypes";
import {CharacteristicsStore} from "../characterStore/characterStoreTypes";
import {
    SET_POWER_OR_FORM_RUNE_AFFINITY_TITLES
} from "../characterStore/characterRunesStore/characterRunesActions";
import { RuneImportancy } from '../../gameEntities/rules';

export const SET_STEP = 'SET_STEP';
export const PREV_STEP = 'PREV_STEP';
export const NEXT_STEP = 'NEXT_STEP';

export const SET_INITIAL_RUNES = 'SET_INITIAL_RUNES';
export const RESET_INITIAL_RUNES = 'RESET_INITIAL_RUNES';

export const DECREMENT_FREE_RUNE_POINTS = 'DECREMENT_FREE_RUNE_POINTS';
export const INCREMENT_FREE_RUNE_POINTS = 'INCREMENT_FREE_RUNE_POINTS';
export const SET_FREE_RUNE_POINTS = 'SET_FREE_RUNE_POINTS';

export const SET_INITIAL_CHARACTERISTICS = 'SET_INITIAL_CHARACTERISTICS';
export const RESET_INITIAL_CHARACTERISTICS = 'RESET_INITIAL_CHARACTERISTICS';
export const DECREMENT_FREE_CHARACTERISTICS_POINTS = 'DECREMENT_FREE_CHARACTERISTICS_POINTS';
export const INCREMENT_FREE_CHARACTERISTICS_POINTS = 'INCREMENT_FREE_CHARACTERISTICS_POINTS';
export const SET_FREE_CHARACTERISTICS_POINTS = 'SET_FREE_CHARACTERISTICS_POINTS';
export const SET_CHARACTERISTICS_MODE = 'SET_CHARACTERISTICS_MODE';
export const SET_PRIMARY_RUNE = 'SET_PRIMARY_RUNE';
export const SET_SECONDARY_RUNE = 'SET_SECONDARY_RUNE';

export const CHOOSE_PRIMARY_RUNE_BONUS_CHAR = 'CHOOSE_PRIMARY_RUNE_BONUS_CHAR';
export const CHOOSE_SECONDARY_RUNE_BONUS_CHAR = 'CHOOSE_SECONDARY_RUNE_BONUS_CHAR';
export const REMOVE_PRIMARY_RUNE_BONUS_CHAR = 'REMOVE_PRIMARY_RUNE_BONUS_CHAR';
export const REMOVE_SECONDARY_RUNE_BONUS_CHAR = 'REMOVE_SECONDARY_RUNE_BONUS_CHAR';

export const SET_MAIN_RUNE_TITLE = 'SET_MAIN_RUNE_TITLE';

export const setStep = (step: Step) => ({
    type: SET_STEP,
    payload: step
});

export const nextStep = () => ({type: NEXT_STEP});

export const prevStep = () => ({type: PREV_STEP});

export const setInitialRunes = (
    elemental: ElementalRunesStore,
    power: PowerRunesStore,
    form: FormRunesStore
) => ({
    type: SET_INITIAL_RUNES,
    payload: {elemental, power, form},
});

export const resetInitialRuneValues = () => ({
    type: RESET_INITIAL_RUNES,
});

export const decrementFreeRunePoints = () => ({
    type: DECREMENT_FREE_RUNE_POINTS
});

export const incrementFreeRunePoints = () => ({
    type: INCREMENT_FREE_RUNE_POINTS
});

export const setFreeRunePoints = (value: number) => ({
    type: SET_FREE_RUNE_POINTS,
    payload: value
});

export const setInitialCharacteristics = (
    characteristics: CharacteristicsStore
) => ({
    type: SET_INITIAL_CHARACTERISTICS,
    payload: characteristics,
});

export const resetInitialCharacteristics = () => ({
    type: RESET_INITIAL_CHARACTERISTICS,
});

export const decrementFreeCharacteristicsPoints = () => ({
    type: DECREMENT_FREE_CHARACTERISTICS_POINTS
});

export const incrementFreeCharacteristicsPoints = () => ({
    type: INCREMENT_FREE_CHARACTERISTICS_POINTS
});

export const setFreeCharacteristicsPoints = (value: number) => ({
    type: SET_FREE_CHARACTERISTICS_POINTS,
    payload: value
});

export const setCharacteristicsMode = (mode: CharacteristicsMode) => ({
    type: SET_CHARACTERISTICS_MODE,
    payload: mode
});

export const setMainRuneTitle = (runeName: RuneElementalTitle, runeImportancy: RuneImportancy) => ({
    type: SET_MAIN_RUNE_TITLE,
    payload: {runeName, runeImportancy}
});

export const addPowerOrFromRunesAffinity = (runeNames: (RunePowerTitle | RuneFormTitle)[]) => ({
    type: SET_POWER_OR_FORM_RUNE_AFFINITY_TITLES,
    payload: runeNames,
});

export const setPrimaryRune = (runeName: RuneElementalTitle) => ({
    type: SET_PRIMARY_RUNE,
    payload: runeName,
});

export const setSecondaryRune = (runeName: RuneElementalTitle) => ({
    type: SET_SECONDARY_RUNE,
    payload: runeName,
});

export const choosePrimaryRuneBonusChar = (char: Characteristics) => ({
    type: CHOOSE_PRIMARY_RUNE_BONUS_CHAR,
    payload: char,
});

export const chooseSecondaryRuneBonusChar = (char: Characteristics) => ({
    type: CHOOSE_SECONDARY_RUNE_BONUS_CHAR,
    payload: char,
});

export const removePrimaryRuneBonusChar = (char: Characteristics) => ({
    type: REMOVE_PRIMARY_RUNE_BONUS_CHAR,
    payload: char,
});

export const removeSecondaryRuneBonusChar = (char: Characteristics) => ({
    type: REMOVE_SECONDARY_RUNE_BONUS_CHAR,
    payload: char,
});