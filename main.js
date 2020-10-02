var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
var myHTML = document.querySelector('html');
myHTML.onclick = function() {};
document.querySelector('html').onclick = function() {
	alert('Ouch! Stop poking me!');
}