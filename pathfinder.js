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
  constructor: function(name, abbrev) {
    this.name = name;
	this.abbrev = abbrev;
  },
  
  name: "",
  abbrev: "",
});

var Abilities = [
new Ability("Strength", "STR"),
new Ability("Dexterity", "DEX"),
new Ability("Constitution", "CON"),
new Ability("Intelligence", "INT"),
new Ability("Wisdom", "WIS"),
new Ability("Charisma", "CHA")
];

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