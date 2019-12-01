import {
    DECREMENT_FREE_RUNE_POINTS,
    INCREMENT_FREE_RUNE_POINTS,
    RESET_INITIAL_RUNES, SET_FREE_RUNE_POINTS,
    SET_INITIAL_RUNES
} from '../stepsActions';
import {
    ElementalRunesStore, FormRunesStore,
    PowerRunesStore
} from '../../characterStore/characterRunesStore/characterRunesStoreTypes';
import { MAX_FREE_RUNE_POINTS } from '../../../gameEntities/rules';

export const nullRunesValues = {
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

export interface RunesDistributionStore {
    freePoints: number,
    initialRunesValue: {
        elemental: ElementalRunesStore,
        power: PowerRunesStore,
        form: FormRunesStore
    }
}

export const defaultRunesDistributionStepStore: RunesDistributionStore = {
    freePoints: MAX_FREE_RUNE_POINTS,
    initialRunesValue: {
        ...nullRunesValues
    }
};

export const runesDistributionReducer = (state: RunesDistributionStore = defaultRunesDistributionStepStore, action): RunesDistributionStore => {
    switch (action.type) {
        case DECREMENT_FREE_RUNE_POINTS:
            return {
                ...state,
                freePoints: state.freePoints > 0
                    ? state.freePoints - 1
                    : 0
            };

        case INCREMENT_FREE_RUNE_POINTS:
            return {
                ...state,
                freePoints: state.freePoints < MAX_FREE_RUNE_POINTS
                    ? state.freePoints + 1
                    : MAX_FREE_RUNE_POINTS
            };


        case SET_INITIAL_RUNES:
            return {
                ...state,
                initialRunesValue: {
                    ...action.payload
                }
            };

        case RESET_INITIAL_RUNES:

            return {
                ...state,
                initialRunesValue: {
                    ...nullRunesValues
                }
            };

        case SET_FREE_RUNE_POINTS:
            return {
                ...state,
                freePoints: action.payload
            };

        default:
            return state;
    }
};