import { RuneElementalTitle, RuneFormTitle, RunePowerTitle } from '../../../gameEntities/gameEntitiesTypes';
import { SET_POWER_OR_FORM_RUNE_AFFINITY_TITLES } from '../../characterStore/characterRunesStore/characterRunesActions';
import { SET_MAIN_RUNE_TITLE } from '../stepsActions';

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
        case SET_MAIN_RUNE_TITLE:
            const {runeImportancy, runeName} = action.payload;
            const newRunesAffinity = [...state.elementalRunesAffinity];
            newRunesAffinity[runeImportancy] = runeName;

            return {
                ...state,
                elementalRunesAffinity: newRunesAffinity
            };

        case SET_POWER_OR_FORM_RUNE_AFFINITY_TITLES:
            return {
                ...state,
                formAndPowerRunesAffinities: [...action.payload]
            };

        default:
            return state;
    }
};