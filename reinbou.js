/*

this is the f**king reinbou color selector **

*/
var xsp, ysp, col, mode;

function setup() {
	var rb = createCanvas(windowWidth, windowHeight);
	rb.parent('reinbou');
	xsp = 10;
	ysp = 10;
	rectMode(CENTER);
	ellipseMode(CENTER);
	mode = true;
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	if (mode) {
		drawRGB();
	} else {
		drawHSB();
	}
	drawSelected(mouseX, mouseY);
}

function drawRGB() {
	noStroke();
	colorMode(RGB, 255);
	for (y = 0; y <= height; y += ysp) {
		for (x = 0; x <= width; x += xsp) {
			fill((x / width) * 255, (y / height) * 255, abs(sin(millis() / 2222.2)) * 255);
			rect(x, y, xsp, ysp);
		}
	}
}

function drawHSB() {
	noStroke();
	colorMode(HSB, height, 1, 1, 1);
	for (y = 0; y <= height; y += ysp) {
		for (x = 0; x <= width; x += xsp) {
			if (x < width / 2) {
				fill(y, map(x, 0, width / 2, 0, 1), 1)
			} else {
				fill(y, 1, map(x, width / 2, width, 1, 0))
			}

			rect(x, y, xsp, ysp);
		}
	}
}

function getColor(xpos, ypos) {
	colorMode(RGB);
	col = get(xpos, ypos);
	return col;
}


function drawSelected(xpos, ypos) {
	d = 64;
	getColor(mouseX, mouseY);
	stroke(0);
	strokeWeight(5);
	fill(col);
	ellipse(xpos, ypos - d, d, d);
}

function touchMoved() {
	ellipse(mouseX, mouseY, 5, 5);
	// prevent default
	return false;
}

function keyPressed() {
	if (key == ' ') {
		mode = !mode;
	}
}