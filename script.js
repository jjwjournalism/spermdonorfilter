$(document).ready(function () {

	$(".calculate").click(function () {	  // When the "calculate" button is clicked...

		var race = [];
		var minHeight;
		var maxHeight;
		var eyeColor = [];
		var hairColor = [];
		var education = [];
		var inclusion = [];

		$(".desiredRace").each(function() {	
			if ($(this).prop('checked')){
				race.push($(this).val());

			}


		});

		$(".desiredEyeColor").each(function() {	
			if ($(this).prop('checked')){
				eyeColor.push($(this).val());

			}


		});

		$(".desiredHairColor").each(function() {	
			if ($(this).prop('checked')){
				hairColor.push($(this).val());

			}


		});

		$(".desiredEducation").each(function() {	
			if ($(this).prop('checked')){
				education.push($(this).val());

			}


		});

		console.log(race);
		console.log(eyeColor);
		console.log(hairColor);

		$("tr").each(function(){
			var thisRace = $(this).find(".race").text();
			var thisEyeColor = $(this).find(".eyeColor").text();
			var thisHairColor = $(this).find(".hairColor").text();
			var raceMatch = false;
			var eyeMatch = false;
			var hairMatch = false;
			var include;

			

			if (race.includes(thisRace)){
				raceMatch=true;
			}

			if (eyeColor.includes(thisEyeColor)){
				eyeMatch=true;
			}

			if (hairColor.includes(thisHairColor)){
				hairMatch=true;
			}

			if (raceMatch && hairMatch && eyeMatch){
				include=true;
			}

			else {
				include=false;
			}

			inclusion.push(include);

			//console.log(thisRace, thisEyeColor, thisHairColor);
			//console.log(raceMatch, eyeMatch, hairMatch);

			if (include == false){
				console.log($(this).text());
			}
			console.log(include);

	});

	$("tr").each(function(){

		console.log($(this).index());

	});


	//console.log(inclusion);

	$("tr").filter(function() {

		var thisIndex = $(this).index();

		$(this).toggle(inclusion[thisIndex] == true);
		$(".header").toggle(true);

	});



	});

	$(".reset").click(function () {

		$("input").each(function () {

			$(this).removeAttr('checked');


			});

		$("tr").filter(function() {

		$(this).toggle(true);

	});


	});

});
