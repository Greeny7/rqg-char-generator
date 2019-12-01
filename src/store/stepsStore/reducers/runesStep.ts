import { RuneElementalTitle, RuneFormTitle, RunePowerTitle } from '../../../gameEntities/gameEntitiesTypes';
import {
    SET_POWER_OR_FORM_RUNE_AFFINITY_TITLES_ACTION,
    SET_PRIMARY_RUNE_TITLE_ACTION,
    SET_SECONDARY_RUNE_TITLE_ACTION, SET_TERTIARY_RUNE_TITLE_ACTION
} from '../../characterStore/characterRunesStore/characterRunesActions';

export interface RunesStepStore {
    elementalRunesAffinity: RuneElementalTitle[];
    formAndPowerRunesAffinities: (RunePowerTitle | RuneFormTitle)[];
}

export const defaultRunesStepStore: RunesStepStore = {
    elementalRunesAffinity: [],
    formAndPowerRunesAffinities: [],
};

export const runesStep = (state: RunesStepStore = defaultRunesStepStore, action): RunesStepStore => {
    switch (action.type) {
        case SET_PRIMARY_RUNE_TITLE_ACTION:
            state.elementalRunesAffinity[0] = action.payload;

            return {
                ...state,
                elementalRunesAffinity: [...state.elementalRunesAffinity]
            };

        case SET_SECONDARY_RUNE_TITLE_ACTION:
            state.elementalRunesAffinity[1] = action.payload;

            return {
                ...state,
                elementalRunesAffinity: [...state.elementalRunesAffinity]
            };

        case SET_TERTIARY_RUNE_TITLE_ACTION:
            state.elementalRunesAffinity[2] = action.payload;

            return {
                ...state,
                elementalRunesAffinity: [...state.elementalRunesAffinity]
            };

        case SET_POWER_OR_FORM_RUNE_AFFINITY_TITLES_ACTION:
            return {
                ...state,
                formAndPowerRunesAffinities: [...action.payload]
            };

        default:
            return state;
    }
};