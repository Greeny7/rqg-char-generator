import {Step} from '../store/stepsStore/stepsStoreTypes';
import {DiceRoll, DiceType, HitLocation} from './gameEntitiesTypes';
import {CharacteristicsStore} from '../store/characterStore/characterStoreTypes';

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

export const calculateDamageBonus = (characteristics: CharacteristicsStore): DiceRoll => {
    const {SIZ, CON} = characteristics;
    const sum = SIZ + CON;
    if (sum <= 12) return {type: DiceType.D4, isNegative: true};
    if (sum <= 24) return null;
    if (sum <= 32) return {type: DiceType.D4};
    if (sum <= 40) return {type: DiceType.D6};
    return {type: DiceType.D6, quantity: 1 + Math.ceil((sum - 40) / 16)};
};

export const calculateSpiritCombatDamage = (characteristics: CharacteristicsStore): DiceRoll => {
    const {POW, CHA} = characteristics;
    const sum = POW + CHA;
    if (sum <= 12) return {type: DiceType.D3};
    if (sum <= 24) return {type: DiceType.D6};
    if (sum <= 32) return {type: DiceType.D6, fixedPart: 1};
    if (sum <= 40) return {type: DiceType.D6, fixedPart: 3};
    if (sum <= 56) return {type: DiceType.D6, quantity: 2, fixedPart: 3};

    const timesOf16 = Math.ceil((sum - 56) / 16);
    return {type: DiceType.D6, quantity: 2 + timesOf16, fixedPart: 3 + timesOf16};
};

export const calculateEncumbrancePoints = (characteristics: CharacteristicsStore): number => {
    const {STR, CON} = characteristics;
    return STR < CON
        ? STR
        : Math.round((STR + CON) / 2);
};

export const calculateDexStrikeRank = (dex: number): number => {
    if (dex <= 5) return 5;
    if (dex <= 8) return 4;
    if (dex <= 12) return 3;
    if (dex <= 15) return 2;
    if (dex <= 18) return 1;
    return 0;
};

export const calculateSizStrikeRank = (siz: number): number => {
    if (siz <= 6) return 3;
    if (siz <= 14) return 2;
    if (siz <= 21) return 1;
    return 0;
};