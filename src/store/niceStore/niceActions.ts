import { NICE_ACTION } from "./niceStoreTypes";

export const makeNiceAction = content => ({
    type: NICE_ACTION,
    payload: {
        content
    }
});
