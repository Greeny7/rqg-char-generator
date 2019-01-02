import { LOVELY_ACTION, LovelyStore } from './lovelyStoreTypes';

const defaultState: LovelyStore = {
    lastLovelyActionContent: null
};

const lovelyStore = (state = defaultState, action): LovelyStore => {
    switch (action.type) {
        case LOVELY_ACTION:
            return {
                ...state,
                lastLovelyActionContent: action.payload.content
            }
        default:
            return state
    }
}

export default lovelyStore