"use strict";

function toggleColor() {
	let testElement = document.getElementById("topH1").style.color;
	if (testElement === 'white') {
		document.getElementById("topH1").style.color = "#8B4513";
		document.getElementById("bodyElement").style.backgroundColor ="#FAEBD7";
		document.getElementById("homepageLink").style.color = "#8B4513";
		document.getElementById("topPortionP").style.color = "#8B4513";
		document.getElementById("fcap").style.color = "#800000";
		document.getElementById("table").style.color = "#8B4513";
		document.getElementById("tblElements").style.borderColor = "#8B4513";
		document.getElementById("bottomText").style.color = "#8B4513";
	} else {
		document.getElementById("topH1").style.color = 'white';
		document.getElementById("bodyElement").style.backgroundColor = 'black';
		document.getElementById("homepageLink").style.color = "#B22222";
		document.getElementById("topPortionP").style.color = "white";
		document.getElementById("fcap").style.color = "#B22222";
		document.getElementById("table").style.color = "black";
		document.getElementById("tblElements").style.borderColor = "#B22222";
		document.getElementById("bottomText").style.color = "white";
	}
}

