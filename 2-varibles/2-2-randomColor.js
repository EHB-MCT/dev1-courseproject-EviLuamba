"use strict";

window.onresize = setup;

/** @type {CanvasRenderingContext2D} */
let context;

setup();

function setup() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context = canvas.getContext("2d");
	drawPyramid();
}

function drawPyramid() {
	drawSquare(100, 800);
	drawSquare(150, 700);
	drawSquare(200, 600);
	drawSquare(250, 500);
	drawSquare(300, 400);
	drawSquare(350, 300);
	drawSquare(400, 250);
	drawSquare(450, 100);
}

function drawSquare(position, size) {
	let red = Math.random() * 255;
	let green = Math.random() * 255;
	let blue = Math.random() * 255;

	context.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
	context.fillRect(position, position, size, size);
}
