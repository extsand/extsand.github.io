const btnGenerate = document.querySelector('.main___btn-generate button')
const btnCopy = document.querySelector('.main__input-btn_copy')
const password = document.querySelector('.main__input input')
const notification = document.querySelector('.main__notification')
const radioBtn = document.querySelectorAll('.main__checkbox input')

function generatePassword(){
	const passLenght = 18
	const min = 1
	const letters = Array.from('qwertyuiopasdfghjklzxcvbnm')
	const numbers = Array.from('1234567890')
	const symbols = Array.from('!@#$%^&*()+=-?/{}[]')
	const line =  Array.from('-_-_-_-_-_-_')
	const caps = Array.from('QWERTYUIOPASDFGHJKLZXCVBNM')

	let arr = letters
	let passwordOut = []

	radioBtn.forEach(item => {
		if(item.checked){
			switch(item.name){
				case 'use_numbers':
					arr.push(...numbers)
				break
				case 'use_symbols':
					arr.push(...symbols)
					break
				case 'use_line':
					arr.push(...line)
					break
				case 'use_caps':
					arr.push(...caps)
					console.log('caps')
					break
			}
			console.log(arr)
		}

	})

	for(let i = 0; i < passLenght; i++){
		let random = (min + Math.random() * (arr.length + 1 - min)).toFixed(0)
		passwordOut.push(arr[random])
		
	}

	password.value = passwordOut.join('')
	console.log(arr)
}

function copyPassword(){
	password.select()
	password.setSelectionRange(0, 9999)
	document.execCommand('copy')

	notification.classList.add('main__notification-active')
	setTimeout( ()=> {
		notification.classList.remove('main__notification-active')
	},1500)
}


btnGenerate.addEventListener('click', generatePassword)
btnCopy.addEventListener('click', copyPassword)