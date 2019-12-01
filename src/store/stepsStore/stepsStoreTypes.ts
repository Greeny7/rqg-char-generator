import {
    ElementalRunesStore, FormRunesStore,
    PowerRunesStore
} from "../characterStore/characterRunesStore/characterRunesStoreTypes";
import {CharacteristicsStore} from "../characterStore/characterStoreTypes";
import {
    Characteristics,
    RuneElementalTitle,
    RuneFormTitle,
    RunePowerTitle
} from '../../gameEntities/gameEntitiesTypes';
import { CharacteristicsStepStore } from './reducers/characteristicsStep';
import { RunesDistributionStore } from './reducers/runesDistributionStep';
import { RunesStepStore } from './reducers/runesStep';

export interface StepsStore {
    currentStep: Step,
    runesStep: RunesStepStore,
    runesDistributionStep: RunesDistributionStore
    characteristicsStep: CharacteristicsStepStore
}

export enum CharacteristicsMode {
    RANDOM,
    FIXED_NUMBER
}

export enum Step {
    HOMELAND,
    RUNES,
    RUNES_DISTRIBUTION,
    CHARACTERISTICS,
}