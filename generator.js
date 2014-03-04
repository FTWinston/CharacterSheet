$(function() {
	$('#tabs').tabs();
	$('#saveLong').button().click(function() { save(false); });
	
	if ( window.location.href.substr(0, 4) == 'file' )
		$('.tiny').toggle();
	else
		$('#saveTiny').button().click(function() { save(true); });
	
	var output = '';
	for (var i=0;i<Sizes.length;i++){
		output += '<option value="' + Sizes[i].name + '">' + Sizes[i].name + '</option>';
	}
	$('#size').append(output);
	
	output = ''; var out2 = ''
	for (var i=0;i<Abilities.length;i++){
		var ab = Abilities[i];
		output += '<tr><td class="right">' + ab.name + ':</td><td><input class="ability base number" type="text" min="3" max="30" id="base' + ab.abbrev + '" value="10"></td><td class="center"><span id="racialMod' + ab.abbrev + '">+0</span> <input type="radio" class="ability racial" name="abRacial" num="' + i + '" value="' + ab.abbrev + '"></td><td class="minLevel" level="4"><input type="radio" class="ability" name="ab4" value="' + ab.abbrev + '"></td><td class="minLevel" level="8"><input type="radio" class="ability" name="ab8" value="' + ab.abbrev + '"></td><td class="minLevel" level="12"><input type="radio" class="ability" name="ab12" value="' + ab.abbrev + '"></td><td class="minLevel" level="16"><input type="radio" class="ability" name="ab16" value="' + ab.abbrev + '"></td><td class="minLevel" level="20"><input type="radio" class="ability" name="ab20" value="' + ab.abbrev + '"></td><td id="abTotal' + ab.abbrev + '" class="center">10</td><td id="abModifier' + ab.abbrev + '" class="center emphasis">+0</td></tr>';
		
		out2 += '<tr><td class="black"><div class="big">' + ab.abbrev + '</div><div class="subheading">' + ab.name + '</div></td><td class="box" id="score' + ab.abbrev + '"></td><td class="box" id="modifier' + ab.abbrev + '"></td><td class="box" id="tempAdjustment' + ab.abbrev + '"></td><td class="box" id="tempModifier' + ab.abbrev + '"></td></tr>'
	}
	$('#abilityTableLastRow').before(output);
	$('#outAbilityTable').append(out2);
	
	$('input.number').spinner();
	$('.ui-spinner-button').click(function() {
	   $(this).siblings('input').change();
	});
	
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
		});
	
	$('#characterLevel').change(function() {
		var level = $(this).val();
		$('.minLevel').each(function() {
			if ( Number($(this).attr('level')) > level )
				$(this).hide().find('input[type=radio]').prop('checked',false);
			else
				$(this).show();
		});
	});
	
	$('#tabBasicInfo input, #tabBasicInfo select').change(function() {
		var val = $(this).val();
		$('#' + $(this).attr('id') + 'Out').val(val);
	});
	
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
	
	load();
	$('#race, #characterLevel, #tabBasicInfo input, #tabBasicInfo select, .ability.racial:checked').change();
});

var SelectedRace = null;

var Abilities_SelectableRacial = [0, 0, 0, 0, 0, 0];
var Abilities_Racial = [0, 0, 0, 0, 0, 0];

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
	
		var sel = '#base' + abbrev;
		var base = Number($(sel).val());
		if ( isNaN(base) )
		{
			base = 10;
			$(sel).val(base);
		}
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

function save(tinyURL)
{
	var url = window.location.href;	
	var snip = url.indexOf('?');
	if ( snip != -1 )
		url = url.substr(0, snip);
	
	var first = true;
	
	// all non-radio inputs, we just get the id & value of each
	$('#tabs input, #tabs select').not('input[type="radio"]').each(function() {
		var id = $(this).attr('id');
		if ( id == undefined )
			return;
		
		var val = $(this).val();
		if ( val == undefined || val == '' )
			return;
		
		if ( first )
		{
			url += '?';
			first = false;
		}
		else
			url += '&';
		url += id + '=' + val;
	});
	
	// but for radios, where each one doesn't have an ID, we just get the name & value of selected ones
	$('#tabs input[type="radio"]:checked').each(function() {
		var id = $(this).attr('name');
		if ( id == undefined )
			return;
		
		var val = $(this).val();
		if ( val == undefined || val == '' )
			return;
		
		if ( first )
		{
			url += '?';
			first = false;
		}
		else
			url += '&';
		url += id + '=' + val;
	});
	
	if ( tinyURL )
	{
		$.getJSON('http://api.bitly.com/v3/shorten?callback=?',
			{
				format: "json",
				apiKey: 'R_75f07b980f6e468abbcef71124e1614e',
				login: 'charactersheet',
				longUrl: url
			},
			function(response) {
				if ( response.data.url == null )
					console.log("bit.ly doesn't like this url");
				else
					url = response.data.url;
				$('#savedLink').html('Saved link: <a href="' + url + '">' + url + '</a>');
			}
		);
	}
	else
	{
		$('#savedLink').html('Saved link: <a href="' + url + '">' + url + '</a>');
	}
}

function load()
{
	// read all the query parameters
	var getVars = {};
	if (window.location.search.length > 1) {
	  for (var aItKey, nKeyId = 0, aCouples = window.location.search.substr(1).split('&'); nKeyId < aCouples.length; nKeyId++) {
		aItKey = aCouples[nKeyId].split('=');
		getVars[decodeURIComponent(aItKey[0])] = aItKey.length > 1 ? decodeURIComponent(aItKey[1]) : '';
	  }
	}
	
	// taking each one as an element id, apply the value
	for (element in getVars)
	{
		var elemByID = $('#' + element);
		if ( elemByID.length > 0 )
			elemByID.val(getVars[element]);
		else // see if this was a radio, which are done differently
			$('#tabs input[type="radio"][name="' + element + '"][value="' + getVars[element] + '"]').prop('checked', true);
	}
}