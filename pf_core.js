var Size_Fine = new Size("Fine", 8);
var Size_Diminutive = new Size("Diminutive", 4);
var Size_Tiny = new Size("Tiny", 2);
var Size_Small = new Size("Small", 1);
var Size_Medium = new Size("Medium", 0);
var Size_Large = new Size("Large", -1);
var Size_Huge = new Size("Huge", -2);
var Size_Gargantuan = new Size("Gargantuan", -4);
var Size_Colossal = new Size("Colossal", -8);

Sizes.push(Size_Fine, Size_Diminutive, Size_Tiny, Size_Small, Size_Medium, Size_Large, Size_Huge, Size_Gargantuan, Size_Colossal);

// ---

var strength = new Ability("Strength", "STR");
var dexterity = new Ability("Dexterity", "DEX");
var constitution = new Ability("Constitution", "CON");
var intelligence = new Ability("Intelligence", "INT");
var wisdom = new Ability("Wisdom", "WIS");
var charisma = new Ability("Charisma", "CHA");
Abilities.push(strength, dexterity, constitution, intelligence, wisdom, charisma);

// ---

var acrobatics = new Skill("Acrobatics", "Acrobatics", dexterity, false, false, "http://paizo.com/pathfinderRPG/prd/skills/acrobatics.html");
var appraise = new Skill("Appraise", "Appraise", intelligence, false, false, "http://paizo.com/pathfinderRPG/prd/skills/appraise.html");
var bluff = new Skill("Bluff", "Bluff", charisma, false, false, "http://paizo.com/pathfinderRPG/prd/skills/bluff.html");
var climb = new Skill("Climb", "Climb", strength, false, false, "http://paizo.com/pathfinderRPG/prd/skills/climb.html");
var craft1 = new Skill("Craft1", "Craft", intelligence, false, true, "http://paizo.com/pathfinderRPG/prd/skills/craft.html");
var craft2 = new Skill("Craft2", "Craft", intelligence, false, true, "http://paizo.com/pathfinderRPG/prd/skills/craft.html");
var craft3 = new Skill("Craft3", "Craft", intelligence, false, true, "http://paizo.com/pathfinderRPG/prd/skills/craft.html");
var diplomacy = new Skill("Diplomacy", "Diplomacy", charisma, false, false, "http://paizo.com/pathfinderRPG/prd/skills/diplomacy.html");
var disableDevice = new Skill("DisableDevice", "Disable Device", dexterity, true, false, "http://paizo.com/pathfinderRPG/prd/skills/disableDevice.html");
var disguise = new Skill("Disguise", "Disguise", charisma, false, false, "http://paizo.com/pathfinderRPG/prd/skills/disguise.html");
var escapeArtist = new Skill("EscapeArtist", "Escape Artist", dexterity, false, false, "http://paizo.com/pathfinderRPG/prd/skills/escapeArtist.html");
var fly = new Skill("Fly", "Fly", dexterity, false, false, "http://paizo.com/pathfinderRPG/prd/skills/fly.html");
var handleAnimal = new Skill("HandleAnimal", "Handle Animal", charisma, true, false, "http://paizo.com/pathfinderRPG/prd/skills/handleAnimal.html");
var heal = new Skill("Heal", "Heal", wisdom, false, false, "http://paizo.com/pathfinderRPG/prd/skills/heal.html");
var intimidate = new Skill("Intimidate", "Intimidate", charisma, false, false, "http://paizo.com/pathfinderRPG/prd/skills/intimidate.html");
var arcana = new Skill("Arcana", "Knowledge (Arcana)", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/knowledge.html");
var dungeoneering = new Skill("Dungeoneering", "Knowledge (Dungeoneering)", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/knowledge.html");
var engineering = new Skill("Engineering", "Knowledge (Engineering)", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/knowledge.html");
var geography = new Skill("Geography", "Knowledge (Geography)", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/knowledge.html");
var history = new Skill("History", "Knowledge (History)", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/knowledge.html");
var local = new Skill("Local", "Knowledge (Local)", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/knowledge.html");
var nature = new Skill("Nature", "Knowledge (Nature)", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/knowledge.html");
var nobility = new Skill("Nobility", "Knowledge (Nobility)", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/knowledge.html");
var planes = new Skill("Planes", "Knowledge (Planes)", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/knowledge.html");
var religion = new Skill("Religion", "Knowledge (Religion)", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/knowledge.html");
var linguistics = new Skill("Linguistics", "Linguistics", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/linguistics.html");
var perception = new Skill("Perception", "Perception", wisdom, false, false, "http://paizo.com/pathfinderRPG/prd/skills/perception.html");
var perform1 = new Skill("Perform1", "Perform", charisma, false, true, "http://paizo.com/pathfinderRPG/prd/skills/perform.html");
var perform2 = new Skill("Perform2", "Perform", charisma, false, true, "http://paizo.com/pathfinderRPG/prd/skills/perform.html");
var profession1 = new Skill("Profession1", "Profession", wisdom, false, true, "http://paizo.com/pathfinderRPG/prd/skills/profession.html");
var profession2 = new Skill("Profession2", "Profession", wisdom, false, true, "http://paizo.com/pathfinderRPG/prd/skills/profession.html");
var ride = new Skill("Ride", "Ride", dexterity, false, false, "http://paizo.com/pathfinderRPG/prd/skills/ride.html");
var senseMotive = new Skill("SenseMotive", "Sense Motive", wisdom, false, false, "http://paizo.com/pathfinderRPG/prd/skills/senseMotive.html");
var sleightOfHand = new Skill("SleightOfHand", "Sleight of Hand", dexterity, true, false, "http://paizo.com/pathfinderRPG/prd/skills/sleightOfHand.html");
var spellcraft = new Skill("Spellcraft", "Spellcraft", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/spellcraft.html");
var stealth = new Skill("Stealth", "Stealth", dexterity, false, false, "http://paizo.com/pathfinderRPG/prd/skills/stealth.html");
var survival = new Skill("Survival", "Survival", wisdom, false, false, "http://paizo.com/pathfinderRPG/prd/skills/survival.html");
var swim = new Skill("Swim", "Swim", strength, false, false, "http://paizo.com/pathfinderRPG/prd/skills/swim.html");
var useMagicDevice = new Skill("UseMagicDevice", "Use Magic Device", charisma, true, false, "http://paizo.com/pathfinderRPG/prd/skills/useMagicDevice.html");

Skills.push(acrobatics, appraise, bluff, climb, craft1, craft2, craft3, diplomacy, disableDevice, disguise, escapeArtist, fly, handleAnimal, heal, intimidate, arcana, dungeoneering, engineering, geography, history, local, nature, nobility, planes, religion, linguistics, perception, perform1, perform2, profession1, profession2, ride, senseMotive, sleightOfHand, spellcraft, stealth, survival, swim, useMagicDevice);

// ---

var dwarf = new Race("Dwarf", Size_Medium,		20, [0, 0, 2, 0, 2, -2]);
dwarf.extend({
	adjustSkills: function() {
		console.log("dwarf skills");
	}
/*
	base speed 20, never modified by armor or encumbrance
	Darkvision 60 ft
	+4 dodge to AC vs giants
	+2 racial to Appraise skill for nonmagic goods containing precious metal or gemstones
	+1 bonus on attack rolls vs orc & goblinoid humanoids
	+2 racial bonus on saving throws against poison, spells & SLA
	+4 racial bonus to CMD when resisting bull rush or trip, if standing on the ground
	+2 bonus to perception to notice unusual stonework. Check whenever within 10 feet of such features, even when not looking
	
	proficient with battleaxes, heavy picks, warhammers
	any weapon with "dwarven" in its name is martial
	
	initial languages: Common & Dwarven
	language selection: Giant, Gnome, Goblin, Orc, Terran & Undercommon
*/
});

var elf = new Race("Elf", Size_Medium,			30, [0, 2, -2, 2, 0, 0]);
elf.extend({
/*
	low light vision: can see twice as far as humans in dim light
	immune to magic sleep effects
	+2 racial saving throw bonus against enchantment spells & effects
	+2 racial bonus on caster level checks made to overcome spell resistance
	+2 racial bonus on spellcraft checks to identify properties of magic items
	+2 to perception checks
	
	proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows)
	any weapon with "elven" in its name is martial
	
	initial languages: Common & Elven
	language selection: Celestial, Draconic, Gnoll, Gnome, Goblin, Orc & Sylvan
*/
});
var gnome = new Race("Gnome", Size_Small,		20, [-2, 0, 2, 0, 0, 2]);
gnome.extend({
/*
	small size - +1 to AC, +1 to attack rolls, -1 to CMB and CMD, +4 size bonus to stealth checks
	
	Low light vision
	
	+4 dodge bonus to AC vs giants
	+1 to the DC of any saving throws against illusion spells they cast.
	
	If charisma > 11, gain the following SLAs 1/day:
	dancing lights, ghost sound, prestigitation and speak with animals.
	For each, caster level is gnome's level.
	DC is 10 + spell's level + charisma modifier.
	
	+1 on attack roles against reptilian and goblinoid humanoids.
	+2 racial saving throw against illusion spells & effects
	+2 to perception checks
	+2 racial bonus on a craft or profession skill of their choice (Obssesive)
	
	any weapon with "gnome" in its name is martial
	
	initial languages: Common, Gnome & Sylvan
	language selection: Draconic, Dwarven, Elven, Giant, Goblin, & Orc.
*/
});

var halfElf = new Race("Half-Elf", Size_Medium,	30, null);
halfElf.extend({
/*
	Low light vision
	
	Skill Focus as a bonus feat at 1st level.
	
	immune to magic sleep effects
	+2 racial saving throw bonus against enchantment spells & effects
	+2 to perception checks
	
	Choose two favored classes at first level instead of one.
	
	initial languages: Common & Elven
	language selection: any (but not secret languages, such as druidic)
*/
});

var halfOrc = new Race("Half-Orc", Size_Medium,	30, null);
halfOrc.extend({
/*
	Darkvision 60 ft
	
	+2 to intimidate checks
	
	Once per day, when brought below 0 hp but not killed, can fight on for 1 more round as if disabled.
	
	proficient with greataxes and falchions
	any weapon with "orc" in its name is martial
	
	initial languages: Common & Orc
	language selection:  Abyssal, Draconic, Giant, Gnoll, & Goblin.
*/
});

var halfling = new Race("Halfling", Size_Small,	20, [-2, 2, 0, 0, 0, 2]);
halfling.extend({
/*
	small size - +1 to AC, +1 to attack rolls, -1 to CMB and CMD, +4 size bonus to stealth checks
	
	+1 on all saving throws
	+2 on all saving throws against fear (in addition)
	+2 to perception checks
	+2 to acrobatics and climb checks
	
	proficient with slings
	any weapon with "halfling" in its name is martial
	
	initial languages: Common & Halfling
	language selection: Dwarven, Elven, Gnome, & Goblin
*/
});

var human = new Race("Human", Size_Medium,		30, null);
human.extend({
/*
	Select 1 bonus feat at 1st level
	
	Gain an additional skill at every level.
	
	proficient with 
	any weapon with "" in its name is martial
	
	initial languages: Common
	language selection: any (but not secret languages, such as druidic)
*/
});

Races.push(dwarf, elf, gnome, halfElf, halfOrc, halfling, human);

// ---

var barbarian = new Class("Barbarian", 4);
barbarian.classSkills.push(acrobatics, climb, craft1, craft2, craft3, handleAnimal, intimidate, nature, perception, ride, survival, swim);

var bard = new Class("Bard", 6);
bard.classSkills.push(acrobatics, appraise, bluff, climb, craft1, craft2, craft3, diplomacy, disguise, escapeArtist, intimidate, /* all knowledge */ arcana, dungeoneering, engineering, geography, history, local, nature, nobility, planes, religion, /**/ linguistics, perception, perform1, perform2, profession1, profession2, senseMotive, sleightOfHand, spellcraft, stealth, useMagicDevice);

var cleric = new Class("Cleric", 2);
cleric.classSkills.push(appraise, craft1, craft2, craft3, diplomacy, heal, arcana, history, nobility, planes, religion, linguistics, profession1, profession2, senseMotive, spellcraft);

var druid = new Class("Druid", 4);
druid.classSkills.push(climb, craft1, craft2, craft3, fly, handleAnimal, heal, geography, nature, perception, profession1, profession2, ride, spellcraft, survival, swim);

var fighter = new Class("Fighter", 2);
fighter.classSkills.push(climb, craft1, craft2, craft3, handleAnimal, intimidate, dungeoneering, engineering, profession1, profession2, ride, survival, swim);

var monk = new Class("Monk", 4);
monk.classSkills.push(acrobatics, climb, craft1, craft2, craft3, escapeArtist, intimidate, history, religion, perception, perform1, perform2, profession1, profession2, ride, senseMotive, stealth, swim);

var paladin = new Class("Paladin", 2);
paladin.classSkills.push(craft1, craft2, craft3, diplomacy, handleAnimal, heal, nobility, religion, profession1, profession2, ride, senseMotive, spellcraft);

var ranger = new Class("Ranger", 6);
ranger.classSkills.push(climb, craft1, craft2, craft3, handleAnimal, heal, intimidate, dungeoneering, geography, nature, perception, profession1, profession2, ride, spellcraft, stealth, survival, swim);
 
var rogue = new Class("Rogue", 8);
rogue.classSkills.push(acrobatics, appraise, bluff, climb, craft1, craft2, craft3, diplomacy, disableDevice, disguise, escapeArtist, intimidate, dungeoneering, local, linguistics, perception, perform1, perform2, profession1, profession2, senseMotive, sleightOfHand, stealth, swim, useMagicDevice);

var sorcerer = new Class("Sorcerer", 2);
sorcerer.classSkills.push(appraise, bluff, craft1, craft2, craft3, fly, intimidate, arcana, profession1, profession2, spellcraft, useMagicDevice);

var wizard = new Class("Wizard", 2);
wizard.classSkills.push(appraise, craft1, craft2, craft3, fly, /* all knowledge */ arcana, dungeoneering, engineering, geography, history, local, nature, nobility, planes, religion, /**/ linguistics, profession1, profession2, spellcraft);

Classes.push(barbarian, bard, cleric, druid, fighter, monk, paladin, ranger, rogue, sorcerer, wizard);