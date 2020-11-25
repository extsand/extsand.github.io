document.addEventListener('DOMContentLoaded', (e) => {
	const dataDisplay = document.querySelector('[data-display')
	
	function showResolution(name = '', width, height, ) {
		// console.group('%c ' + name + 'color: red')
		console.group(`%c  ${name}`, 'color: green')
		console.log('--width: ' + width)
		console.log('--height: ' + height)
		console.groupEnd(name)
	}

	function consoleInformation() {
		showResolution('Screen size:', window.screen.width, window.screen.height)
		showResolution('Avaliable screen size:', window.screen.availWidth, window.screen.availHeight)
		showResolution('Window outer size:', window.outerWidth, window.outerHeight)
		showResolution('Window inner size:', window.innerWidth, window.innerHeight)
		showResolution('Window inner size WITHOUT scroll line', document.documentElement.clientWidth, document.documentElement.clientHeight)
		showResolution('Web page size FULL PAGE: ', document.documentElement.scrollWidth, document.documentElement.scrollHeight)
		showResolution('View port: ', window.innerWidth, window.innerHeight)
	  }


	function toDataDisplay() {
		consoleInformation()

		dataDisplay.innerHTML = `Display resolution: ${window.screen.width} x ${window.screen.height}`
	}

	function work() {
		console.log('event works')
	}


	window.addEventListener('resize', toDataDisplay)
	window.addEventListener('load', toDataDisplay)



})

// original page: https://dmitripavlutin.com/screen-window-page-sizes/
// rus version: https://habr.com/ru/post/509258/


//media css logic https://css-tricks.com/logic-in-media-queries/














	// Любопытная заметка
	// 	var w = window,
	//     d = document,
	//     e = d.documentElement,
	//     g = d.getElementsByTagName('body')[0],
	//     x = w.innerWidth || e.clientWidth || g.clientWidth,
	//     y = w.innerHeight|| e.clientHeight|| g.clientHeight;
	// alert(x + ' × ' + y);

	// function winSize() {
	// 	console.log(`
	// 	Inner Width: ${this.innerWidth}
	// 	Inner Height: ${this.innerHeight}
	// 	Outer Width: ${this.outerWidth}
	// 	Outer Height: ${this.outerHeight}
	// 		`);
	// }

	// winSize()
