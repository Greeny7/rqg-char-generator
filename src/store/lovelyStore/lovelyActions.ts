import { LOVELY_ACTION } from "./lovelyStoreTypes";

export const makeLovelyAction = content => ({
    type: LOVELY_ACTION,
    payload: {
        content
    }
});
