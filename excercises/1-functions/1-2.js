"use strict";

drawLine();

function drawLine() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let context = canvas.getContext("2d");

	context.lineWidth = 8;
	context.strokeStyle = "black";
	// ik maak een path aan
	context.beginPath();

	context.moveTo(50, 50); // Startpunt linkerbovenhoek
	context.lineTo(200, 50); // Bovenste lijn
	context.lineTo(200, 200); // Rechter lijn
	context.lineTo(50, 200); // Onderste lijn
	context.lineTo(50, 50); // Linker lijn , terug

	context.stroke();

	context.lineWidth = 8;
	context.strokeStyle = "red";

	context.beginPath();

	context.moveTo(50, 50);
	context.lineTo(200, 200);

	context.moveTo(200, 50);
	context.lineTo(50, 200);

	context.stroke;
}
