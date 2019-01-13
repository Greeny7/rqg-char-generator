import { esrolia } from './homelands/esrolia';
import { sartar } from './homelands/sartar';
import {Homeland, RuneElemental, RuneForm, RunePower} from "./gameEntitiesTypes";
import {cloneObject} from "../utils/cloneObject";
import {
    runeDeath, runeDisorder, runeFertility, runeHarmony, runeIllusioin, runeMovement, runeStasis,
    runeTruth
} from "./runes/powerRunes";
import {runeBeast, runeMan} from "./runes/formRunes";
import {runeAir, runeDarkness, runeEarth, runeFire, runeMoon, runeWater} from "./runes/elementalRunes";

interface GameEntities {
    homelands: Homeland[],
    runes: {
        power: RunePower[],
        form: RuneForm[],
        elemental: RuneElemental[]
    }
}

const gameEntities: GameEntities = {
    homelands: [esrolia, sartar],
    runes: {
        power: [
            runeStasis,
            runeMovement,
            runeTruth,
            runeIllusioin,
            runeFertility,
            runeDeath,
            runeHarmony,
            runeDisorder,
        ],
        form: [
            runeMan,
            runeBeast
        ],
        elemental: [
            runeAir,
            runeWater,
            runeEarth,
            runeFire,
            runeDarkness,
            runeMoon,
        ],
    }
};

export function getHomelandsList() {
    return cloneObject(gameEntities.homelands);
}

export function getRunesList() {
    return cloneObject(gameEntities.runes);
}