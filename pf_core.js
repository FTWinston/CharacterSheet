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

var dwarf = new Race("Dwarf");
dwarf.size = Size_Medium;
dwarf.speed = 20;
dwarf.abilities = [0, 0, 2, 0, 2, -2];
dwarf.vision = "Darkvision 60 ft";
dwarf.knownLanguages = ["Common", "Dwarven"];
dwarf.selectableLanguages = ["Giant", "Gnome", "Goblin", "Orc", "Terran", "Undercommon"];
conditionalModifiers = ["+4 dodge bonus to AC against giants", "+2 to Appraise non-magic goods containing precious metal or gemstones", "+1 on attack rolls vs orc and goblinoid humanoids", "+2 on saving throws against poison, spells & SLA", "+4 to CMD when resisting bull rush or trip, if standing on the ground", "+2 perception to notice unusual stonework. Check whenever within 10 feet of such features, even when not actively looking."];
dwarf.extend({
	adjustSkills: function() {
		
	}
/*
	base speed 20, never modified by armor or encumbrance
		
	proficient with battleaxes, heavy picks, warhammers
	any weapon with "dwarven" in its name is martial
*/
});

var elf = new Race("Elf");
elf.size = Size_Medium;
elf.speed = 30;
elf.abilities = [0, 2, -2, 2, 0, 0];
elf.vision = "Low-light vision";
elf.knownLanguages = ["Common", "Elven"];
elf.selectableLanguages = ["Celestial", "Draconic", "Gnoll", "Gnome", "Goblin", "Orc", "Sylvan"];
elf.conditionalModifiers = ["Immune to magic sleep effects", "+2 saving throw bonus against enchantment spells & effects", "+2 on caster level checks made to overcome spell resistance", "+2 on spellcraft checks to identify properties of magic items"];
elf.extend({
	applyEffects: function() {
		perception.miscBonus += 2;
	},
	undoEffects: function() {
		perception.miscBonus -= 2;
	}
/*
	proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows)
	
	any weapon with "elven" in its name is martial
*/
});

var gnome = new Race("Gnome");
gnome.size = Size_Small;
gnome.speed = 20;
gnome.abilities = [-2, 0, 2, 0, 0, 2];
gnome.vision = "Low-light vision";
gnome.knownLanguages = ["Common", "Gnome", "Sylvan"];
gnome.selectableLanguages = ["Draconic", "Dwarven", "Elven", "Giant", "Goblin", "Orc"];
gnome.conditionalModifiers = ["+4 dodge bonus to AC against giants", "+1 to the DC of saving throws against illusion spells you cast", "+1 on attack roles against reptilian and goblinoid humanoids", "+2 racial saving throw against illusion spells & effects"];
gnome.extend({
	applyEffects: function() {
		perception.miscBonus += 2;
	},
	undoEffects: function() {
		perception.miscBonus -= 2;
	}
/*
	small size - +1 to AC, +1 to attack rolls, -1 to CMB and CMD, +4 size bonus to stealth checks
	
	If charisma > 11, gain the following SLAs 1/day:
	dancing lights, ghost sound, prestigitation and speak with animals.
	For each, caster level is gnome's level.
	DC is 10 + spell's level + charisma modifier.
	
	+2 racial bonus on a craft or profession skill of their choice (Obssesive)
	
	any weapon with "gnome" in its name is martial
*/
});

var halfElf = new Race("Half-Elf");
halfElf.size = Size_Medium;
halfElf.speed = 30;
halfElf.abilities = null;
halfElf.vision = "Low-light vision";
halfElf.knownLanguages = ["Common", "Elven"];
halfElf.selectableLanguages = ["Abyssal", "Celestial", "Common", "Draconic", "Dwarven", "Elven", "Giant", "Gnoll", "Gnome", "Goblin", "Orc", "Sylvan", "Terran", "Undercommon"]; // "any"
halfElf.conditionalModifiers = ["Immune to magic sleep effects", "+2 to saving throws against enchantment spells & effects"];
halfElf.extend({
	applyEffects: function() {
		perception.miscBonus += 2;
	},
	undoEffects: function() {
		perception.miscBonus -= 2;
	}
/*
	Skill Focus as a bonus feat at 1st level.
	
	Choose two favored classes at first level instead of one.
*/
});

var halfOrc = new Race("Half-Orc");
halfOrc.size = Size_Medium;
halfOrc.speed = 30;
halfOrc.abilities = null;
halfOrc.vision = "Darkvision 60 ft";
halfOrc.knownLanguages = ["Common", "Orc"];
halfOrc.selectableLanguages = ["Abyssal", "Draconic", "Giant", "Gnoll", "Goblin"];
halfOrc.extend({
	applyEffects: function() {
		intimidate.miscBonus += 2;
	},
	undoEffects: function() {
		intimidate.miscBonus -= 2;
	}
/*
	Once per day, when brought below 0 hp but not killed, can fight on for 1 more round as if disabled.
	
	proficient with greataxes and falchions
	any weapon with "orc" in its name is martial
*/
});

var halfling = new Race("Halfling");
halfling.size = Size_Small;
halfling.speed = 20;
halfling.abilities = [-2, 2, 0, 0, 0, 2];
halfling.vision = "Normal";
halfling.knownLanguages = ["Common", "Halfling"];
halfling.selectableLanguages = ["Dwarven", "Elven", "Gnome", "Goblin"];
halfling.conditionalModifiers = ["+2 to saving throws against fear effects"];
halfling.extend({
	applyEffects: function() {
		acrobatics.miscBonus += 2;
		climb.miscBonus += 2;
		perception.miscBonus += 2;
	},
	undoEffects: function() {
		acrobatics.miscBonus -= 2;
		climb.miscBonus -= 2;
		perception.miscBonus -= 2;
	}
/*
	small size - +1 to AC, +1 to attack rolls, -1 to CMB and CMD, +4 size bonus to stealth checks
	
	+1 on all saving throws
	
	proficient with slings
	any weapon with "halfling" in its name is martial
*/
});

var human = new Race("Human");
human.size = Size_Medium;
human.speed = 30;
human.abilities = null;
human.vision = "Normal";
human.knownLanguages = ["Common"];
human.selectableLanguages = ["Abyssal", "Celestial", "Common", "Draconic", "Dwarven", "Elven", "Giant", "Gnoll", "Gnome", "Goblin", "Orc", "Sylvan", "Terran", "Undercommon"]; // "any"
human.bonusSkillsPerLevel = 1;
human.levelOneBonusFeat = true;

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