import {RuneElemental, RuneForm, RunePower} from "../../../gameEntities/gameEntitiesTypes";

export interface CharacterRunes {
    elementalRunesAffinity: RuneElemental[];
    formAndPowerRunesAffinities: RunePower | RuneForm[];
    elemental: {
        wind: number,
        earth: number,
        water: number,
        fire: number,
        moon: number,
        darkness: number,
    },
    power: {
        stasis: number,
        movement: number,
        harmony: number,
        disorder: number,
        death: number,
        fertility: number,
    },
    form: {
        beast: number,
        man: number,
    }
}