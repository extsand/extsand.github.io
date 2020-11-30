const hamburger = document.querySelector('#nav-icon1')
const btnTabs = document.querySelectorAll('[data-tab-btn]')
const tabs = document.querySelectorAll('[data-tab-content]')
// console.log(tabs)
// console.log(btnTabs)

// hamburger.addEventListener('click', () => {
// 	hamburger.classList.toggle('open')
// })

function changeTab(e){
	e.preventDefault()

	let i
	for (i = 0; i < tabs.length; i++) {
		tabs[i].classList.remove('active-tab')
	}
	for (i = 0; i < btnTabs.length; i++){
		btnTabs[i].classList.remove('active-tab-btn')
	}

	e.currentTarget.classList += 'active-tab-btn'
	tabs.forEach( tab => {
		if (tab.dataset.tabContent === e.currentTarget.dataset.tabBtn) {
			tab.classList.add('active-tab')
		}
	})
	
}

btnTabs.forEach( button => {
	button.addEventListener('click', changeTab)
})

