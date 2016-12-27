/*

this is the f**king reinbou color selector **

*/


var xsp, ysp, col, hueBitmap;

function setup() {
	var rb = createCanvas(windowWidth, windowHeight);
	colorMode(HSB, height, 1, 1, 1);
	rb.parent('reinbou');
	xsp = width / 10;
	ysp = height / 10;
	ellipseMode(CENTER);
	mode = true;
	hueBitmap = loadImage("img/hueBitmap.png");
	col = color(0);
}



function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	image(hueBitmap, 0, 0, width, height);
	if(mouseIsPressed){
		drawSelected(mouseX, mouseY);
	}
}

function getColor(xpos, ypos) {
	colorMode(RGB);
	col = get(xpos, ypos);
	return col;
}

function drawSelected(xpos, ypos) {
	d = xsp * 2;
	getColor(mouseX, mouseY);
	stroke(0);
	strokeWeight(5);
	fill(col);
	var newX = constrain(xpos, d/2, width-(d/2));
	var newY = constrain(ypos - d, d/2, height-(d/2));
	ellipse(newX, newY, d, d);
}