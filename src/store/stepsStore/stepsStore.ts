import {Step, StepsStore} from "./stepsStoreTypes";
import {
    DECREMENT_FREE_CHARACTERISTICS_POINTS,
    DECREMENT_FREE_RUNE_POINTS, INCREMENT_FREE_CHARACTERISTICS_POINTS, INCREMENT_FREE_RUNE_POINTS, NEXT_STEP,
    PREV_STEP,
    RESET_INITIAL_CHARACTERISTICS,
    RESET_INITIAL_RUNES, SET_CHARACTERISTICS_MODE, SET_FREE_CHARACTERISTICS_POINTS, SET_FREE_RUNE_POINTS,
    SET_INITIAL_CHARACTERISTICS,
    SET_INITIAL_RUNES,
    SET_STEP
} from "./stepsActions";
import {Characteristics} from "../../gameEntities/gameEntitiesTypes";

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
    runesDistributionStep: {
        freePoints: MAX_FREE_RUNE_POINTS,
        initialRunesValue: {
            ...nullRunesValues
        }
    },
    characteristicsStep: {
        initialCharacteristics: nullCharacteristics,
        freePoints: 0,
        mode: null
    }
};

export const stepsReducer = (state = defaultStepsState, action): StepsStore => {
    let currentStepIndex;

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

        case SET_CHARACTERISTICS_MODE:
            return {
                ...state,
                characteristicsStep: {
                    ...state.characteristicsStep,
                    mode: action.payload
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