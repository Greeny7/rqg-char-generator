import {GlobalState} from "../storeTypes";
import {setInitialCharacteristics, setInitialRunes} from "./stepsActions";


export const saveInitialRuneValues = () => (dispatch, getState: () => GlobalState) => {
    const {elemental, form, power} = getState().character.runes;
    dispatch(setInitialRunes(elemental, power, form));
};

export const saveInitialCharacteristicsValues = () => (dispatch, getState: () => GlobalState) => {
    const {characteristics} = getState().character;
    dispatch(setInitialCharacteristics(characteristics));
};