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
		output += '<tr><td class="right">' + ab.name + ':</td><td><input class="ability base number" type="text" min="3" max="30" id="base' + ab.abbrev + '" value="10" /></td><td class="center"><span id="racialMod' + ab.abbrev + '">+0</span> <input type="radio" class="ability racial" name="abRacial" num="' + i + '" value="' + ab.abbrev + '" /></td><td class="minLevel" level="4"><input type="radio" class="ability" name="ab4" value="' + ab.abbrev + '" /></td><td class="minLevel" level="8"><input type="radio" class="ability" name="ab8" value="' + ab.abbrev + '" /></td><td class="minLevel" level="12"><input type="radio" class="ability" name="ab12" value="' + ab.abbrev + '" /></td><td class="minLevel" level="16"><input type="radio" class="ability" name="ab16" value="' + ab.abbrev + '" /></td><td class="minLevel" level="20"><input type="radio" class="ability" name="ab20" value="' + ab.abbrev + '" /></td><td id="abTotal' + ab.abbrev + '" class="center">10</td><td id="abModifier' + ab.abbrev + '" class="center emphasis">+0</td></tr>';
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
	$('input.ability').change(function() { calculateAbilities(); });
	
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
			calculateAbilities();
		});
	
	output = ''; out2 = ''; out3 = ''
	for (var i=0;i<Classes.length;i++){
		var name = Classes[i].name;
		output += '<option value="' + name + '">' + name + '</option>';
		out2 += '<tr class="multiclass" style="display:none;"><th>' + name + '</th><td><input class="number levels" type="text" min="0" max="30" id="levels' + name + '" value="0" /> levels</td><td class="help"></td></tr>';
		//out3 += '<tr class="feature ' + name + '" style="display:none;"><td>Not yet implemented</td></tr>';
		out3 += '<h3 class="ui-accordion-header ui-helper-reset ui-state-active ui-corner-top feature ' + name + '" style="display:none;">' + name + ' - level <span class="level">1</span></h3><div class="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom feature ' + name + '" style="display:none;">Not yet implemented</div>';
	}
	$('#favoredClass')
		.append(output)
		.change(function() {
			var newClass = Classes[$(this).prop("selectedIndex")];
			if ( newClass == FavoredClass )
				return;
			
			SelectedClass = newClass;
			
			checkLevels(true);
		});
	
	$('#multiclass')
		.change(function() { if ( $(this).prop('checked') ) $('.multiclass').show(); else $('.multiclass').hide(); })
		.closest('tr').next().after(out2);
	
	$('#tabFeatures').append(out3);
	output = ''; out2 = ''; out3 = '';
	
	$('#characterLevel').change(function() {
		var level = $(this).val();
		$('.minLevel').each(function() {
			if ( Number($(this).attr('level')) > level )
				$(this).hide().find('input[type=radio]').prop('checked',false);
			else
				$(this).show();
		});
		$('.levels').attr('max', level.toString()).spinner({ max: level });
		checkLevels(true);

		if ( level == 1 ) {
			$('.levelSingle').show();
			$('.levelPlural').hide();
		}
		else {
			$('.levelSingle').hide();
			$('.levelPlural').show();
		}
		$('.numLevels').text(level);
	});
	
	$('.levels').change(function() {
		var limit = $('#characterLevel').val();
		var sum = 0;
		$('.levels').each(function() { sum += Number($(this).val()); });
		
		if ( sum <= limit )
		{
			checkLevels(false);
			return;
		}
		
		var id = $(this).attr('id');
		var toReduce = $('.levels').filter(function () { return $(this).val() > 0 && $(this).attr('id') != id; }).first();
		toReduce.val(toReduce.val() - 1);
		
		checkLevels(false);
	});
	
	$('.bonus').change(function() {
		var other = $('.bonus[id!="' + $(this).attr('id') + '"]');
		var sum = Number(other.val()) + Number($(this).val());
		var limit = Number($('#favoredClassLevels').text());
		
		if ( sum > limit )
		{
			other.val(other.val() - 1);
			sum--;
		}
		$('#bonusUnallocated').text(limit - sum);
	});
	
	$('input.number').spinner();
	$('.ui-spinner-button').click(function() {
	   $(this).siblings('input').change();
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
	$('#race, #characterLevel, #tabBasicInfo input, #tabBasicInfo select, .ability.racial:checked, #favoredClass, #multiclass').change();
});

