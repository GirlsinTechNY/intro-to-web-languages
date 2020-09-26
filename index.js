document.getElementById('i-agree-button').addEventListener('click', function (e) {
	alert('Thanks for clicking!')
})

document.getElementById('my-form').addEventListener('submit', function (e) {
	e.preventDefault()
	var answer1 = document.getElementById('input-1').value
	var answer2 = document.getElementById('input-2').value
	var answer3 = document.getElementById('input-3').value

	document.getElementById('result-1').innerHTML = answer1
	document.getElementById('result-2').innerHTML = answer2
	document.getElementById('result-3').innerHTML = answer3
})

document.getElementById('clear-button').addEventListener('click', function(e) {
	clear()
})

// Clear the form and stats table
function clear() {
	console.log('clear function')
	document.getElementById('input-1').value = ''
	document.getElementById('input-2').value = ''
	document.getElementById('input-3').value = ''

	document.getElementById('result-1').innerHTML = ''
	document.getElementById('result-2').innerHTML = ''
	document.getElementById('result-3').innerHTML = ''
}
