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

var Races = [];


var Skill = Base.extend({
  constructor: function(name, displayName, ability, trainedOnly, requiresCustom, helpLink) {
    this.name = name;
	this.displayName = displayName;
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
  
	var sum = Abilities_Modifiers[this.ability.index] + this.ranksTrained;
	if ( this.isClassSkill && this.ranksTrained > 0 )
		sum += 3;
	return sum;
  }
});

var Skills = [];

var Class = Base.extend({
  constructor: function(name, skillPerLevel) {
    this.name = name;
	this.skillPerLevel = skillPerLevel;
	this.classSkills = [];
  },
  
  name: "",
  skillPerLevel: 0,
  classSkills: []
});

var Classes = [];