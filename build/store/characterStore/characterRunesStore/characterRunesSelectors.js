import {createSelector} from "../../../_snowpack/pkg/reselect.js";
const elementalRunes = (state) => state.character.runes.elemental;
export const getMaxRunes = createSelector(elementalRunes, (runes) => {
  const sortedRuneNames = Object.keys(runes).sort((runeName1, runeName2) => {
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
});
