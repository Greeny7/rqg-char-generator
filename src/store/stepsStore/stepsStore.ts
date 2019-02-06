import {Step, StepsStore} from "./stepsStoreTypes";
import {
    DECREMENT_FREE_CHARACTERISTICS_POINTS,
    DECREMENT_FREE_RUNE_POINTS, INCREMENT_FREE_CHARACTERISTICS_POINTS, INCREMENT_FREE_RUNE_POINTS, NEXT_STEP,
    PREV_STEP,
    RESET_INITIAL_CHARACTERISTICS,
    RESET_INITIAL_RUNES, SET_CHARACTERISTICS_MODE, SET_FREE_CHARACTERISTICS_POINTS, SET_FREE_RUNE_POINTS,
    SET_INITIAL_CHARACTERISTICS,
    SET_INITIAL_RUNES, SET_PRIMARY_RUNE, SET_SECONDARY_RUNE,
    SET_STEP
} from "./stepsActions";
import {Characteristics} from "../../gameEntities/gameEntitiesTypes";
import {
    SET_POWER_OR_FORM_RUNE_AFFINITY_TITLES_ACTION,
    SET_PRIMARY_RUNE_TITLE_ACTION,
    SET_SECONDARY_RUNE_TITLE_ACTION, SET_TERTIARY_RUNE_TITLE_ACTION
} from "../characterStore/characterRunesStore/characterRunesActions";

export const MAX_FREE_RUNE_POINTS = 50;
export const MAX_FREE_CHARACTERISTICS_POINTS = 95;

const nullRunesValues = {
    elemental: {
        air: null,
        water: null,
        earth: null,
        'fire/sky': null,
        moon: null,
        darkness: null,
    },
    power: {
        stasis: null,
        movement: null,
        harmony: null,
        disorder: null,
        death: null,
        fertility: null,
        illusion: null,
        truth: null,
    },
    form: {
        beast: null,
        man: null,
    }
};

const nullCharacteristics = {
    [Characteristics.STR]: null,
    [Characteristics.SIZ]: null,
    [Characteristics.DEX]: null,
    [Characteristics.CON]: null,
    [Characteristics.INT]: null,
    [Characteristics.CHA]: null,
    [Characteristics.POW]: null,
}

export const defaultStepsState: StepsStore = {
    currentStep: Step.HOMELAND,
    runesStep: {
        elementalRunesAffinity: [],
        formAndPowerRunesAffinities: [],
    },
    runesDistributionStep: {
        freePoints: MAX_FREE_RUNE_POINTS,
        initialRunesValue: {
            ...nullRunesValues
        }
    },
    characteristicsStep: {
        elementalRunesAffinity: [null, null],
        initialCharacteristics: nullCharacteristics,
        freePoints: 0,
        mode: null
    }
};

