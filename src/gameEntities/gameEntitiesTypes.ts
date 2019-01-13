export interface Homeland {
    title: HomelandTitle;
    description: {title: string, text: string}[];
    commonCults: CultTitle[];
    sugggestedOccupations: OccupationTitle[];
    passions: Passion[]
}

export interface Cult {
    title: CultTitle;
    description: string;
    runes: RuneElementalTitle & RunePowerTitle & RuneFormTitle[]
}

export type CultTitle =
    'Orlanth' |
    'Ernalda' |
    'Babeester Gor' |
    'Chalana Arroy' |
    'Eurmal' |
    'Humakt' |
    'Issaries' |
    'Lhankor Mhy' |
    'Maran Gor'| 'Storm Bull' |
    'Yelmalio' |
    'Waha' |
    'Daka Fal' |
    'Eiritha' |
    'Seven Mothers' |
    'Odayla' |
    'Argan Argar'
    ;

export type HomelandTitle =
    'Sartar' |
    'Esrolia' |
    'Grazelands' |
    'Prax Bison' |
    'Prax High Llama' |
    'Prax Impala' |
    'Prax Pol-Joni' |
    'Prax Sable Riders' |
    'Lunar Tarsh' |
    'Old Tarsh';

export interface Passion {
    name: string;
    target?: string;
    value: number;
}

export type OccupationTitle =
    'Assistant Shaman' |
    'Bandit' |
    'Chariot Driver' |
    'Crafter' |
    'Entertainer' |
    'Farmer' |
    'Fisher' |
    'Healer' |
    'Herder' |
    'Hunter' |
    'Merchant' |
    'Noble' |
    'Philosopher' |
    'Priest' |
    'Scribe' |
    'Thief' |
    'Warrior';

export enum Characteristic {
    STR = 'STR',
    SIZ = 'SIZ',
    DEX = 'DEX',
    CON = 'CON',
    INT = 'INT',
    CHA = 'CHA',
    POW = 'POW'
}

export enum SkillCategory {
    MANIPULATION,
    MAGIC,
    AGILITY,
    STEALTH,
    COMMUNICATION,
    PERCEPTION
}

export enum RuneType {
    ELEMENTAL = 'elemental',
    POWER = 'power',
    FORM = 'form',
}

export enum RuneElementalTitle {
    WIND = 'wind',
    EARTH = 'earth',
    WATER = 'water',
    FIRE = 'fire/sky',
    MOON = 'moon',
    DARKNESS = 'darkness',
    AIR = 'air',
}

export enum RunePowerTitle {
    STASIS = 'stasis',
    MOVEMENT = 'movement',
    HARMONY = 'harmony',
    DISORDER = 'disorder',
    DEATH = 'death',
    FERTILITY = 'fertility',
    TRUTH = 'truth',
    ILLUSION = 'illusion',
}

export enum RuneFormTitle {
    BEAST = 'beast',
    MAN = 'man',
}

export interface RuneElemental {
    title: RuneElementalTitle,
    description: string,
    characteristic: Characteristic,
    personality: string,
    sense: string,
    skillCategory: SkillCategory,
    weapon: string,
    organs: string,
    color: string,
    metal: string,
    phyla: string
}

export interface RuneForm {
    title: RuneFormTitle,
    description: string,
    oppositeRune: RuneFormTitle,
}

export interface RunePower {
    title: RunePowerTitle,
    description: string,
    oppositeRune: RunePowerTitle,
}