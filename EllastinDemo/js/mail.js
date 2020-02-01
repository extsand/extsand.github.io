document.addEventListener('DOMContentLoaded', function(){
	let formOrder = document.getElementById('form-order');
	let formCall = document.getElementById('form-call'); 
	let formMessage = document.getElementById('message-for-form');

	formOrder.addEventListener('submit', function(e){
		event.preventDefault();
		formMessage.classList.add('message-for-form-action');
		setTimeout(function(){
			formMessage.classList.remove('message-for-form-action');
			toCloseOverlay(0);
		},2000);
		


		let request = new XMLHttpRequest();
		request.open('POST','./mail.php');
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

		let formData = new FormData(formOrder);

		//Для отправки в JSON формате
		// let obj = {};
		// formData.forEach(function(value, key){
		// 	obj[key] = value;
		// });
		// let json = JSON.stringify(obj);
		// request.send(json);

		request.send(formData);

		request.addEventListener('readystatechange', function(){
			if(request.readyState < 4){
				console.log('Идет загрузка на сервер');
				// alert('Идет загрузка');
			} else if (request.readyState === 4 && request.status == 200){
				console.log('Спасибо за заявку!');
				// alert('СПАСИБО ЗА ЗАЯВКУ, наш менеджер скоро с Вами свяжется');
			}
		});
		
		//очистка Inputs
		// for(let i = 0; i < input.lenght; i++){
		// 	input[i].value = '';
		// }


		
		
	});

	formCall.addEventListener('submit', function(e){
		event.preventDefault();
		formMessage.classList.add('message-for-form-action');
		setTimeout(function(){
			formMessage.classList.remove('message-for-form-action');
			toCloseOverlay(1);
		},2000);
		


		let request = new XMLHttpRequest();
		request.open('POST','./mail.php');
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

		let formData = new FormData(formOrder);

		//Для отправки в JSON формате
		// let obj = {};
		// formData.forEach(function(value, key){
		// 	obj[key] = value;
		// });
		// let json = JSON.stringify(obj);
		// request.send(json);

		request.send(formData);

		request.addEventListener('readystatechange', function(){
			if(request.readyState < 4){
				console.log('Идет загрузка на сервер');
				// alert('Идет загрузка');
			} else if (request.readyState === 4 && request.status == 200){
				console.log('Спасибо за заявку!');
				// alert('СПАСИБО ЗА ЗАЯВКУ, наш менеджер скоро с Вами свяжется');
			}
		});
		
		//очистка Inputs
		// for(let i = 0; i < input.lenght; i++){
		// 	input[i].value = '';
		// }


		
		
	});

});
