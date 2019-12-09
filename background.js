var d = new Date().getHours();
		
if (d < 12 ) {
	alert(document.getElementById("demo").innerHTML = "Good morning!");
}
if (d > 12 && d < 16 ) {
	alert(document.getElementById("demo").innerHTML = "Good afternoon!");
}
if (d > 16 ) {
	alert(document.getElementById("demo").innerHTML = "Good evening!");

}