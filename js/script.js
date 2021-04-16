
//!BURGER MENU
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

//!SCROLL
$('.nav a').on('click', function () {

	let href = $(this).attr('href');

	$('html, body').animate({
		scrollTop: $(href).offset().top
	}, {
		duration: 370,   // по умолчанию «400» 
		easing: "linear" // по умолчанию «swing» 
	});

	return false;
});
$('.nav-r a').on('click', function () {

	let href = $(this).attr('href');

	$('html, body').animate({
		scrollTop: $(href).offset().top
	}, {
		duration: 370,   // по умолчанию «400» 
		easing: "linear" // по умолчанию «swing» 
	});

	return false;
});



//! TITLE-BLOCK toggle text
function nextMsg(i) {
	if (messages.length == i) {
		i = 0;
	}
	$('#message').html(messages[i]).fadeIn(500).delay(1000).fadeOut(500, function () {
		nextMsg(i + 1);
	});
};
var messages = [
	"сертификат",
	"декларацию",
	"разрешительные документы",
];

$('#message').hide();

nextMsg(0);



//!SROLLING ANIMATION
function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('element-show');
		}
	});
}

let options = {
	threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
	observer.observe(elm);
}




//!SLIDERSSSSSS
const swiperDocs = new Swiper('.docs-slider', {
	navigation: {
		nextEl: '.docs-next',
		prevEl: '.docs-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	slidesPerView: 5,

});

const swiperDocs2 = new Swiper('.docs-slider-1', {
	navigation: {
		nextEl: '.docs-next-1',
		prevEl: '.docs-prev-1',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	slidesPerView: 2,

});
const swiperDocs3 = new Swiper('.letter-slider', {
	navigation: {
		nextEl: '.letter-next',
		prevEl: '.letter-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	slidesPerView: 4,

});
const swiperDocs4 = new Swiper('.letter-slider-1', {
	navigation: {
		nextEl: '.letter-next-1',
		prevEl: '.letter-prev-1',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	slidesPerView: 1,

});
const swiperDocs5 = new Swiper('.reviews-slider', {
	navigation: {
		nextEl: '.reviews-next',
		prevEl: '.reviews-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	slidesPerView: 2,

});
const swiperDocs6 = new Swiper('.reviews-slider-1', {
	navigation: {
		nextEl: '.reviews-next-1',
		prevEl: '.reviews-prev-1',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	slidesPerView: 1,

});
const swiperDocs7 = new Swiper('.team-slider', {
	navigation: {
		nextEl: '.team-next',
		prevEl: '.team-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	slidesPerView: 1,

});