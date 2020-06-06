import {Rune, RuneElementalTitle, RuneForm, RuneFormTitle, RunePowerTitle} from "../gameEntitiesTypes";

export type MagicType = 'Rune Magic' | 'Spirit Magic' | 'Sorcery';

export type SpiritSpell = {
    title: string,
    description: string,
    descriptionRu?: string,
    mpCost: number | 'variable',
    duration?: 'temporal' | 'instant' | 'permanent',
    range?: 'ranged' | 'touch' | 'self',
    type?: 'active' | 'passive' | 'mixed',
    ritual?: boolean,
    enchantment?: boolean,
}

export type RuneSpell = {
    title: string,
    runes: Rune[],
    description: string,
    descriptionRu?: string,
    rpCost: number | 'variable',
    stackable?: boolean,
    oneUse?: boolean,
    duration?: string,
    range?: 'ranged' | 'touch' | 'self',
    type?: 'active' | 'passive' | 'mixed',
    common?: boolean,
    ritual?: boolean,
    enchantment?: boolean,
}

export type Spell = SpiritSpell | RuneSpell;