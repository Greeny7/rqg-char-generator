import {
    SET_PRIMARY_RUNE_TITLE_ACTION, SET_ELEMENTAL_RUNE_ACTION, SET_SECONDARY_RUNE_TITLE_ACTION,
    SET_TERTIARY_RUNE_TITLE_ACTION, SET_POWER_RUNE_ACTION, SET_FORM_RUNE_ACTION,
    SET_POWER_OR_FORM_RUNE_AFFINITY_TITLES_ACTION, ADJUST_ELEMENTAL_RUNE_ACTION, ADJUST_POWER_RUNE_ACTION,
    ADJUST_FORM_RUNE_ACTION, SET_RUNES
} from "./characterRunesActions";
import {CharacterRunes} from "./characterRunesStoreTypes";

export const defaultCharacterRunesState: CharacterRunes = {
    elementalRunesAffinity: [],
    formAndPowerRunesAffinities: [],
    elemental: {
        air: 0,
        water: 0,
        earth: 0,
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
        man: 50,
        beast: 50,
    }
};

export const characterRunesReducer = (state = defaultCharacterRunesState, action): CharacterRunes  => {

    let runeName, value;

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

        case SET_ELEMENTAL_RUNE_ACTION:

            runeName = action.payload.runeName;
            value = action.payload.value;

            return {
                ...state,
                elemental: {
                    ...state.elemental,
                    [action.payload.runeName]: value,
                }
            };

        case SET_POWER_RUNE_ACTION:

            runeName = action.payload.runeName;
            value = action.payload.value;

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

            return {
                ...state,
                form: {
                    ...state.form,
                    [action.payload.runeName]: value,
                }
            };

        case ADJUST_ELEMENTAL_RUNE_ACTION:

            runeName = action.payload.runeName;
            value = action.payload.value;

            return {
                ...state,
                elemental: {
                    ...state.elemental,
                    [runeName]: state.elemental[runeName] + value,
                }
            };

        case ADJUST_POWER_RUNE_ACTION:

            runeName = action.payload.runeName;
            value = action.payload.value;

            return {
                ...state,
                power: {
                    ...state.power,
                    [runeName]: state.power[runeName] + value,
                }
            };

        case ADJUST_FORM_RUNE_ACTION:

            runeName = action.payload.runeName;
            value = action.payload.value;

            return {
                ...state,
                form: {
                    ...state.form,
                    [runeName]: state.form[runeName] + value,
                }
            };

        case SET_POWER_OR_FORM_RUNE_AFFINITY_TITLES_ACTION:
            return {
                ...state,
                formAndPowerRunesAffinities: [...action.payload]
            };

        case SET_RUNES:
            const {elemental, power, form} = action.payload;
            return {
                ...state,
                elemental: {
                    ...state.elemental,
                    ...elemental
                },
                power: {
                    ...state.power,
                    ...power
                },
                form: {
                    ...state.form,
                    ...form
                }
            };

        default:
            return state;
    }
}