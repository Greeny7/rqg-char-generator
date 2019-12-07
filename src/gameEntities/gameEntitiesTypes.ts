import {CharacteristicsStore} from "../store/characterStore/characterStoreTypes";

export interface Homeland {
    title: HomelandTitle;
    description: {title: string, text: string}[];
    commonCults: CultTitle[];
    sugggestedOccupations: OccupationTitle[];
    passions: Passion[];
    runeBonus: {title: RuneElementalTitle, value: number},
    characteristicsBonus?: CharacteristicsStore
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
    'Praxian tribes - Bison Riders' |
    'Praxian tribes - High Llama' |
    'Praxian tribes - Impala' |
    'Praxian tribes - Pol-Joni' |
    'Praxian tribes - Sable Riders' |
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

export enum Characteristics {
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

export enum HitLocation {
    LEG = 'leg',
    ABDOMEN = 'abdomen',
    CHEST = 'chest',
    ARM = 'arm',
    HEAD = 'head',
}

export interface RuneElemental {
    title: RuneElementalTitle,
    type: RuneType.ELEMENTAL,
    description: string,
    characteristic: Characteristics,
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
    type: RuneType.FORM,
    title: RuneFormTitle,
    description: string,
    oppositeRune: RuneFormTitle,
}

export interface RunePower {
    type: RuneType.POWER,
    title: RunePowerTitle,
    description: string,
    oppositeRune: RunePowerTitle,
}