import {RuneElementalTitle, RuneFormTitle, RunePowerTitle} from "../../../gameEntities/gameEntitiesTypes";

export interface CharacterRunes {
    elementalRunesAffinity: RuneElementalTitle[];
    formAndPowerRunesAffinities: (RunePowerTitle | RuneFormTitle)[];
    elemental: {
        air: number,
        water: number,
        earth: number,
        'fire/sky': number,
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
        illusion: number,
        truth: number,
    },
    form: {
        beast: number,
        man: number,
    }
}