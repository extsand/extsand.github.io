const menu = document.querySelector('.header__nav')
console.log(menu)

const navIco = document.querySelector('#nav-icon2')
navIco.addEventListener('click', ()=>{
	navIco.classList.toggle('open')
	menu.classList.toggle('header__nav-active')
	
	// this.classList.toggle('open')
})