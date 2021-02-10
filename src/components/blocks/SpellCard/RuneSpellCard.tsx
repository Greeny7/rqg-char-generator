import {RuneSpell} from "../../../gameEntities/magic/types";
import * as React from "react";
import CSS from './SpellCard.module.less';

interface SpellCardProps {
    spell: RuneSpell,
    isBookmarked: boolean,
    bookmark: (spellTitle: string, mark: boolean) => void
}

export const RuneSpellCard: React.FC<SpellCardProps> = (props) => {
    const {spell, bookmark, isBookmarked} = props;

    const containerClasses = [CSS.container];
    if (isBookmarked) {
        containerClasses.push(CSS.bookmarked)
    }

    const descr = [];
    if (spell.ritual) {
        descr.push('ritual');
    }
    if (spell.enchantment) {
        descr.push('enchantment');
    }
    if (spell.duration) {
        if (spell.duration !== 'temporal' && spell.duration !== 'instant') {
            descr.push('duration(' + spell.duration + ')');
        } else {
            descr.push(spell.duration);
        }
    }
    if (spell.oneUse) {
        descr.push('one use');
    }
    if (spell.range) {
        descr.push('range');
    }

    if (spell.stackable !== undefined) {
        descr.push(spell.stackable ? 'stackable' : 'nonstackable')
    }

    return <div className={containerClasses.join(' ')}>
        <div className={CSS.title}>
            <button className={CSS.buttonMark} onClick={() => bookmark(spell.title, !isBookmarked)}>*</button>
            <span>{spell.title}</span>
        </div>
        {spell.runes.length && <p className={CSS.runes}>Runes: {spell.runes.join(', ')}</p>}
        {spell.rpCost && <p className={CSS.mpCost}>RP cost: {spell.rpCost}</p>}
        <p><b>
            {descr.join(', ')}
        </b></p>
        <div className={CSS.text} contentEditable={true}>
            {spell.description.split('/n').map(line => <p>{line}</p>)}
        </div>
    </div>;
};