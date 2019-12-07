import { Step } from '../store/stepsStore/stepsStoreTypes';
import { Characteristics, HitLocation } from './gameEntitiesTypes';
import { CharacteristicsStore } from '../store/characterStore/characterStoreTypes';

export const stepsOrder = Object.freeze([
    Step.HOMELAND,
    Step.RUNES,
    Step.RUNES_DISTRIBUTION,
    Step.CHARACTERISTICS,
    Step.RUNES_AFFINITY,
]);

const PRIMARY_RUNE_BONUS = 60;
const SECONDARY_RUNE_BONUS = 40;
const TERTIARY_RUNE_BONUS = 20;
export const MAIN_RUNE_BONUSES = Object.freeze([
    PRIMARY_RUNE_BONUS,
    SECONDARY_RUNE_BONUS,
    TERTIARY_RUNE_BONUS
]);

export type RuneImportancy = 0 | 1 | 2;

export const POWER_FORM_RUNE_AFFINITY_BONUS = 25;

export const MAX_FREE_CHARACTERISTICS_POINTS = 95;
export const MAX_FREE_RUNE_POINTS = 50;

export const AFFINITY_RUNE_CHAR_BONUS_PRIMARY = 2;
export const AFFINITY_RUNE_CHAR_BONUS_SECONDARY = 1;

export const calculateHpModifier = (characteristics: CharacteristicsStore): number => {
    const {SIZ, POW, CON} = characteristics;
    const sizeModifier =
        SIZ <= 4
        ? -2
        : -2 + Math.ceil((SIZ - 4) / 4);

    const powerModifier =
        POW <= 4
        ? -1
        : POW <= 16
        ? 0
        : Math.ceil((POW - 16) / 4);

    return CON + sizeModifier + powerModifier;
};

export const calculateMaxLocationsHp = (totalHp: number) => ({
    [HitLocation.LEG]:      totalHp <= 6 ? 2 : 2 + Math.ceil((totalHp - 6) / 3),
    [HitLocation.ABDOMEN]:  totalHp <= 6 ? 2 : 2 + Math.ceil((totalHp - 6) / 3),
    [HitLocation.CHEST]:    totalHp <= 6 ? 3 : 3 + Math.ceil((totalHp - 6) / 3),
    [HitLocation.ARM]:      totalHp <= 6 ? 1 : 1 + Math.ceil((totalHp - 6) / 3),
    [HitLocation.HEAD]:     totalHp <= 6 ? 2 : 2 + Math.ceil((totalHp - 6) / 3)
});

export const calculateHealingRate = (con: number) => Math.max(1, Math.ceil((con) / 6));