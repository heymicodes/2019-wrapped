var countUp = {
	init: function() {
		var year = $('.year');
		var countTo = year.attr('data-count');
		var speed = Math.round(countTo / 500);
		var intSpeed = 1;
		var i = 20 ;
		// Count up to 2019
		var int = setInterval(function() {
			if(i < 500){
				year.text(speed * i);
				i++;
			} else if(parseInt(year.text()) < countTo) {
				var curr_count = parseInt(year.text()) + 1;
				year.text(curr_count);
			} else {
				clearInterval(int);
			}
		}, intSpeed);
		// Fade text
		setTimeout(function() {
    	$('.year').fadeOut();
		}, 2500);
		// Text transition
		setTimeout(function() {
    	$('.year').hide();
			$('.intro-text').fadeIn(2900);
			$('#start-btn').fadeIn(3500);
    	$('.intro-text').removeClass('is-hidden');
			$('#start-btn').removeClass('is-hidden');
		}, 2800); 
	},
};

var tilt = {
	init: function() {
		tilt.introText();
	},
	introText: function() {
		$(".intro-text").tilt({
    maxTilt: 25,
    perspective: 1400,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    speed: 1200,
    scale: 1,
  });
	},
};