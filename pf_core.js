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
});

var elf = new Race("Elf", Size_Medium,			30, [0, 2, -2, 2, 0, 0]);

var gnome = new Race("Gnome", Size_Small,		20, [-2, 0, 2, 0, 0, 2]);

var halfElf = new Race("Half-Elf", Size_Medium,	30, null);

var halfOrc = new Race("Half-Orc", Size_Medium,	30, null);

var halfling = new Race("Halfling", Size_Small,	20, [-2, 2, 0, 0, 0, 2]);

var human = new Race("Human", Size_Medium,		30, null);

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