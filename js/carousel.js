var carousel = {
	init: function() {
			$('#carousel-season').slick({
	  		infinite: true,
				arrows: false,
				dots: true
			});
		
			$('#carousel-project').slick({
	  		infinite: true,
				arrows: false,
				dots: true
			});
		
			$('#carousel-figure').slick({
	  		infinite: true,
				autoplay: true,
  			autoplaySpeed: 3000,
				arrows: false,
				dots: true
			});
	},
	
	unset: function() {
			$('#carousel-season').slick('unslick');
			$('#carousel-project').slick('unslick');
			$('#carousel-figure').slick('unslick');
	},
};