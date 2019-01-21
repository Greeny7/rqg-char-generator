import {Characteristics, Homeland, RuneElementalTitle} from "../gameEntitiesTypes";

export const praxBisonRiders: Homeland = {
    title: "Praxian tribes - Bison Riders",
    description: [
        {
          title: '',
          text: `
          These barbarian nomads reside in the chaparral plains east of
Dragon Pass. Each tribe rides and herds the beast for which it
is named: bison, bolo lizard, high llama, impala, rhinoceros,
sable antelope, and even the horse-riding Pol-Joni. The horse
is strictly taboo for most Praxians (except for the Pol-Joni).
          `
        },
        {
            title: 'Stereotype',
            text: `
              Praxians are cruel, tough, and savage, and live in a constant
state of war with each other and their harsh environment.
They hate horses, disdain foreigners, and their greatest
ambition is to increase the size of their herds. They hate
Chaos and blame it for everything bad in the world.
            `
        },
        {
            title: 'Common Attitudes',
            text: `
Praxians value tradition highly. Courage and knowledge of
the ancient ways are the primary virtues for all Praxians.
Honesty is required towards members of the same tribe,
but not expected towards outsiders. Hatred of Chaos is a
necessity, and any mercy or compassion exhibited towards
anything of Chaos is considered the supreme moral flaw,
usually punishable by death.
            `
        },
        {
            title: '',
            text: `
            Bison Riders are brown-skinned and dark-haired. Most men
wear beards, even in the hot Praxian summer. Like their
beasts, the Bison Riders are big and thick, slow to move but
terrible on impact. 
            `
        }
    ],

    commonCults: ['Waha', 'Daka Fal', 'Eiritha', 'Storm Bull', 'Orlanth'],
    sugggestedOccupations: [],
    passions: [
        {name: 'Hate', target: 'Chaos', value: 60},
        {name: 'Love', target: 'family', value: 60},
        {name: 'Loyalty', target: 'tribe', value: 60}
    ],
    runeBonus: {
        title: RuneElementalTitle.AIR,
        value: 10
    },
    characteristicsBonus: {
        [Characteristics.SIZ]: 2,
        [Characteristics.DEX]: -2,
    }
};