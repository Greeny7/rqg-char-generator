import {
    SET_PRIMARY_RUNE_TITLE_ACTION, SET_RUNE_ACTION, SET_SECONDARY_RUNE_TITLE_ACTION,
    SET_TERTIARY_RUNE_TITLE_ACTION
} from "./characterRunesActions";

export const defaultCharacterRunesState = {
    elementalRunesAffinity: [],
    formAndPowerRunesAffinities: [],
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
};

export const characterRunesReducer = (state = defaultCharacterRunesState, action) => {
    switch (action.type) {
        case SET_RUNE_ACTION:
            const {runeType, runeName, value} = action.payload;
            if (state[action.payload.runeType][action.payload.runeName] === undefined) {
                console.error('wrong rune type or name:', runeType, runeName);
                return state;
            }

            return {
                ...state,
                [action.payload.runeType]: {
                    ...state[action.payload.runeType],
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
        default:
            return state;
    }
}