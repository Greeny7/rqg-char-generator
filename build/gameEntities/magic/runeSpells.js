import {RuneElementalTitle, RuneFormTitle, RunePowerTitle} from "../gameEntitiesTypes.js";
import {OtherRunes} from "../runes/otherRunes.js";
export const runeSpells = [
  {
    title: "Absorption",
    runes: [RuneElementalTitle.DARKNESS, RuneElementalTitle.EARTH],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
        This spell absorbs enemy spells, converting them into magic
        points, and makes those points available to the caster. It also
        screens out the effects of Absorbed incoming spells. It must
        be cast beforehand and has no effect on spells already in effect. /n
        Each point of Absorption soaks up 1 point of Rune
        magic, or any 2 points of sorcery or spirit magic spells and
        converts them into magic points. Each 1 point of Rune
        magic is converted into 2 magic points. The Absorption
        spell does not soak up part of a spell. If the incoming spell
        has more total magic points than can be Absorbed, then it
        takes effect normally. /n
        The magic points gained this way remain suspended
        within the caster\u2019s aura, usable as they wish. When the spell
        expires, or is dispelled, any magic points exceeding the user\u2019s
        current POW dissipate. /n
        Absorption can be cast on others, but the caster of the
        spell gets the absorbed magic points. This spell can protect
        anything, including inanimate objects.
        `
  },
  {
    title: "Accelerate Growth",
    runes: [RuneElementalTitle.EARTH, RunePowerTitle.FERTILITY],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
        This active spell matures a plant by one year in 15 minutes.
        It won\u2019t enlarge, strengthen, or make more fruitful any plant
        beyond its natural potential. The spell effect is permanent. 
        Each point affects one tree at a time, a 1-meter square area
        of bush or ground, or even a seed, causing it to bloom
        and flourish.
        `
  },
  {
    title: "Affix Darkness",
    runes: [RuneElementalTitle.DARKNESS],
    rpCost: 1,
    range: "ranged",
    duration: "custom",
    stackable: true,
    description: `
        This spell must be cast at night, at a chosen area with a
        volume of 100 cubic meters. That volume\u2019s darkness becomes
        fixed in place, and remains present even after sunrise,
        persisting all day, as a little piece of night. The Affixed
        Darkness remains exactly as dark as the area was when the
        spell was initially cast. A torch or other light source carried
        into the darkened area illuminates it just as at nighttime.
        The darkened area has rather fuzzy, indistinct edges, but is
        clearly visible in daylight.
        `
  },
  {
    title: "Alter Creature",
    runes: [RuneFormTitle.MAN],
    rpCost: 2,
    range: "ranged",
    duration: "permanent",
    stackable: false,
    oneUse: true,
    description: `
        When the priest casts this spell on a creature, and makes a
        successful POW vs. POW attack, the role of the creature
        as determined in the Survival Covenant (an ancient
        agreement negotiated by the god Waha) is reversed. Herdthings become people and people become herd-things. Alter
        Creature is binding only on those who agreed to the Survival
        Covenant: men, herd-men, Morokanth, impala, sable, bison,
        llama, and rhino. /n
        This spell takes one full round to work its transmutation,
        from strike rank 1 when the spell is cast to strike rank 12 of
        the same round. If a Countermagic or Dismiss Magic breaks
        the spell during this time, this Rune spell is totally ineffective.
        After the spell is completed it is permanent. Only another
        Alter Creature or Divine Intervention can turn the victim
        back to its original state. /n
        A beast that becomes a human gains 2D6+6 INT and
        3D6 CHA. It becomes omnivorous, requiring the same quality of food that people eat. This new human can still have
        fertile offspring with their former kind, but these offspring
        are unintelligent. The new human has the same attack skills,
        plus or minus any improvement to the skill category bonus
        for INT. They will speak Praxian with an initial skill equal
        to their INT. This new human can improve skills and learn
        new skills and spells in the usual way. Their outlook on life
        is still that of a beast, until taught otherwise. /n
        A person who becomes a beast loses INT and CHA. It
        becomes herbivorous, able to live off the plains. It can no
        longer have intelligent offspring with its former kind. The
        beast retains any non-weapon attack skills, with the skills category modifier altered for its lost INT. It forgets any weapon
        and other skills and all spells. It cannot understand language,
        except simple commands taught it. Such beasts can improve
        skills only by being taught by a Beast Master. Any bound
        spirits are freed. An allied spirit remains allied, but it is now
        linked to a creature which cannot understand language.
        `
  },
  {
    title: "Analyze Magic",
    runes: [RunePowerTitle.TRUTH],
    rpCost: 1,
    range: "touch",
    duration: "instant",
    stackable: true,
    description: `
        This spell gives a true statement about at least one function
        of a single magical item, entity, or substance. If more 
        than 1 point is cast simultaneously, more than one truth
        is discovered. If the spells are not cast simultaneously, the
        same truths may be repeated.
        `
  },
  {
    title: "Arouse Passion",
    runes: [RuneElementalTitle.EARTH],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
        This spell adds +20% to one of the target\u2019s Passions (chosen
        by the caster) and can even temporarily create a new Passion
        beginning at 20%. /n
        Each additional point stacked with the spell adds another
        +20% to the aroused Passion.
        `
  },
  {
    title: "Axe Trance",
    runes: [RunePowerTitle.DEATH],
    rpCost: 1,
    range: "self",
    duration: "temporal",
    stackable: false,
    description: `
        This spell must be boosted with 1 or more magic points.
        Each magic point expended increases the caster\u2019s Axe skill by
        +10% for the spell\u2019s duration. This spell may be combined
        with other weapon-enhancing spells. This spell does not
        combine effects with Berserker or Fanaticism.
        `
  },
  {
    title: "Axis Mundi",
    runes: [OtherRunes.MAGIC],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: false,
    description: `
        This summoning ritual creates a holy sanctuary 10 meters
        in radius which functions as follows: /n
        - First, it enhances the transition of ancestral
        spirits to the Mundane World. Ancestral spirits
        can appear within the sanctuary without using a
        Visibility spell. /n
        - Second, it acts as a beacon (much akin to a lighthouse) that enhances a spirit\u2019s chances of finding
        their way to the shaman and this sacred portal. /n
        - Third, it acts to protect the shaman who created
        the sanctuary. The Incarnate Ancestor spell may
        be cast within this sanctuary, and the sanctuary
        acts as a protective circle when the summoned
        ancestor first arrives. Any ancestor summoned
        within an Axis Mundi is disoriented for 1D6
        rounds and cannot take any hostile actions until
        this effect wears off. /n
        - Fourth, when created by a shaman in preparation
        for the initiation of an assistant shaman, it acts as
        the locus of the transition to full shaman. /n
        - Fifth, it attracts spirits aligned with the traditions
        of the cult and allows their active participation in
        Holy Day celebrations. /n
        This spell can be boosted with magic points. Each additional magic point adds 15 minutes to the spell\u2019s duration.
        `
  },
  {
    title: "Ban",
    runes: [OtherRunes.MAGIC],
    rpCost: "variable",
    duration: "custom",
    ritual: true,
    description: `
        Cost 1 or 1 Rune points /n
        This hour-long ritual can only be cast by a Chief Priest or
        High Priest of a cult. A version of this spell is known by
        most cults. It forbids its target from being able to participate
        in worship at the temple or temples that are subject to the
        authority of the caster. For the purposes of that specific
        temple, the target is no longer an initiate or even a lay
        member of the cult, and cannot rejoin the temple for the
        duration of the spell. The target cannot regain Rune points
        or sacrifice for new spells at the caster\u2019s temple. /n
        Many cults require formal proceedings or even approval
        by the members of the temple before this spell may be cast
        on a worshiper. Depending on the cult, this may also result
        in outlawry from a clan or tribe. The caster (or their successor
        in the office) may lift the effects of this spell at any time. /n
        The 1-point version of Ban has a duration of three years.
        The 3-point version of Ban lasts until the target is dead.
        `
  },
  {
    title: "Bear Fruit",
    runes: [RunePowerTitle.FERTILITY],
    rpCost: 1,
    range: "ranged",
    ritual: true,
    stackable: false,
    description: `
        This spell causes a single tree or a 3-meter square area of
        bush or ground cover to yield its fruits, no matter what the
        season. A full-day ritual is needed to activate the spell and
        to appease the plant\u2019s spirit. This spell can kill the plant if
        done at a bad time. Chances of killing plants are seasonally
        determined: Sea Season 30%, Fire Season 15%, Earth Season
        10%, Dark Season 70%, Storm Season 50%. In Sacred Time,
        the plant always survives.
        `
  },
  {
    title: "Bear\u2019s Skin",
    runes: [RuneFormTitle.BEAST],
    rpCost: 3,
    range: "touch",
    duration: "temporal",
    stackable: false,
    description: `
            This spell causes the target to sprout a coat of thick brown
            fur and to add +6 to its SIZ characteristic. It adds 4 points
            of armor to the target on all hit locations. It cannot be
            layered with existing armor, unless that armor is built to
            accommodate the additional SIZ. This spell can only be cast
            on initiates or Rune Masters of Odayla.
        `
  },
  {
    title: "Bear\u2019s Strength",
    runes: [RuneFormTitle.BEAST],
    rpCost: 2,
    range: "touch",
    duration: "temporal",
    stackable: false,
    description: `
            This spell causes the target to sprout a coat of thick brown
            fur and to add +6 to its SIZ characteristic. It adds 4 points
            of armor to the target on all hit locations. It cannot be
            layered with existing armor, unless that armor is built to
            accommodate the additional SIZ. This spell can only be cast
            on initiates or Rune Masters of Odayla.
        `
  },
  {
    title: "Beastmaster",
    runes: [RuneFormTitle.BEAST],
    rpCost: 2,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            This spell may be cast upon any unintelligent animal. If
            it fails to resist, then it will move as the caster directs for
            the duration of the spell, though it will refuse to leap off
            cliffs or go to other obvious deaths. It will not fight for
            the caster, and it will not otherwise serve them. It will not
            attack the caster. Once controlled, it may move out of the
            160-meter range and it will remain controlled. This is an
            active spell, and if the caster is disturbed, the animals are
            freed. For each additional point of Beastmaster stacked with
            the original spell, an additional beast may be targeted. It
            works on riding beasts.
        `
  },
  {
    title: "Become [Other Shape]",
    runes: [RunePowerTitle.ILLUSION],
    rpCost: 3,
    range: "self",
    duration: "temporal",
    stackable: false,
    description: `
            This spell comes in many forms. Each variant turns the
            user\u2019s shape into a single other shape. The shapes vary
            tremendously. The spell often turns the user into an animal
            (most commonly a fox, mouse, or raven), but some spells
            turn them into another human, a type of tree, a rock, or
            even (in Naskorion) a dirty shirt, or (in Pent) a pile of dung. /n
            The user retains all their own characteristics and skills,
            except for SIZ, which the user chooses. The new SIZ cannot
            increase, but can be smaller, to a minimum of 1. The user
            gains all the abilities (or lack of same) of the new shape, to
            be defined by the gamemaster. If the shape has gender, the
            user can choose which. 
        `
  },
  {
    title: "Berserker",
    runes: [RunePowerTitle.DEATH, RuneFormTitle.BEAST],
    rpCost: 2,
    range: "ranged",
    duration: "temporal",
    stackable: false,
    description: `
            This spell sends the recipient into a murderous, berserk fury.
            Personal safety and all but the strongest loyalties are forgotten
            in the rage to destroy, but the stamina and the combat skills 
            of the Berserker are greatly enhanced and the subject gains
            magical protection. /n
            - The Berserker increases their attack skill rating
            by half again. /n
            - The Berserker adds half again to their effective
            CON for the duration of the spell. This can
            increase their CON above species maximum. /n
            - The Berserker gains the effects of 2 points of
            Countermagic (equivalent to the spirit magic spell,
            see page 258). /n
            - The Berserker is twice as effective against Chaotic creatures: the Berserker\u2019s attack skill rating
            is doubled (instead of being increased by half
            again), and against these creatures the Berserker is
            protected by Countermagic 4.  /n
            .A Berserker is preserved from incapacitation,
            shock, unconsciousness, or exhaustion while the
            spell is in effect. If the Berserker would be subject
            to these effects when the Berserk spell ends, these
            conditions take effect. /n
            .All CON rolls made by the Berserker during
            the spell\u2019s duration succeed unless a 96\u201300
            is the result. /n
            .The Berserker is completely incapacitated when
            the spell expires.  /n
            However, the Berserker cannot cast magic, parry, or
            Dodge. Anyone affected by the spell cannot normally
            attempt to shake off its effects before the normal duration of
            15 minutes expires. If the gamemaster determines that there
            are extenuating circumstances, the Berserker may attempt to
            snap out of the battle rage before the 15 minutes are up by 
            rolling INT\xD71 or successful use of the Meditate skill (pick
            one). Otherwise the rage continues. Initiates and healers of
            the Chalana Arroy cult may bring someone out of a Storm
            Bull Berserker rage if they succeed with a roll of the Chalana
            Arroy initiate\u2019s CHA\xD75. This ability does not extend to the
            Berserker spell granted by other cults. /n
            If Berserker is cast upon a target under the effects of
            Fanaticism, this spell takes precedence. They do not combine effects. 
        `
  },
  {
    title: "Binding Enchantment",
    runes: [OtherRunes.MAGIC],
    rpCost: 1,
    enchantment: true,
    ritual: true,
    stackable: false,
    description: `
            A binding enchantment is a magical item that can hold a
            spirit or other otherworld creature. The item to serve as the
            binding enchantment must be enchanted with 1 point of
            POW per characteristic type possessed by the creature. 
        `
  },
  {
    title: "Bind Ghost",
    runes: [RunePowerTitle.DEATH],
    rpCost: 1,
    duration: "instant",
    ritual: true,
    stackable: false,
    description: `
            Binds the spirit of a dying Humakt worshiper into an area as
            a ghost. The caster must engage in a successful round of spirit
            combat if the spell is to work. The spirit must be a volunteer
        `
  },
  {
    title: "Blast Earth",
    runes: [RunePowerTitle.DEATH, RuneElementalTitle.EARTH],
    rpCost: 1,
    range: "ranged",
    duration: "instant",
    stackable: true,
    description: `
            This spell is cast on an area of land geometrically
            proportionate to the number of Rune points expended, with
            each point doubling the prior step. One Rune point affects 1
            square meter, 2 Rune points affects 2 square meters, 3 Rune
            points affects 4 square meters, 4 Rune points affects 8 square
            meters, etc. No plants within the blasted area can flower or
            bear fruit for a full year.
        `
  },
  {
    title: "Bless Animals",
    runes: [RunePowerTitle.FERTILITY, RuneFormTitle.BEAST],
    rpCost: 1,
    range: "touch",
    duration: "instant",
    stackable: false,
    description: `
            This fertility spell increases the calving potential for each
            beast so blessed. Each birth produces a healthy calf or, rarely,
            twins. Nine out of ten calves born to a beast influenced by
            this spell are female. /n
            Bless Animals can only be cast on the High Holy Day of
            the year, and affects only the following year\u2019s calving. It may
            be cast on male or female beasts; herders typically use it with
            their finest stud bulls for maximum benefit.
        `
  },
  {
    title: "Bless Champion",
    runes: [RunePowerTitle.FERTILITY, RuneElementalTitle.EARTH],
    rpCost: 2,
    range: "ranged",
    duration: "custom",
    stackable: true,
    ritual: true,
    description: `
            This spell allows the caster to bless a worshiper of one of
            Ernalda\u2019s husband-protectors (see page 294). The target must
            be willing and participate in a ritual with the caster that takes
            at least 30 minutes to perform. If the target does not already
            have a Love (caster) Passion of 60% or higher, they must
            now take that Passion for the spell to work. /n
            After the ritual, the caster may cast on the target any
            defensive spirit or Rune magic that the caster has. The effects
            last a full day. /n
            For each Rune point stacked with this spell, the spell lasts
            one additional day.
        `
  },
  {
    title: "Bless Crops",
    runes: [RunePowerTitle.FERTILITY, RuneElementalTitle.EARTH],
    rpCost: 1,
    duration: "instant",
    stackable: true,
    ritual: true,
    description: `
            This ritual affects an area of ground equivalent to that which
            a farmer can plow in a season (one hide of land). It adds
            +20% to the owner\u2019s occupational skill rating for that hide
            in the following Sacred Time (see page 420). For each point
            stacked in the spell, either an additional hide can be added or
            an additional +20 can be added to the Income roll in Sacred
            Time (see page 420).
        `
  },
  {
    title: "Bless Grave",
    runes: [RunePowerTitle.DEATH, RuneElementalTitle.EARTH],
    rpCost: 2,
    stackable: true,
    ritual: true,
    description: `
            This ritual summons an invisible aspect of Ty Kora Tek to
            escort the soul of a dead believer; a successful ritual ensures
            that the soul does not return as a bad ghost.
        `
  },
  {
    title: "Bless Pregnancy",
    runes: [RunePowerTitle.FERTILITY, RuneElementalTitle.EARTH],
    rpCost: 2,
    ritual: true,
    duration: "length of pregnancy",
    stackable: true,
    description: `
            This ritual blesses a pregnant woman. For the duration of her
            pregnancy, she does not suffer any of the pains and sicknesses of
            her condition. The mother adds +50 to the result of her Sacred
            Time childbirth roll (see page 435). During childbirth, she
            suffers only mild pangs and can control the timing of the birth.
            The ritual must be cast during the first season of pregnancy. /n
            This spell can only be cast once per pregnancy, although
            that single casting is fully stackable. For each additional Rune
            point stacked with the ritual, the child gets +1 to a characteristic of the caster\u2019s choosing (although no characteristic
            may be above species maximum). The caster of the spell may
            choose the sex of the child. 
        `
  },
  {
    title: "Bless Thunderstone",
    runes: [RuneElementalTitle.AIR],
    rpCost: 1,
    ritual: true,
    stackable: true,
    description: `
            This spell may only be cast by a full Storm Voice of Orlanth.
            It may only be cast on the High Holy Day of Orlanth
            upon a properly prepared flintstone, and thus can only be
            cast once a year. /n
            The thunderstone must be activated before its magic operates. This is done by spending 1 magic point while touching
            it, whereupon the stone begins to spark and crackle. The
            stone may be thrown, slung, held in one\u2019s hand, or struck
            against a target. Once the stone has damaged a target, or
            one melee round after activation in any case, it shatters and
            becomes useless. /n
            For each point of Bless Thunderstone stacked in the
            casting, the stone does 1D6 hit point damage and destroys
            1D6 magic points of a struck target. Armor protects normally against the hit point damage done by the stone. The
            magic point drain can be stopped by protective spells: each
            1D6 drain acts as 1 point of Rune magic for purposes of
            blocking. Thus, if a 5-point thunderstone struck a target
            with Countermagic 8 or Shield 4, the target would lose only
            1D6 magic points. /n
            Once a stone is enchanted, additional castings of Bless
            Thunderstone on it have no added effect.
        `
  },
  {
    title: "Bless Woad",
    runes: [RuneElementalTitle.AIR, RunePowerTitle.MOVEMENT],
    rpCost: 1,
    ritual: true,
    stackable: true,
    description: `
            This spell may only be cast by a full Wind Lord of Orlanth.
            It may only be cast during the High Holy Day of Orlanth
            upon a properly prepared pot of woad (a blue dye derived
            from the woad plant), and thus may only be cast once a year.
            The woad must be smeared over the naked body of
            the user. A casting of the spell enchants enough woad to
            coat one person. /n
            For each point of Bless Woad stacked in the casting, the
            woad acts as 1 point of armor and gives 1 point of magical
            protection. These points can be divided among several pots
            of woad. For example, a Wind Lord with 15 Rune points might
            make three pots of 5-point woad, or one pot of 15-point woad,
            etc. Any hostile spell affecting the wearer must contain more
            magic points than the wearer is covered in points of woad.
            Each day that the woad is worn, it declines in potency
            by 1 point. If the wearer ever puts on armor or clothing, the
            woad immediately loses all its magic power. /n
            Once a pot of woad is enchanted, additional castings of
            Bless Woad do not enhance its enchantment. If its pot is
            kept sealed, blessed woad never spoils
        `
  },
  {
    title: "Breathe Air/Water",
    runes: [RuneElementalTitle.AIR, RuneElementalTitle.WATER],
    rpCost: 2,
    range: "ranged",
    duration: "temporal",
    stackable: false,
    description: `
            Castable on air-breathers or water-breathers, for the duration
            it allows the target to breathe as if it was in its own element
            while inhabiting the other. 
        `
  },
  {
    title: "Call Founder",
    runes: [RuneFormTitle.MAN],
    rpCost: 6,
    stackable: false,
    oneUse: true,
    description: `
            This spell may only be cast by the legitimate Khan of an
            entire tribe, and summons the original founder of that
            tribe. It takes all day to prepare. The being so summoned
            is of awesome power, far beyond the normal scope of play,
            appearing as a human with the appropriate herd animal\u2019s
            head, and with a STR and SIZ equal to ten times that of
            the summoning Khan. The being\u2019s POW varies between 40
            and 110, depending on the tribe. It is called only for tribal
            emergencies. 
        `
  },
  {
    title: "Catseye",
    runes: [RuneFormTitle.BEAST, RuneElementalTitle.FIRE],
    rpCost: 1,
    range: "touch",
    duration: "12 hours",
    stackable: false,
    description: `
            For 12 hours, this spell effects the user\u2019s eyes so they can
            see in any amount of available light. If there is a complete
            absence of light, they cannot see; if but a single dim spark
            exists, they see normally. Eyes under this spell reflect light
            like a cat\u2019s.
        `
  },
  {
    title: "Chaos Gift",
    runes: [OtherRunes.CHAOS, RuneElementalTitle.MOON],
    rpCost: 2,
    range: "self",
    duration: "variable",
    stackable: false,
    description: `
            This allows the caster to adopt a random Chaos feature from
            the Chaos Features table in the Glorantha Bestiary. If a
            successful Divine Intervention is used as this spell is cast, the
            caster can choose which Chaotic feature they wish to obtain.
            This spell is subject to the Lunar cycle: /n
             - Dark/Dying Moon: Spell cannot be cast. /n
             - Crescent Moons: Feature lasts 2 minutes. /n
             - Half Moons: Feature lasts 15 minutes. /n
             - Full Moon: Feature lasts for 4 hours.  /n
            The subject of the spell gets a permanent increase of +20%
            to their Chaos Rune, or gains the Chaos Rune at 20% if
            they do not already have it. Once this spell has been used, a
            person is always detected as Chaos-tainted by appropriate
            detection magics, abilities, or spirits. 
        `
  },
  {
    title: "Charisma",
    runes: [RunePowerTitle.FERTILITY, RunePowerTitle.ILLUSION, RuneFormTitle.BEAST],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: false,
    description: `
            This spell doubles the CHA of the target for the duration.
            The target must possess CHA for it to be affected. This spell
            likely results in changes to the target\u2019s Communication skills
            category modifier and spirit combat damage value. This
            briefly increases the target\u2019s limit of spirit magic spell holding,
            but the Charisma spell\u2019s duration makes this of limited use.
            Any bonuses or benefits from the increased CHA disappear
            when the spell has expired. 
        `
  },
  {
    title: "Clairvoyance",
    runes: [RunePowerTitle.TRUTH],
    rpCost: 2,
    range: "ranged",
    duration: "temporal",
    stackable: false,
    description: `
            Range: 5 km /n
            
            This spell gives the caster the ability to know what is
            happening in an area within the spell\u2019s range which they
            have previously studied for at least 15 minutes. The caster
            can see and hear, as if they were in the area. /n
            The caster is in a complete trance state, completely insensible to their surroundings. However, they may terminate
            the spell at any time.
        `
  },
  {
    title: "Claws",
    runes: [RuneFormTitle.BEAST],
    rpCost: 2,
    range: "touch",
    duration: "temporal",
    stackable: false,
    description: `
            The target\u2019s hands become clawed, doing 1D6 damage plus
            damage bonus. The chance to hit with the claws is equal to
            the target\u2019s normal Fist attack and the target can attack with
            both claws in one round, 5 strike ranks apart. The target
            gets a +50% bonus to Climb. This spell can only be cast on
            initiates and Rune Masters of an appropriate god, such as
            Odayla or Yinkin.
        `
  },
  {
    title: "Clever Tongue",
    runes: [RunePowerTitle.ILLUSION, RunePowerTitle.DISORDER],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: false,
    description: `
            This spell doubles the target\u2019s skill percentages with Fast
            Talk and Orate for the duration of the spell.
        `
  },
  {
    title: "Cloud Call",
    runes: [RuneElementalTitle.AIR],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            This spell brings or makes enough clouds to cover the area
            of sky that can be seen from the ground by the caster. Each
            point of the spell increases the cloud cover by +20% and
            increases the chance of rain by a corresponding amount. 
        `
  },
  {
    title: "Cloud Clear",
    runes: [RuneElementalTitle.AIR, RuneElementalTitle.FIRE],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            This spell decreases cloud density. Each point of the spell
            decreases the cloud cover by \u201320% and decreases the chance
            of rain by a corresponding amount. The area of sky that can
            be seen from the ground by the caster is affected. 
        `
  },
  {
    title: "Comfort Song",
    runes: [RunePowerTitle.FERTILITY, RunePowerTitle.HARMONY],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: false,
    description: `
            This allows the target to sing a Song of Power which keeps
            all listeners from feeling pain, effectively anesthetizing the
            body while still permitting consciousness. It is often used
            during childbirth and after battles. Adventurers who would
            normally be incapacitated are able to act unimpaired, though
            damage is unhealed.
        `
  },
  {
    title: "Command (Cult Spirit)",
    runes: [OtherRunes.MAGIC],
    rpCost: 2,
    range: "ranged",
    duration: "temporal",
    description: `
            This spell permits the caster to command cult spirits, such as
            elementals, petty deities, guardians, and other such entities.
            The being must obey if its POW is overcome by the caster\u2019s
            POW in a resistance roll. /n
            If successful, the caster may command the cult spirit for
            the next 15 minutes. If unsuccessful, the cult spirit acts in
            accordance with its nature.  /n
            This spell is most commonly used to command elementals. It is, however, effective with any cult spirit of the
            caster\u2019s cult. 
        `
  },
  {
    title: "Command Priests",
    runes: [RuneElementalTitle.AIR],
    rpCost: 3,
    range: "ranged",
    duration: "one day",
    stackable: false,
    description: `
            Casting this spell affects all Rune Masters (of any cult) within
            range that belong to the caster\u2019s tribe. Those affected may
            not use any Rune magic without the express consent of the
            Rex (the Orlanth Rex High Priest).
        `
  },
  {
    title: "Command (Species)",
    runes: [],
    rpCost: 2,
    range: "ranged",
    duration: "temporal",
    stackable: false,
    description: `
            Rune depend on cult /n
            While it endures, this spell allows the caster to take over
            the actions and will of an unintelligent creature. The caster
            must see (or be able to distinctly sense) the beast to cast the
            spell, and its POW must be overcome by the caster\u2019s POW
            in a resistance roll. If successful, the creature enters a special
            line-of-sight, telepathic form of communication with the
            caster. The caster must form a mental image of the actions
            they wish the creature to perform. Commanding a creature
            requires the caster to concentrate for a full melee round. /n
            Rune cults have Command spells for different animals
            connected with their own mythology and culture. For
            example, Ernalda has Command Snake and Command Swine,
            Yelmalio worshipers use Command Hawk and certain troll cults
            have Command Giant Beetle
        `
  },
  {
    title: "Command Worshipers",
    runes: [RuneElementalTitle.AIR],
    rpCost: 2,
    range: "ranged",
    duration: "instant",
    stackable: false,
    description: `
            Range is 5km /n
            This spell requires an hour-long ritual to cast and only
            affects members of the caster\u2019s tribe. Casting this spell
            signals all affiliated Orlanthi within range to hastily finish
            their immediate business, gather any equipment, and report
            to the summoner within two days of the spell\u2019s casting.
            During this time, the caster must remain in the same spot
            or else the spell disperses and releases the worshipers from
            their compulsion to report for duty. This spell is a privilege,
            and must not be abused. It is used only for emergencies or
            joyous celebrations.
        `
  },
  {
    title: "Crack",
    runes: [RunePowerTitle.DISORDER],
    rpCost: 2,
    range: "ranged",
    duration: "instant",
    stackable: false,
    description: `
            This spell must be cast on an inanimate, nonliving,
            nonmagical object, such as a piece of armor or a weapon.
            The targeted object immediately breaks into pieces. Items
            with bound spirits, magic point storage, etc. are considered
            magical in nature and the spell cannot be cast on them.
            However, a temporary enchantment, such as a spirit magic
            spell (Fireblade, Bludgeon, etc.) does not make the item proof
            against the spell. A Repair spell can fix the broken object.
        `
  },
  {
    title: "Create Fissure",
    runes: [RunePowerTitle.DISORDER, RuneElementalTitle.EARTH],
    rpCost: 1,
    range: "ranged",
    duration: "instant",
    stackable: true,
    description: `
            This spell opens a chasm 5 meters long, 1 meter wide, and
            5 meters deep for each point in the spell. /n
            If the fissure is created to undermine a wall or similar
            structure, the structure loses 1D6 armor points per point of
            the spell. If the wall is reduced to 0 armor points, it collapses
            where it has been undermined. /n
            If a chasm is formed underneath a target, the target must
            roll DEX\xD73 or fall into it, taking 1D6 falling damage per
            3-meter depth of the chasm.  /n
        `
  },
  {
    title: "Create Great Market",
    runes: [RunePowerTitle.HARMONY],
    rpCost: 1,
    ritual: true,
    duration: "8 weeks",
    description: `
            This spell is available only to the elected High Priests of the
            Issaries cult. This day-long ritual allows all priests of the cult
            to combine their Create Market spells together to make one
            gigantic, protected marketplace. Thus, if six Create Market
            spells are present, anyone with ill intent entering the zone
            defined by those spells takes 6D3 damage.
        `
  },
  {
    title: "Create Market (Create Neutral Ground)",
    runes: [RunePowerTitle.HARMONY],
    rpCost: 1,
    ritual: true,
    duration: "8 weeks",
    description: `
            This day-long ritual creates an invisible protected zone
            identical to a Warding 1 in most respects. Staves carved with
            likenesses of Issaries are used to define the boundaries of the
            zone. Unlike Warding, Create Market does not detect just
            anyone entering, but only activates on those who enter the
            area with a hostile intent. It makes no distinction between
            \u201Cfriendly\u201D fighters and \u201Chostile\u201D fighters; anyone attempting
            to enter the zone with intentions of harm alerts it.
        `
  },
  {
    title: "Create Shadow",
    runes: [RuneElementalTitle.DARKNESS],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            This spell creates a region of shadow. Its dimensions equal
            9\xD76\xD76 meters or any other shape with the same volume. It
            cannot do any damage and it has 1D6 hit points per point
            in the spell. It cannot be damaged by physical weapons, as
            it is too immaterial, but Disruption spells and the like affect
            it. It is considered to have a POW equal to that of the caster
            when the spell is cast. The shadow has a movement rate of 12. /n
            When additional points of this spell are cast, the volume
            covered does not change, but the darkness becomes deeper
            within the shadow. One point of the spell is enough to
            permit casting of the Dark Walk Rune spell and to create
            an effect of a haze in sunlight. Two points of this spell are
            enough to cancel the effects of sunlight on cave trolls and
            trollkin. Three points of this spell make a shadow equivalent
            to a moonlit night. Four points of the spell make an area that
            is pitch black\u2014requiring Darksense to see within. /n
            Within the area affected by the shadow, fire or other illumination is visible, but illuminates nothing.
        `
  },
  {
    title: "Create Wildfire",
    runes: [RuneElementalTitle.FIRE],
    rpCost: 1,
    range: "ranged",
    duration: "instant",
    stackable: true,
    description: `
            This must be cast on a fire. Each point increases its intensity
            (see page 157) by one level, adding 1D6 to the damage
            it produces, and increasing the fire\u2019s heat output. It also,
            naturally, causes the fire to burn itself out much sooner.
            This spell works on Fireblade, but the affected weapon
            takes 1D6 points of damage per point of the spell. This spell
            increases the damage done by a salamander by increasing
            the intensity of its flames, but the elemental also takes 1D6
            damage per point. 
        `
  },
  {
    title: "Cremate Dead",
    runes: [RuneElementalTitle.FIRE],
    rpCost: 1,
    ritual: true,
    stackable: false,
    description: `
            This spell allows an official (usually a priest) to fully
            destroy the bodily remains of any one person after
            death. The affected corpse must have belonged to the same
            clan as the official presiding over the ritual. It guarantees
            that the ghost will not return to haunt the family. It also
            burns all goods sent along with the corpse, allowing
            the deceased to carry some weapons and other
            supplies into the Land of the Dead. It can be used
            on a still-animated skeleton, zombie, or even the 
            vampiric form of a former clansman to burn it, though the
            target\u2019s POW must be overcome with a resistance roll.
        `
  },
  {
    title: "Cure All Disease",
    runes: [RunePowerTitle.HARMONY, RunePowerTitle.FERTILITY],
    rpCost: 2,
    range: "touch",
    duration: "instant",
    stackable: false,
    description: `
            This spell cures any disease and stops its effect immediately.
            However, it does not restore any characteristic points lost.
            Restore Health is needed to restore any lost characteristic points
        `
  },
  {
    title: "Cure Chaos Wound",
    runes: [RunePowerTitle.HARMONY, RunePowerTitle.FERTILITY],
    rpCost: 1,
    range: "touch",
    duration: "instant",
    stackable: false,
    description: `
            This spell is of no use by itself and cannot be stacked on
            its own, but can be stacked with any spell used to cure a
            wound or other affliction received from a Chaotic creature.
            It provides all the magic points needed to work the spell. As
            such it has little effect on most Rune spells, though it helps
            tremendously with Heal Wound. For example, if stacked with
            a Heal 6 spell, the spell would cure 6 points of damage and cost
            the user no magic points. The spell also completely cures the
            victim of broo impregnation and removes its consequences.
            It also cures diseases received from a Chaotic creature.
        `
  },
  {
    title: "Cure Poison",
    runes: [RunePowerTitle.HARMONY, RunePowerTitle.FERTILITY],
    rpCost: 1,
    range: "ranged",
    duration: "instant",
    stackable: false,
    description: `
            This spell cures any poison and stops its effect immediately.
            The damage resulting from the poison may now be healed
            by other magic.
        `
  },
  {
    title: "Dark Walk",
    runes: [RuneElementalTitle.DARKNESS, RunePowerTitle.MOVEMENT],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: false,
    description: `
            This spell allows the user to be totally invisible and
            soundless in darkness and shadow to anyone within range.
            Blend-in is total.
        `
  },
  {
    title: "Detect Honor",
    runes: [RuneElementalTitle.AIR],
    rpCost: 1,
    duration: "instant",
    stackable: true,
    description: `
            This spell informs the user whether the target is an honorable
            individual\u2014according to the Orlanthi understanding of
            what that means\u2014as determined by the gamemaster. The
            spell is highly subjective in nature, and an individual might
            register as honorable one week, and dishonorable the next.
        `
  },
  {
    title: "Detect Truth",
    runes: [RunePowerTitle.TRUTH],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: false,
    description: `
            This spell allows the caster to tell whether anyone within
            a 5-meter radius of the spell\u2019s target is lying (deliberately
            speaking falsehood, based on their own knowledge). If lies
            are spoken, the speaker emits a dark, smoky glow, visible
            only to Swords and initiates of Humakt
        `
  },
  {
    title: "Discorporation",
    runes: [OtherRunes.MAGIC],
    rpCost: 1,
    range: "self",
    duration: "temporal",
    stackable: true,
    description: `
            This hour-long ritual, known to a few secret societies and
            mysterious subcults, is like the shamanic ability. It allows the
            caster to temporarily detach their spirit from their body and
            reunite them at will, or after 15 minutes, whichever comes
            first. The body remains comatose until the spirit returns.
            When the time limit is reached, the spirit \u201Csnaps back\u201D to
            the body immediately. /n
            Discorporation requires a successful Meditate roll and
            costs 1 Rune point. The difficulty of maintaining the separation is directly proportional to the distance between spirit
            and body, costing 1 further Rune point per 5 kilometers of
            distance. Thus, the caster must stack 2 Rune points to be able
            to travel more than 5 kilometers from their body. These additional points should be spent when Discorporation is cast.  /n
            While in spirit form, the caster may cast spells and travel
            to anywhere the adventurer can maintain the separation.  /n
            A Discorporate adventurer is treated in all respects like
            an ordinary disembodied spirit. A Discorporate adventurer
            can initiate spirit combat against another spirit or against
            a corporeal entity. If a Discorporate adventurer loses spirit
            combat to a shaman or other corporeal entity, the Discorporate spirit can be bound just like any other spirit.  /n
            A Discorporated adventurer can be forced back into their
            body by a properly powerful Dispel Magic spell, assuming
            the user of Dispel Magic can find the Discorporate adventurer by means of the Detect Spirit spell, or finds the body.  /n
            While Discorporate, an adventurer attempting an attack
            spirit magic spell and rolling a fumble on the attack roll is
            immediately returned to their body.  /n
            While Discorporate, the adventurer can sense other spirits
            and sources of POW at a range of roughly 10 meters per
            point of POW possessed by the adventurer. The adventurer
            cannot see non-magical mundane objects without POW
            or magic points (such as ordinary walls, armor, weapons,
            furniture, scrolls, coins, etc.). Within a range of 1 meter
            per point of POW, the adventurer can sense the POW of
            entities to within 5 points above or below their own. At
            that range, the adventurer can also sense Runic affinities
            over 50%. The adventurer can use magical languages (such
            as Spiritspeech or Stormspeech), but cannot communicate
            using mundane tongues. In direct contact with another entity,
            the adventurer can sense exact POW, INT, and CHA. The
            adventurer can also sense cult affiliations. Contact is also the
            range of spirit combat.  /n
            While an adventurer is Discorporate, their body is still
            vulnerable to all damage-causing spells, weapons, diseases, etc.
            It is also vulnerable to being possessed by hostile spirits unless
            protected by magic or an allied spirit. If the body dies, the
            adventurer becomes a ghost (see the Glorantha Bestiary).  /n
            Discorporation can be combined with Extension to
            increase the duration of the Discorporation.
        `
  },
  {
    title: "Dismiss Elemental (type)",
    runes: [],
    rpCost: "variable",
    range: "ranged",
    duration: "instant",
    stackable: true,
    description: `
            Rune depends on elemental being summoned /n
            Rune points: 1-3, depends on size /n
            This spell can dismiss an elemental of the type listed. With
            1 Rune point, the caster can try to dismiss a small elemental.
            With 2 Rune points, the caster can try to dismiss a medium
            or small elemental. With 3 Rune points, the caster can try
            to dismiss a large, medium, or small elemental. Most cults
            are limited as to the size of elemental that can be dismissed
            with this spell. /n
            The caster of the spell must overcome the POW of the
            elemental for the spell to work. The elemental cannot be dismissed until it is fully formed. When dismissed, the elemental
            disappears at the end of the melee round during which the
            dismissal spell was cast, and gets to attack during that round.
        `
  },
  {
    title: "Dismiss Magic",
    runes: [OtherRunes.MAGIC],
    rpCost: 1,
    range: "ranged",
    duration: "instant",
    stackable: true,
    description: `
            Cast at a target, this spell eliminates magic from the target.
            Each point of Dismiss Magic cancels 2 points of spirit magic
            or sorcery, or 1 point of Rune magic. Only the spell strength
            of sorcerous spells (see page 385) needs to be overcome. /n
            When cast against a general target, without specifying
            any particular effect or spell, Dismiss Magic always destroys
            defensive spells first, beginning with the most powerful spell
            that it can affect. However, it may be successfully cast against
            a specific spell if the caster can magically discern or can
            otherwise guess the specific spell. 
        `
  },
  {
    title: "Divination",
    runes: [OtherRunes.MAGIC],
    rpCost: 1,
    ritual: true,
    range: "ranged",
    stackable: true,
    description: `
            This ritual must be performed in a holy place of the caster\u2019s
            deity such as a temple or a Sanctify spell-blessed area that is
            undisturbed for the duration of the ritual. /n
            This spell allows the caster to communicate with their
            deity. For each point of the spell cast during the ritual, the
            communicant may ask a simple question and they either
            receive an answer of up to ten words or a brief vision or
            dream of the answer. This procedure requires one hour per
            point of Divination used.  /n
            The gamemaster should privately roll D100 whenever a
            player requests an answer to a Divination. If the roll is greater
            than the caster\u2019s POW\xD75, then the caster failed to interpret
            the answer or dream properly. The gamemaster then makes
            up a misleading or puzzling answer.
        `
  },
  {
    title: "Draw Beast",
    runes: [RuneFormTitle.BEAST],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            When this spell is cast upon an unintelligent animal of any
            type, it causes that animal to move towards the caster at
            walking speed. The animal can resist the initial attack. For each
            additional point stacked, an additional beast may be affected.
        `
  },
  {
    title: "Earth Shield",
    runes: [RuneElementalTitle.EARTH, RuneElementalTitle.AIR],
    rpCost: 3,
    range: "touch",
    duration: "temporal",
    stackable: false,
    description: `
            Also called Shield of Arran, this spell must be cast upon a shield.
            The shield has an infinite number of hit points for the spell\u2019s
            duration. Knockback attacks still affect the holder of the shield.
        `
  },
  {
    title: "Earthpower",
    runes: [RuneElementalTitle.EARTH],
    rpCost: 3,
    range: "self",
    duration: "instant",
    stackable: true,
    description: `
            This spell enables the caster to draw upon the strength of
            the earth to save them in a time of mortal or existential peril.
            If the caster\u2019s magic points or POW fall to 0, Earthpower 
            enables them to draw either 1 point of POW or 1D8 magic
            points directly from the earth, preventing unconsciousness or
            destruction of their soul. They must be physically in contact
            with the earth for this effect to happen. Each additional Rune
            point added to the Earthpower spell returns an additional
            1 POW or 1D8 magic points. The POW disappears at the
            end of the spell\u2019s duration. Any magic points in excess of the
            caster\u2019s magic point total are temporary and are lost when
            spent, and do not regenerate. 
        `
  },
  {
    title: "Enchant (metal)",
    runes: [],
    rpCost: 1,
    enchantment: true,
    ritual: true,
    description: `
            Rune depends on metal /n
            This ritual must be performed over the specific Rune metal
            it is designed for. Rune metals are described in greater detail
            in the RuneQuest Gamemaster\u2019s Guide. One point of
            POW is sacrificed for each 10 ENC (or fraction thereof) of
            the metal enchanted. The metal should be forged (with the
            relevant Craft skill roll) into the desired form before this spell
            is cast, for reforging enchanted metal always cancels
            the enchantment. The metal always gains hit points
            or armor points equal to those of bronze
            (except in the case of iron,
            which are half again as many as
            bronze), and may gain other special
            abilities, depending on the metal. /n
            If an enchanted item is broken, it
            may be fixed with the Repair spell, or
            reforged. In either case the enchantment is lost, and the item must
            be reenchanted.
        `
  },
  {
    title: "Extension",
    runes: [OtherRunes.MAGIC],
    rpCost: 1,
    duration: "temporal",
    stackable: true,
    description: `
            This spell extends the duration of any temporal Rune spell
            that has a normal duration of 15 minutes. The Extension
            spell and the spell to be Extended must be cast by the same
            person in the same melee round, and for all game functions
            are cast simultaneously. This spell and the Illusion spells are
            the only exceptions to the rule that just one Rune spell can
            be cast per melee round. /n
            Extension affects a spell\u2019s duration as follows:
            Extension 1 - Spell Duration: 1 hour /n
            Extension 2 - Spell Duration: 1 day /n
            Extension 3 - Spell Duration: 1 week /n
            Extension 4 - Spell Duration: 1 season /n
            Extension 5 - Spell Duration: 1 year /n
        `
  },
  {
    title: "Face Chaos",
    runes: [RuneElementalTitle.AIR, RuneFormTitle.BEAST],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            This spell cannot be resisted and can be cast only on nonchaotic targets. When cast upon a single fighter, that person
            stands their ground and fights any Chaotic foe they face,
            even if they would have ordinarily chosen to flee. In general,
            this spell is used on outsiders, since Storm Bull cultists stand
            against Chaos regardless of fear. Each additional point adds
            one additional target. /n
            This spell does not render its target immune to the effects
            of such spells as Demoralize or Panic, though the target
            still does not flee. A Demoralized fighter continues fighting,
            though at half attack chances; a Panicked fighter cannot fight
            at all, but does not flee; etc.
        `
  },
  {
    title: "Fear",
    runes: [RuneElementalTitle.DARKNESS],
    rpCost: 1,
    range: "ranged",
    duration: "instant",
    stackable: false,
    description: `
            This spell causes intense, incapacitating fear to well up within
            the target. To be effective, the caster must overcome the
            POW of the victim with a resistance roll. The degree of
            success in overcoming the victim\u2019s POW determines the
            effect of this spell. Once cast, the effects of Fear cannot
            be dispelled. /n
            Critical Success: Victim dies of fear. /n
            Special Success: Victim collapses for 20 minus CON full turns, and
            must make a CON\xD75 roll or die as above. /n
            Success: Victim acts in all ways as if Demoralized (see spirit
            magic spell description) for 20 minus CON melee
            rounds. /n
            Failure: Intelligent beings are unaffected. Unintelligent
            creatures, including animals, are Demoralized for
            20 minus CON melee rounds. /n
            Fumble: Victim is unaffected.
        `
  },
  {
    title: "Fearless",
    runes: [RuneElementalTitle.AIR],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: false,
    description: `
            This spell provides immunity to fear, including magically
            caused fear such as Demoralize, Fear, or Madness, or to the
            fear resulting from battle, Chaos, or even Terrors. The subject
            may decide to flee from such things regardless of the spell,
            but the choice is theirs.
        `
  },
  {
    title: "Fight Disease",
    runes: [RuneElementalTitle.FIRE, RunePowerTitle.FERTILITY],
    rpCost: 1,
    range: "touch",
    duration: "instant",
    stackable: false,
    description: `
            This spell is cast upon a sick individual. It doubles the
            target\u2019s effective CON for their next disease resistance roll
            (see page 154). If the adventurer enters spirit combat with
            a disease spirit, it adds 25% to their Spirit Combat skill for
            the duration of the spirit combat. 
        `
  },
  {
    title: "Find Enemy",
    runes: [OtherRunes.MAGIC],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: false,
    description: `
            This spell alerts the caster to danger. The caster psychically
            knows of anyone within the spell\u2019s range who intends to
            harm them, whether the lurker can be seen or not. The
            caster may also designate another person to receive the
            spell\u2019s protection. In this case both the caster and the target
            psychically know who the target\u2019s enemies are. /n
            Interposing 3 or more meters of any solid substance
            between the caster and a potentially detected enemy blocks
            the effects of this spell. 
        `
  },
  {
    title: "Find (substance)",
    runes: [OtherRunes.MAGIC],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: false,
    description: `
            Rune varies depending on substance /n
            This spell informs the caster of the presence of the substance
            sought. The slight identifying glow is visible only to the
            caster. The caster is aware of the presence of the object for
            the duration of the spell. /n
            This spell can detect hidden objects made of the desired
            substance unless they are behind 3 or more meters of stone,
            soil, or metal. 
        `
  },
  {
    title: "Fireshield",
    runes: [RuneElementalTitle.WATER],
    rpCost: 2,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            This spell reduces the damage of all fire-related attacks upon
            the recipient by half (rounding down), after the effects of
            armor and protective magic have been deducted. 
        `
  },
  {
    title: "Flight",
    runes: [RuneElementalTitle.AIR, RunePowerTitle.MOVEMENT],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            The caster may transport one object weighing up to SIZ 6
            through the air for the duration of the spell. Each extra point
            of Fly increases the potential weight carried by 6 SIZ. Thus,
            an adult human would probably
            need 2 or 3 points of Flight to
            leave the ground. /n
            To pick up something fastened, the caster must use their
            POW to overcome the STR of
            the fastening. /n
            An object affected by this
            spell has a movement rate
            of 12. An unwilling target\u2019s
            POW must be overcome
            or this spell has no
            effect on them. /n
            If the adventurer
            needs to maneuver
            while flying, use
            their Air or Movement Rune rating
            (player choice) in
            place of a Fly skill.
        `
  },
  {
    title: "Float",
    runes: [RuneElementalTitle.WATER],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            Each point of this spell lifts 16 SIZ to just below the surface
            of the water. Heavier objects do not float, though they will
            sink more slowly than they would if the spell had not been
            cast. Lighter objects are raised halfway out of the water,
            bobbing about. 
        `
  },
  {
    title: "Free Ghost",
    runes: [RunePowerTitle.DEATH, RuneFormTitle.MAN],
    rpCost: 1,
    range: "ranged",
    duration: "instant",
    stackable: true,
    description: `
            This spell must be cast upon the ghost of a deceased mortal.
            The user must overcome the POW of the ghost with their
            own with a resistance roll. If successful, the ghost is unbound
            from its haunting and returns to the Land of the Dead.
        `
  },
  {
    title: "Gnome to Gargoyle",
    runes: [RuneElementalTitle.EARTH],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    oneUse: true,
    description: `
            This spell must be cast on an earth elemental of any size. It
            turns the elemental into a humanoid monster. This spell
            usually is cast only in times of extremity. /n
            The monster produced has the STR and POW of the original elemental. Its hit points remain the same and become the
            gargoyle\u2019s SIZ. It gets a DEX of 3D6. The monster attacks
            with its fist at 35%, and does 1D6 plus its damage bonus.
            It has 6 points of armor in each location from its stony hide.  /n
            When the spell expires, the monster turns back into earth
        `
  },
  {
    title: "Group Laughter",
    runes: [RunePowerTitle.ILLUSION],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            This spell ensures that everyone within the radius sees the
            point of every joke told, and is even capable of enjoying
            practical jokes played on themselves. Even old jokes that
            everyone knows seem funny when told to those affected by
            this spell. Additional points of this spell increase the radius
            of effect by 10 meters. /n
            This spell\u2019s effects cannot be resisted. The caster can boost
            it with magic points to help penetrate Countermagic or similar defensive spells.
        `
  },
  {
    title: "Guided Teleportation",
    runes: [RunePowerTitle.MOVEMENT],
    rpCost: 3,
    range: "self",
    duration: "instant",
    stackable: false,
    description: `
            This nonstackable spell always returns the caster to a specific
            spot made sacred to Orlanth through a complicated weeklong ritual. This spell has no range limitation. 
        `
  },
  {
    title: "Hallucinate",
    runes: [RunePowerTitle.ILLUSION],
    rpCost: 1,
    range: "self",
    duration: "temporal",
    stackable: true,
    description: `
            Each point of this spell acts as 12 points worth of any Illusion
            or combination of Illusions including motion, odor, sight,
            sound, substance, or taste. The hallucination is perceived
            only by the spell\u2019s caster (and any in a magical mental link
            with the caster) and is completely undetectable to anyone
            else. A Second Sight spell shows that the magic affects only
            the caster. See Illusions on page 331 for more information. 
        `
  },
  {
    title: "Harmony",
    runes: [RunePowerTitle.HARMONY],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            This stackable spell affects anyone within 3 meters of the
            caster and keeps them from getting violent. It counteracts
            emotion-affecting spells (such as Fanaticism and Demoralize)
            that are weaker than the Harmony spell. Each Rune point
            added to the spell adds 3 meters to the radius of effect.
            Harmony can be boosted with magic points to overcome
            more powerful emotion-affecting spells (such as Berserk) and
            to blast through Countermagic and other defensive spells. /n
            To work, the caster must roll D100 and compare the
            result on the resistance table to their own POW. All targets
            whose POW would be overcome are affected. For example,
            if a caster with a 12 POW rolled 52, all potential targets with
            an 11 or lower POW are affected.
        `
  },
  {
    title: "Heal Body",
    runes: [RunePowerTitle.HARMONY, RunePowerTitle.FERTILITY, RuneElementalTitle.EARTH],
    rpCost: 3,
    range: "touch",
    duration: "instant",
    stackable: false,
    description: `
            \u041F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442 \u0432\u0441\u0435 HP \u0438 \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u043D\u044B\u0435 \u0447\u0430\u0441\u0442\u0438 \u0442\u0435\u043B\u0430. \u041B\u044E\u0431\u0430\u044F \u043E\u0442\u0440\u0443\u0431\u043B\u0435\u043D\u043D\u0430\u044F \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0441\u0442\u044C \u0440\u0435\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u0435\u0442, \u0441\u043B\u043E\u0432\u043D\u043E \u043D\u043E\u0432\u0430\u044F. /n
            This spell cures the total damage done to a body, regardless of
            hit location or source. The player of the affected adventurer
            simply erases all damage from total hit points and hit location
            hit points. Any severed limbs are reattached if available, or
            regenerate as if new. 
        `
  },
  {
    title: "Healing Trance",
    runes: [RunePowerTitle.HARMONY, RunePowerTitle.FERTILITY],
    rpCost: 1,
    range: "touch",
    duration: "as needed",
    stackable: false,
    description: `
            The target of this spell falls into a deep trance, during which
            the natural healing rate speeds up by a factor of eight times
            normal. Thus, an adventurer that normally heals 2 points
            of damage per hit location in a week would heal 16 points
            of damage to each hit location in the same time. /n
            The caster of this spell and the recipient both remain in
            an unwakeable trance until all healing is done. They must be
            fed and cared for as if they were catatonic during this period.
        `
  },
  {
    title: "Heal Wound",
    runes: [OtherRunes.MAGIC],
    rpCost: 1,
    range: "touch",
    duration: "instant",
    stackable: false,
    description: `
            \u0417\u0430\u043A\u043B\u0438\u043D\u0430\u0442\u0435\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0432\u043B\u043E\u0436\u0438\u0442\u044C \u0441\u0442\u043E\u043B\u044C\u043A\u043E MP,  \u0441\u043A\u043E\u043B\u044C\u043A\u043E HP \u043E\u043D \u0445\u043E\u0447\u0435\u0442 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0443 \u0446\u0435\u043B\u0438. 
            \u0412\u043E\u0441\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u0438 \u043E\u0431\u0449\u0438\u0435 HP, \u0438 HP \u0437\u043E\u043D, \u043A \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u043F\u0440\u0438\u043A\u0430\u0441\u0430\u0435\u0442\u0441\u044F \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u0442\u0435\u043B\u044C /n
             
            This spell repairs damage done to a living creature\u2019s hit points.
            It works equally well on any living thing, provided it has
            hit points. The spell converts magic points into hit points.
            The caster must simultaneously spend magic points equal to
            the points to be healed. This spell cures the damage in the
            locations being touched as well as total hit points. 
        `
  },
  {
    title: "Hide Fire",
    runes: [RunePowerTitle.ILLUSION],
    rpCost: 2,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            This spell is cast upon a container of any type or size,
            including a human hand, a burlap sack, or a pail. It permits
            the container to hold an appropriately-sized fire without
            burning or putting the fire out. Thus, an adventurer could
            pick a candle flame off its wick and hold it in their palm for
            the duration of the spell. The adventurer could also close
            their fist and hide the flame\u2014when they open the fist, the
            fire is still there. /n
            For each Rune point stacked with the spell, the intensity
            of fire that can be held increases by 1. Generally, each point
            of intensity is equal to 1D6 points of damage (see Fire as a
            Weapon on page 157). 
        `
  },
  {
    title: "Hide Wealth",
    runes: [RuneElementalTitle.EARTH, RunePowerTitle.FERTILITY],
    rpCost: 1,
    range: "touch",
    duration: "one day",
    stackable: true,
    description: `
            This spell must be cast upon an inanimate bundle of goods.
            It causes the target to become invisible to everyone except the
            caster and those watching as the spell is cast. Each additional
            point of Hide Wealth cast at the same time permits an
            additional bundle to be hidden. Magic items hidden with
            this spell cannot be sensed, even with magical spells, but the
            presence of the spell of Hide Wealth itself could be. If any
            of the hidden goods are moved, the spell dissipates. Each
            point of Extension stacked with Hide Wealth doubles the
            duration of the spell.
        `
  },
  {
    title: "Identify Scent",
    runes: [RuneElementalTitle.AIR],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            This spell enables the target to perfectly identify the nature
            of any scent encountered under the spell\u2019s influence. If the
            scent is of a substance or entity that the target has never
            encountered or seen, the target will only know that an
            unknown scent has been encountered. /n
            The target\u2019s sense of smell is dramatically increased under
            the influence of this spell to approximately twenty times
            more sensitive than a normal human. The target gains a Scent
            skill of 25% plus their Perception skills category modifier.
            This skill may improve with experience. 
        `
  },
  {
    title: "Illusory Motion",
    runes: [RunePowerTitle.ILLUSION],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            Within range, this active spell animates illusions and moves
            them as desired by the caster. Each additional point of the
            spell allows the illusion to be moved at an increasing rate
            of three meters per melee round (equal to a movement rate
            of 1). The caster has a chance of manipulating the illusion
            equal to their DEX\xD73. 
        `
  },
  {
    title: "Illusory Odor",
    runes: [RunePowerTitle.ILLUSION],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            This spell reproduces a single scent from the caster\u2019s memory.
            Though odor perception is different between different species,
            this spell can fool creatures other than the caster\u2019s own species.
            Four points or more of this spell forces anyone encountering
            the odor to make a CON\xD72 roll against the odor. Failure
            indicates the adventurer is overcome by nausea until the
            CON roll succeeds during a later melee round. 
        `
  },
  {
    title: "Illusory Sight",
    runes: [RunePowerTitle.ILLUSION, RuneElementalTitle.MOON],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            This spell creates a visual illusion which registers upon lightsensitive organs. Each point of the spell covers a volume
            of SIZ 3. One casting of the spell can completely cover an
            area the size of a small child. If 1 point were used to create
            the illusion that an adult was covered in armor plate, only
            a portion of the adult would appear to be covered by armor. 
        `
  },
  {
    title: "Illusory Sound",
    runes: [RunePowerTitle.ILLUSION],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            The sound created with this spell must be specified as to
            nature, duration, and intent at casting. The gamemaster
            should rely upon the player\u2019s stated intent instead of the
            specified noises. If the adventurer wishes to change the sound,
            they must cast another use of the spell. 
        `
  },
  {
    title: "Illusory Substance",
    runes: [RunePowerTitle.ILLUSION],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            This spell creates 1 SIZ (5 kilograms) to the solid matter of
            an Illusion per point. For purposes of combat, 1 SIZ point
            equals 1 hit point. /n
            An illusion with substance can do damage. One point of
            substance can do 1D3 points of damage; 2 points can do
            1D6 points of damage; and 4 can do 2D6. Each additional
            2 points does a further 1D6 damage. /n
            For an illusion with substance to do damage the target
            must either strike themselves with the illusion (such as walking into an illusionary fire), or motion must be combined
            with the substance to give the caster fine control. 
        `
  },
  {
    title: "Illusory Taste",
    runes: [RunePowerTitle.ILLUSION],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            This illusion creates a single taste covering about 1 SIZ of
            material. The taste created must be somewhat familiar to the
            caster, though the target reacts to the taste as its experience
            dictates. Illusory taste can conjure up tasty dishes, but may
            also be used to create poisonous substances. Each point of
            the spell can create a POT of 1D6. /n
            If the target of the illusion cannot taste things, then this
            spell has no effect. 
        `
  },
  {
    title: "Impede Chaos",
    runes: [RuneElementalTitle.AIR, RunePowerTitle.DEATH, RuneFormTitle.BEAST],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            \u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0430\u043C \u0445\u0430\u043E\u0441\u0430 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u0441\u043B\u043E\u0436\u043D\u043E \u043D\u0430\u043D\u0435\u0441\u0442\u0438 \u0443\u0434\u0430\u0440 \u043F\u043E \u0446\u0435\u043B\u0438 \u044D\u0442\u043E\u0433\u043E \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F. \u041A\u0430\u0436\u0434\u044B\u0439 RP, \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0439 \u0432 \u044D\u0442\u043E \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0435,
            \u0434\u0430\u0435\u0442 20% \u0448\u0442\u0440\u0430\u0444\u0430 \u043A \u043F\u043E\u043F\u0430\u0434\u0430\u043D\u0438\u044E \u043F\u043E \u0446\u0435\u043B\u0438, \u0435\u0441\u043B\u0438 \u0435\u0433\u043E \u0430\u0442\u0430\u043A\u0443\u0435\u0442 \u0438\u0441\u0447\u0430\u0434\u0438\u0435 \u0425\u0430\u043E\u0441\u0430. /n 
            /n
            The target of this spell becomes difficult for Chaos creatures
            to hit. For each point stacked in the spell, subtract \u201320%
            from the attack skill of any Chaos creature attacking
            the recipient. /n
            Impede Chaos has no effect against non-Chaotic opponents.
        `
  },
  {
    title: "Incarnate Ancestor",
    runes: [RuneFormTitle.MAN],
    rpCost: 3,
    range: "ranged",
    duration: "temporal",
    description: `
            This spell can bring the spirit of an ancestor to occupy the
            body of one of its descendants. The family-member must
            be willing, and the Daka Fal priest is typically the host body.
            The summoned spirit knows all spells, knowledge, and
            skills it knew while still living. The host spirit is suspended
            temporarily in the Spirit World and returns when the spell
            expires unless a fumble is made when the spell was cast, or
            the spell is extended longer than one day. In either case, the 
            body is permanently possessed, and the previous host spirit
            goes to the Land of the Dead. /n
            This spell can be cast without naming the specific ancestor
            desired, in which case a random ancestor comes. This is
            dangerous unless an Axis Mundi spell has been prepared
            beforehand (see page 318).
        `
  },
  {
    title: "Increase/Decrease Wind",
    runes: [RuneElementalTitle.WIND],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            This spell increases or decreases the average wind STR by
            1D6 for the duration of the spell. Each additional point used
            either adds or reduces the wind STR by another 1D6, or
            increases the radius of effect by another 100 meters. Refer to
            the Weather section (page 160) to determine what penalties
            on movement, missile fire, and visibility a wind might have. /n
            This spell has no effect upon temperature or
            wind direction.
        `
  },
  {
    title: "Invigorate",
    runes: [RuneElementalTitle.EARTH, RunePowerTitle.FERTILITY],
    rpCost: 1,
    range: "touch",
    duration: "instant",
    stackable: false,
    description: `
            This spell completely revitalizes and refreshes the recipient,
            even if they are exhausted to the point of collapse. It does
            not restore any lost hit points, but will restore any CON that
            has been temporarily lost through some condition such as
            hunger, thirst, or exhaustion. 
        `
  },
  {
    title: "Inviolable",
    runes: [RuneElementalTitle.EARTH, RunePowerTitle.FERTILITY, RunePowerTitle.HARMONY],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            This spell affects any Ernalda cultist or member of any
            associated cult within 3 meters of the caster, counteracts
            Fanaticism and Demoralize, and acts to keep anyone within
            range from getting excited or violent. It counteracts emotionaffecting spells (such as Demoralize, Fanaticism, or Fear)
            that are weaker than the Inviolable spell. Inviolable can
            be boosted with magic points to overcome more powerful
            emotion-affecting spells (such as Arouse Passion, Berserker,
            or Madness) and to blast through Countermagic and other
            defensive spells. The gamemaster should determine whether
            any other spells are affected. /n
            To work, the caster must roll D100 and compare the
            results on the resistance table to their own POW, as if the
            caster were the passive characteristic, following the results
            until a value higher than the roll is reached. All targets whose
            POW would be overcome are affected. /n 
        `
  },
  {
    title: "Invisibility",
    runes: [RunePowerTitle.ILLUSION],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            This spell makes the user invisible by attracting an enemy\u2019s
            attention to a spot other than where the adventurer is. The
            subject of the spell remains unnoticed unless they wish to
            draw attention to themselves, or are detected by magic. If the
            subject makes a noise, an enemy can try to strike by sound
            alone, at a \u201350% chance of success. /n
            If the adventurer protected by the spell attacks with a
            missile or melee weapon, or with magic, they become visible
            in the same strike rank in which they attack and disappear again after the last strike rank of that round, unless
            engaged in melee. Any round the adventurer disengages
            from melee, they disappear again at the end of the round
            of disengagement. 
        `
  },
  {
    title: "Knowledge",
    runes: [RunePowerTitle.TRUTH],
    rpCost: 1,
    range: "touch",
    duration: "temporal",
    stackable: false,
    description: `
            This spell allows the user to read the history of an item
            simply by touching that item. Any information that cannot
            be assimilated fully within the 15 minutes of the spell is
            lost. If the item has a long history, the
            spell starts at the beginning, unless
            the caster dictates a specific time at
            which to start. /n
        `
  },
  {
    title: "Leap",
    runes: [RunePowerTitle.MOVEMENT],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: false,
    description: `
            This spell allows a fully-encumbered person to jump up to 6
            meters high or 6 meters away for the spell\u2019s duration. Every
            additional point in the spell adds 6 meters to the range of
            a jump or allows the user to lift 6 additional SIZ points
            while jumping.
        `
  },
  {
    title: "Lie",
    runes: [RunePowerTitle.ILLUSION, RunePowerTitle.DISORDER],
    rpCost: 2,
    range: "self",
    duration: "instant",
    stackable: false,
    description: `
            This spell can be cast undetectably right as a trickster tells a
            lie. Anyone hearing the lie automatically believes it to be true,
            no matter how outrageous it is. They continue to believe it
            until they have incontrovertible evidence of its falsehood, or
            for at least one full melee round in any case. For example, if
            a trickster used this spell to tell a Yelm priest that the Sun wasn\u2019t
            going to rise tomorrow, it would cause a great deal of panic
            until next morning or until the priest performed Divination
            and asked their deity what had happened or until the end of
            the full melee round after the spell was cast. /n
            Those who hear the lie secondhand are not forced to
            believe it, and can try to talk the original hearers out of their
            misguided belief.
        `
  },
  {
    title: "Lightning",
    runes: [RuneElementalTitle.AIR],
    rpCost: 1,
    range: "ranged",
    duration: "instant",
    stackable: true,
    description: `
            A blast of crackling energy projects from either the hand of or
            some device held by the caster (a sword, a spear, wand, etc.)
            towards the target. Each point of Lightning cast causes 1D6
            points of damage to a single hit location if the caster overcomes
            the target with a POW vs. POW resistance roll. No armor
            protects against this damage, but spells that defend against
            physical attacks are effective. The Lightning discharge is very
            bright, very loud, and sets dry, flammable materials on fire.
        `
  },
  {
    title: "Lock",
    runes: [RunePowerTitle.HARMONY, RunePowerTitle.MOVEMENT],
    rpCost: 1,
    ritual: true,
    duration: "8 weeks",
    stackable: true,
    description: `
            This spell may be cast on a door, chest lid, bag opening, or
            similar device. It thereafter acts as a more potent version of
            the spirit magic spell Glue, with a strength equal to the magic
            points used in the spell multiplied by 10. It is personalized
            to the caster, and only they may open the door (lid, cover,
            etc.) as many times as desired. If it is ever closed during the
            duration of the spell, the Lock works again. /n
            This spell cannot be removed by Dispel, Dismiss or
            Neutralize Magic. If the Locked item\u2019s STR is overcome
            by brute force, and later closed again, the Lock still works
            again, unlike Glue. This spell may be stacked with Passage.
        `
  },
  {
    title: "Madness",
    runes: [RuneElementalTitle.MOON],
    rpCost: 2,
    range: "ranged",
    duration: "instant",
    stackable: false,
    description: `
            If the caster of this spell overcomes the POW of the target
            with a resistance roll, then the target suffers the effects given
            on the table below. The severity of the result depends on the
            degree of success of the caster\u2019s attack. Once the spell has
            been cast its effects cannot be dispelled. /n 
            Critical: Insane - Lose 1D4 INT permanently, and roll
            again on the Insanity table for the precise result,
            which lasts 30 minus POW in days. /n
            Special: Rage - Victim attacks nearest person as if
            Fanatical (see spirit spell Fanaticism) for 30
            minus POW in minutes. /n
            Success: Catatonia - Victim collapses for 30 minus POW
            in minutes and cannot be awakened during that
            period. /n
            Failure: No effect on intelligent beings; unintelligent
            creatures including animals are confused for 30
            minus POW in minutes. /n
            Fumble: Victim is unaffected. /n
            When an adventurer experiences insanity, their madness is all-encompassing, either incapacitating them or
            rendering them a danger to themselves and others. Even
            after the insanity has receded, the adventurer retains traces
            of it. To determine these effects, roll 1D6 and consult the
            Insanity table 
        `
  },
  {
    title: "Magic Point Enchantment",
    runes: [OtherRunes.MAGIC],
    rpCost: 1,
    enchantment: true,
    ritual: true,
    stackable: true,
    description: `
            Each point of POW sacrificed in such an Enchantment can
            be used to store 1D10 magic points. The ritual takes one
            hour per point of POW sacrificed. These stored magic points
            can be used to power or boost spells by anyone who can use
            the item. Magic points stored in Enchanted items do not
            regenerate on their own (they have no characteristic POW),
            but the user of the item can refill the magic point storage
            capacity by expending their own magic points. It takes one
            melee round to store 1 magic point in an Enchanted item.
            An Enchanted item cannot hold more magic points than it
            has capacity to store them.
        `
  },
  {
    title: "Matrix Creation",
    runes: [OtherRunes.MAGIC],
    rpCost: 1,
    enchantment: true,
    ritual: true,
    stackable: true,
    description: `
            This spell is used to store the potentiality of a spirit magic or
            Rune spell in an item. Anyone who can use the item gains the
            ability to use the spell whenever they are in physical contact
            with the item, though they lose the potentiality of the spell
            as soon as they lose that contact. /n
            POW points equal to the magic points or Rune points
            needed to cast the spell must be sacrificed to create the
            matrix. An enchanter cannot make a matrix for a spell they
            do not have access to.
        `
  },
  {
    title: "Mindblast",
    runes: [RuneElementalTitle.MOON],
    rpCost: 2,
    range: "ranged",
    duration: "instant",
    stackable: false,
    description: `
            This spell must overcome the POW of the target to be
            successful. If successful, it temporarily reduces the INT
            of the victim to 0 for days equal to half the caster\u2019s POW,
            rendering them in a vegetative state for that period. The
            effects of the spell cannot be dispelled. If the caster achieves
            a special success in overcoming the target\u2019s POW, the attack
            also causes 1D6+2 points of damage to the target\u2019s head hit
            location. Armor does not protect against this damage, though
            magical protection will.
        `
  },
  {
    title: "Mind Read",
    runes: [RunePowerTitle.TRUTH],
    rpCost: 2,
    range: "ranged",
    duration: "temporal",
    stackable: false,
    description: `
            This active spell gives the caster the ability to read the
            conscious thoughts of the target without their consent,
            though the target can tell there is an intruder in their
            mind. The caster must overcome the target\u2019s POW for the
            spell to function.
        `
  },
  {
    title: "Mist Cloud",
    runes: [RuneElementalTitle.AIR],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            This spell creates a bubble of natural-looking mist 2 meters
            in diameter for every Rune point expended with the spell.
            Visibility within or through the mist is limited to 1 meter. The
            cloud can be formed to encircle and thus blind an opponent.
        `
  },
  {
    title: "Morale",
    runes: [RunePowerTitle.DEATH, RunePowerTitle.TRUTH],
    rpCost: 2,
    range: "ranged",
    duration: "temporal",
    description: `
            This spell establishes a field around the user or picked target
            that affects an entire regiment with the fighting equivalent
            of a Fanaticism spell, but without the deleterious effects of
            ignoring parrying and defensive tactics. This spell requires
            an hour-long ritual with the caster and the regiment. It lasts
            until either sunrise or sunset, whichever comes first. 
        `
  },
  {
    title: "Multispell",
    runes: [OtherRunes.MAGIC],
    rpCost: 1,
    range: "self",
    duration: "temporal",
    stackable: true,
    description: `
            This spell allows the caster to combine two spirit magic spells
            and cast them at once. These are resolved as separate attacks.
            The only exception to this is the Disruption spell, which can
            be combined with itself and resolved as one attack doing
            2D3 damage to one hit location. /n
            This spell affects all spells cast by the caster over the duration. Thus, every melee round the caster can throw two spirit
            magic spells. The spells may be different each round. /n
            Multispell can be used to cast two different spells at the same
            time, or to cast spells at two different targets at the same time.
            This spell does not decrease the cost in current magic points of
            all spells to be combined, so the caster loses the total amount
            required to cast them separately from their current magic points.
            Multispell does not override the usual limitations on how much
            of a variable spell can be used. Also, it cannot be used to cast
            incompatible spells on the same target. Thus, Multispell cannot
            be used to create a single arrow with Speedart 2 on it, or put
            Countermagic and Protection on the same adventurer. An
            attack using Multispell takes effect at the highest strike rank
            of any spell included in the combined attack. For example, if
            Joshfar tried to Demoralize one enemy and cast Disruption on
            another, both at the minimum cost to cast, it would take effect at
            his Demoralize SR of 2, not his Disruption SR of 1. /n
            For each additional point stacked with Multispell, one
            additional spirit magic spell can be combined. Thus Multispell 2 allows three spirit magic spells to be combined and
            thrown at once.
        `
  },
  {
    title: "Oath",
    runes: [RunePowerTitle.DEATH, RunePowerTitle.TRUTH],
    rpCost: 2,
    ritual: true,
    duration: "permanent",
    stackable: true,
    description: `
            The Oath spell binds two (or more) people into a pact.
            Anyone that breaks the oath receives an attack of Sever Spirit
            (see page 338) with magic points equal to the total magic
            points placed into the Oath spell to start it. The greater the
            Oath sworn, the more magic points are committed to the
            swearing. For example, if two Humakti each placed 15 magic
            points into an Oath Rune spell and one later broke the oath,
            30 magic points would be matched vs. the oathbreaker\u2019s POW.
            If overcome, the oathbreaker will die. /n
            Each additional Rune point added to the Oath allows
            an additional participant. The participants need not be
            Humakti\u2014the spell can be cast by a third cult member.
        `
  },
  {
    title: "Panic",
    runes: [RunePowerTitle.ILLUSION, RunePowerTitle.DISORDER],
    rpCost: 2,
    range: "ranged",
    duration: "temporal",
    stackable: false,
    description: `
            If the user overcomes the target\u2019s POW with their own, the
            target is seized with an overpowering terror. They cannot
            cast any spells or attack in melee, though they can parry or
            Dodge normally. Usually, they run away.
        `
  },
  {
    title: "Passage",
    runes: [RunePowerTitle.MOVEMENT],
    rpCost: 1,
    ritual: true,
    duration: "8 weeks",
    stackable: true,
    description: `
            This spell must be stacked with Lock (see page 333). Each
            point of Passage allows one additional person to pass through
            or open the magically-affected aperture aside from the caster.
            It is cast on the door (or whatever), and the person(s) getting
            the Passage must also be present, laying their hands on the
            opening while the spell is intoned. 
        `
  },
  {
    title: "Path Watch",
    runes: [RunePowerTitle.MOVEMENT],
    rpCost: 2,
    range: "self",
    duration: "variable",
    stackable: false,
    description: `
            This spell is used when traveling through dangerous or
            questionable territory. It must be laid upon a known path
            or visible road to be traveled on by the caster. The spell alerts
            the user to the direction and number, though not type, of
            all enemies and traps within a 100-meter radius. The spell
            lasts until the caster falls asleep, or the path ends.
        `
  },
  {
    title: "Pathway",
    runes: [RuneElementalTitle.EARTH],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            This stackable spell allows the user to determine the direction
            of the nearest oasis. If 2 Rune points are used, then the closest
            and second closest oases will be known, with each additional
            point increasing the number of oases known. There is no
            limit to the number of Rune points stackable, but the spell
            tells only direction and relative distance (closest, next closest,
            etc.), not the actual distance. 
        `
  },
  {
    title: "Peace",
    runes: [RunePowerTitle.HARMONY],
    rpCost: 3,
    range: "ranged",
    duration: "temporal",
    stackable: false,
    description: `
            This spell causes all persons not of Rune Master status within
            a 1-kilometer radius to lay down their weapons and forget all
            violence and war. For the duration of the spell, they prefer
            rather to listen to the wonders of peace and love which the
            spirits send ringing through their minds.
        `
  },
  {
    title: "Rain",
    runes: [RuneElementalTitle.AIR, RuneElementalTitle.WATER],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            Range: 100m around caster. /n
            
            This spell causes rain to fall. If it is not currently raining, the
            spell creates rainfall as per the range in the Cloud Cover table,
            as appropriate for the current cloud cover, for the duration
            of the spell. If it is currently raining, the spell results in an
            increase in rainfall as if there were +10% more cloud cover. /n
            
            % Cloud Cover - description - rainfall  /n
            0\u201310 - None - 0\u201310 mm /n
            11\u201320 - Scant clouds - 11\u201320 mm /n
            21\u201330 - Scattered clouds - 21\u201330 mm /n
            31\u201340 - Slightly overcast - 31\u201340 mm /n
            41\u201350 - Moderately overcast - 41\u201350 mm /n
            51\u201365 - Mostly overcast - 51\u201365 mm /n
            66\u201380 - Completely overcast  -66\u201380 mm /n
            81\u201300 - Dense clouds, little light - 81\u2013100 mm /n
            
            This spell requires visible cloud cover to be effective;
            clouds could be summoned using the Cloud Call Rune
            spell (see page 323). /n
            For each Rune point stacked with the spell, the amount
            of rain that falls increases as if the cloud cover was increased 
            by +10% or the radius affected by the spell is increased by
            another 100 meters.
        `
  },
  {
    title: "Reconstruction",
    runes: [RunePowerTitle.TRUTH],
    rpCost: 3,
    range: "ranged",
    duration: "temporal",
    stackable: false,
    description: `
            This spell causes any 15-minute sequence from the past
            to replay for the caster\u2019s senses, for as long as they are in
            the immediate area in which it took place (up to the spell\u2019s
            duration). The user is in a trance state and no one else can
            sense what they sense. The user must state the time and date
            of starting the vision.
        `
  },
  {
    title: "Reflection",
    runes: [RuneElementalTitle.MOON, RunePowerTitle.ILLUSION],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            This spell reflects spells that fail to overcome the POW of
            the protected being. The next strike rank, the reflected spell
            or spells attack their caster(s). The POW of the reflected
            attack spell is equal to the caster\u2019s POW when the spell was
            originally cast. It is compared to the POW of the caster (after
            the spell was cast) in a resistance roll. If the spell overcomes
            the caster\u2019s POW, the caster suffers the spell\u2019s effects. /n
            Each point stacked of this spell reflects 2 points of spirit
            magic or sorcery, or 1 point of Rune magic. Reflection does
            not work at all if the incoming spell is too powerful. 
        `
  },
  {
    title: "Regrow Limb",
    runes: [RunePowerTitle.FERTILITY, RunePowerTitle.MOVEMENT, RuneElementalTitle.MOON],
    rpCost: 2,
    range: "touch",
    duration: "permanent",
    stackable: false,
    description: `
            This spell regrows a severed or mangled limb. Whenever
            a limb is lost, the gamemaster should determine what
            percentage of the limb was lost. The gamemaster can roll
            D100 or simply decide. The result shows how much needs
            to be regrown. The recovery rate is 10% per game week if
            the spell is applied within ten minutes of damage, increasing
            to 20% per season thereafter. 
        `
  },
  {
    title: "Remove (body part)",
    runes: [RunePowerTitle.ILLUSION, RunePowerTitle.DISORDER],
    rpCost: 2,
    range: "self",
    duration: "temporal",
    stackable: false,
    description: `
            This spell allows the caster to pull off the specified limb or
            organ without damage or pain. The detached limb can be
            moved by the caster and they receive all normal sensory input
            from it as if it were still attached, though with the additional
            freedom of movement. A caster with Remove Hand can take
            off their hand and send it crawling away. Even if the caster
            cannot see their limb, they can still control it and feel what 
            it feels, although they may not be able to tell where or how
            far away it is. /n
            If the separated limb is damaged, all normal rules ensue
            as if it were not detached\u2014the owner can become incapacitated, take general hit point damage, or even be poisoned!
            The caster cannot grow a new equivalent part with a Regrow
            Limb or its equivalent until the old part is destroyed. /n
            The caster can reattach the detached part if they bring it
            back within the spell\u2019s duration. If the spell ends before it is
            restored, it must remain separated until they cast the spell
            again. This does not result in the death of the caster, even if
            the detached part of the body is the head!
        `
  },
  {
    title: "Reproduce",
    runes: [RunePowerTitle.FERTILITY],
    rpCost: 2,
    range: "touch",
    duration: "instant",
    stackable: false,
    description: `
            This spell is cast upon a single living thing of any sort, and
            permits it to recreate itself through the natural processes
            of the life force. The being\u2019s next attempt at procreation
            succeeds to the greatest degree possible. If a corn shoot were
            blessed, the full-grown plant would be heavily laden with
            ears, and all kernels in each ear would be large, fertile, and
            capable of growing a new plant. A human would give birth
            to a healthy baby, possibly even twins or triplets (in such
            case, the gamemaster may want to roll 1D3 to determine
            how many babies). However, if reproduction is normally
            impossible, this spell does not render it possible.
        `
  },
  {
    title: "Restore Health",
    runes: [RunePowerTitle.FERTILITY, RunePowerTitle.HARMONY, RuneFormTitle.MAN],
    rpCost: 1,
    range: "touch",
    duration: "instant",
    stackable: false,
    description: `
            \u041A\u0430\u0436\u0434\u043E\u0435 \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0439 Rune Point \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442 \u043A\u0430\u043A\u0443\u044E-\u043B\u0438\u0431\u043E \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0443, 
            \u0443\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u043D\u0443\u044E \u0438\u0437-\u0437\u0430 \u0431\u043E\u043B\u0435\u0437\u043D\u0438 \u0438\u043B\u0438 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F. \u041D\u0435 \u0443\u0441\u0442\u0440\u0430\u043D\u044F\u0435\u0442 \u043F\u0440\u0438\u0447\u0438\u043D\u0443 (\u0431\u043E\u043B\u0435\u0437\u043D\u044C, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440) /n /n
            This spell restores characteristic points that have been lost
            to disease, to the effects of the sorcery spell Tapping, or to
            other sources. This spell does not cure any disease that may
            be present. It does not restore characteristics lost due to death. /n
            Each Rune point of Restore Health restores one point
            of a specified characteristic. Use of this spell can restore
            characteristic points only up to their value prior to being lost. 
        `
  },
  {
    title: "Resurrect",
    runes: [OtherRunes.FATE, RunePowerTitle.HARMONY, RuneFormTitle.MAN],
    rpCost: 3,
    ritual: true,
    stackable: false,
    description: `
            This ritual spell allows an adventurer to be restored to life.
            First, the body must be healed to at least 3 hit points. If the
            body is dead from disease, the disease must be eliminated
            or the Resurrect is futile. /n
            This spell summons the deceased spirit to approach its
            former body. The caster of the spell or their allied spirit 
            must engage in spirit combat with the deceased. If the caster
            succeeds in causing the deceased to lose magic points, the
            spirit is forced back into the body and returns to full life. If
            the caster fails by ending the spirit combat early or being
            defeated, the soul returns to the Courts of Silence. /n
            Each day after the first that the dead adventurer stays
            dead permanently reduces their STR, CON and DEX characteristics by 1D3 points each. When any characteristic is
            reduced to 0 or less, that adventurer is irrevocably lost. Thus,
            death from characteristic loss means that the adventurer is
            not resurrectable. /n
            Finally, anyone dead longer than 7 days is unable to be
            resurrected with this spell, regardless of their characteristic
            points. They can only be brought back through a successful heroquest. 
        `
  },
  {
    title: "Safe",
    runes: [RunePowerTitle.HARMONY],
    rpCost: 2,
    range: "touch",
    duration: "8 weeks",
    stackable: false,
    description: `
            This spell is cast upon a container or opening to bar
            unwanted passage. The caster must boost the spell with one
            or more magic points (although typically the caster boosts it
            with as many as possible). When anyone other than the caster
            tries to open the secured container, or crosses a doorway with
            this spell, they are attacked by the spell\u2019s magic points. If
            the trespasser\u2019s POW is overcome, they take 1D6 points of
            general hit point damage and are forced back. If their POW
            is not overcome, the spell is broken and they may enter freely,
            as may anyone accompanying them. If an intruder fails to
            overcome the spell on their first try, they can try again and
            again until they either succeed, give up, or are slain. /n
            The spell\u2019s entire magic points are matched against any
            defensive magic the intruder might have.
        `
  },
  {
    title: "Sanctify",
    runes: [OtherRunes.MAGIC],
    rpCost: 1,
    ritual: true,
    stackable: true,
    description: `
            This spell blesses the volume of a 10-meter-radius area,
            usually a sphere (though Earth cult holy ground always takes
            on a cubical shape). Cast on level ground, one hemisphere
            would roughly be in the air, and the other within the earth.
            While the Sanctified area is not detectable by touch or trolls\u2019
            Darksense, the boundaries slightly shimmer in bright light.
            Ceremonies are performable within a Sanctified area
            that normally can be performed only in a temple, such as
            replenishing Rune points. /n
            Anyone within any portion of the sanctified area is
            considered completely within it. If non-initiates, spells, or
            spirits cross the boundary, the caster is immediately alerted
            to their presence. /n
            Additional Rune points of Sanctify increase the radius of
            protection by half again. Thus, 2 points of Sanctify protects
            a 15-meter-radius area, and so on. 
        `
  },
  {
    title: "Seal Soul",
    runes: [RunePowerTitle.FERTILITY],
    rpCost: 3,
    ritual: true,
    stackable: false,
    oneUse: true,
    description: `
            This is a limited resurrection spell which may be used on cult
            initiates or Rune Masters, or occasionally sold to foreigners
            for outrageous prices. The body must have been slain, not
            dead from disease or old age. The body must be fully healed,
            or it will die again when its soul returns. After casting the
            spell, the caster will engage in spirit combat with the spirit
            of the deceased. If the caster is successful in overcoming the
            spirit during the first round of combat, then the body and
            spirit will be rejoined, thereby bringing the adventurer to
            life. After casting the spell and engaging the spirit, the caster
            will have lost 1D3 of CON from having undergone such
            strenuous activity. /n
            Each day after death that the adventurer has been dead
            permanently reduces their STR, CON, and DEX characteristics by 1D3 points each. When any characteristic is reduced
            to 0 or less, then that adventurer is irrevocably lost. A death
            from loss of a characteristic is not resurrectable. /n
            Finally, anyone dead longer than 7 days cannot be have
            their body and soul reunited with this spell, regardless of
            their characteristic points. They can only be brought back
            through a successful heroquest. 
        `
  },
  {
    title: "Sever Spirit",
    runes: [RunePowerTitle.DEATH],
    rpCost: 3,
    range: "ranged",
    duration: "instant",
    description: `
            This spell acts as a sword to cut the bond between the
            body and spirit of the target. The caster must make a
            successful POW vs. POW resistance roll. If successful, the
            target dies. If unsuccessful, the target takes 1D6 damage to
            general hit points.
        `
  },
  {
    title: "Shake Earth",
    runes: [RuneElementalTitle.EARTH, RunePowerTitle.DISORDER],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            This spell has two variables: magic points are used to
            determine the size of the area affected, and the number of
            Rune points stacked in the spell determines the severity
            of the result. /n
            The spell affects an area of land geometrically proportionate to the number of magic points expended. One magic
            point covers 1 square meter, 2 magic points covers 4 square
            meters, and so on. /n
            Everyone within the area has a 5% per point of Shake
            Earth subtracted from all Agility and Manipulation skills
            and DEX rolls. Each round, anyone standing up must succeed in a DEX\xD75 roll or fall (this roll is modified by the
            above penalty). /n
            Other results of the quake, such as toppling trees, avalanches, etc. are up to the gamemaster to determine, and
            should be based on the number of Rune points spent on
            the spell and the existing conditions or environment. An
            earthquake can range from a light tremor that causes little
            damage to a catastrophic, city-killing event, at the gamemaster\u2019s discretion. 
        `
  },
  {
    title: "Shattering",
    runes: [RunePowerTitle.DISORDER],
    rpCost: 1,
    range: "ranged",
    duration: "instant",
    stackable: false,
    description: `
            This spell acts as four Disruption spells cast at once, all
            directed at one target. As it does an average of 8 points of
            damage when it hits, all to one area, it is a very lethal spell.
            The target can resist.
        `
  },
  {
    title: "Shield",
    runes: [],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            Rune varies depending on cult /n
            
            This spell protects the wearer from damage. Each point of
            Shield gives the wearer 2 points of magical armor and 2
            points of Countermagic (equivalent to the spirit magic spell).
            The effects of this spell are cumulative with either Protection
            or Countermagic. /n
            To get past a Shield spell, a spirit or sorcery spell must be
            at least 1 point stronger than the defense of the shield. This
            spell does not dissipate when breached. It remains in effect
            for the full 15-minute duration, or until it is destroyed with
            Dispel, Neutralize, or Dismiss Magic. /n
            If cast on a target already protected by Countermagic,
            the Countermagic would be Dispelled before the Shield,
            if possible. 
        `
  },
  {
    title: "Slash",
    runes: [RunePowerTitle.DEATH],
    rpCost: 1,
    range: "touch",
    duration: "temporal",
    stackable: true,
    description: `
            This spell must be cast upon a one- or two-handed axe. Each
            point of Slash increases the damage done by 1D6.
        `
  },
  {
    title: "Snow",
    runes: [RuneElementalTitle.AIR],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            Range: 100-meter radius around caster. /n
            
            This spell must be cast when precipitation is present. If it
            is raining, the spell changes all the rain to snow, sleet, or
            hail (at the gamemaster\u2019s option) within the spell\u2019s radius of
            effect. If it is already snowing, the spell doubles the amount
            of snow falling. /n
            Each additional point of this spell increases the radius of
            affect by another 100 meters.
        `
  },
  {
    title: "Soul Sight",
    runes: [OtherRunes.MAGIC],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: false,
    description: `
            This spell allows the recipient to see both the POW aura of
            the living and to magically know the actual current magic
            points of other things and creatures, including the amount
            devoted to currently in-effect spells (such as defensive spells). /n
            The recipient can also tell if a person viewed through this
            spell is an initiate; and if so, whether the initiate is in good
            standing or not. This spell does not reveal if a person is a
            Rune Master, merely that they have been initiated into a cult.
        `
  },
  {
    title: "Speak with Herd Beasts",
    runes: [RuneFormTitle.BEAST],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: false,
    description: `
            This spell allows the person on whom it is cast to talk with
            one type of herd beast for the length of the spell. Orate and
            Fast Talk can be used if the creature needs convincing. The
            spell does not instill any intelligence into the creature, so it
            can only speak from its natural awareness.
        `
  },
  {
    title: "Speak With Insects",
    runes: [RuneElementalTitle.DARKNESS, RuneFormTitle.BEAST],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: false,
    description: `
            This spell allows the person on whom it is cast to converse
            with one type of insect for the spell\u2019s duration. Oratory
            bonuses count if the creature needs convincing. This spell can
            be used to speak to very small insects, but their INT is small
            and they may not be able to get very coherent ideas across.
        `
  },
  {
    title: "Spell Trading",
    runes: [RunePowerTitle.HARMONY],
    rpCost: 2,
    range: "touch",
    duration: "instant",
    stackable: false,
    description: `
            This spell allows the caster to trade one use of any Rune
            magic (except this one!) in exchange for one use of any Rune
            spell known by another priest of any cult. The trade must be
            done voluntarily. Trading a spell requires that each adventurer
            spend Rune points equal to the traded spell. /n
            A special procedure must be followed or this spell
            does not work:   /n
             - The trade must be done in an Issaries Market.
            This protects the priest from persons with ill
            intent, so that a thief who intends to \u201Caccidentally\u201D
            cast a Mindblast at the Issaries priest is detected by
            the market spell. /n
             - Traded items must be stated. Exact prices are
            negotiable, but Issaries insists on a negotiated clear
            profit for his priest in one form or another. /n
             - Some sort of token must be passed as part of the
            trade, and it must represent in some way the spell
            being traded. Thus, a Shield spell would use a
            shield, a Humakti spell a knife, or a Summon Air
            Elemental (small) a bag of air. This is in addition
            to any traded items. /n
             - Each player simultaneously rolls a D100. If 1\u201395
            is rolled by both, the spell was traded successfully,
            but a 96\u201300 result by either means that the spell is
            activated against the other party, and immediately
            takes effect! For example, if a Sunspear is being traded,
            the intended recipient is struck by the blast. Even if
            one of the partners fails to trade the spell properly,
            he still receives the spell from the other party. /n
             - The Rune points used to trade a Rune spell can
            be replenished in the regular fashion. To cast the
            received spell, no Rune points need to be used
            and the caster uses the relevant Rune rating of the
            person who provided the spell. /n
             - The original \u201Cowners\u201D of the spells can still cast
            them after trading them, provided that the spell
            was not a one-use spell and that all other requirements for the spell (Rune points, cult status, etc.)
            are still met.  /n
            No cult trades special cult magic lightly; other cults treat
            these transactions in various ways. All Lightbringers, for
            example, deal with their associate god of Issaries, but the
            Earth goddesses allow spell trades only if the High Priestess
            of the temple approves. The nomad gods (Storm Bull and
            Waha) require the High Priest to be present to negotiate.
            The non-human deities are even more reluctant. A spell
            acquired through trade can be traded again for another by
            use of this spell. /n
            
        `
  },
  {
    title: "Spirit Armor Enchantment",
    runes: [OtherRunes.MAGIC],
    rpCost: 1,
    ritual: true,
    enchantment: true,
    stackable: true,
    description: `
            This enchantment is used to create spiritual armor that
            absorbs magic point damage in spirit combat. It requires
            an hour-long ritual, after which the caster sacrifices 1 or
            more points of POW. Each point of POW sacrificed in the
            enchantment imbues the object with the equivalent of 1D3
            points of spiritual armor. 
        `
  },
  {
    title: "Spirit Block",
    runes: [OtherRunes.MAGIC],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            This spell helps protect the recipient from attack by spirits.
            Each point of this spell acts as spiritual armor and absorbs
            2 points of magic point damage in spirit combat. /n
            /n
            Example: Sorala, protected by Spirit Block 2, has 8 current
            magic points and is engaged in spirit combat. She loses this
            round against the spirit, which does 5 points of spirit combat
            damage to Sorala. Her Spirit Block protects her for 4 points, so
            only 1 point of damage gets through. She now has 7 current
            magic points. /n
            /n
            If the current magic points of the attacking spirit fall
            below the value of the Spirit Block they are unable to 
            continue spirit combat with the protected recipient, and
            the spirit combat ends.
        `
  },
  {
    title: "Spirit Guardian",
    runes: [RuneFormTitle.MAN],
    rpCost: 1,
    range: "ranged",
    duration: "one day",
    stackable: true,
    description: `
            This spell must be cast upon a friendly ancestral spirit. It sets
            up a mental connection, identical to that with an allied spirit
            (see page 277), between the spirit and the target. /n
            Each additional Rune point added to this spell adds a
            day\u2019s duration to the connection. The recipient may only
            have one such Spirit Guardian at any given time.
        `
  },
  {
    title: "Spirit Melding",
    runes: [RuneFormTitle.MAN],
    rpCost: 2,
    range: "touch",
    duration: "temporal",
    stackable: false,
    description: `
            This spell must be cast upon a friendly ancestral spirit
            enveloping the caster. For the spell\u2019s duration, the spirit\u2019s
            POW is added to the caster\u2019s for purposes of resisting
            spirit combat and spells. If the spirit leaves the caster, the
            spell\u2019s effects end.
        `
  },
  {
    title: "Strike",
    runes: [RunePowerTitle.DISORDER],
    rpCost: 1,
    range: "touch",
    duration: "temporal",
    stackable: false,
    description: `
            This spell is cast upon a weapon. The next blow by
            that weapon ignores all armor. It may be parried or
            Dodged as usual.
        `
  },
  {
    title: "Strongnet",
    runes: [RuneElementalTitle.WATER],
    rpCost: 2,
    range: "ranged",
    duration: "temporal",
    stackable: false,
    description: `
            This spell must be cast upon a net. It makes the net
            unbreakable by any means, including fire. A trapped victim
            must escape by unwrapping itself, tearing the net from the
            grip of its captor, or squeezing between the weave. 
        `
  },
  {
    title: "Summon Ancestor",
    runes: [RuneFormTitle.MAN],
    rpCost: 1,
    ritual: true,
    range: "ranged",
    duration: "temporal",
    description: `
            This summons a randomly determined spirit of the caster\u2019s
            ancestors from the Land of the Dead. The same spirit is rarely
            gotten twice. The spirit arrives as indicated on the Ancestral
            Summons table, appearing within the spell\u2019s range. /n
            After giving commands to the spirit (providing it is friendly)
            the summoner must roll a D100. On a fumble the spirit
            misunderstands the command and turns on the summoner.
            The summoner may command the spirit to engage in spirit 
            combat (see page 366) against a foe. The spirit may also cast
            any spells it knows, but depletes their magic points in doing
            so. In either case, if the spirit\u2019s magic points are reduced to 11
            or fewer, the spirit disappears immediately (even if engaged
            in spirit combat) and returns to the Land of the Dead. If the
            summoned spirit has fewer than 11 magic points to start with,
            it will disappear once it loses any additional magic points. /n
            The spirit cannot be used to memorize spells, supply
            magic points, or to teach the summoner. The spirit can speak
            Spiritspeech and its original language from its former life. /n
             - Friendly: Spirit does as the summoner desires. /n
             - Neutral: Spirit does as the summoner desires, but
            only if the summoner gives it 1 magic point for
            every point of POW the spirit possesses. This must
            be expended immediately, and cannot be used by
            the summoner of the spirit. /n
             - Malign: These spirits always try to attack and
            possess the summoner. /n
             - Spirit Spells: To determine the precise spells
            known by the spirit, roll on the Ancestor Spirit
            Spells table. Spirits know 2D6\u20135 points of a
            variable spell (minimum of 1 point). /n
             - Rune Points: This indicates the number of Rune
            points the spirit has. An ancestor can only cast
            Daka Fal special Rune magic, and cannot cast
            common Rune spells.  /n
            
            For ancestor characteristics check page 342
        `
  },
  {
    title: "Summon Cult Spirit",
    runes: [],
    rpCost: "variable",
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            Rune varies depending on cult spirit. /n
            
            With this spell, the caster asks the deity to send a cult spirit
            of some type. The size of the spirit depends on the number of
            Rune points stacked with the spell. As a rule, greater deities
            have more types of cult spirits. /n
            Summon Elemental is a specific example of this spell but
            many other variations exist. For example, Chalana Arroy
            cultists can use this spell to summon a healing spirit with
            a 1-point variant of this spell, and Engizi cultists can use
            a 2-point variant of this spell to summon a naiad of the
            Creekstream River. /n
            See the Glorantha Bestiary for examples of cult spirits
        `
  },
  {
    title: "Summon Elemental (type)",
    runes: [],
    rpCost: "variable",
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            Rune varies depending on elemental being summoned. /n
            
            With this spell, the caster asks the deity to send an elemental
            of this type. The size of the elemental depends on the number
            of Rune points stacked with the spell (and is limited by
            whatever maximum size of elemental is available to the cult). /n
            Elementals come in three sizes: small, medium, and large.
            See the Glorantha Bestiary for more details on elementals.
            A small elemental is 1 cubic meter in size or less (1\xD71\xD71).
            With one additional Rune point stacked with this spell, a
            medium elemental is summoned. A medium elemental is
            3 cubic meters or less (1\xD73\xD71). With two additional points
            stacked with this spell, a large elemental is summoned. A
            large elemental is 10 cubic meters or less (2\xD75\xD71). Most cults
            are limited as to the size of elemental that can be summoned
            with this spell. /n
            Once summoned, an elemental acts according to its
            nature and cult affiliation, unless an appropriate Command
            Cult Spirit spell is cast and the elemental\u2019s POW overcome by
            the caster with a resistance roll. If successful, the elemental
            serves the summoner until it is physically destroyed, or 15
            minutes have passed, whichever comes first. An uncontrolled
            elemental may playfully destroy things around it, wander
            away, or even attack those hostile to its god, all at the gamemaster\u2019s discretion. /n
            If the caster fails, the elemental becomes hostile to the
            caster. The caster may try again to cast Command Cult Spirit
            and overcome the elemental\u2019s POW. /n
            Any number of elementals may be summoned at one time,
            controlled by the same adventurer. An elemental cannot be 
            summoned without at least some reasonable amount of that
            element present. It need not be anywhere near the amount
            used in the elemental, but if an adventurer is out of water in
            the desert, they cannot summon a water elemental! /n
            Having once successfully summoned an elemental, the
            deity sends the same elemental every time the adventurer
            summons an elemental of that size and type. If the caster
            summons more than one elemental of that size, they can
            choose which one they summon in the future.
        `
  },
  {
    title: "Summon Household Guardian",
    runes: [RuneElementalTitle.EARTH, RunePowerTitle.HARMONY],
    rpCost: 1,
    ritual: true,
    stackable: false,
    description: `
            This ritual summons a spirit of POW 2D6+6 and 3D6 CHA
            to protect a household and its members. The spirit manifests
            as a large snake and the spell ends if the snake is killed. The
            household spirit knows 1D3 points of cult spirit magic
            (typically Heal or Demoralize). The spirit is bound to
            the household precincts and must receive regular
            worship from the household. The caster of the
            spell may draw upon the household spirit\u2019s
            magic points while within the precincts
            of the household.
        `
  },
  {
    title: "Summon Specific Ancestor",
    runes: [RuneFormTitle.MAN],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    description: `
            This spell must be stacked with a 1-point Summon Ancestor
            spell. It calls a specific ancestor spirit already known to the
            summoner. Otherwise it is as Summon Ancestor.
        `
  },
  {
    title: "Summon Spirit of Law",
    runes: [RuneFormTitle.MAN],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: false,
    description: `
            This spell summons a weak spirit (POW of
            2D6+6 and CHA of 2D6), for a spirit combat
            attack on a target that has already revealed its
            Chaotic nature. The spirit has a spirit combat
            skill equal to its POW\xD75 and no spells. If the
            spirit appears and does not detect a Chaotic
            spirit or soul, the Spirit of Law departs
            without making any attack.
        `
  },
  {
    title: "Summon Spirit Teacher",
    runes: [RuneFormTitle.MAN],
    rpCost: 2,
    range: "ranged",
    duration: "temporal",
    description: `
            This must be stacked with the 1-point Summon Ancestor
            spell. The spirit so summoned can teach spells, give
            information, or act as a shaman\u2019s fetch for the length of
            the spell. It allows rapid teaching of spells, to be learned in
            one day. It may be stacked with Summon Specific Ancestor
        `
  },
  {
    title: "Summons of Evil",
    runes: [RuneElementalTitle.AIR],
    rpCost: 3,
    ritual: true,
    duration: "special",
    description: `
            This spell is typically performed at the start of a Worship
            Orlanth ritual. It requires an effigy of an enemy (which
            may be an individual, a deity, a species, etc.) of the caster
            to be made. The effigy is typically made of wicker or wood.
            When cast, the spell animates the effigy with a malevolent
            spirit associated with the enemy. It also summons the most
            powerful representative of the enemy it can during the
            duration of the ritual. /n
            The spirit summoned typically has a POW between
            4D6+6 and 5D6+6, but more powerful spirits are not
            unknown. The spirit remains trapped within the effigy and
            its boundaries until the end of the ritual, when the participants must destroy it. During this time, it will fight back
            with any abilities it possesses, whether magic or otherwise.
            The spirit has hit points and STR equal to its POW and
            always has one or more spirit powers (see page 365 for more
            information on spirit powers). /n
            If the effigy is destroyed, the participants gain a +20%
            bonus in overcoming the magic resistance of or defending
            against spells cast by the enemy represented by the effigy
            for the duration of the ceremony. They also get a +50% on
            their Worship roll for that ceremony (as a result, the Rune
            points cast on the spell are usually regained at the end of
            the ceremony). /n
            While the effigy is present, the spell summons the most
            powerful representative of the enemy within the range of
            the spell. The enemy does not realize that they have been
            summoned, but rather feels an urgent need to go to the place
            where the ritual is being performed. This compulsion makes
            rational and emotional sense to the subject\u2014the subject
            may \u201Crecognize\u201D that this is a rare opportunity to destroy a
            hated enemy, or perhaps that a preemptive strike is needed to
            prevent the caster from performing a more dangerous ritual.
            The enemy takes enough time to hastily gather companions,
            followers, and allies and then sets out by whatever means
            would be normal for the enemy to travel. For example, an
            army leader might march out with his regiment (or at least
            his bodyguards and favored officers), but a wyvern-riding hero
            might fly far more rapidly. /n
            The range is determined by the amount of time the ritual
            is maintained until the effigy is destroyed. The longer the
            ceremony is maintained, the greater the range. For example,
            during a typical one-day Worship ceremony, the spell summons
            an enemy from within a day\u2019s travel (typically between 8\u201316
            kilometers). If the ceremony is maintained for the entire 14 days
            of Sacred Time, an enemy as far as 200 kilometers away might
            be summoned. If the caster has a heroquest enemy, the spell
            always tries to summon that being, in addition to the enemy
            initially summoned by the effigy. /n
            Once the effigy is destroyed, the enemy is no longer
            compelled to travel, but might come anyway, especially if companions, allies, and followers have already
            begun traveling. /n
        `
  },
  {
    title: "Sunbright",
    runes: [RuneElementalTitle.FIRE],
    rpCost: 2,
    range: "ranged",
    duration: "temporal",
    stackable: false,
    description: `
            This spell puts a 60-meter radius circle of light around the
            recipient of the spell. If the recipient is unwilling, the caster
            must overcome their POW. This light gives the effect of
            full daylight, and so affects creatures such as cave trolls. It
            Demoralizes vampires, ghouls, and other intelligent undead
            as per the spirit magic spell. It also gives the recipient the
            equivalent of a Shimmer 2 spell. /n
            A darkness elemental takes 1D3 points of damage each
            round it remains within the influence of a Sunbright spell. If
            a Sunbright spell is cast directly upon a darkness elemental
            and overcomes its POW, the elemental dissolves.
        `
  },
  {
    title: "Sunspear",
    runes: [RuneElementalTitle.FIRE],
    rpCost: 3,
    range: "ranged",
    duration: "instant",
    stackable: false,
    description: `
            This spell works only in direct sunlight. When cast, a shaft
            of sunfire is directed towards a single designated target. The
            target must be visible to the caster. Without needing to
            overcome POW, a 1-meter diameter cylinder of fire descends
            upon the target, affecting anything in a 1-meter circle around
            that target. /n
            Every living thing within the circle receives 4D6 points
            of damage to their total hit points. Only the target\u2019s thinnest
            armor protects against this damage; spells are ineffective. /n
            At the gamemaster\u2019s discretion, this spell may set flammable material on fire, or even melt non-flammable items,
            depending on the damage rolled and the circumstances. 
        `
  },
  {
    title: "Suppress Lodril",
    runes: [RuneElementalTitle.DARKNESS],
    rpCost: 3,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            This spell creates a sphere 3 meters in radius, centered on
            any specified spot within range. It does not necessarily have
            to be centered around the caster. Inside the area is shadowy
            haze equivalent to a Create Shadow 1 spell. Anyone initiated
            into a Light, Heat, or Sky Rune-based cult trying to cross the
            borders of the spell automatically takes 2D6 damage directly
            to a random body location, ignoring all armor. The sphere\u2019s
            boundary also acts as a 4-point Countermagic against spells
            cast by initiates or Rune Masters of Light, Heat, or Sky Runebased cults. This spell may be cast to encircle a member of
            such a cult, and thus restrict their movements. /n
            Each additional Rune point used in this spell increases the
            damage done by 1D6 and the Countermagic effect by 2 points.
        `
  },
  {
    title: "Sureshot",
    runes: [RuneElementalTitle.FIRE, RunePowerTitle.DEATH, RunePowerTitle.HARMONY],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: false,
    description: `
            This spell is cast upon a missile weapon. Unless the
            adventurer\u2019s player rolls a 96\u201300, the adventurer\u2019s next
            missile attack automatically hits\u2014regardless of movement,
            range (if it is within maximum missile range for the weapon),
            concealment, etc. Any chance for a critical, special, or
            fumble result is still based on the adventurer\u2019s own missile
            skill. Successful hits made using Sureshot do not qualify for
            experience checks. /n
            This spell is compatible with Speedart or Firearrow. It can be
            combined with Multimissile, but only the real missile is affected. 
        `
  },
  {
    title: "Swallow",
    runes: [RunePowerTitle.DISORDER],
    rpCost: 1,
    range: "self",
    duration: "instant/temporal",
    stackable: true,
    description: `
            Each point of this spell allows the user to instantaneously
            swallow an entire SIZ point of any substance. Thus, a 4-point
            spell would allow the user to swallow an average dog whole.
            The intended target may attempt to Dodge or evade but
            cannot attack once the spell has taken effect. Any living
            being swallowed successfully by the caster dies immediately.
            The swallowed item or substance is destroyed and vanishes
            entirely once the spell\u2019s duration is over. The caster remains
            unharmed even if swallowing actively dangerous substances
            such as fire, acid, or poison. Furthermore, the caster does
            not suffer any effects from using this spell, such as increased
            SIZ due to the amount swallowed. The gamemaster should
            determine if any swallowed items are recoverable and their
            condition once they have been swallowed. 
        `
  },
  {
    title: "Sword Trance",
    runes: [RunePowerTitle.DEATH],
    rpCost: 1,
    range: "self",
    duration: "temporal",
    stackable: false,
    description: `
            This spell must be boosted with 1 or more magic points.
            Each magic point expended increases the caster\u2019s Sword skill
            by +10% for the spell\u2019s duration. This spell may be combined
            with other weapon-enhancing spells. This spell does not
            combine effects with Berserker or Fanaticism.
        `
  },
  {
    title: "Tame Bull",
    runes: [RuneElementalTitle.AIR],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: false,
    description: `
            If the target\u2019s POW is overcome, this spell will calm any bull,
            enough for the caster to castrate it, hitch it to a plow, or even
            ride it. The spell works on all male cattle (including all male
            Praxian herd beasts), sky bulls, and Storm Bull cultists.
        `
  },
  {
    title: "Teleportation",
    runes: [RunePowerTitle.MOVEMENT],
    rpCost: 3,
    range: "touch",
    duration: "instant",
    stackable: false,
    description: `
            Sighting for this spell must be done visually. The caster
            can teleport to any spot that can be seen, either on their
            own, or through the eyes of an allied spirit. Each additional
            Rune point enables one extra living thing to be teleported
            at the same time, provided they are touching the caster. The
            intended destination must be an actual location capable of
            accommodating the target and cannot be something as vague
            as \u201Cinto the sky.\u201D /n
            The spell can be used to teleport someone else, but the
            target must be in physical contact with the caster. Unwilling
            targets must also have their POW overcome. 
        `
  },
  {
    title: "Thunderbolt",
    runes: [RunePowerTitle.MOVEMENT],
    rpCost: 3,
    range: "ranged",
    duration: "instant",
    stackable: true,
    description: `
            This spell draws a bolt of divine energy from the storm
            clouds and directs it at a specified target, without needing to
            overcome the target\u2019s POW. The bolt is accompanied with a
            deafening peal of thunder. The sky must have visible cloud
            cover for this spell to be effective: clouds could be summoned
            using the Rune spell Cloud Call. /n
            This spell does 3D6 points of damage directly to total hit
            points. Neither armor nor spells that protect against physical
            damage are effective against this spell, though Countermagic
            works. On casting, each additional Rune point expended
            adds another target.
        `
  },
  {
    title: "Transform Self",
    runes: [RuneFormTitle.BEAST],
    rpCost: 2,
    range: "touch",
    duration: "special",
    description: `
            This spell must be stacked with the three cult specialty
            spells. For example, an Odayla cult-member caster would use
            Bear\u2019s Skin, Bear\u2019s Strength, and Claws. When these spells are
            combined with Transform Self, the user bodily transforms
            into a magical, semi-divine version of the god\u2019s animal. All
            the spells have full effect, and, additionally, they last for one
            full hour instead of 15 minutes. All the normal abilities of the
            animal become usable by the caster for the spell\u2019s duration. /n
            This spell may only be cast on Wildday and can only be
            cast upon an initiate or Rune Master of the god.
        `
  },
  {
    title: "Translate",
    runes: [RunePowerTitle.TRUTH],
    rpCost: 1,
    range: "touch",
    duration: "temporal",
    stackable: false,
    description: `
            This spell translates all words touched by the user\u2019s index
            finger at normal reading speed (about 3,000 written words in
            15 minutes), leaving an impression of the meaning afterwards,
            in a manner which aids in translations of the same language
            or script. Untranslatable words are not translated, though
            the user receives an idea of the word\u2019s meaning.
        `
  },
  {
    title: "Truespeak",
    runes: [RunePowerTitle.TRUTH],
    rpCost: 2,
    range: "ranged",
    duration: "temporal",
    stackable: false,
    description: `
            This spell compels the victim to speak nothing but the truth
            for the duration, answering all questions in a literal manner.
            The user must overcome the target\u2019s POW with their own
            to compel the truth-telling for each question. The target
            can refuse to speak at all, but if they do speak, and their
            POW is overcome, they must tell the truth. Combined
            with Mind Read, this spell makes the Lhankor Mhy sage a
            potent inquisitor.
        `
  },
  {
    title: "True (Weapon)",
    runes: [RunePowerTitle.DEATH],
    rpCost: 1,
    range: "touch",
    duration: "temporal",
    stackable: false,
    description: `
            Cast on a specified melee weapon, this spell doubles the
            normal damage done by the weapon. The player of the
            weapon-wielding adventurer should roll the weapon damage
            dice twice and total the results. The wielder\u2019s damage bonus
            is applied but is not doubled. /n
            The Humakti version of this spell is called True Sword,
            but some other Rune cults have versions using their own
            cult weapons. 
        `
  },
  {
    title: "Turn Undead",
    runes: [RunePowerTitle.DEATH],
    rpCost: 1,
    range: "ranged",
    duration: "instant",
    stackable: true,
    description: `
            This stackable spell affects one undead creature (such as a
            skeleton, zombie, mummy, ghoul, or vampire) for each point
            sacrificed. The caster must attempt to overcome each target\u2019s
            magic points (undead do not have POW) with their own
            POW (roll separately for each target). Use the Turn Undead
            Results table to determine results. /n
            
            Result - Effects /n
            
            Critical -  Undead destroyed, released, or an appropriate end. /n
            
            Special - Undead paralyzed and immobile for 20 melee
            rounds minus the creature\u2019s INT (skeletons are
            automatically inactivated for 20 rounds). Undead
            with INT 20+ are inactive for 1 melee round. /n
            
            Success - The undead turns and flees, if possible. If not, the
            effects are as per a special success, above. /n
            
            Failure - The undead is Befuddled as per the spirit magic
            spell. /n
            Fumble - No effect
        `
  },
  {
    title: "Warding",
    runes: [OtherRunes.MAGIC],
    rpCost: 1,
    ritual: true,
    enchantment: true,
    stackable: true,
    description: `
            This ritual spell creates an area of safety for those inside. It
            requires four wands as props. The wands can be made of
            any material and can be so spaced as to enclose a maximum
            area of up to 100 square meters. The spell extends into the
            air for 3 meters above the wands, and underground to the
            depth of the wands. /n
            The activated wands connect invisibly to form a barrier
            detectable only by magical means. The protection afforded
            by the Warding is initiated when physical or spirit enemies of
            the caster cross the barrier, or when a spell is cast across the
            barrier from the outside. When this happens, a loud noise
            (a keening, whistling, booming, etc.) begins, which may be
            suppressed by the casting priest. /n
            Each point of Warding counts as 1 point of Countermagic
            against spells cast across the barrier, 2 points of Spirit Screen
            against outside spirits, and does 1D3 points of damage,
            ignoring armor, to one hit location of any corporeal enemy
            unwise enough to cross the boundary. /n
            Instead of providing additional Countermagic or Spirit
            Screen, any added points of Warding can be used to increase
            the area protected: each additional point covers another 100
            square meters. /n
            The Warding spell remains in effect until the props are
            removed. Anyone but the caster that attempts to touch the
            stakes is affected by the spell. But after suffering the Warding\u2019s effect, the sufferer can then remove the stakes. The
            stakes need not be visible to work. 
        `
  },
  {
    title: "Wind Warp",
    runes: [RunePowerTitle.MOVEMENT, RuneElementalTitle.AIR],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: true,
    description: `
            Range: 100-meter radius around caster. /n
             
            This spell changes the wind direction by 30 degrees in the
            direction of the caster\u2019s choice. Each additional point of the
            spell either adds +30 more degrees of directional change
            or increases the radius of effect by 100 meters. This spell
            doubles the effect of wind on missile weapons. /n
            When the spell ends, the wind hesitates, motionless, for
            one melee round, then abruptly returns to its former direction. Small whirlwinds may form at the spell\u2019s boundaries,
            where the wind is forced to clash with itself. 
        `
  },
  {
    title: "Wind Words",
    runes: [RunePowerTitle.MOVEMENT, RuneElementalTitle.AIR],
    rpCost: 1,
    range: "ranged",
    duration: "temporal",
    stackable: false,
    description: `
            Range: 100-meter radius around caster. /n
             
            The caster can cause the wind to bring conversations to their
            ears, as if they were standing next to the speaker.
        `
  }
];
