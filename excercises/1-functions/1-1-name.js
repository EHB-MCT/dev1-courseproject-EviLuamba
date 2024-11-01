"use strict";

drawLine();

function drawLine() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let context = canvas.getContext("2d");

	context.lineWidth = 10;
	context.strokeStyle = "red";
	// ik maak een path aan
	context.beginPath();

	// de eerste verticale lijn
	context.moveTo(100, 50);
	context.lineTo(100, 200);

	//bovenste verticale lijn
	context.moveTo(100, 50);
	context.lineTo(200, 50);

	// middelste lijn
	context.moveTo(100, 125);
	context.lineTo(175, 125);

	// onderste horizontale lijn
	context.moveTo(100, 200);
	context.lineTo(200, 200);

	context.stroke();
}
