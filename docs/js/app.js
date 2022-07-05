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

	const objectsSlider = new Swiper('.objects__slider', {
	slidesPerView: 1,
	loop: true,

	breakpoints: {

		1199: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
		991: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		575: {
			slidesPerView: 2,	
			spaceBetween: 30,		
		}
	},
	navigation: {
	hide: false,
	nextEl: '.objects__slider-btn--next',
	prevEl: '.objects__slider-btn--prev',
	},	
	});

	const realizedSlider = new Swiper('.realized-project__slider', {
	slidesPerView: 1,
	loop: true,
	
	breakpoints: {

		991: {
			slidesPerView: 3,
			spaceBetween: 6,
		},
		575: {
			slidesPerView: 2,	
			spaceBetween: 20,		
		}
	},
	navigation: {
	hide: false,
	nextEl: '.realized-project__slider-btn--next',
	prevEl: '.realized-project__slider-btn--prev',
	},		
	});

	const customersSlider = new Swiper('.customers__slider', {
		slidesPerView: 1,
		loop: true,
		
		breakpoints: {
			1199: {
				slidesPerView: 5,
				spaceBetween: 5,
			},
			991: {
				slidesPerView: 4,
				spaceBetween: 10,
			},
			767: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
			575: {
				slidesPerView: 2,	
				spaceBetween: 20,		
			}
		},
		navigation: {
		hide: false,
		nextEl: '.customers__slider-btn--next',
		prevEl: '.customers-project__slider-btn--prev',
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

	// Табы
	$('.tabs__caption').on('click', '.tabs__btn:not(.active)', function (e) {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('.tabs').find('.tabs__content').hide().removeClass('active')
			.eq($(this).index()).fadeIn().addClass('active');

	});

	// Кастомный ползунок

	$('.calculator__range').rangeslider({

		polyfill:  false,
		onInit: function() {
			var $handle = $('.rangeslider__handle', this.$range);
			updateHandle($handle[0], this.value);
		}
		
	});

	let $calculatorRange = $('.calculator__range');

	$calculatorRange.rangeslider({
		polyfill: false,
		onInit: function() {
		var $handle = $('.rangeslider__handle', this.$range);
		updateHandle($handle[0], this.value);
		}
	})
	.on('input', function(e) {
		var $handle = $('.rangeslider__handle', e.target.nextSibling);
		updateHandle($handle[0], this.value);
	});

	function updateHandle(el, val) {
	el.textContent = val;
	}

	// Аккардион FAQ

	$('.faq__btn').click(function(){
		$(this).toggleClass('active');	
			$(this).parent().next().toggleClass('active');
			$(this).parent().next().children().slideToggle();	
	});

}