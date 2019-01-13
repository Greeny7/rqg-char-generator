import {getHomelandsList} from "../../gameEntities/gameEntities";
import {GlobalState} from "../storeTypes";
import {setHomelandTitle, setPassions} from "./characterActions";
import {Homeland, HomelandTitle} from "../../gameEntities/gameEntitiesTypes";

export function selectHomeland(homelandTitle: HomelandTitle) {
    return function(dispatch, getState: () => GlobalState) {
        const selectedHomeland: Homeland = getHomelandsList().find(item => item.title === homelandTitle);
        const passions = [...selectedHomeland.passions];

        dispatch(setHomelandTitle(homelandTitle));
        dispatch(setPassions(passions))
    }
}