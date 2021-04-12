$(document).ready(function () {
	$('.burger').click(function (event) {
		$('.responsive-menu').toggleClass('active');
		$('.burger').toggleClass('active-burger');
		$('body,.container-header').toggleClass('blure');
		$('.title-block-img-1,img,.map').toggleClass('none');
		$('body').toggleClass('overflow');
	});

	$('.button-more').click(function (event) {
		$('.services-items').toggleClass('services-active');
		$('.arrow-more').toggleClass('arrow-active')
	});
});
$('.nav,.nav-r a').on('click', function () {

	let href = $(this).attr('href');

	$('html, body').animate({
		scrollTop: $(href).offset().top
	}, {
		duration: 570,   // по умолчанию «400» 
		easing: "linear" // по умолчанию «swing» 
	});

	return false;
});
