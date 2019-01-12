import {Homeland, HomelandTitle, RuneElemental, RuneType} from './storeTypes';
import {
    setHomelandTitle, setPassions, setPrimaryRuneTitle, setRune, setSecondaryRuneTitle,
    setTertiaryRuneTitle
} from './actions';
import { GlobalState } from './store';
import { getGameEntity } from '../gameEntities/gameEntities';

export function selectHomeland(homelandTitle: HomelandTitle) {
    return function(dispatch, getState: () => GlobalState) {
        const selectedHomeland: Homeland = getGameEntity('homelands').find(item => item.title === homelandTitle);
        const passions = [...selectedHomeland.passions];

        dispatch(setHomelandTitle(homelandTitle));
        dispatch(setPassions(passions))
    }
}

export function selectPrimaryElementalRune(runeName: RuneElemental) {
    return function(dispatch, getState: () => GlobalState) {
        const state = getState();

        const oldPrimaryRune = state.character.elementalRunesAffinity[0];
        if (oldPrimaryRune === runeName) {
            return;
        }

        if (oldPrimaryRune) {
            const oldPrimaryRuneValue = state.character.runes.elemental[oldPrimaryRune];
            const newOldRuneValue = oldPrimaryRuneValue - 60;
            dispatch(setRune('elemental', oldPrimaryRune, newOldRuneValue));
        }

        dispatch(setRune('elemental', runeName, state.character.runes.elemental[runeName] + 60));
        dispatch(setPrimaryRuneTitle(runeName));
    }
}

export function selectSecondaryElementalRune(runeName: RuneElemental) {
    return function(dispatch, getState: () => GlobalState) {
        const state = getState();

        const oldSecondaryRune = state.character.elementalRunesAffinity[1];
        if (oldSecondaryRune === runeName) {
            return;
        }

        if (oldSecondaryRune) {
            const oldSecondaryRuneValue = state.character.runes.elemental[oldSecondaryRune];
            const newOldRuneValue = oldSecondaryRuneValue - 40;
            dispatch(setRune('elemental', oldSecondaryRune, newOldRuneValue));
        }

        dispatch(setRune('elemental', runeName, state.character.runes.elemental[runeName] + 40));
        dispatch(setSecondaryRuneTitle(runeName));
    }
}

export function selectTertiaryElementalRune(runeName: RuneElemental) {
    return function(dispatch, getState: () => GlobalState) {
        const state = getState();

        const oldSecondaryRune = state.character.elementalRunesAffinity[0];
        if (oldSecondaryRune === runeName) {
            return;
        }

        if (oldSecondaryRune) {
            const oldSecondaryRuneValue = state.character.runes.elemental[oldSecondaryRune];
            const newOldRuneValue = oldSecondaryRuneValue - 20;
            dispatch(setRune('elemental', oldSecondaryRune, newOldRuneValue));
        }

        dispatch(setRune('elemental', runeName, state.character.runes.elemental[runeName] + 20));
        dispatch(setTertiaryRuneTitle(runeName));
    }
}