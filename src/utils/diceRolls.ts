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