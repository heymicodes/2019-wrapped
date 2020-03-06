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