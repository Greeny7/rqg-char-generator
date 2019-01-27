export interface CharacterRunes {
    elemental: ElementalRunesStore,
    power: PowerRunesStore,
    form: FormRunesStore
}

export interface ElementalRunesStore {
    air: number,
    water: number,
    earth: number,
    'fire/sky': number,
    moon: number,
    darkness: number,
}

export interface PowerRunesStore {
    stasis: number,
    movement: number,
    harmony: number,
    disorder: number,
    death: number,
    fertility: number,
    illusion: number,
    truth: number,
}

export interface FormRunesStore {
    beast: number,
    man: number,
}