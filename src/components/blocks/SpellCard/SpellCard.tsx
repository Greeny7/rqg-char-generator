import {SpiritSpell} from "../../../gameEntities/magic/types";
import * as React from "react";
import {useState} from "react";
const CSS = require('./SpellCard.css');

export const SpellCard = (spell: SpiritSpell) => {
    const [rolled, changeRolled] = useState(false)

    const containerClasses = [CSS.container];
    if (rolled) {
        containerClasses.push(CSS.rolled)
    }

    return <div className={containerClasses.join(' ')}>
        {/*<button className={CSS.buttonRoll} onClick={() => changeRolled(!rolled)}>{rolled ? '+' : '-'}</button>*/}
        <div className={CSS.title}>{spell.title}</div>
        {spell.mpCost && <p className={CSS.mpCost}>MP cost: {spell.mpCost}</p>}
        <p><b>
            {spell.ritual && 'ritual, '}
            {spell.enchantment && 'enchantment, '}
            {[spell.range, spell.duration, spell.type].filter(Boolean).join(', ')}
        </b></p>
        <div className={CSS.text}>
            {spell.description.split('/n').map(line => <p>{line}</p>)}
        </div>
    </div>;
};