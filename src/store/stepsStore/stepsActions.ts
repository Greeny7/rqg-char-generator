import {Step} from "./stepsStoreTypes";

export const SET_STEP_ACTION = 'SET_STEP_ACTION';

export const setStep = (step: Step) => ({
    type: SET_STEP_ACTION,
    payload: step
});