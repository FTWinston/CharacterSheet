$(function() {
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
		output += '<tr><td class="right">' + ab.name + ':</td><td><input class="ability base number" type="text" min="3" max="30" id="base' + ab.abbrev + '" value="10" /></td><td class="center"><span id="racialMod' + ab.abbrev + '">+0</span> <input type="radio" class="ability racial" name="abRacial" num="' + i + '" value="' + ab.abbrev + '" /></td><td class="minLevel" level="4"><input type="radio" class="ability" name="ab4" value="' + ab.abbrev + '" /></td><td class="minLevel" level="8"><input type="radio" class="ability" name="ab8" value="' + ab.abbrev + '" /></td><td class="minLevel" level="12"><input type="radio" class="ability" name="ab12" value="' + ab.abbrev + '" /></td><td class="minLevel" level="16"><input type="radio" class="ability" name="ab16" value="' + ab.abbrev + '" /></td><td class="minLevel" level="20"><input type="radio" class="ability" name="ab20" value="' + ab.abbrev + '" /></td><td id="abTotal' + ab.abbrev + '" class="center">10</td><td class="center emphasis abModifier' + ab.abbrev + '">+0</td></tr>';
		out2 += '<tr><td class="black"><div class="big">' + ab.abbrev + '</div><div class="subheading">' + ab.name + '</div></td><td class="box" id="score' + ab.abbrev + '"></td><td class="box abModifier' + ab.abbrev + '"></td><td class="box" id="tempAdjustment' + ab.abbrev + '"></td><td class="box" id="tempModifier' + ab.abbrev + '"></td></tr>'
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
	
	output = ''; out2 = '';
	for (var i=0;i<Classes.length;i++){
		var name = Classes[i].name;
		output += '<option value="' + name + '">' + name + '</option>';
		out2 += '<h3 class="ui-accordion-header ui-helper-reset ui-state-active ui-corner-top feature ' + name + '" style="display:none;"><span class="heading">' + name + '</span> - level <span class="level">1</span></h3><div class="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom feature ' + name + '" style="display:none;">Not yet implemented</div>';
	}
	$('#favoredClass')
		.append(output)
		.change(function() {
			var newClass = Classes[$(this).prop("selectedIndex")];
			if ( newClass == FavoredClass )
				return;
			
			SelectedClass = newClass;
			
			if ( !$('#multiclass').prop('checked') )
				$('select.multiClassLevel').val(newClass.name);
			
			checkClasses();
		});
	
	$('#multiclass')
		.change(function() { if ( $(this).prop('checked') ) $('.multiclass').show(); else $('.multiclass').hide(); });
	
	$('#tabFeatures').append(out2);
	output = ''; out2 = '';
	
	$('#characterLevel').change(function() {
		var level = $(this).val();
		$('.minLevel').each(function() {
			if ( Number($(this).attr('level')) > level )
				$(this).hide().find('input[type=radio]').prop('checked',false);
			else
				$(this).show();
		});
		$('.levels').attr('max', level.toString()).spinner({ max: level });
		checkLevels();
	});
	
	$('.levels').change(function() {
		var limit = $('#characterLevel').val();
		var sum = 0;
		$('.levels').each(function() { sum += Number($(this).val()); });
		
		if ( sum <= limit )
		{
			checkLevels();
			return;
		}
		
		var id = $(this).attr('id');
		var toReduce = $('.levels').filter(function () { return $(this).val() > 0 && $(this).attr('id') != id; }).first();
		toReduce.val(toReduce.val() - 1);
		
		checkLevels();
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
	
	output = '';
	for (var i=0;i<Skills.length;i++){
		var skill = Skills[i];
		output += '<tr><td><input type="checkbox" class="cs' + skill.name + ' classSkill" disabled="disabled" /></td><td>' + skill.displayName;
		if ( skill.trainedOnly )
			output += '<sup>*</sup>';
		output += '</td><td class="right"><span class="skillTot' + skill.name + ' emphasis">0</span>&nbsp;=</td><td><input type="text" class="number skillRanks" id="skillRanks' + skill.name + '" value="0" min="0" /></td><td class="right abModifier' + skill.ability.abbrev + '"></td><td class="small">(' + skill.ability.abbrev + ')</td><td><span class="trained" style="display:none;" title="This is a class skill">+3 <span class="small">(class)</span></span></td></tr>';
	}
	$('#tabSkills table:first').append(output);
	
	$('input.skillRanks').change(function() {
		calculateSkill($(this).closest('tr').index() - 1, true);
	});
	
	$('input.number:not([readonly])').spinner({ stop: function() { $(this).change(); }});

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
		$('.ui-widget-overlay').click(function(){
			$('#helpPopup').dialog('close');
		});
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
	
	$('#printOnly input').prop("readonly", true);
	
	$('#tabs')
		.tabs(/*{ heightStyle: 'auto' }*/)
		.addClass('ui-tabs-vertical ui-helper-clearfix')
		.find('.ui-tabs-nav').removeClass('ui-corner-all');

    $('#tabs li').removeClass('ui-corner-top').addClass('ui-corner-left');
	
	$('#tabs .ui-tabs-nav li a').each(function(i) {
		var output = '<div class="tabNav">';
		if (i != 0)
			output += '<a class="lnkPrevTab" href="#">&#171; Prev</a>  ';
		else
			output += '<a class="lnkPrevTab" href="#" style="visibility:hidden;">&#171; Prev</a>  ';
		
		var lastTab = $(".ui-tabs-panel").size() - 1;
		if (i != lastTab)
			output += '<a class="lnkNextTab" href="#">Next &#187;</a>';
		else
			output += '<a class="lnkNextTab" href="#" style="visibility:hidden;">Next &#187;</a>';
		
		var heading = $(this).attr('heading');
		if ( heading == undefined )
			heading = $(this).text();
		
		output += '</div><div class="tabHeading">' + heading + '</div>';
		
		var panel = $(this).attr('href');
		$(panel).prepend(output);
	});
	
	$('.lnkPrevTab').click(function() {
		var i = $('#tabs').tabs( "option", "active") - 1;
		if ( i < 0 ) i = 0;
		$('#tabs').tabs( "option", "active", i );
		return false;
	})
	
	$('.lnkNextTab').click(function() {
		var i = $('#tabs').tabs( "option", "active") + 1;
		//if ( i > 9 ) i = 9;
		$('#tabs').tabs( "option", "active", i );
		return false;
	});
	
	$(document).tooltip();
	
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

function checkLevels()
{
	var totLevel = $('#characterLevel').val();
	
	// create any multiclass selectors that are needed that don't exist. Delete any that are not.
	var out = ''; var firstNew = null;
	for ( var i=1; i<=totLevel; i++ )
	{
		var row = $('.multiclass.level[level="' + i + '"]');
		if ( row.length == 0 )
		{// create a class selector for this level
			out += '<tr class="multiclass level" style="display:none;" level="' + i + '"><th>Level ' + i + '</th><td><select class="multiClassLevel" id="classLevel' + i + '" value="0" /></td><td class="help"></td></tr>';
			
			if ( firstNew == null )
				firstNew = i;
		}
	}
	$('#multiclassEnd').before(out);
	
	// remove any for levels beyond this one
	$('.multiclass.level').filter(function() { return $(this).attr('level') > totLevel; }).remove();
	
	// any newly added ones need populated and their default set
	if ( firstNew != null )
	{
		out = '';
		for (var i=0;i<Classes.length;i++)
		{
			var name = Classes[i].name;
			out += '<option value="' + name + '">' + name + '</option>';
		}
		
		$('.multiclass.level').filter(function() { return $(this).attr('level') >= firstNew; })
			.find('select.multiClassLevel')
			.append(out)
			.val($('#favoredClass').val())
			.change(checkClasses);

		$('#multiclass').change();
	}
	out = '';
	
	// max skill rank = total level
	$('input.number.skillRanks').attr('max', totLevel.toString()).spinner({ max: totLevel });
	
	checkClasses();
}

function checkClasses()
{
	var favoredClass = $('#favoredClass').val();
	var favoredLevels = $('select.multiClassLevel').filter(function() { return $(this).val() == favoredClass; }).length;
	
	$('#favoredClassLevels').text(favoredLevels);
	$('.bonus').attr('max', favoredLevels).spinner({ max: Number(favoredLevels) });
	
	// check that the total number of bonus points isn't too high
	var hp = $('#bonusHP').val(); var sp = $('#bonusSP').val();
	if ( hp + sp > favoredLevels )
	{
		var reduce = hp + sp - favoredLevels;
		if ( hp >= reduce )
		{
			hp -= reduce;
			$('#bonusHP').val(hp);
		}
		else
		{
			hp = 0;
			sp = favoredLevels
			$('#bonusHP').val(hp);
			$('#bonusSP').val(sp);
		}
	}
	
	// report unallocated bonus points
	$('#bonusUnallocated').text(favoredLevels - hp - sp);
	
	if ( Number(favoredLevels) == 1 ) {
		$('.favoredSingle').show();
		$('.favoredPlural').hide();
	}
	else {
		$('.favoredSingle').hide();
		$('.favoredPlural').show();
	}
	
	// class levels, class skills and feature selection could have changed. To recalculate, first clear them all.
	for (var i=0;i<Classes.length;i++ ) {
		Classes[i].level = 0;
	}
	$('.classSkill').prop('checked', false);
	for (var i=0;i<Skills.length;i++) {
		Skills[i].isClassSkill = false;
	}
	$('.feature').hide();
	
	// work out the levels allocated to each class
	$('select.multiClassLevel').each(function() {
		var thisClass = Classes[$(this).prop("selectedIndex")];
		thisClass.level ++;
	});
	
	// now set the class skills, feature selectors, and class description output
	var classOutput = [];
	for (var i=0;i<Classes.length;i++ )
	{
		var level = Classes[i].level;
		var name = Classes[i].name;
		
		$('.feature.' + name + ' .level').text(level);
		
		if ( level <= 0 )
			continue;
		
		$('.feature.' + name).show();
		
		classOutput.push('Lvl ' + level + ' ' + name);
		
		// update which skills are class skills	
		var skills = Classes[i].classSkills;
		for (var j=0;j<skills.length;j++) {
			$('input.cs' + skills[j].name).prop('checked', true);
			skills[j].isClassSkill = true;
		}
	}
	$('#classLevelsOut').val(classOutput.join(', '));
	
	// if class skills changed, need to recalculate skills
	calculateSkills();
}

function calculateAbilities()
{
	var totalSpend = 0;
	
	var levelIncreases = [
		$('input:radio[name=ab4]:checked').val(),
		$('input:radio[name=ab8]:checked').val(),
		$('input:radio[name=ab12]:checked').val(),
		$('input:radio[name=ab16]:checked').val(),
		$('input:radio[name=ab20]:checked').val()
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
		
		var ability = Abilities[i];
		ability.setPoints(tot);
		
		$('#racialMod' + abbrev).text(addSign(racial));
		
		$('#abTotal' + abbrev + ', #score' + abbrev).text(tot);
		$('.abModifier' + abbrev).text(addSign(ability.modifier));
	}
	
	$('#abTotalSpend').text(totalSpend);
	calculateSkills();
}

function calculateSkills()
{
	var sum = 0;
	for (var i=0;i<Skills.length;i++)
	{
		calculateSkill(i, false);
		sum += Skills[i].ranksTrained;
	}
	
	checkSkillTotal(sum, null);
}

function calculateSkill(i, updateTotal)
{
	var skill = Skills[i]; 
	var input = $('#skillRanks' + skill.name);
	skill.ranksTrained = Number(input.val());
	$('.skillRanksOut' + skill.name).text(skill.ranksTrained);
	$('.skillTot' + skill.name).text(skill.getTotal());
	
	var trained = input.closest('tr').find('.trained:first');
	if ( skill.isClassSkill && skill.ranksTrained > 0 )
		trained.show();
	else
		trained.hide();

	if ( updateTotal )
	{
		var sum = 0;
		for (var i=0;i<Skills.length;i++)
			sum += Skills[i].ranksTrained;
		
		checkSkillTotal(sum, i);
	}
}

function checkSkillTotal(totalSpent, indexChanged)
{
	// check if this isn't larger than the limit.
	// if it is, reduce entries (but not indexChanged)
	
	// if its still too big, then reduce indexChanged
	
	$('#skillRanksAllocated').text(totalSpent);
}

function save(tinyURL)
{
	var url = window.location.href;	
	var snip = url.indexOf('?');
	if ( snip != -1 )
		url = url.substr(0, snip);
	
	var first = true;
	
	// all non-radio/checkbox inputs, we just get the id & value of each
	$('#tabs input:not([readonly]), #tabs select').not('input[type="radio"], input[type="checkbox"]').each(function() {
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
	$('#tabs input[type="checkbox"]:checked:not([readonly])').each(function() {
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