import { createStore, applyMiddleware, compose  } from 'redux';
import {Character, Step} from './storeTypes';
import {
    SET_RUNE_ACTION, SET_HOMELAND_TITLE_ACTION,
    SET_PASSIONS_ACTION, SET_SECONDARY_RUNE_TITLE_ACTION, SET_PRIMARY_RUNE_TITLE_ACTION, SET_TERTIARY_RUNE_TITLE_ACTION,
    SET_STEP_ACTION
} from './actions';
import thunk from 'redux-thunk';

export interface GlobalState {
    step: Step,
    character: Character,
}

const defaultState: GlobalState = {
    step: Step.HOMELAND,
    character: {
        name: null,
        homeland: null,
        passions: [],
        cult: null,
        elementalRunesAffinity: [],
        formAndPowerRunesAffinities: [],
        runes: {
            elemental: {
                wind: 0,
                earth: 0,
                water: 0,
                fire: 0,
                moon: 0,
                darkness: 0,
            },
            power: {
                stasis: 50,
                movement: 50,
                harmony: 50,
                disorder: 50,
                death: 50,
                fertility: 50,
            },
            form: {
                beast: 50,
                man: 50,
            }
        }
    },
};

const charCreation = (state = defaultState, action): GlobalState => {
    let newState;
    switch (action.type) {
        case SET_HOMELAND_TITLE_ACTION:
            return {
                ...state,
                character: {
                    ...state.character,
                    homeland: action.payload
                },
            };

        case SET_STEP_ACTION:
            return {
                ...state,
                step: action.payload
            };

        case SET_PASSIONS_ACTION:
            return {
                ...state,
                character: {
                    ...state.character,
                    passions: action.payload
                },
            };
        case SET_RUNE_ACTION:
            newState = {
                ...state,
            };
            const {runeType, runeName, value} = action.payload;
            if (newState.character.runes[action.payload.runeType][action.payload.runeName] === undefined) {
                console.error('wrong rune type or name:', runeType, runeName);
                return newState;
            }
            newState.character = {
                ...newState.character,
                runes: {
                    ...newState.character.runes,
                    [action.payload.runeType]: {
                        ...newState.character.runes[action.payload.runeType],
                        [action.payload.runeName]: value,
                    }
                }
            };

            return newState;

        case SET_PRIMARY_RUNE_TITLE_ACTION:
            newState = {
                ...state,
            };
            newState.character.elementalRunesAffinity = [
                ...state.character.elementalRunesAffinity
            ];
            newState.character.elementalRunesAffinity[0] = action.payload;
            return newState;

        case SET_SECONDARY_RUNE_TITLE_ACTION:
            newState = {
                ...state,
            };
            newState.character.elementalRunesAffinity = [
                ...state.character.elementalRunesAffinity
            ];
            newState.character.elementalRunesAffinity[1] = action.payload;
            return newState;

        case SET_TERTIARY_RUNE_TITLE_ACTION:
            newState = {
                ...state,
            };
            newState.character.elementalRunesAffinity = [
                ...state.character.elementalRunesAffinity
            ];
            newState.character.elementalRunesAffinity[2] = action.payload;
            return newState;

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