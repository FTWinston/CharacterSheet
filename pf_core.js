Skills.push(new Skill("Acrobatics", dexterity, false, false, "http://paizo.com/pathfinderRPG/prd/skills/acrobatics.html"));
Skills.push(new Skill("Appraise", intelligence, false, false, "http://paizo.com/pathfinderRPG/prd/skills/appraise.html"));
Skills.push(new Skill("Bluff", charisma, false, false, "http://paizo.com/pathfinderRPG/prd/skills/bluff.html"));
Skills.push(new Skill("Climb", strength, false, false, "http://paizo.com/pathfinderRPG/prd/skills/climb.html"));
Skills.push(new Skill("Craft", intelligence, false, true, "http://paizo.com/pathfinderRPG/prd/skills/craft.html"));
Skills.push(new Skill("Craft", intelligence, false, true, "http://paizo.com/pathfinderRPG/prd/skills/craft.html"));
Skills.push(new Skill("Craft", intelligence, false, true, "http://paizo.com/pathfinderRPG/prd/skills/craft.html"));
Skills.push(new Skill("Diplomacy", charisma, false, false, "http://paizo.com/pathfinderRPG/prd/skills/diplomacy.html"));
Skills.push(new Skill("Disable Device", dexterity, true, false, "http://paizo.com/pathfinderRPG/prd/skills/disableDevice.html"));
Skills.push(new Skill("Disguise", charisma, false, false, "http://paizo.com/pathfinderRPG/prd/skills/disguise.html"));
Skills.push(new Skill("Escape Artist", dexterity, false, false, "http://paizo.com/pathfinderRPG/prd/skills/escapeArtist.html"));
Skills.push(new Skill("Fly", dexterity, false, false, "http://paizo.com/pathfinderRPG/prd/skills/fly.html"));
Skills.push(new Skill("Handle Animal", charisma, true, false, "http://paizo.com/pathfinderRPG/prd/skills/handleAnimal.html"));
Skills.push(new Skill("Heal", wisdom, false, false, "http://paizo.com/pathfinderRPG/prd/skills/heal.html"));
Skills.push(new Skill("Intimidate", charisma, false, false, "http://paizo.com/pathfinderRPG/prd/skills/intimidate.html"));
Skills.push(new Skill("Knowledge (Arcana)", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/knowledge.html"));
Skills.push(new Skill("Knowledge (Dungeoneering)", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/knowledge.html"));
Skills.push(new Skill("Knowledge (Engineering)", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/knowledge.html"));
Skills.push(new Skill("Knowledge (Geography)", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/knowledge.html"));
Skills.push(new Skill("Knowledge (History)", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/knowledge.html"));
Skills.push(new Skill("Knowledge (Local)", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/knowledge.html"));
Skills.push(new Skill("Knowledge (Nature)", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/knowledge.html"));
Skills.push(new Skill("Knowledge (Nobility)", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/knowledge.html"));
Skills.push(new Skill("Knowledge (Planes)", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/knowledge.html"));
Skills.push(new Skill("Knowledge (Religion)", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/knowledge.html"));
Skills.push(new Skill("Linguistics", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/linguistics.html"));
Skills.push(new Skill("Perception", wisdom, false, false, "http://paizo.com/pathfinderRPG/prd/skills/perception.html"));
Skills.push(new Skill("Perform", charisma, false, true, "http://paizo.com/pathfinderRPG/prd/skills/perform.html"));
Skills.push(new Skill("Perform", charisma, false, true, "http://paizo.com/pathfinderRPG/prd/skills/perform.html"));
Skills.push(new Skill("Profession", wisdom, false, true, "http://paizo.com/pathfinderRPG/prd/skills/profession.html"));
Skills.push(new Skill("Profession", wisdom, false, true, "http://paizo.com/pathfinderRPG/prd/skills/profession.html"));
Skills.push(new Skill("Ride", dexterity, false, false, "http://paizo.com/pathfinderRPG/prd/skills/ride.html"));
Skills.push(new Skill("Sense Motive", wisdom, false, false, "http://paizo.com/pathfinderRPG/prd/skills/senseMotive.html"));
Skills.push(new Skill("Sleight of Hand", dexterity, true, false, "http://paizo.com/pathfinderRPG/prd/skills/sleightOfHand.html"));
Skills.push(new Skill("Spellcraft", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/spellcraft.html"));
Skills.push(new Skill("Stealth", dexterity, false, false, "http://paizo.com/pathfinderRPG/prd/skills/stealth.html"));
Skills.push(new Skill("Survival", wisdom, false, false, "http://paizo.com/pathfinderRPG/prd/skills/survival.html"));
Skills.push(new Skill("Swim", strength, false, false, "http://paizo.com/pathfinderRPG/prd/skills/swim.html"));
Skills.push(new Skill("Use Magic Device", charisma, true, false, "http://paizo.com/pathfinderRPG/prd/skills/useMagicDevice.html"));

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

Races.push(dwarf);
Races.push(elf);
Races.push(gnome);
Races.push(halfElf);
Races.push(halfOrc);
Races.push(halfling);
Races.push(human);

// ---

var barbarian = new Class("Barbarian", 4);
var bard = new Class("Bard", 6);
var cleric = new Class("Cleric", 2);
var druid = new Class("Druid", 4);
var fighter = new Class("Fighter", 2);
var monk = new Class("Monk", 4);
var paladin = new Class("Paladin", 2);
var ranger = new Class("Ranger", 6);
var rogue = new Class("Rogue", 8);
var sorcerer = new Class("Sorcerer", 2);
var wizard = new Class("Wizard", 2);

Classes.push(barbarian);
Classes.push(bard);
Classes.push(cleric);
Classes.push(druid);
Classes.push(fighter);
Classes.push(monk);
Classes.push(paladin);
Classes.push(ranger);
Classes.push(rogue);
Classes.push(sorcerer);
Classes.push(wizard);