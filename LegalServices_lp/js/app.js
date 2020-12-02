$(document).ready(function () {

	$('.slider__inner, .news__slider-inner').slick({
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>'
	})



	$('select').styler()

	$('.header__btn-menu').on('click',function (e) {
		e.preventDefault();
		$('.menu ul').slideToggle();

	});

});