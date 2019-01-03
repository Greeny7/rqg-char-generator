export interface Character {
    name: string;
    homeland: HomelandTitle;
    passions: Passion[];
    cult: Cult;
}

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
    runes: RuneElemental & RunePower & RuneForm[]
}

export type RuneElemental = 'wind' | 'earth' | 'water' | 'fire' | 'moon' | 'darkness';
export type RunePower = 'stasis' | 'movement' | 'harmony' | 'disorder' | 'death' | 'fertility';
export type RuneForm = 'beast' | 'man';

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