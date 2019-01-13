import {StepsStore} from "./stepsStore/stepsStoreTypes";
import {CharacterStore} from "./characterStore/characterStoreTypes";

export interface GlobalState {
    steps: StepsStore,
    character: CharacterStore,
}