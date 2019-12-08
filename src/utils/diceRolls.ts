import {DiceRoll} from "../gameEntities/gameEntitiesTypes";

export function rollD6(n) {
    let res = 0;
    for (let i = 0; i < n; i++) {
        res += roll(6);
    }
    return res;
}

export const roll = (dice: number) => rnd(1, dice);

const rnd = (from: number, to: number) => Math.max(
    from,
    Math.ceil(Math.random() * (to - from + 1))
);

export const diceToString = (diceRoll: DiceRoll, withSign?: Boolean): string => {
    if (!diceRoll) return '0';

    const {quantity, isNegative, fixedPart, type} = diceRoll;

    const dbQuantity = quantity || '1';
    const dbSign = isNegative ? '-' : '+';
    const fixedPartStr = !fixedPart
        ? ''
        : fixedPart > 0
        ? '+' + fixedPart
        : '-' + fixedPart;

    let result = dbQuantity + type + fixedPartStr;
    if (withSign) result = dbSign + result;

    return result;
};