export const stepsReducer = (state = defaultStepsState, action): StepsStore => {
    let currentStepIndex;
    let newElementalRunesAffinity;

    switch (action.type) {
        case SET_STEP:
            return {
                ...state,
                currentStep: action.payload
            };

        case PREV_STEP:
            currentStepIndex = stepsOrder.indexOf(state.currentStep);
            if (currentStepIndex === 0) {
                return state;
            }

            return {
                ...state,
                currentStep: stepsOrder[currentStepIndex - 1],
            };

        case NEXT_STEP:
            currentStepIndex = stepsOrder.indexOf(state.currentStep);
            if (currentStepIndex === stepsOrder.length - 1) {
                return state;
            }

            return {
                ...state,
                currentStep: stepsOrder[currentStepIndex + 1],
            };

        case DECREMENT_FREE_RUNE_POINTS:
            return {
                ...state,
                runesDistributionStep: {
                    ...state.runesDistributionStep,
                    freePoints: state.runesDistributionStep.freePoints > 0
                        ? state.runesDistributionStep.freePoints - 1
                        : 0
                }
            };

        case INCREMENT_FREE_RUNE_POINTS:
            return {
                ...state,
                runesDistributionStep: {
                    ...state.runesDistributionStep,
                    freePoints: state.runesDistributionStep.freePoints < MAX_FREE_RUNE_POINTS
                        ? state.runesDistributionStep.freePoints + 1
                        : MAX_FREE_RUNE_POINTS
                }
            };


        case SET_INITIAL_RUNES:

            return {
                ...state,
                runesDistributionStep: {
                    ...state.runesDistributionStep,
                    initialRunesValue: {
                        ...action.payload
                    }
                }
            };

        case RESET_INITIAL_RUNES:

            return {
                ...state,
                runesDistributionStep: {
                    ...state.runesDistributionStep,
                    initialRunesValue: {
                        ...nullRunesValues
                    }
                }
            };

        case SET_FREE_RUNE_POINTS:
            return {
                ...state,
                runesDistributionStep: {
                    ...state.runesDistributionStep,
                    freePoints: action.payload
                }
            };


        case DECREMENT_FREE_CHARACTERISTICS_POINTS:
            return {
                ...state,
                characteristicsStep: {
                    ...state.characteristicsStep,
                    freePoints: state.characteristicsStep.freePoints > 0
                        ? state.characteristicsStep.freePoints - 1
                        : 0
                }
            };

        case INCREMENT_FREE_CHARACTERISTICS_POINTS:
            return {
                ...state,
                characteristicsStep: {
                    ...state.characteristicsStep,
                    freePoints: state.characteristicsStep.freePoints < MAX_FREE_CHARACTERISTICS_POINTS
                        ? state.characteristicsStep.freePoints + 1
                        : MAX_FREE_RUNE_POINTS
                }
            };


        case SET_INITIAL_CHARACTERISTICS:

            return {
                ...state,
                characteristicsStep: {
                    ...state.characteristicsStep,
                    initialCharacteristics: {
                        ...action.payload
                    }
                }
            };

        case RESET_INITIAL_CHARACTERISTICS:

            return {
                ...state,
                characteristicsStep: {
                    ...state.characteristicsStep,
                    initialCharacteristics: {
                        ...nullCharacteristics
                    }
                }
            };

        case SET_FREE_CHARACTERISTICS_POINTS:
            return {
                ...state,
                characteristicsStep: {
                    ...state.characteristicsStep,
                    freePoints: action.payload
                }
            };

        case SET_PRIMARY_RUNE_TITLE_ACTION:
            state.runesStep.elementalRunesAffinity[0] = action.payload;

            return {
                ...state,
                runesStep: {
                    ...state.runesStep,
                    elementalRunesAffinity: [...state.runesStep.elementalRunesAffinity]
                }
            };

        case SET_SECONDARY_RUNE_TITLE_ACTION:
            state.runesStep.elementalRunesAffinity[1] = action.payload;

            return {
                ...state,
                runesStep: {
                    ...state.runesStep,
                    elementalRunesAffinity: [...state.runesStep.elementalRunesAffinity]
                }
            };

        case SET_TERTIARY_RUNE_TITLE_ACTION:
            state.runesStep.elementalRunesAffinity[2] = action.payload;

            return {
                ...state,
                runesStep: {
                    ...state.runesStep,
                    elementalRunesAffinity: [...state.runesStep.elementalRunesAffinity]
                }
            };

        case SET_POWER_OR_FORM_RUNE_AFFINITY_TITLES_ACTION:
            return {
                ...state,
                runesStep: {
                    ...state.runesStep,
                    formAndPowerRunesAffinities: [...action.payload]
                }
            };

        case SET_PRIMARY_RUNE:
            newElementalRunesAffinity = state.characteristicsStep.elementalRunesAffinity;
            if (newElementalRunesAffinity[1] === action.payload) {
                newElementalRunesAffinity[1] = newElementalRunesAffinity[0];
            }
            newElementalRunesAffinity[0] = action.payload;
            return {
                ...state,
                characteristicsStep: {
                    ...state.characteristicsStep,
                    elementalRunesAffinity: [...newElementalRunesAffinity]
                }
            };

        case SET_SECONDARY_RUNE:
            newElementalRunesAffinity = state.characteristicsStep.elementalRunesAffinity;
            if (newElementalRunesAffinity[0] === action.payload) {
                newElementalRunesAffinity[0] = newElementalRunesAffinity[1];
            }
            newElementalRunesAffinity[1] = action.payload;
            return {
                ...state,
                characteristicsStep: {
                    ...state.characteristicsStep,
                    elementalRunesAffinity: [...newElementalRunesAffinity]
                }
            };

        default:
            return state
    }
}

export const stepsOrder = Object.freeze([
    Step.HOMELAND,
    Step.RUNES,
    Step.RUNES_DISTRIBUTION,
    Step.CHARACTERISTICS,
]);