export function objectForEach(obj, fn) {
  Object.keys(obj).forEach((objKey) => {
    fn(objKey, obj[objKey]);
  });
}
export function objectMap(obj, fn) {
  const newObject = {};
  Object.keys(obj).forEach((objKey) => {
    newObject[objKey] = fn(objKey, obj[objKey]);
  });
  return newObject;
}
