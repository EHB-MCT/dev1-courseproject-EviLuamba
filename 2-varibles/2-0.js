"use strict";
let context;

setup();
drawHouse();
drawTree(500, 500);
drawTree(600, 600);
drawTree(50, 500);
drawTree(200, 300);

function setup() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context = canvas.getContext("2d");
}

function drawTree(x, y) {
	context.fillStyle = "a0522d";
	context.fillRect(x, y, 20, 100);
	context.fillStyle = "#3cb371";
	context.beginPath();
	context.ellipse(x + 10, y - 50, 40, 80, 0, 0, Math.PI * 2);
	context.fill();
}

function drawHouse() {
	let x = 300;
	let y = 300;

	context.fillstyle = "#a52a2a";
	context.fillRect(300, 300, 100, 100);

	context.fillStyle = "af8a5a";
	context.fillRect(x + 50, 350, 25, 50);

	context.fillStyle = "666666";
	context.beginPath();
	context.moveTo(y, y);
	context.lineTo(x + 50, y - 50);
	context.lineTo(x + 100, y);
	context.fill();
}
