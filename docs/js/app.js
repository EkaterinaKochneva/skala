window.onload = function () {

	// Кнопки в шапке

	$(".body-header__search-mobile").click(function (e) {
		$(this).toggleClass("active");
		$(".body-header__search").slideToggle().find('input').focus();
	});

	$('.body-header__menu-mobile').click(function () {
		$('.bottom-header').toggleClass('active');
		$('body').toggleClass('fixed-mb');
	});
	$('.bottom-header__menu-close-mob').click(function () {
		$('.bottom-header').removeClass('active');
		$('body').removeClass('fixed-mb');
	});

    $('.header-nav__link-icon').click(function () {		
		let parent = $(this).parents('.header-nav__item--secondary');
        parent.toggleClass("active");
		parent.children(".header-nav__submenu--secondary").slideToggle();
	});

	// Слайдеры

	const reviewsSlider = new Swiper('.reviews__slider', {
		slidesPerView: 1,
		// loop: true,
		// autoHeight: true,
		// autoplay: {
		// 	delay: 5000,
		//   },
		  navigation: {
			hide: false,
			nextEl: '.reviews__slider-btn--next',
			prevEl: '.reviews__slider-btn--prev',
		  },

		
	  });
	

}