import { Step } from '../store/stepsStore/stepsStoreTypes';

export const stepsOrder = Object.freeze([
    Step.HOMELAND,
    Step.RUNES,
    Step.RUNES_DISTRIBUTION,
    Step.CHARACTERISTICS,
]);

export const MAX_FREE_CHARACTERISTICS_POINTS = 95;
export const MAX_FREE_RUNE_POINTS = 50;