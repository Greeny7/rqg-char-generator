import { NICE_ACTION, NiceStore } from './niceStoreTypes';

const defaultState: NiceStore = {
    lastNiceActionContent: null
};

const niceStore = (state = defaultState, action): NiceStore => {
    switch (action.type) {
        case NICE_ACTION:
            return {
                ...state,
                lastNiceActionContent: action.payload.content
            }
        default:
            return state
    }
}

export default niceStore