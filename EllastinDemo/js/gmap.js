var map;

function initialize() {
	// standart options
	var mapOptions = {
		scrollwheel: true,
		zoom: 10,
		center: new google.maps.LatLng(59.9379728, 30.3351805)
	};
	// map = new google.maps.Map(document.querySelector('.map-gl'), mapOptions);
	let mapView = new google.maps.Map(document.querySelector('.map-gl'), mapOptions);

//Adress

	let griboedova = {
		city: '<b>Санкт-Петербург</b><br>',
		street: 'наб. кан. Грибоедова, дом 72<br>',
		metro: 'Ст. метро "Сенная площадь"<br>',
		phone: 'тел. (812) 314-15-28, 314-10-27<br>',
		latitude: 59.9256814,
		longtitude: 30.3114381
	};

	let  otradnoe1 = {
		city: '<b>Отрадное, Ленинградская обл.</b><br>',
		street: 'ул. Ленина, 18<br>',
		metro: '',
		phone: 'тел. 8 (813) 624-03-52<br>',
		latitude: 59.7610838,
		longtitude: 30.780546
	};

	let  otradnoe2 = {
		city: '<b>Отрадное, Ленинградская обл.</b><br>',
		street: 'ул. Щурова, 3-в<br>',
		metro: '',
		phone: 'тел. 8 (950) 035-16-42<br>',
		latitude: 59.768927,
		longtitude: 30.798207
	};

	let belikuna = {
		city: '<b>Санкт-Петербург</b><br>',
		street: 'ул. Белы Куна, 20а, дом 1<br>',
		metro: 'Ст. метро "Международная"<br>',
		phone: 'тел. 8 (962) 713-51-44<br>',
		latitude: 59.874251,
		longtitude: 30.386455
	};

	let prosvesheniya = {
		city: '<b>Санкт-Петербург</b><br>',
		street: 'пр. Просвещения дом 24<br>',
		metro: 'Ст. метро "Проспект Просвещения"<br>',
		phone: 'тел. (812) 497-66-55<br>',
		latitude: 60.0561235,
		longtitude: 30.3212961
	};

	let gorohovaya = {
		city: '<b>Санкт-Петербург</b><br>',
		street: 'ул. Гороховая, 19<br>',
		metro: 'Ст. метро "Сенная площадь","Адмиралтейская"<br>',
		phone: 'тел. (812) 315-72-76<br>',
		latitude: 59.9314522,
		longtitude: 30.3161322
	};

	let tosno = {
		city: '<b>г. Тосно, Ленинградская область</b><br>',
		street: 'ул. Советская, 11<br>',
		metro: '',
		phone: 'тел. 8 (81361) 2-53-79<br>',
		latitude: 59.5417993,
		longtitude: 30.8791986
	};

	let tosno2 = {
		city: '<b>г. Тосно, Ленинградская область</b><br>',
		street: 'пр. Ленина, 62, кв. 2<br>',
		metro: '',
		phone: 'тел. 8 (81361) 2-68-18<br>',
		latitude: 59.537612,
		longtitude: 30.885912
	};

	let tosno3 = {
		city: '<b>г. Тосно, Ленинградская область</b><br>',
		street: 'пр. Ленина, 27<br>',
		metro: '',
		phone: 'тел. 8 (81361) 2-92-75<br>',
		latitude: 59.545316,
		longtitude: 30.867793
	};

	let gerasimovskaya = {
		city: '<b>Санкт-Петербург</b><br>',
		street: 'ул. Герасимовская, 15 лит. А пом. 3Н<br>',
		metro: 'Ст. метро "Площадь Мужества"<br>Аптека «НеоВита»<br>',
		phone: '',
		latitude: 59.980961,
		longtitude: 30.406571,
	};
	// console.log(gerasimovskaya);

function toCreatePoint(objPlace, mapView){
	let place = new google.maps.LatLng(objPlace.latitude, objPlace.longtitude);
	// let place = new google.maps.LatLng(0,0);
	// let place = new google.maps.LatLng(objPlace.longtitude, objPlace.latitude);
	let marker = new google.maps.Marker({
		map: mapView,
		position: place,
		icon: 'image/map-pointer.png'
	});

	let infoWindow = new google.maps.InfoWindow();
	let googleLink = `<br><a target="_blank" href="https://www.google.com.ua/maps/place/${objPlace.latitude},${objPlace.longtitude}">Показать адресс на Google Maps`;

	infoWindow.setContent(objPlace.city + objPlace.street + objPlace.metro + objPlace.phone + googleLink);
	// console.log(`${objPlace.street} point created`);

	google.maps.event.addListener(marker, 'click', function(){
		infoWindow.open(mapView, marker);
	});
	// google.maps.event.addListener(marker, 'mouseover', function () {
	// 	infoWindow.open(mapView, marker);
	// });
	google.maps.event.addListener(mapView, 'click', function () {
		infoWindow.close();
	});

}

// console.log(magdeburg);
// toCreatePoint(magdeburg, map);
toCreatePoint(griboedova, mapView);
toCreatePoint(otradnoe1, mapView);
toCreatePoint(otradnoe2, mapView);
toCreatePoint(belikuna, mapView);
toCreatePoint(prosvesheniya, mapView);
toCreatePoint(gorohovaya, mapView);
toCreatePoint(tosno, mapView);
toCreatePoint(tosno2, mapView);
toCreatePoint(tosno3, mapView);
toCreatePoint(gerasimovskaya, mapView);


}
google.maps.event.addDomListener(window, 'load', initialize);
