import {
    SET_PRIMARY_RUNE_TITLE_ACTION, SET_ELEMENTAL_RUNE_ACTION, SET_SECONDARY_RUNE_TITLE_ACTION,
    SET_TERTIARY_RUNE_TITLE_ACTION, SET_POWER_RUNE_ACTION, SET_FORM_RUNE_ACTION,
    SET_POWER_OR_FORM_RUNE_AFFINITY_TITLES_ACTION
} from "./characterRunesActions";
import {CharacterRunes} from "./characterRunesStoreTypes";

export const defaultCharacterRunesState: CharacterRunes = {
    elementalRunesAffinity: [],
    formAndPowerRunesAffinities: [],
    elemental: {
        air: 0,
        earth: 0,
        water: 0,
        'fire/sky': 0,
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
        illusion: 50,
        truth: 50,
    },
    form: {
        beast: 50,
        man: 50,
    }
};

export const characterRunesReducer = (state = defaultCharacterRunesState, action): CharacterRunes  => {

    let runeName, value;

    switch (action.type) {
        case SET_ELEMENTAL_RUNE_ACTION:

            runeName = action.payload.runeName;
            value = action.payload.value;

            if (state.elemental[action.payload.runeName] === undefined) {
                console.error('wrong rune type or name:', runeName);
                return state;
            }

            return {
                ...state,
                elemental: {
                    ...state.elemental,
                    [action.payload.runeName]: value,
                }
            };
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

        case SET_POWER_RUNE_ACTION:

            runeName = action.payload.runeName;
            value = action.payload.value;

            if (state.power[action.payload.runeName] === undefined) {
                console.error('wrong rune type or name:', runeName);
                return state;
            }

            return {
                ...state,
                power: {
                    ...state.power,
                    [action.payload.runeName]: value,
                }
            };

        case SET_FORM_RUNE_ACTION:

            runeName = action.payload.runeName;
            value = action.payload.value;

            if (state.form[action.payload.runeName] === undefined) {
                console.error('wrong rune type or name:', runeName);
                return state;
            }

            return {
                ...state,
                form: {
                    ...state.form,
                    [action.payload.runeName]: value,
                }
            };

        case SET_POWER_OR_FORM_RUNE_AFFINITY_TITLES_ACTION:
            return {
                ...state,
                formAndPowerRunesAffinities: [...action.payload]
            };

        default:
            return state;
    }
}