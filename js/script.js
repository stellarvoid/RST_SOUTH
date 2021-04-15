
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

// $(function () {

// 	$("#typing").typed({
// 		strings: [" В Африке гориллы.", " В Африке большие.", " Злые крокодилы."],
// 		typeSpeed: 70,
// 		backDelay: 1500,
// 		startDelay: 2500,
// 		loop: true,
// 		loopCount: 2,
// 		contentType: 'html',
// 	});

// });
//todo https://myrusakov.ru/jquery-typed.html


//!SROLLING ANIMATION
// const animItems = document.querySelectorAll('._anim-items');

// if (animItems.length > 0) {
// 	window.addEventListener('scroll', animOnScroll);
// 	function animOnScroll() {
// 		for (let index = 0; index < animItems.length; index++) {
// 			const animItem = animItem[index];
// 			const animItemHeight = animItem.offsetHeight;
// 			const animItemOffset = offset(animItem).top;
// 			const animStart = 4;

// 			let animItemPoint = window.innerHeight - animItemHeight / animStart;
// 			if (animItemHeight > window.innerHeight) {
// 				animItemPoint = window.innerHeight - window.innerHeight / animStart;
// 			}

// 			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
// 				animItem.classList.add('._active');
// 			} else {
// 				animItem.classList.remove('._active');
// 			}
// 		}
// 	}
// 	function offset(el) {
// 		const rect = el.getBoundingClientRect(),
// 			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
// 			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// 		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
// 	}

// 	// setTimeout(() => {
// 	// 	animOnScroll();
// 	// }, 300);

// }


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