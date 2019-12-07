import { GlobalState } from '../storeTypes';
import { calculateHealingRate, calculateHpModifier, calculateMaxLocationsHp } from '../../gameEntities/rules';
import { createSelector } from 'reselect';
import { CharacteristicsStore } from './characterStoreTypes';

export const getCharacterCharacteristics = (state: GlobalState): CharacteristicsStore => state.character.characteristics;

export const getCharacterMaxHp = createSelector(
    getCharacterCharacteristics,
    calculateHpModifier
);

export const getCharacterMaxLocationsHp = createSelector(
    getCharacterMaxHp,
    calculateMaxLocationsHp
);

export const getCharacterHealingRate = createSelector(
    getCharacterCharacteristics,
    ({CON}) => calculateHealingRate(CON)
);