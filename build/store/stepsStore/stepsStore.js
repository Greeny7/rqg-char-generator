import {Step} from "./stepsStoreTypes.js";
import {characteristicsStep, defaultCharacteristicsStepStore} from "./reducers/characteristicsStep.js";
import {defaultRunesDistributionStepStore, runesDistributionReducer} from "./reducers/runesDistributionStep.js";
import {defaultRunesStepStore, runesStep} from "./reducers/runesStep.js";
import {combineReducers} from "../../_snowpack/pkg/redux.js";
import {currentStep} from "./reducers/currentStep.js";
export const defaultStepsState = {
  currentStep: Step.HOMELAND,
  runesStep: defaultRunesStepStore,
  runesDistributionStep: defaultRunesDistributionStepStore,
  characteristicsStep: defaultCharacteristicsStepStore
};
export const stepsReducer = combineReducers({
  currentStep,
  runesStep,
  runesDistributionStep: runesDistributionReducer,
  characteristicsStep
});
