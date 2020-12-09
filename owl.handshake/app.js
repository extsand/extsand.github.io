document.addEventListener('DOMContentLoaded', () => {
	
	const preloader = document.querySelector('.preloader')
	setTimeout(() => {
		if(preloader.classList.contains('preloader-active')) {
			preloader.classList.remove('preloader-active')
		}		
	}, 2000);





	const btnJs = document.querySelector('.logo-img')
	const overlayHello = document.querySelector('.overlay_hello')
	const btnLang = document.querySelector('.button__click')
	const textMessage = document.querySelector('.text__message')

	// touchstart
	// touchend
	// touchcancel
	// touchmove


	// textMessage.addEventListener('touchstart', () => {
		
	// })
	



	btnJs.addEventListener('click', () => {
		overlayHello.classList.add('overlay_hello-active')
		overlayHello.addEventListener('click', () => {
			overlayHello.classList.remove('overlay_hello-active')
		})

	})

	btnLang.addEventListener('click', () => {
		btnLang.classList.toggle('button__click-action')

		// btnLang.textContent = 'No! Learn Eng'

	})






})