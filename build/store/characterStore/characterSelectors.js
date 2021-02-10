import {
  calculateDamageBonus,
  calculateDexStrikeRank,
  calculateEncumbrancePoints,
  calculateHealingRate,
  calculateHpModifier,
  calculateMaxLocationsHp,
  calculateSizStrikeRank,
  calculateSpiritCombatDamage
} from "../../gameEntities/rules.js";
import {createSelector} from "../../_snowpack/pkg/reselect.js";
export const getCharacterCharacteristics = (state) => state.character.characteristics;
export const getCharacterMaxHp = createSelector(getCharacterCharacteristics, calculateHpModifier);
export const getCharacterMaxLocationsHp = createSelector(getCharacterMaxHp, calculateMaxLocationsHp);
export const getCharacterHealingRate = createSelector(getCharacterCharacteristics, ({CON}) => calculateHealingRate(CON));
export const getDamageBonus = createSelector(getCharacterCharacteristics, calculateDamageBonus);
export const getSpiritCombatDamage = createSelector(getCharacterCharacteristics, calculateSpiritCombatDamage);
export const getEncumbrancePoints = createSelector(getCharacterCharacteristics, calculateEncumbrancePoints);
export const getDexStrikeRank = createSelector(getCharacterCharacteristics, ({DEX}) => calculateDexStrikeRank(DEX));
export const getSizeStrikeRank = createSelector(getCharacterCharacteristics, ({SIZ}) => calculateSizStrikeRank(SIZ));
