var navigate = {
	init: function() {
		$('#start-btn').click(navigate.onStartBtnClick);
		$('#btn-prev').click(navigate.onPrevBtnClick);
		$('#btn-next').click(navigate.onNextBtnClick);
	},
	
	changeColors: function() {
		if($('.active').hasClass('bg-primary')) {
			$('.logo').addClass('text-secondary');
			$('.pagination').addClass('text-secondary');
		} else {
			$('.logo').removeClass('text-secondary');
			$('.pagination').removeClass('text-secondary');
		}
	},
	
	hideNavBtn: function() {
		if($('.section--seasons').hasClass('active')) {
			$('#btn-prev').hide();
		} else {
			$('#btn-prev').removeAttr('style');
		}
		
		//if($('.section--cliffhanger').hasClass('active')) {
			//$('.pagination').hide();
		//} else {
			//$('.pagination').removeAttr('style');
		//}
		
		if($('.section--outro').hasClass('active')) {
			$('#btn-next').hide();
		} else {
			$('#btn-next').removeAttr('style');
		}
	},
	
	onPrevBtnClick: function(e) {
		var currentSection =	$('.active');
		var prevSection = currentSection.prev();
		
		currentSection.addClass('is-hidden');
		currentSection.removeClass('active');
		prevSection.addClass('active');
		prevSection.removeClass('is-hidden');
		navigate.pageCount(e.currentTarget);
		
		navigate.hideNavBtn();
		carousel.unset();
		carousel.init();
		navigate.changeColors();
	},
	
	onNextBtnClick: function(e) {
		var currentSection =	$('.active');
		var nextSection = currentSection.next();
		
		currentSection.addClass('is-hidden');
		currentSection.removeClass('active');
		nextSection.addClass('active');
		nextSection.removeClass('is-hidden');
		navigate.pageCount(e.currentTarget);
		//console.log(e);

		navigate.hideNavBtn();
		carousel.unset();
		carousel.init();
		navigate.changeColors();
	},
	
	onStartBtnClick: function(e) {
		var parent = $(e.target).parent();
		parent.addClass('is-hidden');
		parent.next().removeClass('is-hidden');
		parent.next().addClass('active');
		
		navigate.hideNavBtn();
		carousel.init();
		$('.pagination').removeClass('is-hidden');
		navigate.changeColors();
	},
	
	pageCount: function(target) {
		var index = parseInt($('.page-count').text().split('/')['0']);

		if($(target).is('#btn-prev')) {
			$('.page-count').text(index-1 +'/7');
		} else if($(target).is('#btn-next')) {
			$('.page-count').text(index+1 +'/7');
		}
	},
};
 