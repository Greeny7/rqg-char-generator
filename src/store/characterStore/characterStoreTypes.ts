import {Cult, HomelandTitle, Passion} from "../../gameEntities/gameEntitiesTypes";
import {CharacterRunes} from "./characterRunesStore/characterRunesStoreTypes";

export interface CharacterStore {
    name: string;
    homeland: HomelandTitle;
    passions: Passion[];
    cult: Cult;
    runes: CharacterRunes
}