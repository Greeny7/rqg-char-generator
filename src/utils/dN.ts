export function rollD6(n) {
    let res = 0;
    for (let i = 0; i < n; i++) {
        res += Math.ceil(Math.random() * 6);
    }
    return res;
}