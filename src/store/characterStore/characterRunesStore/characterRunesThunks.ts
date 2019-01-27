import {GlobalState} from "../../storeTypes";
import {RuneElementalTitle, RuneFormTitle, RunePowerTitle, RuneType} from "../../../gameEntities/gameEntitiesTypes";
import {getRunesList} from "../../../gameEntities/gameEntities";
import {setFormRune, setPowerRune} from "./characterRunesActions";

export function setAndBalancePowerRune(runeTitle: RunePowerTitle, value: number) {
    return function(dispatch, getState: () => GlobalState) {
        const runes: any = getRunesList();
        const rune = [...runes.power].find(r => r.title === runeTitle);
        const oppositeRuneTitle = rune.oppositeRune;

        dispatch(setPowerRune(runeTitle, value));
        dispatch(setPowerRune(oppositeRuneTitle, 100 - value));
    }
}

export function setAndBalanceFormRune(runeTitle: RuneFormTitle, value: number) {
    return function(dispatch, getState: () => GlobalState) {
        const runes: any = getRunesList();
        const rune = [...runes.form].find(r => r.title === runeTitle);
        const oppositeRuneTitle = rune.oppositeRune;

        dispatch(setFormRune(runeTitle, value));
        dispatch(setFormRune(oppositeRuneTitle, 100 - value));
    }
}