// Examples for the Intro to Web Languages class

// Selecting a HTML Element by it's id
document.getElementById('element-id')

// Adding an event listener with a callback function 
document.getElementById('element-id').addEventListener('click', function(e) {
	e.preventDefault()

	// Do stuff here ...

})

// Changing the content of a HTML Element
document.getElementById('element-id').innerHTML = 'New HTML Element Content'

// Getting the content of a HTML input element
var inputValue = document.getElementById('element-id').value

// Trigger an alert popup
alert('I am alert!')
