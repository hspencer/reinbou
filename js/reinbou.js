/*

this is the f**king reinbou color selector **

*/




var d, m, col, hueBitmap, tempBitmap, hueRange, okButton;

function setup() {
	var rb = createCanvas(windowWidth, windowHeight);
	rb.parent('reinbou');
	cursor(CROSS);
	d = 90; // height of top color bar
	m = 5; // margin of top color bar
	mode = true;
	hueBitmap = loadImage("img/hueBitmap.png");
	tempBitmap = loadImage("img/tempBitmap.png");
	col = color(0, 0, 0);
	noStroke();

	okButton = createButton('ok');
	okButton.parent('reinbou-container');
	okButton.position(width - 75, 15);
	okButton.mousePressed(sendColor);
	okButton.style("font-size", "18px");
	okButton.style("text-align", "center");
	okButton.style("font-weight", "bolder");
	okButton.style("background-color", "transparent");
	okButton.style("width", "60px");
	okButton.style("height", "60px");
	okButton.style("border-radius", "50%");
	okButton.style("color", "rgba(0,0,0,.9)");
	okButton.style("border", "4px solid rgba(0,0,0,.3)");

	hueRange = createSlider(0, 255, 255, 1);
	hueRange.position(10, height - 38);
	hueRange.style('width', ''+width - (m*4)+'px');
	hueRange.class('rb-range');
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	okButton.position(width - 75, 15);
}

function bitmap(){
	image(tempBitmap, 0, d, width, height - d * 1.5);
	tint(255, hueRange.value());
	image(hueBitmap, 0, d, width, height - d * 1.5);
  noTint();
}

function draw() {
	bitmap();
	if (mouseIsPressed) {
		drawSelected(mouseX, mouseY);
	}
	// print(hueRange.value());
}

function touchStarted() {
	bitmap();
	drawSelected(touchX, touchY);
}

function touchMoved() {
	bitmap();
	drawSelected(touchX, touchY);
}

function drawSelected(xpos, ypos) {
	col = get(xpos, ypos);
	fill(col);
	rect(m, m, width - 2 * m, d - 2 * m, m, m, m, m);
	if (brightness(col) < 50) {
		okButton.style("color", "rgba(255,255,255,.9)");
		okButton.style("border", "4px solid rgba(255,255,255,.5)");
	} else {
		okButton.style("color", "rgba(0,0,0,.9)");
		okButton.style("border", "4px solid rgba(0,0,0,.3)");
	}
}

function sendColor() {
	return col;
}

function changeMode() {
	mode = !mode;
}


// Function to disable "pull-to-refresh" effect present in some webviews.
// Especially Crosswalk 12 and above (Chromium 41+) runtimes.

window.addEventListener('load', function() {
	var lastTouchY = 0;
	var maybePreventPullToRefresh = false;

	// Pull-to-refresh will only trigger if the scroll begins when the
	// document's Y offset is zero.

	var touchstartHandler = function(e) {
		if (e.touches.length != 1) {
			return;
		}
		lastTouchY = e.touches[0].clientY;
		// maybePreventPullToRefresh = (preventPullToRefreshCheckbox.checked) && (window.pageYOffset == 0) ;
		maybePreventPullToRefresh = (window.pageYOffset === 0);
		//document.getElementById('txtLog').textContent = "maybePreventPullToRefresh: " + maybePreventPullToRefresh;
	};

	// To suppress pull-to-refresh it is sufficient to preventDefault the
	// first overscrolling touchmove.

	var touchmoveHandler = function(e) {
		var touchY = e.touches[0].clientY;
		var touchYDelta = touchY - lastTouchY;
		lastTouchY = touchY;

		if (maybePreventPullToRefresh) {
			maybePreventPullToRefresh = false;
			//if (touchYDelta > 0) {
			e.preventDefault();
			//document.getElementById('txtLog').textContent = "TouchY: " + touchYDelta;
			// console.log("pull-to-refresh event detected") ;
			return;
			//}
		}

		// if (preventScrollCheckbox.checked) {
		//     e.preventDefault() ;
		//     return ;
		// }

		// if (preventOverscrollGlowCheckbox.checked) {
		//     if (window.pageYOffset == 0 && touchYDelta > 0) {
		//         e.preventDefault() ;
		//         return ;
		//     }
		// }
	};

	document.addEventListener('touchstart', touchstartHandler, false);
	document.addEventListener('touchmove', touchmoveHandler, false);
});