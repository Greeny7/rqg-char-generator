import { createStore, applyMiddleware, compose, combineReducers  } from 'redux';
import niceStore from './niceStore/niceStore';
import lovelyStore from './lovelyStore/lovelyStore';
import { NiceStore } from './niceStore/niceStoreTypes';
import { LovelyStore } from './lovelyStore/lovelyStoreTypes';

export interface GlobalState {
    niceStore: NiceStore;
    lovelyStore: LovelyStore;
}

const store = createStore(
    combineReducers<GlobalState>({
        niceStore,
        lovelyStore,
    }),
);

export { store };