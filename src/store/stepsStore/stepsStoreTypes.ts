import {
    ElementalRunesStore, FormRunesStore,
    PowerRunesStore
} from "../characterStore/characterRunesStore/characterRunesStoreTypes";
import {CharacteristicsStore} from "../characterStore/characterStoreTypes";
import {RuneElementalTitle, RuneFormTitle, RunePowerTitle} from "../../gameEntities/gameEntitiesTypes";

export interface StepsStore {
    currentStep: Step,
    runesStep: {
        elementalRunesAffinity: RuneElementalTitle[];
        formAndPowerRunesAffinities: (RunePowerTitle | RuneFormTitle)[];
    }
    runesDistributionStep: {
        freePoints: number,
        initialRunesValue: {
            elemental: ElementalRunesStore,
            power: PowerRunesStore,
            form: FormRunesStore
        }
    }
    characteristicsStep: {
        initialCharacteristics: CharacteristicsStore,
        freePoints: number,
        mode: CharacteristicsMode,
        elementalRunesAffinity: RuneElementalTitle[];
        // runesCharacteristicsBonus:
    }
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