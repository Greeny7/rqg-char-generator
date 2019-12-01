import {Step, StepsStore} from "./stepsStoreTypes";
import { characteristicsStep, defaultCharacteristicsStepStore } from './reducers/characteristicsStep';
import { defaultRunesDistributionStepStore, runesDistributionReducer } from './reducers/runesDistributionStep';
import { defaultRunesStepStore, runesStep } from './reducers/runesStep';
import { combineReducers } from 'redux';
import { currentStep } from './reducers/currentStep';

export const defaultStepsState: StepsStore = {
    currentStep: Step.HOMELAND,
    runesStep: defaultRunesStepStore,
    runesDistributionStep: defaultRunesDistributionStepStore,
    characteristicsStep: defaultCharacteristicsStepStore
};

type StepsReducer = (state: StepsStore, action) => StepsStore

export const stepsReducer: StepsReducer = combineReducers({
    currentStep: currentStep,
    runesStep: runesStep,
    runesDistributionStep: runesDistributionReducer,
    characteristicsStep: characteristicsStep
});