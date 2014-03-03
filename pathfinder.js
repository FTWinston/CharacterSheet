// character sizes

var Size = Base.extend({
  constructor: function(name, modifier) {
    this.name = name;
	this.sizeModifier = modifier;
  },
  
  name: "",
  sizeModifier: 0
});

var Size_Fine = new Size("Fine", 8);
var Size_Diminutive = new Size("Diminutive", 4);
var Size_Tiny = new Size("Tiny", 2);
var Size_Small = new Size("Small", 1);
var Size_Medium = new Size("Medium", 0);
var Size_Large = new Size("Large", -1);
var Size_Huge = new Size("Huge", -2);
var Size_Gargantuan = new Size("Gargantuan", -4);
var Size_Colossal = new Size("Colossal", -8);

var Sizes = [
Size_Fine,
Size_Diminutive,
Size_Tiny,
Size_Small,
Size_Medium,
Size_Large,
Size_Huge,
Size_Gargantuan,
Size_Colossal
];

// abilities
var Ability = Base.extend({
  constructor: function(name, abbrev, index) {
    this.name = name;
	this.abbrev = abbrev;
	this.index = index;
  },
  
  name: "",
  abbrev: "",
  index: ""
});

var strength = new Ability("Strength", "STR", 0);
var dexterity = new Ability("Dexterity", "DEX", 1);
var constitution = new Ability("Constitution", "CON", 2);
var intelligence = new Ability("Intelligence", "INT", 3);
var wisdom = new Ability("Wisdom", "WIS", 4);
var charisma = new Ability("Charisma", "CHA", 5);

var Abilities = [strength, dexterity, constitution, intelligence, wisdom, charisma];

var Abilities_Total = [10, 10, 10, 10, 10, 10];
var Abilities_Modifiers = [0, 0, 0, 0, 0, 0];

// races
var Race = Base.extend({
  constructor: function(name, size, speed, abilities) {
    this.name = name;
	this.size = size;
	this.speed = speed;
	this.abilities = abilities;
  },
  
  name: "",
  size: Size_Medium,
  speed: 30,
  abilities: null,
  
  adjustSkills: function() {
    console.log('base skills');
  }
});

var Dwarf = new Race("Dwarf", Size_Medium,		20, [0, 0, 2, 0, 2, -2]);
Dwarf.extend({
	adjustSkills: function() {
		console.log("dwarf skills");
	}
});

var Elf = new Race("Elf", Size_Medium,			30, [0, 2, -2, 2, 0, 0]);

var Gnome = new Race("Gnome", Size_Small,		20, [-2, 0, 2, 0, 0, 2]);

var HalfElf = new Race("Half-Elf", Size_Medium,	30, null);

var HalfOrc = new Race("Half-Orc", Size_Medium,	30, null);

var Halfling = new Race("Halfling", Size_Small,	20, [-2, 2, 0, 0, 0, 2]);

var Human = new Race("Human", Size_Medium,		30, null);

var Races = [
Dwarf,
Elf,
Gnome,
HalfElf,
HalfOrc,
Halfling,
Human
];


var Skill = Base.extend({
  constructor: function(name, ability, trainedOnly, requiresCustom, helpLink) {
    this.name = name;
	this.ability = ability;
	this.trainedOnly = trainedOnly;
	this.requiresCustom = requiresCustom;
	this.helpLink = helpLink;
  },
  
  name: "",
  ability: null,
  trainedOnly: false,
  ranksTrained: 0,
  isClassSkill: false,
  requiresCustom: false,
  helpLink: "",
  
  reset: function() {
	this.ranksTrained = 0;
	this.isClassSkill = false;
  },
  
  getTotal: function() {
	if ( this.trainedOnly && this.ranksTrained == 0 )
		return "--";
  
	var sum = Abilities_Modifiers[this.ability.index] + ranksTrained;
	if ( isClassSkill && ranksTrained > 0 )
		sum += 3;
	return sum;
  }
});

