import { esrolia } from './homelands/esrolia';
import { sartar } from './homelands/sartar';

function cloneObject<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj))
}

type gameEntityTypes = 'homelands';

const gameEntities = {
    homelands: [esrolia, sartar],
};

export function getGameEntity(key: gameEntityTypes) {
    if (gameEntities[key] === undefined) {
        throw Error('no such game entity as ' + key);
    }
    return cloneObject(gameEntities[key]);
}