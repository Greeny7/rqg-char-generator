import {CharacteristicsMode, Step} from "./stepsStoreTypes";
import {
    RuneElementalTitle, RuneFormTitle, RunePowerTitle,
    RuneType
} from "../../gameEntities/gameEntitiesTypes";
import {
    ElementalRunesStore, FormRunesStore,
    PowerRunesStore
} from "../characterStore/characterRunesStore/characterRunesStoreTypes";
import {CharacteristicsStore} from "../characterStore/characterStoreTypes";

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
})