var Skills = [
new Skill("Acrobatics", dexterity, false, false, "http://paizo.com/pathfinderRPG/prd/skills/acrobatics.html"),
new Skill("Appraise", intelligence, false, false, "http://paizo.com/pathfinderRPG/prd/skills/appraise.html"),
new Skill("Bluff", charisma, false, false, "http://paizo.com/pathfinderRPG/prd/skills/bluff.html"),
new Skill("Climb", strength, false, false, "http://paizo.com/pathfinderRPG/prd/skills/climb.html"),
new Skill("Craft", intelligence, false, true, "http://paizo.com/pathfinderRPG/prd/skills/craft.html"),
new Skill("Craft", intelligence, false, true, "http://paizo.com/pathfinderRPG/prd/skills/craft.html"),
new Skill("Craft", intelligence, false, true, "http://paizo.com/pathfinderRPG/prd/skills/craft.html"),
new Skill("Diplomacy", charisma, false, false, "http://paizo.com/pathfinderRPG/prd/skills/diplomacy.html"),
new Skill("Disable Device", dexterity, true, false, "http://paizo.com/pathfinderRPG/prd/skills/disableDevice.html"),
new Skill("Disguise", charisma, false, false, "http://paizo.com/pathfinderRPG/prd/skills/disguise.html"),
new Skill("Escape Artist", dexterity, false, false, "http://paizo.com/pathfinderRPG/prd/skills/escapeArtist.html"),
new Skill("Fly", dexterity, false, false, "http://paizo.com/pathfinderRPG/prd/skills/fly.html"),
new Skill("Handle Animal", charisma, true, false, "http://paizo.com/pathfinderRPG/prd/skills/handleAnimal.html"),
new Skill("Heal", wisdom, false, false, "http://paizo.com/pathfinderRPG/prd/skills/heal.html"),
new Skill("Intimidate", charisma, false, false, "http://paizo.com/pathfinderRPG/prd/skills/intimidate.html"),
new Skill("Knowledge (Arcana)", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/knowledge.html"),
new Skill("Knowledge (Dungeoneering)", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/knowledge.html"),
new Skill("Knowledge (Engineering)", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/knowledge.html"),
new Skill("Knowledge (Geography)", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/knowledge.html"),
new Skill("Knowledge (History)", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/knowledge.html"),
new Skill("Knowledge (Local)", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/knowledge.html"),
new Skill("Knowledge (Nature)", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/knowledge.html"),
new Skill("Knowledge (Nobility)", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/knowledge.html"),
new Skill("Knowledge (Planes)", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/knowledge.html"),
new Skill("Knowledge (Religion)", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/knowledge.html"),
new Skill("Linguistics", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/linguistics.html"),
new Skill("Perception", wisdom, false, false, "http://paizo.com/pathfinderRPG/prd/skills/perception.html"),
new Skill("Perform", charisma, false, true, "http://paizo.com/pathfinderRPG/prd/skills/perform.html"),
new Skill("Perform", charisma, false, true, "http://paizo.com/pathfinderRPG/prd/skills/perform.html"),
new Skill("Profession", wisdom, false, true, "http://paizo.com/pathfinderRPG/prd/skills/profession.html"),
new Skill("Profession", wisdom, false, true, "http://paizo.com/pathfinderRPG/prd/skills/profession.html"),
new Skill("Ride", dexterity, false, false, "http://paizo.com/pathfinderRPG/prd/skills/ride.html"),
new Skill("Sense Motive", wisdom, false, false, "http://paizo.com/pathfinderRPG/prd/skills/senseMotive.html"),
new Skill("Sleight of Hand", dexterity, true, false, "http://paizo.com/pathfinderRPG/prd/skills/sleightOfHand.html"),
new Skill("Spellcraft", intelligence, true, false, "http://paizo.com/pathfinderRPG/prd/skills/spellcraft.html"),
new Skill("Stealth", dexterity, false, false, "http://paizo.com/pathfinderRPG/prd/skills/stealth.html"),
new Skill("Survival", wisdom, false, false, "http://paizo.com/pathfinderRPG/prd/skills/survival.html"),
new Skill("Swim", strength, false, false, "http://paizo.com/pathfinderRPG/prd/skills/swim.html"),
new Skill("Use Magic Device", charisma, true, false, "http://paizo.com/pathfinderRPG/prd/skills/useMagicDevice.html")
];