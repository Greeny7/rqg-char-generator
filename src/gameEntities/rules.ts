import { Step } from '../store/stepsStore/stepsStoreTypes';

export const stepsOrder = Object.freeze([
    Step.HOMELAND,
    Step.RUNES,
    Step.RUNES_DISTRIBUTION,
    Step.CHARACTERISTICS,
    Step.RUNES_AFFINITY,
]);

export const PRIMARY_RUNE_BONUS = 60;
export const SECONDARY_RUNE_BONUS = 40;
export const TERTIARY_RUNE_BONUS = 20;
export const POWER_FORM_RUNE_AFFINITY_BONUS = 25;

export const MAX_FREE_CHARACTERISTICS_POINTS = 95;
export const MAX_FREE_RUNE_POINTS = 50;

export const AFFINITY_RUNE_CHAR_BONUS_PRIMARY = 2;
export const AFFINITY_RUNE_CHAR_BONUS_SECONDARY = 1;