var SelectedRace = null; var FavoredClass = null;
var Abilities_SelectableRacial = [0, 0, 0, 0, 0, 0];
var Abilities_Racial = [0, 0, 0, 0, 0, 0];

function addSign(num)
{
	if ( num >= 0 )
		return '+' + num;
	return num;
}

function checkLevels(tryPutAllAllFavored)
{
	var totLevel = $('#characterLevel').val();
	var favoredSel = '#levels' + $('#favoredClass').val();
	// if not multiclassing, changing class/level puts all points into your favored class
	if ( tryPutAllAllFavored && $('.levels').filter(function () { return $(this).val() > 0; }).length < 2 ) {
		$('.levels').val(0);
		$(favoredSel).val(totLevel);
	}
	
	var levels = $(favoredSel).val();
	$('#favoredClassLevels').text(levels);
	$('.bonus').attr('max', levels).spinner({ max: Number(levels) });
	
	// count unallocated levels
	var totAllocated = 0;
	$('.levels').each(function() {
        totAllocated += Number($(this).val());
    });
	$('#levelsUnallocated').text(totLevel - totAllocated);
	
	// check that the total number of bonus points isn't too high
	var hp = $('#bonusHP').val(); var sp = $('#bonusSP').val();
	if ( hp + sp > levels )
	{
		var reduce = hp + sp - levels;
		if ( hp >= reduce )
		{
			hp -= reduce;
			$('#bonusHP').val(hp);
		}
		else
		{
			hp = 0;
			sp = levels
			$('#bonusHP').val(hp);
			$('#bonusSP').val(sp);
		}
	}
	
	// report unallocated bonus points
	$('#bonusUnallocated').text(levels - hp - sp);
	
	if ( Number(levels) == 1 ) {
		$('.favoredSingle').show();
		$('.favoredPlural').hide();
	}
	else {
		$('.favoredSingle').hide();
		$('.favoredPlural').show();
	}
	
	// show/hide feature selection for chosen classes
	$('.feature').hide();
	$('.levels').each(function() {
		var level = $(this).val();
		if ( level <= 0 )
			return;
		var classname = $(this).attr('id').substr(6);
		$('.feature.' + classname + ' .level').text(level);
		$('.feature.' + classname).show();
	})
}

function calculateAbilities()
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
		
		$('#racialMod' + abbrev).text(addSign(racial));
		
		$('#abTotal' + abbrev + ', #score' + abbrev).text(tot);
		$('#abModifier' + abbrev + ', #modifier' + abbrev).text(addSign(mod));
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
	
	// all non-radio/checkbox inputs, we just get the id & value of each
	$('#tabs input, #tabs select').not('input[type="radio"], input[type="checkbox"]').each(function() {
		var id = $(this).attr('id');
		if ( id == undefined )
			return;
		
		var val = $(this).val();
		if ( val == undefined || val == '' || val == 0 )
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
	
	// and checkboxes, just the IDs
	$('#tabs input[type="checkbox"]:checked').each(function() {
		var id = $(this).attr('id');
		if ( id == undefined )
			return;
		
		if ( first )
		{
			url += '?';
			first = false;
		}
		else
			url += '&';
		url += id;
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
		if ( elemByID.length > 0 ) {
			// if its a checkbox, check it. otherwise, set its value
			if ( elemByID.attr('type') == 'checkbox' )
				elemByID.prop('checked', true);
			elemByID.val(getVars[element]);
		}
		else // see if this was a radio, which are done differently
			$('#tabs input[type="radio"][name="' + element + '"][value="' + getVars[element] + '"]').prop('checked', true);
	}
}