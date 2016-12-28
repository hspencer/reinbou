/*

this is the f**king reinbou color selector **

*/

var d, col, hueBitmap;

function setup() {
	var rb = createCanvas(windowWidth, windowHeight);
	rb.parent('reinbou');
	d = width / 5;
	d = constrain(d, 70, 200);
	mode = true;
	hueBitmap = loadImage("img/hueBitmap.png");
	col = color(0, 0, 0);
	noStroke();
}

function windowResized() {
	d = width / 5;
	d = constrain(d, 70, 200);
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	image(hueBitmap, 0, d, width, height-d);
	if(mouseIsPressed){
		drawSelected(mouseX, mouseY);
	}
}

function touchStarted(){
	image(hueBitmap, 0, d, width, height-d);
	drawSelected(touchX, touchY);
}

function touchMoved(){
	image(hueBitmap, 0, d, width, height-d);
	drawSelected(touchX, touchY);
}

function drawSelected(xpos, ypos) {
	col = get(xpos, ypos);
	fill(col);
	rect(0, 0, width, d);
}