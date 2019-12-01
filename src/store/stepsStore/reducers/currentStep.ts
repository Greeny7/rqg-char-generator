import { Step } from '../stepsStoreTypes';
import { NEXT_STEP, PREV_STEP, SET_STEP } from '../stepsActions';
import { stepsOrder } from '../../../gameEntities/rules';



export const currentStep = (state: Step = Step.HOMELAND, action): Step => {
    let currentStepIndex;

    switch (action.type) {
        case SET_STEP:
            return action.payload;

        case PREV_STEP:
            currentStepIndex = stepsOrder.indexOf(state);
            console.log(state, currentStepIndex);
            return currentStepIndex === 0
                ? state
                : stepsOrder[currentStepIndex - 1];

        case NEXT_STEP:
            currentStepIndex = stepsOrder.indexOf(state);
            return currentStepIndex === stepsOrder.length - 1
                ? state
                : stepsOrder[currentStepIndex + 1];

        default:
            return state;
    }
};