import {RunePower, RunePowerTitle, RuneType} from "../gameEntitiesTypes";

export const runeMovement: RunePower = {
    type: RuneType.POWER,
    title: RunePowerTitle.MOVEMENT,
    description: '',
    oppositeRune: RunePowerTitle.STASIS
};

export const runeStasis: RunePower = {
    type: RuneType.POWER,
    title: RunePowerTitle.STASIS,
    description: '',
    oppositeRune: RunePowerTitle.MOVEMENT
};

export const runeTruth: RunePower = {
    type: RuneType.POWER,
    title: RunePowerTitle.TRUTH,
    description: '',
    oppositeRune: RunePowerTitle.ILLUSION
};

export const runeIllusioin: RunePower = {
    type: RuneType.POWER,
    title: RunePowerTitle.ILLUSION,
    description: '',
    oppositeRune: RunePowerTitle.TRUTH
};

export const runeFertility: RunePower = {
    type: RuneType.POWER,
    title: RunePowerTitle.FERTILITY,
    description: '',
    oppositeRune: RunePowerTitle.DEATH
};

export const runeDeath: RunePower = {
    type: RuneType.POWER,
    title: RunePowerTitle.DEATH,
    description: '',
    oppositeRune: RunePowerTitle.FERTILITY
};

export const runeHarmony: RunePower = {
    type: RuneType.POWER,
    title: RunePowerTitle.HARMONY,
    description: '',
    oppositeRune: RunePowerTitle.DISORDER
};

export const runeDisorder: RunePower = {
    type: RuneType.POWER,
    title: RunePowerTitle.DISORDER,
    description: '',
    oppositeRune: RunePowerTitle.HARMONY
};