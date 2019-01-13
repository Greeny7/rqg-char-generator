import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {characterReducer, defaultCharacterState} from "./characterStore/characterStore";
import {defaultStepsState, stepsReducer} from "./stepsStore/stepsStore";
import {GlobalState} from "./storeTypes";

export const defaultState: GlobalState = {
    steps: defaultStepsState,
    character: defaultCharacterState
}

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        steps: stepsReducer,
        character: characterReducer
    }),
    defaultState,
    composeEnhancers(applyMiddleware(thunk))
);

export { store };