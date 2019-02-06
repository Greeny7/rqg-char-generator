import {GlobalState} from "../../storeTypes";
import {createSelector} from "reselect";
import {ElementalRunesStore} from "./characterRunesStoreTypes";


const elementalRunes = (state: GlobalState): ElementalRunesStore => state.character.runes.elemental;

export const getMaxRunes = createSelector(
    elementalRunes,
    (runes: ElementalRunesStore) => {
        const sortedRuneNames: any = Object.keys(runes).sort((runeName1, runeName2) => {
            return runes[runeName2] - runes[runeName1];
        });

        const sortedRunesMixedArray = sortedRuneNames.reduce((acc, runeName, index) => {
            const runeValue = runes[runeName];
            const prevRuneName = sortedRuneNames[index - 1];
            const prevRuneValue = runes[prevRuneName];
            if (prevRuneName && prevRuneValue === runeValue) {
                acc[acc.length - 1].push(runeName);
            } else {
                acc.push([runeName]);
            }
            return acc;
        }, []);

        if (sortedRunesMixedArray[0].length > 2) {
            return sortedRunesMixedArray.slice(0, 1);
        } else if (sortedRunesMixedArray[0].length === 2 || sortedRunesMixedArray[1].length >= 2) {
            return sortedRunesMixedArray.slice(0, 2);
        }
        return sortedRunesMixedArray.slice(0, 3);
    }
);

// 1 > 2 > 3
//[
//      [{name, value}],
//      [{name, value}],
//      [{name, value}]
//]

// 1 === 2, 3 < 2
//[
//      [ {name, value}, {name, value} ],
//      [ {name, value}]
//]

// 1 === 2, 3 === 4
//[     [{name, value}, {name, value}],
//      [{name, value}, {name, value}]
//]

// 1 === 2 === 3
//[
//      [{name, value}, {name, value}, {name, value}]
//]