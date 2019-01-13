import {RunePower, RunePowerTitle} from "../gameEntitiesTypes";

export const runeMovement: RunePower = {
    title: RunePowerTitle.MOVEMENT,
    description: '',
    oppositeRune: RunePowerTitle.STASIS
};

export const runeStasis: RunePower = {
    title: RunePowerTitle.STASIS,
    description: '',
    oppositeRune: RunePowerTitle.MOVEMENT
};

export const runeTruth: RunePower = {
    title: RunePowerTitle.TRUTH,
    description: '',
    oppositeRune: RunePowerTitle.ILLUSION
};

export const runeIllusioin: RunePower = {
    title: RunePowerTitle.ILLUSION,
    description: '',
    oppositeRune: RunePowerTitle.TRUTH
};

export const runeFertility: RunePower = {
    title: RunePowerTitle.FERTILITY,
    description: '',
    oppositeRune: RunePowerTitle.DEATH
};

export const runeDeath: RunePower = {
    title: RunePowerTitle.DEATH,
    description: '',
    oppositeRune: RunePowerTitle.FERTILITY
};

export const runeHarmony: RunePower = {
    title: RunePowerTitle.HARMONY,
    description: '',
    oppositeRune: RunePowerTitle.DISORDER
};

export const runeDisorder: RunePower = {
    title: RunePowerTitle.DISORDER,
    description: '',
    oppositeRune: RunePowerTitle.HARMONY
};