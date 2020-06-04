export type MagicType = 'Rune Magic' | 'Spirit Magic' | 'Sorcery';

export type SpiritSpell = {
    title: string,
    description: string,
    mpCost: number | 'variable',
    duration?: 'temporal' | 'instant' | 'permanent',
    range?: 'ranged' | 'touch' | 'self',
    type?: 'active' | 'passive' | 'mixed',
    common?: boolean,
    ritual?: boolean,
    enchantment?: boolean,
    custom?: string,
}