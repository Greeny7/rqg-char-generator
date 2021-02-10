import {createStore, applyMiddleware, compose, combineReducers} from "../_snowpack/pkg/redux.js";
import thunk from "../_snowpack/pkg/redux-thunk.js";
import {characterReducer, defaultCharacterState} from "./characterStore/characterStore.js";
import {defaultStepsState, stepsReducer} from "./stepsStore/stepsStore.js";
export const defaultState = {
  steps: defaultStepsState,
  character: defaultCharacterState
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({
  steps: stepsReducer,
  character: characterReducer
}), defaultState, composeEnhancers(applyMiddleware(thunk)));
export {store};
