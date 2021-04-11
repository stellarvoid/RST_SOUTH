$(document).ready(function () {
	$('.burger').click(function (event) {
		$('.responsive-menu').toggleClass('active');
		$('.burger').toggleClass('active-burger');
		$('body,.container-header').toggleClass('blure');
		$('.title-block-img-1').toggleClass('none');
	});
});
