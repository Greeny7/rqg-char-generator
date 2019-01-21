import {GlobalState} from "../../storeTypes";
import {createSelector} from "reselect";
import {ElementalRunesStore} from "./characterRunesStoreTypes";


const elementalRunes = (state: GlobalState): ElementalRunesStore => state.character.runes.elemental;

export const getAffinityRunes = createSelector(
    elementalRunes,
    (runes: ElementalRunesStore) => {
        const sortedRuneNames: any = Object.keys(runes).sort((runeName1, runeName2) => {
            return runes[runeName2] - runes[runeName1];
        });

        if (runes[sortedRuneNames[0]] === runes[sortedRuneNames[1]] && runes[sortedRuneNames[0]] !== 0) {
            sortedRuneNames[0] = [sortedRuneNames.splice(1, 1)[0], sortedRuneNames[0]];
        }

        if (runes[sortedRuneNames[1]] === runes[sortedRuneNames[2]] && runes[sortedRuneNames[1]] !== 0) {
            sortedRuneNames[1] = [sortedRuneNames.splice(2, 1)[0], sortedRuneNames[1]];
        }

        if (Array.isArray(sortedRuneNames[0]) || Array.isArray(sortedRuneNames[1])) {
            return sortedRuneNames.slice(0, 2);
        }
        return sortedRuneNames.slice(0, 3);
    }
)

//[{name, value}, {name, value}, {name, value}]
//[[{name, value}, {name, value}], {name, value}]
//[[{name, value}, {name, value}], [{name, value}, {name, value}]]