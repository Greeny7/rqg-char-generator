import { Homeland, HomelandTitle } from './storeTypes';
import { setHomelandTitle, setPassions } from './actions';
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