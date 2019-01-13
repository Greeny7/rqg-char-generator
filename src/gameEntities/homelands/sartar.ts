import {Homeland, RuneElementalTitle} from "../gameEntitiesTypes";

export const sartar: Homeland = {
    title: "Sartar",
    description: [
        {
            title: '',
            text: `
The Kingdom of Sartar is the epicenter of the Hero Wars.
Its eponymous founder united the lawless tribes that lived as
exiles and organized them into a unified principality. After
marrying the Feathered Horse Queen, Sartar was named
King, and Sartar began a rapid growth to power and prestige.
Sartar was occupied by the Lunar Empire for a generation,
but overthrew Lunar rule in 1625.
The Sartar Homeland also includes the Hendriki of
Whitewall, even though they have never been ruled by the
Princes of Sartar.
`
        },
        {
            title: 'Stereotype',
            text: `
              Sartarites are quarrelsome, reckless, and fiercely independent.
Men are emotional, often violently passionate, with swiftly
shifting opinions and feelings. Women are cunning, practical,
and vengeful. Sartarites are devoted to Orlanth and Ernalda,
and hate the Lunar Empire with a burning passion. 
            `
        },
        {
            title: 'Common Attitudes',
            text: `
Sartarites are loyal to their clan above all, and are devoted
to their gods, especially to Orlanth who is the patron of the
kingdom. They hate the Lunar Empire, and are willing to
ally with non-humans and even dragons to fight against it. 
            `
        },
    ],

    commonCults: ['Ernalda', 'Orlanth', 'Babeester Gor', 'Chalana Arroy', 'Eurmal', 'Issaries', 'Lhankor Mhy', 'Maran Gor', 'Humakt', 'Storm Bull', 'Yelmalio'],
    sugggestedOccupations: ['Farmer', 'Noble', 'Priest', 'Warrior'],
    passions: [
        {name: 'Love', target: 'family', value: 60},
        {name: 'Loyalty', target: 'clan', value: 60},
        {name: 'Loyalty', target: 'tribe', value: 60}
    ],
    runeBonus: {
        title: RuneElementalTitle.AIR,
        value: 10
    }
};