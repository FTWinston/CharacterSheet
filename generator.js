$(function() {
	$('#tabs').tabs();
	
	var output = '';
	for (var i=0;i<Sizes.length;i++){
		output += '<option value="' + Sizes[i].name + '">' + Sizes[i].name + '</option>';
	}
	$('#size').append(output);
	
	output = ''; var out2 = ''
	for (var i=0;i<Abilities.length;i++){
		var ab = Abilities[i];
		output += '<tr><td class="right">' + ab.name + ':</td><td><input class="ability base" type="number" min="1" max="30" id="txtBase' + ab.abbrev + '" value="10"></td><td class="center"><span id="racialMod' + ab.abbrev + '">+0</span> <input type="radio" class="ability racial" name="abRacial" num="' + i + '" value="' + ab.abbrev + '"></td><td class="minLevel" level="4"><input type="radio" class="ability" name="ab4" value="' + ab.abbrev + '"></td><td class="minLevel" level="8"><input type="radio" class="ability" name="ab8" value="' + ab.abbrev + '"></td><td class="minLevel" level="12"><input type="radio" class="ability" name="ab12" value="' + ab.abbrev + '"></td><td class="minLevel" level="16"><input type="radio" class="ability" name="ab16" value="' + ab.abbrev + '"></td><td class="minLevel" level="20"><input type="radio" class="ability" name="ab20" value="' + ab.abbrev + '"></td><td id="abTotal' + ab.abbrev + '" class="center">10</td><td id="abModifier' + ab.abbrev + '" class="center">+0</td></tr>';
		
		out2 += '<tr><td class="black"><div class="big">' + ab.abbrev + '</div><div class="subheading">' + ab.name + '</div></td><td class="box" id="score' + ab.abbrev + '"></td><td class="box" id="modifier' + ab.abbrev + '"></td><td class="box" id="tempAdjustment' + ab.abbrev + '"></td><td class="box" id="tempModifier' + ab.abbrev + '"></td></tr>'
	}
	$('#abilityTableLastRow').before(output);
	$('#outAbilityTable').append(out2);
	
	$('.ability.racial').change(function() {
		var num = Number($(this).attr("num"));
		
		for (var i=0;i<Abilities.length;i++)
			Abilities_Racial[i] = 0;
		Abilities_Racial[num] = 2;
	});
	$('input.ability').change(function() { CalculateAbilities(); });
	
	output = '';
	for (var i=0;i<Races.length;i++){
		output += '<option value="' + Races[i].name + '">' + Races[i].name + '</option>';
	}
	$('#race')
		.append(output)
		.change(function() {
			var newRace = Races[$(this).prop("selectedIndex")];
			if ( newRace == SelectedRace )
				return;
			
			$('#size').val(newRace.size.name);
			
			if ( newRace.abilities != null )
			{// disable racial ability selector
				$('input.ability.racial').prop('checked', false).hide();
				Abilities_Racial = newRace.abilities;
			}
			else
			{// enable racial ability selector
				$('input.ability.racial').show();
				Abilities_Racial = Abilities_SelectableRacial;
			}
			SelectedRace = newRace;
			CalculateAbilities();
		})
		.change();
	
	$('#characterLevel').change(function() {
		var level = $(this).val();
		$('.minLevel').each(function() {
			if ( Number($(this).attr('level')) > level )
				$(this).hide().find('input[type=radio]').prop('checked',false);
			else
				$(this).show();
		});
	}).change();
	
	$('#tabBasicInfo input, #tabBasicInfo select').change(function() {
		var val = $(this).val();
		$('#' + $(this).attr('id') + 'Out').val(val);
	}).change();
	
	$("#helpPopup").dialog({
    autoOpen: false,
    modal: true,
	width: 600,
    height: 600,
	title: "From the paizo.com Pathfinder PRD",
	open: function(){
		$('.ui-widget-overlay').bind('click',function(){
			$('#helpPopup').dialog('close');
		})
	},
    close: function(ev, ui) {
             $('#helpIframe').attr('src','');
			 $('#helpLink').attr('href','#');
          }
	});
	
	$('.help a').click(function() {
		var url = $(this).attr('help');
		$('#helpIframe').attr('src', url);
		$('#helpLink').attr('href', url);
		$('#helpPopup').dialog("open");
		return false;
	});
});

var SelectedRace = null;

var Abilities_SelectableRacial = [0, 0, 0, 0, 0, 0];
var Abilities_Racial = [0, 0, 0, 0, 0, 0];
var Abilities_Total = [10, 10, 10, 10, 10, 10];
var Abilities_Modifiers = [0, 0, 0, 0, 0, 0];

function AddSign(num)
{
	if ( num >= 0 )
		return '+' + num;
	return num;
}

function CalculateAbilities()
{
	var totalSpend = 0;
	
	var levelIncreases = [
		$( "input:radio[name=ab4]:checked" ).val(),
		$( "input:radio[name=ab8]:checked" ).val(),
		$( "input:radio[name=ab12]:checked" ).val(),
		$( "input:radio[name=ab16]:checked" ).val(),
		$( "input:radio[name=ab20]:checked" ).val()
	];
	
	for (var i=0; i<Abilities.length; i++)
	{
		var abbrev = Abilities[i].abbrev;
	
		var base = Number($('#txtBase' + abbrev).val());
		totalSpend += base - 10;
		var racial =  Abilities_Racial[i];
		var tot = base + racial;
		
		for (var j=0; j<levelIncreases.length; j++)
			if (levelIncreases[j] == abbrev)
				tot += 2;
		
		Abilities_Total[i] = tot;
		var mod = Math.floor((tot - 10)/2);
		Abilities_Modifiers[i] = mod;
		
		$('#racialMod' + abbrev).text(AddSign(racial));
		
		$('#abTotal' + abbrev + ', #score' + abbrev).text(tot);
		$('#abModifier' + abbrev + ', #modifier' + abbrev).text(AddSign(mod));
	}
	
	$('#abTotalSpend').text(totalSpend);
}