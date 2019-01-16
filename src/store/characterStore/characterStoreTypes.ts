import {Characteristics, Cult, HomelandTitle, Passion} from "../../gameEntities/gameEntitiesTypes";
import {CharacterRunes} from "./characterRunesStore/characterRunesStoreTypes";

export interface CharacterStore {
    name: string;
    homeland: HomelandTitle;
    passions: Passion[];
    cult: Cult;
    runes: CharacterRunes;
    characteristics: CharacteristicsStore
}

export interface CharacteristicsStore {
    [Characteristics.STR]?: number;
    [Characteristics.SIZ]?: number;
    [Characteristics.DEX]?: number;
    [Characteristics.CON]?: number;
    [Characteristics.INT]?: number;
    [Characteristics.CHA]?: number;
    [Characteristics.POW]?: number;
}
