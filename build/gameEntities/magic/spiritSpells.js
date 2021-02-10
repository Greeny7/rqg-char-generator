export const spiritSpells = [
  {
    title: "Befuddle",
    mpCost: 2,
    duration: "temporal",
    range: "ranged",
    type: "passive",
    description: `
            This spell confuses a victim that succumbs to it. It does not
            change their beliefs or perceptions, but it does muddy them
            up. The caster of this spell must first succeed in POW vs.
            POW resistance roll against the intended target. A victim of
            Befuddle may not attack, cast an offensive spell, sound the
            alarm, and so on. However, if attacked, they may parry and
            defend at full value. Beginning the next melee round, the 
            affected victim assumes that who- or whatever attacked them
            is their enemy, and will extend that to the caster\u2019s obvious
            allies. Thus, with deceit or clever misdirection, a Befuddled
            opponent might end up attacking their own party for as long
            as the spell is in effect. /n
            Each melee round, the victim can attempt to shake off
            their Befuddlement. That is all the victim can do in that
            melee round. The victim must roll D100 greater than their
            INT\xD75 (due to the confusion of thought processes, where
            smarter targets are led into dizzying mental labyrinths while
            dull-witted ones can simply act), or must succeed with the 
            Meditate skill. Only one of these two approaches can be
            attempted per melee round. If either tactic is successful, then
            the Befuddle spell is defeated, and the adventurer can act
            normally the following melee round. Failing either tactic,
            the victim remains Befuddled. /n
            If the INT\xD75 roll results in a special or critical success,
            the Befuddled adventurer mistakes friends for enemies (and
            vice versa) and acts accordingly
        `
  },
  {
    title: "Binding Enchantment",
    mpCost: 1,
    duration: "temporal",
    type: "passive",
    enchantment: true,
    ritual: true,
    description: `
        A Binding Enchantment is a magical item that can hold a
        spirit or other otherworld creature. The item to serve as the
        Binding Enchantment must be enchanted with 1 point of
        POW per type of characteristic possessed by the creature.
        See page 249 for more on Binding Enchantments.
        `
  },
  {
    title: "Bladesharp",
    mpCost: "variable",
    duration: "temporal",
    type: "passive",
    range: "touch",
    description: `
            This spell works on any cutting, stabbing, or hacking weapon.
            It increases the chance to hit by +5% and does 1 additional
            point of damage per point of spell applied. The spell is
            incompatible with the other weapon-enhancing spells of
            Bludgeon and Fireblade. If Dullblade is also cast on the
            weapon, the improved chance to hit from Bladesharp is not
            affected, but the weapon\u2019s additional damage is reduced by
            the second spell. /n
            Note that the magical damage can hurt magical creatures
            otherwise invulnerable to normal weapons. Telmori Wolfbrothers, for instance, are not hurt by the weapon\u2019s normal
            damage roll, but may be hurt by the magical damage bonus. 
        `
  },
  {
    title: "Bludgeon",
    mpCost: "variable",
    duration: "temporal",
    type: "passive",
    range: "touch",
    description: `
            This spell works on any smashing or crushing weapon. It
            increases the chance to hit by +5% and does 1 additional
            point of damage per point of spell. This spell is incompatible
            with the other weapon-enhancing spells of Bladesharp
            and Fireblade. /n
            Note that the magical damage can hurt magical creatures
            otherwise invulnerable to normal weapons. Telmori Wolfbrothers, for instance, are not hurt by the weapon\u2019s normal
            damage roll, but may be hurt by the magical damage bonus. 
        `
  },
  {
    title: "Control (entity)",
    mpCost: 1,
    duration: "temporal",
    type: "mixed",
    range: "ranged",
    description: `
            Active (until the entity is instructed) then Passive /n
            
            This spell comes in many variations, such as discorporate
            spirits, nymphs, specific type of elementals, as well as
            mundane animals such as hawks, dogs, mammoths,
            shadowcats, etc. Each casting of this spell subjects
            the indicated entity to the caster\u2019s will. To use a
            Control spell, the caster must first reduce the
            magic points of their target to 0 in spirit combat (see Spirit
            Combat on page 366), so these spells are typically used by
            shamans. The next melee round the user casts their Control
            spell. If successfully cast, the entity must obey all commands
            issued by the caster. These commands must be given, acted
            upon, and completed, before the end of the spell\u2019s duration. /n
            The controlled entity is in a special form of telepathic
            communication with the caster. This mental communication
            is limited to line-of-sight. To instruct a Controlled entity,
            the caster must form a mental image of the actions that they
            wish the entity to perform. Commanding an entity takes
            one full melee round before the entity can act. 
        `
  },
  {
    title: "Coordination",
    mpCost: 2,
    duration: "temporal",
    type: "passive",
    range: "touch",
    description: `
            This spell increases the target\u2019s DEX by 3. This decreases
            the target\u2019s SR by 1 and increases all Agility, Manipulation
            (including weapon skills), and Stealth skills by +5%.
        `
  },
  {
    title: "Countermagic",
    mpCost: "variable",
    duration: "temporal",
    type: "passive",
    range: "ranged",
    description: `
            This defensive spell protects the target it is cast upon against
            any other incoming spell, including those such as Detection,
            Protection, and even Healing
            spells. However, it
            does not interfere
            with previously
            enchanted objects, such as a sword with Bladesharp on it. It
            does not work against spirits, but may work against spells
            cast by those spirits. /n
            If the oncoming spell is 2 or more points weaker than
            the Countermagic, it is eliminated and the Countermagic
            remains. If the incoming spell is equal or is one point above
            or below the points of Countermagic, both spells disappear. /n
            If the attacking spell is 2+ points stronger than the Countermagic, it eliminates the Countermagic. If it then overcomes
            the resistance of the target, it takes full effect upon its target.
            Countermagic operates at half effectiveness against Rune
            magic. Hence, 2 points of Countermagic would be needed
            to protect against a 1-point Dismiss Magic spell. /n
            This spell is incompatible with Protection, Shimmer, and
            Spirit Screen. 
        `
  },
  {
    title: "Darkwall",
    mpCost: 2,
    range: "ranged",
    duration: "temporal",
    type: "mixed",
    description: `
            Passive (Active to move the wall) /n
            
            This spell creates a wall of darkness 10 square meters in area
            and 10 cm thick. The Darkwall can be moved by the caster
            at a rate of 3 meters per melee round, provided they take no
            other action. The wall moves on the strike rank equal to the
            caster\u2019s DEX strike rank plus the magic points in the spell.
            Light sources within the darkness give no light nor can any
            sighted being see through it. Other senses, such as hearing,
            Darksense, scent, etc., are unaffected by this wall. A Darkwall
            can be moved or shaped into the height or width desired,
            so long as the total area is 10 square meters. The thickness
            always remains 10 cm. /n
            If a Lightwall is cast in the same space as a Darkwall,
            they will neutralize each other for as long as they inhabit
            the same space. 
        `
  },
  {
    title: "Demoralize",
    mpCost: 2,
    range: "ranged",
    duration: "temporal",
    type: "passive",
    description: `
            \u0417\u0430\u043A\u043B\u0438\u043D\u0430\u0442\u0435\u043B\u044C \u0434\u0435\u043B\u0430\u0435\u0442 \u0431\u0440\u043E\u0441\u043E\u043A POW \u043F\u0440\u043E\u0442\u0438\u0432 POW \u0446\u0435\u043B\u0438. \u041F\u0440\u0438 \u0443\u0441\u043F\u0435\u0445\u0435, \u0436\u0435\u0440\u0442\u0432\u0430 \u0442\u0435\u0440\u044F\u0435\u0442 \u0432\u0435\u0440\u0443 \u0432 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C
            \u0432\u044B\u0438\u0433\u0440\u0430\u0442\u044C \u0431\u043E\u0439, \u043D\u0430\u0439\u0442\u0438 \u0441\u043E\u043A\u0440\u043E\u0432\u0438\u0449\u0435, \u043F\u0440\u0438\u043D\u0435\u0441\u0442\u0438 \u0441\u043B\u0430\u0432\u0443 \u0441\u0432\u043E\u0435\u043C\u0443 \u043A\u043B\u0430\u043D\u0443, \u0438\u043B\u0438 \u0434\u043E\u0441\u0442\u0438\u0433\u043D\u0443\u0442\u044C \u043A\u0430\u043A\u043E\u0439-\u043B\u0438\u0431\u043E \u0434\u0440\u0443\u0433\u043E\u0439 \u0446\u0435\u043B\u0438.
            \u0416\u0435\u0440\u0442\u0432\u0430 \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0442\u044C \u0437\u0430\u0449\u0438\u0449\u0430\u0442\u044C\u0441\u044F, \u043D\u043E \u0448\u0430\u043D\u0441 \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u0433\u043E \u0431\u0440\u043E\u0441\u043A\u0430 \u043D\u0430 \u0430\u0442\u0430\u043A\u0443 \u0434\u043B\u044F \u043D\u0435\u0435 \u0443\u043C\u0435\u043D\u044C\u0448\u0435\u043D \u0432\u0434\u0432\u043E\u0435.
            \u041E\u043D\u0430 \u043C\u043E\u0436\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u0430\u0449\u0438\u0442\u043D\u044B\u0435 \u0438 \u0438\u0441\u0446\u0435\u043B\u044F\u044E\u0449\u0438\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F. \u0415\u0441\u043B\u0438 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0435 \u0431\u044B\u043B\u043E \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u043E \u0434\u043E \u043D\u0430\u0447\u0430\u043B\u0430 \u0431\u043E\u044F,
            \u0436\u0435\u0440\u0442\u0432\u0430 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u044B\u0442\u0430\u0442\u044C\u0441\u044F \u0430\u0442\u0430\u043A\u043E\u0432\u0430\u0442\u044C. \u0412\u0441\u0442\u0440\u0435\u0442\u0438\u0432 \u043F\u0440\u0435\u0432\u043E\u0441\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u0441\u0438\u043B\u044B, \u0436\u0435\u0440\u0442\u0432\u0430 \u0443\u0431\u0435\u0436\u0438\u0442 \u0438\u043B\u0438 \u0441\u0434\u0430\u0441\u0442\u0441\u044F. /n
            
            \u0417\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0435 Fanaticism \u0430\u043D\u043D\u0443\u043B\u0438\u0440\u0443\u0435\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 Demoralize, \u0438 \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442. \u0416\u0435\u0440\u0442\u0432\u0430, \u043E\u0441\u043E\u0437\u043D\u0430\u044E\u0449\u0430\u044F, \u0447\u0442\u043E \u043E\u043D\u0430 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u043F\u043E\u0434 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435\u043C \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F,
            \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u043F\u044B\u0442\u0430\u0442\u044C\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043D\u0430\u0432\u044B\u043A Meditate, \u0447\u0442\u043E\u0431\u044B \u0438\u0437\u0431\u0430\u0432\u0438\u0442\u044C\u0441\u044F \u043E\u0442 \u0435\u0433\u043E \u044D\u0444\u0444\u0435\u043A\u0442\u0430. /n
            
        
            The user of this spell must first succeed in a POW vs. POW
            resistance roll against the intended target. If the Demoralize
            spell is successful, the victim loses faith in their own ability
            and of their allies to win a fight, find treasure, bring honor
            to their clan, or achieve any appropriate goal. Victims can
            still defend themselves fully, but attack only at half normal
            percentage. They can only use defensive and heal spells. If
            the spell takes effect before combat is started, then the victim
            does not try to attack. Faced with superior odds, the victim
            either runs or surrenders. /n
            
            A Fanaticism spell cancels Demoralize, and vice versa. A
            victim aware of the spell can attempt to use the Meditate
            skill to remove the effects of this spell.
        `
  },
  {
    title: "Detect Enemies",
    mpCost: 1,
    range: "ranged",
    duration: "instant",
    description: `
            This spell gives the approximate direction and distance
            from the caster of any being intending to harm them, or
            it detects and locates a specific individual on whom the
            caster concentrates. The caster of the spell does not have to
            overcome the POW of potential targets to find them. /n
            The sensing effect is stopped by 1 or more meters of a
            dense substance such as stone, metal, or earth.
        `
  },
  {
    title: "Detect Life",
    mpCost: 1,
    range: "ranged",
    duration: "instant",
    description: `
            Detects the existence of human- or larger-sized life. Gives
            direction and distance from the caster. Divides life forms
            detected into two classes: those of human size (SIZ between
            3\u201321), and those of large size (SIZ 22+). Life smaller than
            SIZ 3 is ignored. It is stopped by 1 or more meters of stone,
            metal, or earth
        `
  },
  {
    title: "Detect Magic",
    mpCost: 1,
    range: "ranged",
    duration: "instant",
    description: `
            Working in a similar manner to Detect Enemies, this spell
            gives the approximate direction and distance from the caster
            of all enchantments and similar magically potent objects. It
            does not detect spirits. /n
            Detected objects glow visibly to everyone within sight
            of the object, possibly warning enemies. The spell does not
            distinguish between magical objects or enchantments, nor
            reveal what or how powerful the detected items are. The
            sensing effect is stopped by 1 or more meters of dense substances such as stone, metal, or earth.
        `
  },
  {
    title: "Detect Spirit",
    mpCost: 1,
    range: "ranged",
    duration: "instant",
    description: `
            Like Detect Life in its effects, except that it detects the
            presence of spirits. It divides spirits detected into two power
            classes: those of POW 18 and below, and those of POW
            19+. It is stopped by more than 1 or more meters of stone,
            metal, or earth.
        `
  },
  {
    title: "Detect (substance)",
    mpCost: 1,
    range: "ranged",
    duration: "instant",
    description: `
            Working in a similar manner to Detect Enemies, this spell
            gives the approximate direction and distance from the caster
            of the substance indicated. 
            /n
            The detected substance glows visibly to everyone within
            range of sight, but the spell does not assess its relative quantity or value, as these are subjective. The sensing effect is
            stopped by 1 or more meters of a dense substance such as
            stone, metal, or earth.
        `
  },
  {
    title: "Detect Trap",
    mpCost: 2,
    range: "ranged",
    duration: "instant",
    description: `
            This spell detects the intent to trap. Thus, it would detect an
            ambush, magical trap, or physical trap. It would not detect
            a naturally occurring pit, a potential avalanche, or poison,
            which are not in themselves traps. The spell makes a 3-meter
            diameter circle around the trap glow, visible to all. It does
            not give the exact location or type of the trap within that
            space, however. Note that it does not detect the existence of
            defensive spells such as Warding. It is stopped by 1 or more
            meters of stone, metal, or earth.
        `
  },
  {
    title: "Detect Undead",
    mpCost: 1,
    range: "ranged",
    duration: "instant",
    description: `
            This spell functions like Detect Life in its effect, except that
            it detects things neither dead nor alive, such as zombies,
            mummies, and vampires. It does not tell what type of undead
            is being detected, but it does tell the size (in the same manner
            as Detect Life). It is stopped by 1 or more meters of stone,
            metal, or earth.
        `
  },
  {
    title: "Dispel Magic",
    mpCost: "variable",
    range: "ranged",
    duration: "instant",
    description: `
            1 MP, \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0439 \u0432 \u044D\u0442\u043E \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0435, \u043C\u043E\u0436\u0435\u0442 \u0440\u0430\u0437\u0432\u0435\u044F\u0442\u044C \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0435 \u043C\u0430\u0433\u0438\u0438 \u0414\u0443\u0445\u043E\u0432 \u0441 \u0430\u043D\u0430\u043B\u043E\u0433\u0438\u0447\u043D\u043E\u0439 \u0441\u0438\u043B\u043E\u0439 1 MP.
            2 MP, \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435 \u0432 \u044D\u0442\u043E \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0435, \u043C\u043E\u0433\u0443\u0442 \u0440\u0430\u0437\u0432\u0435\u044F\u0442\u044C \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0435 \u0420\u0443\u043D\u043D\u043E\u0439 \u041C\u0430\u0433\u0438\u0438 \u0441 \u0441\u0438\u043B\u043E\u0439 2 RP. \u041D\u0435\u043B\u044C\u0437\u044F \u0440\u0430\u0437\u0432\u0435\u044F\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0430\u0441\u0442\u044C \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F. /n
            \u0415\u0441\u043B\u0438 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043E \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0435, \u0442\u043E Dispel \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0430\u0435\u0442 \u0437\u0430\u0449\u0438\u0442\u043D\u044B\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F, \u043D\u0430\u0447\u0438\u043D\u0430\u044F \u0441 \u0441\u0430\u043C\u043E\u0433\u043E \u043C\u043E\u0449\u043D\u043E\u0433\u043E \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0441\u043D\u044F\u0442\u043E.
            \u041E\u0434\u043D\u0430\u043A\u043E, \u043F\u043E \u0436\u0435\u043B\u0430\u043D\u0438\u044E \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u0442\u0435\u043B\u044F, \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0435 Dispel \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u043D\u0430 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0435, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0442\u043E\u0442 \u0445\u043E\u0447\u0435\u0442 \u0440\u0430\u0437\u0432\u0435\u044F\u0442\u044C.
            
            This spell eliminates magic: 1 point removes 1 magic point
            of spirit magic or intensity of sorcery spells; 2 points removes
            1 point of Rune magic spells. The total points of the spell
            must be eliminated to destroy the spell. Thus, to dispel a
            Befuddle spell requires 2 points of Dispel Magic, to dispel
            a 1-point Shield (a Rune spell) requires 2 points, and to
            dispel a Conflagration spell with 4 magic points would
            require 4 points of Dispel Magic. One cannot Dispel only
            part of a spell. /n
            When cast against a target without specifying any specific effect or target, the Dispel first destroys defensive spells,
            beginning with the most powerful spell that it can affect.
            However, it may be cast against a specific spell if the caster
            can discern what that spell is. 
        `
  },
  {
    title: "Disruption",
    mpCost: 1,
    range: "ranged",
    duration: "instant",
    description: `
            This spell damages the target\u2019s body. If the target\u2019s POW
            (or magic points for corporeal entities lacking POW) are
            overcome, the target takes 1D3 damage to a random hit
            location. This damage is not absorbed by armor. 
        `
  },
  {
    title: "Distraction",
    mpCost: 1,
    range: "ranged",
    duration: "instant",
    description: `
            When targeted at a spirit during spirit combat, if the spell is
            successfully cast, the spirit is automatically drawn away from
            attacking its current target and now attacks the caster. The
            spirit combat against the caster immediately begins on the
            next strike rank the spirit is eligible to attack. It attacks the
            caster until the caster is unconscious or the spirit is defeated
            and returns to the Spirit World. Only one spirit may be
            targeted at a time. /n
            If used against a corporeal enemy, the effect is identical.
        `
  },
  {
    title: "Dullblade",
    mpCost: "variable",
    range: "ranged",
    duration: "temporal",
    type: "passive",
    description: `
            Despite the spell\u2019s name, this spell reduces the damage
            done by any melee weapon, sharp or blunt. To work
            properly it must be cast on the weapon, and each point
            of Dullblade reduces the chance to hit by \u20135% and
            reduces damage by 1 point. If the weapon has a spirit
            in it, the spirit\u2019s magic points must be overcome for the
            spell to work. /n
            This spell specifically does not work on natural weapons
            like claws, teeth, etc. 
        `
  },
  {
    title: "Extinguish",
    mpCost: "variable",
    range: "ranged",
    duration: "instant",
    description: `
            This spell puts out fires and flames and cools hot materials
            to the ambient temperature. One point of Extinguish puts
            out a candle, torch, or lantern; 2 points puts out a small
            campfire; 3 points eliminates a bonfire, etc. Extinguished
            fires stay out and must be relit.
        `
  },
  {
    title: "Fanaticism",
    mpCost: 1,
    range: "ranged",
    duration: "temporal",
    type: "passive",
    description: `
            When cast upon a being with an INT characteristic this
            spell increases their chance to hit by half again (round up
            fractions). For example, an adventurer with Rapier 33%
            effectively has Rapier 50% while under the effects
            of Fanaticism (33\xF72=17, 33+17=50%). /n
            While affected by Fanaticism, the adventurer may not parry
            with a weapon or shield, or cast magic other than attack
            spells (Disruption, Mindblast, etc.). Additionally, the spell
            halves the target\u2019s Dodge. /n
            A successful Demoralize spell cancels the effects of a
            Fanaticism spell, leaving the target with normal morale. If
            the target does not wish the spell to be cast upon them,
            then the caster must overcome their target\u2019s POW with a
            resistance roll. 
        `
  },
  {
    title: "Farsee",
    mpCost: "variable",
    range: "ranged",
    duration: "temporal",
    type: "passive",
    description: `
            Each point of this spell halves the apparent distance as
            seen by the caster to the rest of the universe. The effect
            includes foreshortening of the field of vision. The effect can
            be switched on and off by the user for the duration of the
            spell. This has no effect on a weapon\u2019s usable range, as it
            does not affect a weapon, just the perception of the target. 
        `
  },
  {
    title: "Firearrow",
    mpCost: 2,
    range: "touch",
    duration: "instant",
    type: "passive",
    description: `
            Each point of this spell halves the apparent distance as
            seen by the caster to the rest of the universe. The effect
            includes foreshortening of the field of vision. The effect can
            be switched on and off by the user for the duration of the
            spell. This has no effect on a weapon\u2019s usable range, as it
            does not affect a weapon, just the perception of the target. /n
            A Firearrow cannot impale. The spell must be cast on an
            ordinary arrow, rock, or dart which bursts into flame and is
            consumed as the missile leaves the hand (bow, atlatl, sling,
            etc.) of the caster. Armor helps protect a target. A Firearrow
            ignites flammable material. This damage cannot be magically
            resisted because it is real physical damage, caused by the
            heat of the fire. /n
            This spell is incompatible with Multimissile and Speedart. 
        `
  },
  {
    title: "Fireblade",
    mpCost: 4,
    range: "touch",
    duration: "temporal",
    type: "active",
    description: `
            Cast on any edged weapon or spear, this spell delivers 3D6
            damage when it strikes. This replaces the normal damage
            done by the weapon. This damage cannot be magically
            resisted because it is real physical damage from the heat of
            the fire. The wielder of the weapon still applies their damage
            bonus when they strike. /n
            The weapon is unharmed by this magical fire. This spell
            is incompatible with Bladesharp. Though it is an Active spell,
            the caster can still move and attack normally. 
        `
  },
  {
    title: "Glamour",
    mpCost: 2,
    range: "touch",
    duration: "temporal",
    type: "passive",
    description: `
            This spell increases the target\u2019s CHA by 8. This increases
            spirit combat damage by one step on the Spirit Combat
            Damage table on page 56 (e.g., from +1D6 to +1D6+3),
            increases all Communication skills by +10%, and increases
            all Magic skills as follows: /n
            CHA Prior to Spell 1-4 - Magic Skills Increase +5% /n
            CHA Prior to Spell 5-8 - Magic Skills Increase +0% /n
            CHA Prior to Spell 9-12 - Magic Skills Increase +5% /n
            CHA Prior to Spell 13+ - Magic Skills Increase +10% /n 
            This spell is also useful in leadership situations (\u201CFollow
            me!\u201D) or moments of crisis (such as convincing your captors
            not to kill you because you can pay a good ransom).
        `
  },
  {
    title: "Glue",
    mpCost: "variable",
    range: "touch",
    duration: "temporal",
    type: "passive",
    description: `
            For each point of this spell the caster creates a 5-cm-square
            glob of magical glue. The STR of the glue equals the magic
            points powering the spell, multiplied by 10. Glue may be
            resisted by using the adventurer\u2019s STR on the resistance
            table. If the adventurer\u2019s STR overcomes the STR of the
            Glue spell, then the spell is broken and the patch is no
            longer sticky. Glue never sticks to any living tissue or living
            organic material, but works just fine on things like a door
            frame, clothing, a wooden leg, a sword in a scabbard, boots,
            etc. However, to Glue two objects together, they must be at
            relative rest to one another, and not moving.
        `
  },
  {
    title: "Heal",
    mpCost: "variable",
    range: "touch",
    duration: "instant",
    description: `
            \u041A\u0430\u0436\u0434\u044B\u0439 \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0439 MP \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442 1HP \u0447\u0430\u0441\u0442\u0438 \u0442\u0435\u043B\u0430. 2 MP \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0434\u043B\u044F \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u043A\u0440\u043E\u0432\u043E\u0442\u0435\u0447\u0435\u043D\u0438\u044F, 6MP \u0434\u043B\u044F \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043E\u0442\u0440\u0443\u0431\u043B\u0435\u043D\u043D\u043E\u0439 \u0447\u0430\u0441\u0442\u0438 \u0442\u0435\u043B\u0430 (\u0435\u0441\u043B\u0438 \u043E\u043D\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430) /n
            This spell repairs damage done to hit points. The part of
            the body being healed must be touched. Each point of Heal
            repairs 1 hit point in a designated location. The effect is
            immediate. If the location is not fully restored, Heal can be
            used again in subsequent melee rounds. /n
            Heal cannot raise an adventurer from the dead. However,
            2 points of Heal will cauterize any wound or severed limb,
            and 6 points of Heal will restore a severed limb to the body
            if both parts are available.
        `
  },
  {
    title: "Ignite",
    mpCost: 1,
    range: "ranged",
    duration: "instant",
    description: `
            This spell ignites anything normally burnable. It creates a
            small fire that can set such things alight such as a torch, a
            thatched roof, or a dry backpack. Skin cannot be Ignited.
            Hair or fur may be, but the target\u2019s POW must be overcome.
        `
  },
  {
    title: "Ironhand",
    mpCost: "variable",
    range: "touch",
    duration: "temporal",
    type: "passive",
    description: `
            This spell adds damage and increases the chance to hit in
            unarmed combat. Each point of the spell adds 1 point of
            damage if contact is made and +5% to the attack chance.
            Though the name implies it works only on hands, the spell
            affects the whole body, including maneuvers like headbutting and kicking. Various nonhuman creatures have
            Ironclaw, Ironbeak, Ironhoof spells, etc., which work in the
            same fashion. /n
            Note that the magical damage can allow the user to strike
            and potentially damage magical creatures otherwise invulnerable to normal weapons. Telmori Wolfbrothers, for instance,
            are not hurt by the actual unarmed strike, but may be hurt
            by the magical damage bonus.  
        `
  },
  {
    title: "Lantern",
    mpCost: 1,
    range: "ranged",
    duration: "temporal",
    type: "passive",
    description: `
            This focused, passive spell must be cast on a flat surface (usually
            the front of a shield). It illuminates a 12-meter radius for 180
            degrees in front of the surface, giving off a glow like a torch. 
        `
  },
  {
    title: "Light",
    mpCost: 1,
    range: "ranged",
    duration: "temporal",
    type: "passive",
    description: `
            This spell must be cast on some physical thing. A wand,
            fingertip, or wall will do. It then lights everything within a
            10-meter radius from that point with a radiance good enough
            to read by, though not as full as daylight. This spell is not
            affected by Extinguish. 
        `
  },
  {
    title: "Lightwall",
    mpCost: 4,
    range: "ranged",
    duration: "temporal",
    type: "mixed",
    description: `
            Passive (Active to move wall) /n
            This spell creates a wall of light 10 square meters in area
            and 10 cm thick. The Lightwall can be moved by the caster
            at a rate of 3 meters per melee round, provided they take
            no other action. The wall moves on the strike rank equal to
            the caster\u2019s DEX strike rank plus the magic points in the
            spell. It presents a bright glare on one side which is visually
            impenetrable, while from the caster\u2019s side it can be seen
            through. Furthermore, the glow illuminates 10 meters on all
            sides like a Light spell. A Lightwall can be moved or shaped
            into the height or width desired, so long as the total area
            is 10 square meters. The thickness always remains 10 cm. /n
            If a Lightwall is cast in the same space as a Darkwall,
            they will neutralize one another until they are no longer
            overlapping the same space. 
        `
  },
  {
    title: "Magic Point Enchantment",
    mpCost: 1,
    enchantment: true,
    ritual: true,
    type: "passive",
    description: `
            Each point of POW sacrificed in a Magic Point Enchantment
            can be used to store 1D10 magic points. The ritual takes 1
            hour per point of POW sacrificed. These stored magic points
            can be used to power or to boost spells by anyone who can
            use the item. Magic points stored in enchanted items do not
            regenerate on their own (they have no characteristic POW),
            but the user of the item can refill the magic point storage
            capacity by expending their own magic points. It takes one
            melee round to store 1 magic point in an enchanted item.
            An enchanted item cannot hold more magic points than it
            has capacity to store them.
        `
  },
  {
    title: "Mobility",
    mpCost: 4,
    range: "ranged",
    duration: "temporal",
    type: "passive",
    description: `
            This spell doubles the movement rate of the recipient and
            reduces their strike rank by 1. It, like Slow, is often carried by
            intelligent hunters for casting on themselves or their animals.
            It is also often utilized in wartime by elite cavalry units,
            giving them increased shock value. 
        `
  },
  {
    title: "Multimissile",
    mpCost: "variable",
    range: "touch",
    duration: "temporal",
    type: "passive",
    description: `
            Each point of this spell cast upon a missile (arrow, bolt,
            stone, javelin, etc.) creates a magical missile at the instant
            the original is launched or fired. The magical missile does
            the same damage as the original missile. Each missile attack
            is rolled separately. The first roll is for the original, which
            is the only one that can impale or crush. However, magical
            missiles can still do critical damage. /n
            Larger missile weapons require several points of this spell
            to create a single missile. An arbalest, for instance, requires 2
            points of spell per missile. As a rule of thumb, each 2D6 or
            fraction of weapon damage requires 1 point of spell.
            The temporal nature of this spell means that it can be cast
            onto a missile and the spell works once only if the missile
            is used any time within the spell duration. If the spell is
            cast and the missile is not loosed (for example, a fumble
            might indicate a dropped weapon, broken bowstring, etc.)
            the spell fails. /n
            This spell is incompatible with Speedart and Firearrow. 
        `
  },
  {
    title: "Parry",
    mpCost: "variable",
    range: "ranged",
    duration: "temporal",
    type: "passive",
    description: `
            This works in all ways like a Bladesharp spell, save that it can
            only be applied to a shield. Each magic point spent allows
            a +5% chance of parrying with that shield. 
        `
  },
  {
    title: "Protection",
    mpCost: "variable",
    range: "ranged",
    duration: "temporal",
    type: "passive",
    description: `
            \u041A\u0430\u0436\u0434\u044B\u0439 1 MP \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442 1 \u043F\u0443\u043D\u043A\u0442 \u0431\u0440\u043E\u043D\u0438 \u0434\u043B\u044F \u0432\u0441\u0435\u0433\u043E \u0442\u0435\u043B\u0430, \u0438\u043B\u0438 \u0434\u043B\u044F \u043A\u0430\u043A\u043E\u0433\u043E-\u043B\u0438\u0431\u043E \u043E\u0431\u044A\u0435\u043A\u0442\u0430. /n
            \u042D\u0442\u043E \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0435 \u043D\u0435 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u043E \u0441 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F\u043C\u0438 \u0421ountermagic, Shimmer,
            and Spirit Screen /n /n
            Each point of this spell adds 1 point of armor protection
            to the whole body or object. It acts in every way like
            normal armor. /n
            This spell is incompatible with Countermagic, Shimmer,
            and Spirit Screen. 
        `
  },
  {
    title: "Repair",
    mpCost: "variable",
    range: "touch",
    duration: "instant",
    description: `
            This spell repairs broken objects. All the parts must be
            present. Thus, a sword can be fixed, shield renewed, or armor
            repaired. Each point of the spell fixes 1D10 points of damage,
            if the item has hit points. If it does not, the item is simply
            repaired. The object repaired shows a scar, and permanently
            loses 1 hit point from its maximum hit point value as well.
            If Repair is used on magic items, the spell does not return
            any broken enchantments or released spirits. 
        `
  },
  {
    title: "Rivereyes",
    mpCost: 1,
    range: "self",
    duration: "temporal",
    type: "passive",
    description: `
            This spell allows the user to see through water as if
            looking through air and vice versa. It accurately eliminates
            all reflections and refractions. However, if the water is
            murky, or the air is foggy or smoky, it will not render the
            medium transparent.
        `
  },
  {
    title: "Second Sight",
    mpCost: 3,
    range: "ranged",
    duration: "temporal",
    type: "passive",
    description: `
            This spell allows a person to view the POW aura of a living
            being and to gauge its relative strength. This spell does not
            allow the user to view the Spirit World. Shamans naturally
            have this ability and do not need to expend magic points to
            use it (see page 358). /n
            The auras of all creatures within the spell\u2019s range glow,
            visible to the caster only. If there are many creatures within
            range it is difficult for the caster to determine the POW of
            each. Undead things do not glow in this way, for they have
            no characteristic POW. The POW auras of enchanted items
            are also visible to users of this spell, though the magic points
            invested into spells are not. /n
            The gamemaster should tell the player whether the POW
            auras of the viewed creatures are much lower than the POW
            of the caster, within 5 points, or much higher than the user\u2019s
            POW. For a shaman, the gamemaster should include the
            fetch\u2019s POW when determining this. /n
            An adventurer can use the Second Sight spell to target
            spells and blows against enemies in the dark, so long as they
            possess POW. They may not attempt to Dodge or parry any
            blows received from that enemy, as Second Sight merely
            determines relative position and provides little detail. /n
            Any heavy opaque surface\u2014a thick woolen blanket, a
            wooden wall, etc.\u2014blocks Second Sight.
        `
  },
  {
    title: "Shimmer",
    mpCost: "variable",
    range: "ranged",
    duration: "temporal",
    type: "passive",
    description: `
            This spell blurs and distorts the target\u2019s visual image, making
            them harder to hit. Each point subtracts \u20135% from the skill
            of any enemy attempting to hit the affected target. /n
            This spell is incompatible with Countermagic, Protection,
            and Spirit Screen. 
        `
  },
  {
    title: "Silence",
    mpCost: 1,
    range: "touch",
    duration: "temporal",
    type: "passive",
    description: `
            A spell to suppress noise created by the movements of
            an adventurer, monster, or object. Thus, it suppresses
            the clank of plate armor while its wearer tries to hide in
            shadows. However, it does not stop deliberately created or
            inadvertently loud noises: such as someone casting a spell,
            issuing commands, clumsily stepping on a large twig causing
            a loud snap, knocking over a vase and having it shatter, or
            similar loud or sharp sounds caused by fumbled Move
            Quietly rolls. 
        `
  },
  {
    title: "Sleep",
    mpCost: 3,
    range: "ranged",
    duration: "temporal",
    description: `
            If the caster overcomes the target\u2019s POW, the target falls into
            a deep sleep for the duration of the spell. The target only
            awakens if injured or if a hostile spell is targeted on them. 
        `
  },
  {
    title: "Slow",
    mpCost: 1,
    range: "ranged",
    duration: "temporal",
    type: "passive",
    description: `
            This spell halves the movement rate of those affected by it
            and adds +1 to their strike rank. It may reduce the MOV
            of a creature to 0. /n
            This spell is often used by huntsmen, the city watch, and
            intelligent beasts of prey such as baboons.
        `
  },
  {
    title: "Speedart",
    mpCost: 1,
    range: "ranged",
    duration: "temporal",
    type: "passive",
    description: `
            When cast upon any missile, this spell adds +15% to the
            attack chance and +3 points of damage when next used. The
            temporal nature of this spell means that it can be cast onto
            a missile, and the spell works once only if the missile is used
            any time within the spell\u2019s duration. Note that the magical
            damage can hurt magical creatures otherwise invulnerable
            to normal weapons. Telmori Wolfbrothers, for instance, are 
            not hurt by the weapon\u2019s normal damage, but may be hurt
            by the magical damage bonus. /n
            Speedart is incompatible with Firearrow and Multimissile
        `
  },
  {
    title: "Spell Matrix Enchantment",
    mpCost: 1,
    ritual: true,
    enchantment: true,
    type: "passive",
    description: `
            Using a spirit magic spell matrix, an enchanter can store the
            potentiality of a spirit magic spell in an item. Anyone who
            can use the item gains the ability to use the spell whenever
            they are in physical contact with the item, though they lose
            the potentiality of the spell as soon as they lose that contact.
            An enchanter cannot make a matrix for a spell they do
            not have access to. /n
            The caster must sacrifice POW points equal to the magic
            points needed to cast the spell to create the spell matrix. Thus,
            to make a sword into a Bladesharp 1 matrix needs 1 point
            of POW. Making a Bladesharp 3 matrix takes 3 points of
            POW. The strength of a matrix can be built up over time.
            Thus a 2-point Bladesharp matrix could be built up into
            a 4-point matrix by later sacrifices of POW and successful
            Enchantment rolls. /n
            The matrix can also be created a part at a time, so that
            a 3-point Bladesharp matrix, needing 3 points of sacrificed
            POW, can be done over the course of several weeks or even
            seasons. Of course, it does not have the spell until the entire
            sacrifice is made. /n
            The user of a matrix has a chance of casting that spell
            equal to their POW\xD75. The user also needs to spend 1
            magic point per point of spell. Possession of an item with
            a spell matrix does not count against the owner\u2019s CHA
            limit for spells.
        `
  },
  {
    title: "Spirit Binding",
    mpCost: 1,
    range: "ranged",
    duration: "permanent",
    type: "passive",
    description: `
            This spell is used to bind spirits into familiars or magical
            objects: see the Binding Enchantment spell on page 249
            and Binding Spirits into Animals on page 250 for more
            information. Binding spirits into familiars demands the use
            of special cult-bred animals described in the Spirits chapter.
            Magical objects for holding spirits can be made using the
            Binding Enchantment ritual (page 249), others can be
            obtained from a temple or while adventuring. /n
            On the death of the binder, the spirit is freed, even if the
            binder is immediately revived through divine intervention
            or other methods.
        `
  },
  {
    title: "Spirit Screen",
    mpCost: "variable",
    range: "ranged",
    duration: "temporal",
    type: "passive",
    description: `
            This spell acts as spiritual armor to absorb damage in spirit
            combat. Each point of the spell absorbs 1 point of spiritual
            damage. The target remains protected for the spell\u2019s duration.
            Spirit Screen is incompatible with Countermagic, Protection, and Shimmer.
        `
  },
  {
    title: "Strength",
    mpCost: 2,
    range: "touch",
    duration: "temporal",
    type: "passive",
    description: `
            This spell adds 8 points of STR to the target for the spell\u2019s
            duration. This increases melee combat damage by one step
            on the Damage Bonus table on page 56 (e.g., from +1D4
            to +1D6), increases all Agility and Manipulation skills
            (including weapon skills) as follows: /n
            STR Prior to Spell - 1\u20134 - Agility and Manipulation Skills Increase +5% /n
            STR Prior to Spell - 5\u20138 - Agility and Manipulation Skills Increase +0% /n
            STR Prior to Spell - 9\u201312 - Agility and Manipulation Skills Increase +5% /n
            STR Prior to Spell - 13+ - Agility and Manipulation Skills Increase +10% /n
            It also enables the target to lift or carry heavier weights.
            Strength is incompatible with Vigor
        `
  },
  {
    title: "Summon (entity)",
    mpCost: "variable",
    ritual: true,
    type: "passive",
    description: `
            To cast this spell, the caster must inform the gamemaster
            of the Summon (entity) spell being used. Shamans and
            adventurers normally summon only spirit entities. The 
            summoner states how many magic points they are using,
            and the summoner cannot use more magic points than
            are available. If the number of magic points used is less
            than the magic points possessed by the specific entity being
            summoned (as generated by the gamemaster), then the ritual
            automatically fails. The magic points powering the Summon
            spell are expended whether it succeeds or not. /n
            If successful, a random specimen of the desired entity type
            magically appears at the spot where the summons was performed, one melee round after the summons was completed.
            The entity is not under the control of the summoner (unless
            an appropriate control spell is then cast). It may be friendly,
            neutral, malign, or evil to the summoner, as determined by
            the gamemaster, with the following guidelines: /n
             - A friendly spirit does as the summoner desires. /n
             - A neutral spirit does not do what the summoner
            desires, but will not attack the summoner
            unless attacked. /n
             - A malign spirit attacks the summoner, trying to
            possess them. /n
             - An evil spirit attacks the summoner, trying to
            destroy them.
        `
  },
  {
    title: "Vigor",
    mpCost: 2,
    range: "touch",
    duration: "temporal",
    type: "passive",
    description: `
            This spell adds 3 points to the CON of the target. This
            increases the target\u2019s hit points by 3 and adds +1 hit point
            to each hit location.
            Vigor may also increase the target\u2019s maximum ENC. Vigor
            is incompatible with Strength.
        `
  },
  {
    title: "Visibility",
    mpCost: 2,
    range: "ranged",
    duration: "temporal",
    type: "passive",
    description: `
            This special spell transfers an otherworld creature from the
            Spirit World to the Middle World, giving it a translucent
            form. The appearance of the form is the shape the invisible
            being had while alive, if any. The spell can be cast only on
            creatures in the Spirit World. A spirit with this spell cast on
            it may cast spells or otherwise interact with the Mundane
            World, and is subject to spells. Normal weapons do not
            affect such creatures, regardless of whether they have magic
            cast upon them. Some otherworld creatures possess this as
            a natural ability that does not cost magic points to utilize. /n
            This spell is not subject to the normal Dispel, Neutralize,
            or Dismiss rules. 
        `
  }
];
