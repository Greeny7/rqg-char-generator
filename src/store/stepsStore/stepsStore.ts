import {Step, StepsStore} from "./stepsStoreTypes";
import {SET_STEP_ACTION} from "./stepsActions";

export const defaultStepsState: StepsStore = {
    currentStep: Step.HOMELAND,
};

export const stepsReducer = (state = defaultStepsState, action): StepsStore => {
    switch (action.type) {
        case SET_STEP_ACTION:
            return {
                ...state,
                currentStep: action.payload
            };

        default:
            return state
    }
}