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
	drawLines();
}

function drawLines() {
	context.linewidth = 5;

	let margin = 200;
	let canvasWidth = context.canvas.width;

	context.beginPath();
	context.moveTo(margin, 100);
	context.lineTo(canvasWidth - margin, 100);
	context.lineTo(margin, 150);
	context.lineTo(canvasWidth - margin, 150);
	context.lineTo(margin, 200);
	context.lineTo(canvasWidth - margin, 200);
	context.lineTo(margin, 250);
	context.lineTo(canvasWidth - margin, 250);
	context.lineTo(margin, 300);
	context.lineTo(canvasWidth - margin, 300);
	context.lineTo(canvasWidth - margin, 300); // horizontale lijn
	context.closePath();
	context.stroke();
}
