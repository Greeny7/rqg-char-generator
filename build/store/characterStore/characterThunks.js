import {getHomeland} from "../../gameEntities/gameEntities.js";
import {adjustCharacteristics, setHomelandTitle, setPassions} from "./characterActions.js";
import {adjustElementalRune} from "./characterRunesStore/characterRunesActions.js";
import {objectMap} from "../../utils/iterateObject.js";
export function selectHomeland(homelandTitle) {
  return function(dispatch, getState) {
    const state = getState();
    const prevHomelandTitle = state.character.homeland;
    if (prevHomelandTitle === homelandTitle) {
      return;
    }
    if (prevHomelandTitle) {
      const prevHomeland = getHomeland(prevHomelandTitle);
      dispatch(adjustElementalRune(prevHomeland.runeBonus.title, -prevHomeland.runeBonus.value));
      if (prevHomeland.characteristicsBonus) {
        const reverseBonus = objectMap(prevHomeland.characteristicsBonus, (charKey, val) => -val);
        dispatch(adjustCharacteristics(reverseBonus));
      }
    }
    const newHomeland = getHomeland(homelandTitle);
    const passions = [...newHomeland.passions];
    dispatch(setHomelandTitle(homelandTitle));
    dispatch(setPassions(passions));
    dispatch(adjustElementalRune(newHomeland.runeBonus.title, newHomeland.runeBonus.value));
    if (newHomeland.characteristicsBonus) {
      dispatch(adjustCharacteristics(newHomeland.characteristicsBonus));
    }
  };
}
