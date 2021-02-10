import {RuneElementalTitle} from "../gameEntitiesTypes.js";
export const esrolia = {
  title: "Esrolia",
  description: [
    {
      title: "",
      text: `
              Esrolia is a civilized queendom in the Holy Country. Esrolian
              families are matrilineal and ruled by matriarchs. It is densely
              populated; \u201Ctoo dense,\u201D say many. The residents here are
              mostly farmers worshiping Ernalda the Earth Mother and
              her family. The Mother here has many lovers, although
              Orlanth is her husband and her favorite. Barntar is the most
              popular men\u2019s god. 
              Although Esrolia is primarily rural and agricultural, it
              has a large urban population and is a great center of trade.
              Esrolia has powerful mercantile interests and its ships travel
              to far-off distant ports. Esrolian architects, artists, crafters,
              healers, and scribes are among the greatest in Glorantha.
            `
    },
    {
      title: "Stereotype",
      text: `
              The Esrolians are civilized, curious, luxurious, and sensual.
              Their styles set the standard for status for many lands,
              including Dragon Pass. They are cosmopolitan, with
              knowledge of many distant realms. They tend to refrain from
              martial pursuits, preferring to hire mercenaries. Esrolian
              women are proud, ambitious, devious, and very practical.
              Men are emotional, loyal, reckless, and quarrelsome.
            `
    },
    {
      title: "Common Attitudes",
      text: `
              Esrolians are loyal to their kin, their cities, and their queen.
              They believe women make better rulers than men. Esrolians
              revere the Earth goddesses, and Ernalda especially. They
              dislike war, and favor negotiation over open conflict.
            `
    }
  ],
  commonCults: ["Ernalda", "Argan Argar", "Babeester Gor", "Chalana Arroy", "Eurmal", "Issaries", "Lhankor Mhy", "Maran Gor", "Orlanth"],
  sugggestedOccupations: ["Healer", "Merchant", "Priest", "Scribe", "Thief"],
  passions: [
    {name: "Love", target: "family", value: 60},
    {name: "Loyalty", target: "city", value: 60},
    {name: "Loyalty", target: "clan", value: 60}
  ],
  runeBonus: {
    title: RuneElementalTitle.EARTH,
    value: 10
  }
};
