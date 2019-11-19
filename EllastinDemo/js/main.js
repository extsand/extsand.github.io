'use stict';

let sec2Items = document.querySelectorAll('.info-desctiption ul li a'),
	infoTextItems = document.querySelectorAll('.info-text-item'),
	sliderImages = document.querySelectorAll('.slide-viewport .slide');

let sec3SlideControll = document.querySelectorAll('.client-slider-control span'),
	carouselS3 = document.getElementsByClassName('client-slider')[0];
	

let sliderFrame = document.getElementsByClassName('client-slide-frame')[0],
	 slideControl = document.querySelectorAll('.client-slide-control span');




console.log(slideControl);
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


// console.log(mapViewport);
let mapViewport = document.querySelector('.map-gl');
function showGoogleMap(){
	let mapProperty = {
		center:new google.maps.LatLng(51.508742,-0.120850),
 	 	zoom:5,
	};
	

	let map = new google.maps.Map(mapViewport, mapProperty);
};





