import { createStore, applyMiddleware, compose  } from 'redux';
import { Character } from './storeTypes';
import { SET_HOMELAND_TITLE_ACTION, SET_PASSIONS_ACTION } from './actions';
import thunk from 'redux-thunk';

export interface GlobalState {
    character: Character,
}

const defaultState: GlobalState = {
    character: {
        name: null,
        homeland: null,
        passions: [],
        cult: null
    },
};

const charCreation = (state = defaultState, action): GlobalState => {
    switch (action.type) {
        case SET_HOMELAND_TITLE_ACTION:
            return {
                ...state,
                character: {
                    ...state.character,
                    homeland: action.payload
                },
            };

        case SET_PASSIONS_ACTION:
            return {
                ...state,
                character: {
                    ...state.character,
                    passions: action.payload
                },
            };
        default:
            return state
    }
}


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    charCreation,
    defaultState,
    composeEnhancers(applyMiddleware(thunk))
);

export { store };