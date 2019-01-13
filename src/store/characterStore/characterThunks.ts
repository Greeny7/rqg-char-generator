import {getHomelandsList} from "../../gameEntities/gameEntities";
import {GlobalState} from "../storeTypes";
import {setHomelandTitle, setPassions} from "./characterActions";
import {Homeland, HomelandTitle} from "../../gameEntities/gameEntitiesTypes";
import {setElementalRune} from "./characterRunesStore/characterRunesActions";

export function selectHomeland(homelandTitle: HomelandTitle) {
    return function(dispatch, getState: () => GlobalState) {
        const state = getState();

        const homelandList = getHomelandsList();
        const prevHomelandTitle = state.character.homeland;

        if (prevHomelandTitle === homelandTitle) {
            return;
        }

        if (prevHomelandTitle) {
            // reduce rune bonus from previously selected homeland
            const prevHomeland = homelandList.find(item => item.title === prevHomelandTitle);
            const prevHomelandRuneValue = state.character.runes.elemental[prevHomeland.runeBonus.title];
            dispatch(setElementalRune(prevHomeland.runeBonus.title, prevHomelandRuneValue - prevHomeland.runeBonus.value));
        }


        const newHomeland: Homeland = homelandList.find(item => item.title === homelandTitle);
        const passions = [...newHomeland.passions];


        dispatch(setHomelandTitle(homelandTitle));
        dispatch(setPassions(passions));

        // increase bonus rune value
        const prevRuneValue = state.character.runes.elemental[newHomeland.runeBonus.title];
        dispatch(setElementalRune(newHomeland.runeBonus.title, prevRuneValue + newHomeland.runeBonus.value));
    }
}