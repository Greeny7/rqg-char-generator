import {SpiritSpell} from "../../../gameEntities/magic/types";
import * as React from "react";
import {useState} from "react";
const CSS = require('./SpellCard.css');

interface SpellCardProps {
    spell: SpiritSpell,
    isBookmarked: boolean,
    bookmark: (spellTitle: string, mark: boolean) => void
}

export const SpellCard: React.FC<SpellCardProps> = (props) => {
    const {spell, bookmark, isBookmarked} = props;

    const containerClasses = [CSS.container];
    if (isBookmarked) {
        containerClasses.push(CSS.bookmarked)
    }

    return <div className={containerClasses.join(' ')}>
        <div className={CSS.title}>
            <button className={CSS.buttonMark} onClick={() => bookmark(spell.title, !isBookmarked)}>*</button>
            <span>{spell.title}</span>
        </div>
        <p><b>
            {spell.mpCost && `${spell.mpCost} MP, `}
            {spell.ritual && 'ritual, '}
            {spell.enchantment && 'enchantment, '}
            {[spell.range, spell.duration, spell.type].filter(Boolean).join(', ')}
        </b></p>
        <div className={CSS.text} contentEditable={true}>
            {spell.description.split('/n').map(line => <p>{line}</p>)}
        </div>
    </div>;
};