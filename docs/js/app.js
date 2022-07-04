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

	// mask for input
	let InputTel = [].slice.call(document.querySelectorAll('input[type="tel"]'));
	InputTel.forEach(element => element.setAttribute("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}"));
	Inputmask("+7(999)999-99-99", {
		showMaskOnHover: false
	}).mask(InputTel);
	

	// Модалки
	const link = ".link-modal-js";
	$(link).fancybox({
		arrows: false,
		infobar: false,
		touch: false,
		type: 'inline',
		autoFocus: false,
		i18n: {
			en: {
				CLOSE: "Закрыть",
				NEXT: "Вперед",
				PREV: "Назад" 

			}
		}
	});
	$(".modal-close-js").click(function () {
		$.fancybox.close();
	});
	$.fancybox.defaults.backFocus = false;

	// Сайдбар меню
	$('.menu-sidebar__link-icon').click(function () {		
		let parent = $(this).parents('.menu-sidebar__item');
        $(this).toggleClass("active");
		parent.children(".menu-sidebar__sublist").slideToggle();
	});

}