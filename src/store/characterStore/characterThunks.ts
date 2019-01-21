import {getHomeland, getHomelandsList} from "../../gameEntities/gameEntities";
import {GlobalState} from "../storeTypes";
import {adjustCharacteristics, setCharacteristics, setHomelandTitle, setPassions} from "./characterActions";
import {Homeland, HomelandTitle} from "../../gameEntities/gameEntitiesTypes";
import {adjustElementalRune, setElementalRune} from "./characterRunesStore/characterRunesActions";
import {objectForEach, objectMap} from "../../utils/iterateObject";

export function selectHomeland(homelandTitle: HomelandTitle) {
    return function(dispatch, getState: () => GlobalState) {
        const state = getState();

        const prevHomelandTitle = state.character.homeland;

        if (prevHomelandTitle === homelandTitle) {
            return;
        }

        if (prevHomelandTitle) {
            const prevHomeland = getHomeland(prevHomelandTitle);

            // remove rune bonus from previously selected homeland
            dispatch(adjustElementalRune(prevHomeland.runeBonus.title, -prevHomeland.runeBonus.value));

            // remove characteristics bonuses from previously selected homeland
            if (prevHomeland.characteristicsBonus) {
                const reverseBonus = objectMap(prevHomeland.characteristicsBonus, (charKey, val) => -val);
                dispatch(adjustCharacteristics(reverseBonus));
            }
        }

        const newHomeland: Homeland = getHomeland(homelandTitle);
        const passions = [...newHomeland.passions];

        dispatch(setHomelandTitle(homelandTitle));
        dispatch(setPassions(passions));

        // apply bonus rune value
        dispatch(adjustElementalRune(newHomeland.runeBonus.title, newHomeland.runeBonus.value));

        // apply characteristics bonus
        if (newHomeland.characteristicsBonus) {
            dispatch(adjustCharacteristics(newHomeland.characteristicsBonus));
        }
    }
}