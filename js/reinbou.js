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


// Function to disable "pull-to-refresh" effect present in some webviews.
// Especially Crosswalk 12 and above (Chromium 41+) runtimes.

window.addEventListener('load', function() {
    var lastTouchY = 0 ;
    var maybePreventPullToRefresh = false ;

    // Pull-to-refresh will only trigger if the scroll begins when the
    // document's Y offset is zero.

    var touchstartHandler = function(e) {
        if( e.touches.length != 1 ) {             
            return ;
        }
        lastTouchY = e.touches[0].clientY ;
        // maybePreventPullToRefresh = (preventPullToRefreshCheckbox.checked) && (window.pageYOffset == 0) ;
        maybePreventPullToRefresh = (window.pageYOffset === 0) ;
        //document.getElementById('txtLog').textContent = "maybePreventPullToRefresh: " + maybePreventPullToRefresh;
    };

    // To suppress pull-to-refresh it is sufficient to preventDefault the
    // first overscrolling touchmove.

    var touchmoveHandler = function(e) {
        var touchY = e.touches[0].clientY ;
        var touchYDelta = touchY - lastTouchY ;
        lastTouchY = touchY ;

        if (maybePreventPullToRefresh) {
            maybePreventPullToRefresh = false ;
            //if (touchYDelta > 0) {
                e.preventDefault() ;
                //document.getElementById('txtLog').textContent = "TouchY: " + touchYDelta;
                // console.log("pull-to-refresh event detected") ;
                return ;
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

    document.addEventListener('touchstart', touchstartHandler, false) ;
    document.addEventListener('touchmove', touchmoveHandler, false) ;
}) ;