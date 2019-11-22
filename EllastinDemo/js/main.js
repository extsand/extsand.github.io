'use stict';

let sec2Items = document.querySelectorAll('.info-desctiption ul li a'),
	infoTextItems = document.querySelectorAll('.info-text-item'),
	sliderImages = document.querySelectorAll('.slide-viewport .slide');

let sec3SlideControll = document.querySelectorAll('.client-slider-control span'),
	carouselS3 = document.getElementsByClassName('client-slider')[0];
	

let sliderFrame = document.getElementsByClassName('client-slide-frame')[0],
	 slideControl = document.querySelectorAll('.client-slide-control span');


//Overlay
let btnCall = document.querySelectorAll('.request-call'),
 	btnOrder = document.querySelectorAll('.make-order'),
 	overlay = document.querySelectorAll('.overlay-wrapper'),
 	btnCloseOverlay = document.querySelectorAll('.close-overlay'),
	section = document.querySelectorAll('section');



//Scroll

let linkButton = document.querySelectorAll('.navigation a'),
	speedLink = 0.8;
console.log(linkButton);
linkButton.forEach(function(item, index){
	linkButton[index].addEventListener('click', function(e){
		e.preventDefault();
		var w = window.pageYOffset,  
     hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
	    t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
			start = null;
			requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
			function step(time) {
					if (start === null) start = time;
					var progress = time - start,
							r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/speedLink, w + t));
					window.scrollTo(0,r);
					if (r != w + t) {
							requestAnimationFrame(step)
					} else {
							location.hash = hash  // URL с хэшем
					}
			}
	
	}, false);
});
	

//Overlay
btnOrder.forEach(function(item, index, arr){
	btnOrder[index].addEventListener('click', function(e){
		toShowOverlay(0);
		
	});
});
btnCall.forEach(function (item, index, arr){
	btnCall[index].addEventListener('click', function(){
		toShowOverlay(1);
	});
});

btnCloseOverlay.forEach(function (item, index, arr) {
	btnCloseOverlay[index].addEventListener('click', function(e){
		e.preventDefault();
		if(index == 0){
			toCloseOverlay(0);
		}
		else if(index == 1){
			toCloseOverlay(1);
		}
	});
});

overlay.forEach(function(item, index){
	overlay[index].addEventListener('click', function(e){
		if(e.target.className == 'form-wrapper'){
			toCloseOverlay(index);
		}
	});
});

function toShowOverlay(index) {
	overlay[index].classList.add('overlay-show');
	document.body.style.overflow = 'hidden';
	section.forEach(function (item, index) {
		section[index].style.filter = 'blur(5px)';
		// console.log(index + ' is fitltered');
	});
	console.log('Show overlay');
}
function toCloseOverlay(index){
	overlay[index].classList.remove('overlay-show');
	document.body.style.overflow = '';
	section.forEach(function(item, index){
		section[index].style.filter = '';
		// console.log(index + ' is fitltered');
	});
	console.log('Hide overlay');
}

//Overlay END



//Slider Client
let direction;
slideControl.forEach(function(item, index,  arr){
	slideControl[index].addEventListener('click', function(){
		if(index == 1){
			console.clear();
			console.log('right');
			sliderFrame.setAttribute('style', 'transform: translate(20%)');
			direction = 1;
		}
		else if (index == 0){
			console.clear();
			console.log('left');
			// sliderFrame.style.transform = 'translateX(30rem)';
			sliderFrame.setAttribute('style', 'transform: translate(-20%)');
			direction = 0;
		}
	});
});

sliderFrame.addEventListener('transitionend', function(e){
	console.log('Transition END');
	if(direction == 0){
		sliderFrame.appendChild(sliderFrame.firstElementChild);
	}
	else if(direction == 1){
		sliderFrame.prepend(sliderFrame.lastElementChild);
	}
	sliderFrame.style.transition = 'none';
	sliderFrame.style.transform = 'translate(0)';

	setTimeout(function(){
		sliderFrame.style.transition = 'all 0.5s';
	});
});
//Slider Client END

//Аккордеон - Выпадающий блоки
let accordion = document.getElementsByClassName('accordion-button-item');
for(let i = 0; i < accordion.length; i++){
	accordion[i].addEventListener('click', function(){
		// this.classList.toggle('active');
		console.log('panell');

		let panel = this.nextElementSibling;
		if(panel.style.display === 'block'){
			panel.style.display = 'none';
		}
		else {
			panel.style.display = 'block';
		}
	});
}
//Аккордеон - Выпадающий блоки END

//Text slider
sliderFor2Section();
function sliderFor2Section(){
	
	defaultState();
	function defaultState() {
		infoTextItems[0].setAttribute('style', 'display: block');
		sec2Items[0].classList.add('active-item');
		sliderImages[0].setAttribute('style','display: block');
		// sliderImages.src = `./image/slider-section-2/slide-${0}.jpg`;
	}
	
	function hideAllInfoTextItems(){
		infoTextItems.forEach((item, index)=>{
			infoTextItems[index].setAttribute('style','display: none');
			sec2Items[index].classList.remove('active-item');
			sliderImages[index].setAttribute('style','display: none');


			console.log('all hide');
		});
	}

	//Обработчик айтемов
	sec2Items.forEach(function(item, index, arr){
		sec2Items[index].addEventListener('click', (e)=>{
			e.preventDefault();
			console.log(index);
			hideAllInfoTextItems();
			infoTextItems[index].setAttribute('style', 'display: block');
			sec2Items[index].classList.add('active-item');
			sliderImages[index].setAttribute('style','display: block');
		});
	});
}
//Text slider END







