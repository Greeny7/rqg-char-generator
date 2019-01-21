type iterateFn = (objKey: string, objValue) => any;

export function objectForEach(obj: Object, fn: iterateFn) {
    Object.keys(obj).forEach(objKey => {
        fn(objKey, obj[objKey]);
    })
}

export function objectMap(obj: Object, fn: iterateFn) {
    const newObject = {};
    Object.keys(obj).forEach(objKey => {
        newObject[objKey] = fn(objKey, obj[objKey]);
    });
    return newObject;
}