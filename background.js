var d = new Date().getHours();
		
if (d >= 4 && d < 12) {
	alert(document.getElementById("demo").innerHTML = "Good morning!");
}
if (d >= 12 && d < 16 ) {
	alert(document.getElementById("demo").innerHTML = "Good afternoon!");
}
if (d >= 16 && d < 23 ) {
	alert(document.getElementById("demo").innerHTML = "Good evening!");
}
if (d >= 23 || d < 4 ) {
	alert(document.getElementById("demo").innerHTML = "Good night!");
}
