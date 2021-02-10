import {esrolia} from "./homelands/esrolia.js";
import {sartar} from "./homelands/sartar.js";
import {cloneObject} from "../utils/cloneObject.js";
import {
  runeDeath,
  runeDisorder,
  runeFertility,
  runeHarmony,
  runeIllusioin,
  runeMovement,
  runeStasis,
  runeTruth
} from "./runes/powerRunes.js";
import {runeBeast, runeMan} from "./runes/formRunes.js";
import {runeAir, runeDarkness, runeEarth, runeFire, runeMoon, runeWater} from "./runes/elementalRunes.js";
import {praxBisonRiders} from "./homelands/praxBisonRiders.js";
const gameEntities = {
  homelands: [sartar, esrolia, praxBisonRiders],
  runes: {
    power: [
      runeStasis,
      runeMovement,
      runeTruth,
      runeIllusioin,
      runeFertility,
      runeDeath,
      runeHarmony,
      runeDisorder
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
      runeMoon,
      runeDarkness
    ]
  }
};
export function getHomelandsList() {
  return cloneObject(gameEntities.homelands);
}
export function getHomeland(title) {
  const homeland = gameEntities.homelands.find((item) => item.title === title);
  return cloneObject(homeland);
}
export function getRunesList() {
  return cloneObject(gameEntities.runes);
}
