$(document).ready(function () {
	
	$('.b-slider').each(function () {
		$('.b-slides__slide:first').css('display','block').addClass('active');
		$('.b-slider-navi_link:first').addClass('active');

		$('.b-slider-navi_link').click(function () {
			if (!$(this).hasClass('active')) {
				$('.b-slider-navi_link.active').removeClass('active');
				$(this).addClass('active');
				var ind = $(this).index();
				var oldslide = $('.b-slides__slide.active');
				$('.b-slides__slide.active').removeClass('active');
				$('.b-slides__slide:eq('+ind+')').addClass('active').animate({opacity: 'show'},300,function(){
					$(oldslide).css('display','none');
				});
			}
		});

		$('.b-accordion').each(function () {
			$('.b-accordion-panel:first').addClass('active');
			$('.b-accordion-panel:first .b-accordion-panel__content').css('display','block');
		});

		$('.b-accordion-panel__head').click(function () {
			var panel = $(this).parent();
			if ($(panel).hasClass('active')) {
				$(panel).removeClass('active');
				$(panel).find('.b-accordion-panel__content').animate({height:'hide'},300);
			} else {
				$('.b-accordion-panel.active .b-accordion-panel__content').css('display','none');
				$('.b-accordion-panel.active').removeClass('active');
				$(panel).addClass('active').find('.b-accordion-panel__content').animate({height:'show'},300);
			}
		})

	})

});