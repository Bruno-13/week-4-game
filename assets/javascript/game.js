var number = Math.floor((Math.random() * 90) + 30);

	var blue = Math.floor((Math.random() * 8) + 1);
	var red = Math.floor((Math.random() * 8) + 1);
	var yellow = Math.floor((Math.random() * 8) + 1);
	var green = Math.floor((Math.random() * 8) + 1);

	var guessTotal = 0;
	var wins = 0;
	var losses = 0;

	$(".numberDisplay").html(number);


	$(".blueCrystal").click(function() {
		update(blue);
	});

	$(".redCrystal").click(function() {
		update(red);
	});

	$(".purpleCrystal").click(function() {
		update(yellow);
	});

	$(".greenCrystal").click(function() {
		update(green);
	});
	

	function reset() {
		number = Math.floor((Math.random() * 90) + 30);

		$(".numberDisplay").html(number);

		blue = Math.floor((Math.random() * 8) + 1);
		red = Math.floor((Math.random() * 8) + 1);
		yellow = Math.floor((Math.random() * 8) + 1);
		green = Math.floor((Math.random() * 8) + 1);

		guessTotal = 0;

		$(".guessDisplay").html(guessTotal);
	};

	function update(color) {

		guessTotal += color;

		$(".guessDisplay").empty();
		$(".guessDisplay").append(guessTotal);

		if (guessTotal > number) {
			losses++;
			$("#lossesDisplay").html(losses);
			reset();
		} 
		else if (guessTotal == number) {
			wins++;
			$("#winsDisplay").html(wins);
			reset();
		};
	};