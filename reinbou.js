/*

this is the f**king reinbou color selector **

*/
var xsp = 10;
var ysp = 10;


function setup(){
	var rb = createCanvas(windowWidth, windowHeight);
	rb.parent('reinbou');	
	xsp = windowWidth / 12;
	ysp = xsp * (windowWidth/windowHeight);
	//rectMode(CENTER);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw(){
	drawSelected();
	noStroke();
	colorMode(RGB, 256, width, height);
	
	for (y = 0; y < height; y += ysp) {
		for (x = 0; x < width; x += xsp) {
			fill(touchY, touchX, y);
			rect(x, y, xsp, ysp);
		}
	}
}

function drawSelected(){
	d = 20;
	x = touchX;
	y = touchY - d;
	c = get(x,y);
	fill(c);
	ellipse(x, y, d, d);
}
