var Size = Base.extend({
  constructor: function(name, modifier) {
    this.name = name;
	this.sizeModifier = modifier;
  },
  
  name: "",
  sizeModifier: 0
});

var Sizes = [];

var Ability = Base.extend({
  constructor: function(name, abbrev) {
    this.name = name;
	this.abbrev = abbrev;
	this.points = 10;
	this.modifier = 0;
  },
  
  name: "",
  abbrev: "",
  points: 10,
  modifier: 0,
  
  setPoints: function(tot)
  {
	this.points = tot;
	this.modifier = Math.floor((tot - 10)/2);
  }
});

var Abilities = [];

var Race = Base.extend({
  constructor: function(name) {
    this.name = name;
	this.size = null;
	this.speed = 30;
	this.abilities = null;
	this.vision = "Normal";
	this.knownLanguages = [];
	this.selectableLanguages = [];
	this.bonusSkillsPerLevel = 0;
	this.levelOneBonusFeat = false;
	this.conditionalModifiers = [];
  },
  
  name: "",
  size: null,
  speed: 30,
  abilities: null,
  vision: "Normal",
  knownLanguages: [],
  selectableLanguages: [],
  bonusSkillsPerLevel: 0,
  levelOneBonusFeat: false,
  conditionalModifiers: [],
  
  applyEffects: function() { },
  undoEffects: function() { },
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
  miscBonus: 0,
  isClassSkill: false,
  requiresCustom: false,
  helpLink: "",
  
  reset: function() {
	this.ranksTrained = 0;
	this.miscBonus = 0;
	this.isClassSkill = false;
  },
  
  getTotal: function() {
	if ( this.trainedOnly && this.ranksTrained == 0 )
		return "--";
  
	var sum = this.ability.modifier + this.ranksTrained;
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
	this.level = 0;
  },
  
  name: "",
  skillPerLevel: 0,
  classSkills: [],
  level: 0
});

var Classes = [];