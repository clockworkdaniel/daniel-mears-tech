var fl = {};

function getScript(source, callback) {
	var script = document.createElement('script');
	var prior = document.getElementsByTagName('script')[0];
	script.async = 1;

	script.onload = script.onreadystatechange = function (_, isAbort) {
		if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
			script.onload = script.onreadystatechange = null;
			script = undefined;

			if (!isAbort) { if (callback) callback(); }
		}
	};

	script.src = source;
	prior.parentNode.insertBefore(script, prior);
}

getScript("https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js", function() {
	WebFont.load({
		google: {
			families: ['VT323']
		}
	});
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

window.fbAsyncInit = function () {
	FB.init({ appId: '166754430066099', status: true, cookie: true, xfbml: true });
};

(function (d, debug) {

	var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];

	if (d.getElementById(id)) { return; }

	js = d.createElement('script');
	js.id = id;
	js.async = true;
	js.src = "//connect.facebook.net/en_US/all" + (debug ? "/debug" : "") + ".js";
	ref.parentNode.insertBefore(js, ref);

})(document, /*debug*/ false);

function postToFeed(title, desc, url, image) {
	var obj = { method: 'feed', link: url, picture: image, name: title, description: desc };

	function callback() { }
	FB.ui(obj, callback);
}

function flamingoFacebookShare() {
	var title = 'I Scored ' + points + ' on Flamingo Go!';
	postToFeed(title, 'It’s the hottest game on The Island… Get ready… Keep that flamingo steady and go!', 'https://www.riverisland.com/flamingo-game', 'https://riverisland.scene7.com/is/image/RiverIsland/c20170517-game-facebook_DNT?fmt=jpeg&qlt=100&scl=1');
}

function loadImages(callback) {

	var images = {
		cloud0: 'https://riverisland.scene7.com/is/image/RiverIsland/c20170517-game-cloud1_DNT?$PNG%20Alpha%20Transparency$&scl=1',
		cloud1: 'https://riverisland.scene7.com/is/image/RiverIsland/c20170517-game-cloud2_DNT?$PNG%20Alpha%20Transparency$&scl=1',
		cloud2: 'https://riverisland.scene7.com/is/image/RiverIsland/c20170517-game-cloud3_DNT?$PNG%20Alpha%20Transparency$&scl=1',
		background: 'https://riverisland.scene7.com/is/image/RiverIsland/flamingo-Background4?$PNG%20Alpha%20Transparency$&scl=1',
		standing: 'https://riverisland.scene7.com/is/image/RiverIsland/standing?$PNG%20Alpha%20Transparency$&scl=1',
		jumping: 'https://riverisland.scene7.com/is/image/RiverIsland/jumping?$PNG%20Alpha%20Transparency$&scl=1',
		running: 'https://riverisland.scene7.com/is/image/RiverIsland/Running-Animation-18?$PNG%20Alpha%20Transparency$&scl=1',
		dead: 'https://riverisland.scene7.com/is/image/RiverIsland/Flamingo-Dead?$PNG%20Alpha%20Transparency$&scl=1',
		crab: 'https://riverisland.scene7.com/is/image/RiverIsland/crab-sprite?$PNG%20Alpha%20Transparency$&scl=1',
		seagull: 'https://riverisland.scene7.com/is/image/RiverIsland/seagull-sprite?$PNG%20Alpha%20Transparency$&scl=1',
		palm0: 'https://riverisland.scene7.com/is/image/RiverIsland/palm_1?$PNG%20Alpha%20Transparency$&scl=1',
		palm1: 'https://riverisland.scene7.com/is/image/RiverIsland/palm_2?$PNG%20Alpha%20Transparency$&scl=1',
		palm2: 'https://riverisland.scene7.com/is/image/RiverIsland/palm_3?$PNG%20Alpha%20Transparency$&scl=1',
		gold: 'https://riverisland.scene7.com/is/image/RiverIsland/c20170517-game-level-gold_DNT?$PNG%20Alpha%20Transparency$&scl=1',
		silver: 'https://riverisland.scene7.com/is/image/RiverIsland/c20170517-game-level-silver_DNT?$PNG%20Alpha%20Transparency$&sl=1',
		bronze: 'https://riverisland.scene7.com/is/image/RiverIsland/c20170517-game-level-bronze_DNT?$PNG%20Alpha%20Transparency$&scl=1',
		instructionsTouch: 'https://riverisland.scene7.com/is/image/RiverIsland/c20170517-game-instructions-mobile_DNT?$PNG%20Alpha%20Transparency$&scl=1',
		instructionsDesktop: 'https://riverisland.scene7.com/is/image/RiverIsland/c20170517-game-instructions-desktop_DNT?$PNG%20Alpha%20Transparency$&scl=1',
		title: 'https://riverisland.scene7.com/is/image/RiverIsland/c20170517-game-title_DNT?$PNG%20Alpha%20Transparency$&scl=1',
		loserEnd: 'https://riverisland.scene7.com/is/image/RiverIsland/c20170517-game-endscreen-bronze2_DNT?$PNG%20Alpha%20Transparency$&scl=1',
		bronzeSilverEnd: 'https://riverisland.scene7.com/is/image/RiverIsland/c20170517-game-endscreen-gold2_DNT?$PNG%20Alpha%20Transparency$&scl=1',
		goldEnd: 'https://riverisland.scene7.com/is/image/RiverIsland/c20170517-game-endscreen-silver2_DNT?$PNG%20Alpha%20Transparency$&scl=1'
	};

	var imagesLoaded = 0;
	var imagesLength = Object.keys(images).length;
	var storedSrc;

	for (var img in images) {
		if (images.hasOwnProperty(img)) {
			storedSrc = images[img];
			//convert value to image object
			images[img] = new Image();
			//assign src to image
			images[img].src = storedSrc;
			//
			images[img].onload = function () {
				imagesLoaded++;
				if (imagesLoaded === imagesLength) {
					callback();
				}
			};
		}
	}
    
	fl.images = images;
}

//context

var canvas = document.getElementById("flamingo-canvas");
var ctx = canvas.getContext("2d");

var canvasWidth = canvas.width,
	canvasHeight = canvas.height;

var controlArea = document.getElementById("control-area");

var shareButton = document.getElementById("share-button");

//key listeners

var keyPressed = {}; //constantly updated keyPressed object

var onKeyUp = function onKeyUp(e) {

	keyPressed[e.keyCode] = e.type == 'keydown';
};

var onKeyDown = function onKeyDown(e) {

	keyPressed[e.keyCode] = e.type == 'keydown';
	if (e.keyCode === 38 || e.keyCode === 40 || e.keyCode === 32) {
		e.preventDefault();
	}
};

document.body.addEventListener('keydown', onKeyDown, false);
document.body.addEventListener('keyup', onKeyUp, false);

var fTouch = {
	touchDown: false,
	touchX: null,
	touchY: null,
	prevX: null,
	prevY: null,
	startX: 0,
	startY: 0,
	endX: 1000,
	endY: 1000,
	difX: 0,
	difY: 0
};

function fTouchStart(e) {

	if (fl.started) {
		e.preventDefault();
	}

	var touchEvent = e.changedTouches[0];

	fTouch.touchDown = true;
	fTouch.startX = fTouch.touchX = fTouch.prevX = touchEvent.pageX;
	fTouch.startY = fTouch.touchY = fTouch.prevY = touchEvent.pageY;
}

function fTouchMove(e) {

	if (fl.started) {
		e.preventDefault();
	}

	var touchEvent = e.changedTouches[0];

	fTouch.touchX = touchEvent.pageX;
	fTouch.touchY = touchEvent.pageY;
}

function fTouchEnd(e) {

	if (fl.started) {
		e.preventDefault();
	}

	var touchEvent = e.changedTouches[0];

	fTouch.endX = touchEvent.pageX;
	fTouch.endY = touchEvent.pageY;

	fTouch.touchDown = false;
}

controlArea.addEventListener('touchstart', fTouchStart, false);
controlArea.addEventListener('touchmove', fTouchMove, false);
controlArea.addEventListener('touchend', fTouchEnd, false);

//touch difs are used in control-flamingo.js
function updateTouchDif() {

	fTouch.difX = fTouch.touchX - fTouch.prevX;
	fTouch.difY = fTouch.touchY - fTouch.prevY;
	//reset
	fTouch.prevX = fTouch.touchX;
	fTouch.prevY = fTouch.touchY;
}


fl.firstTime = true;
//temporary
fl.touch = false;

function init() {

	//GENERAL INITIALISATIONS

	fl.started = false;
	//f dimensions, this should be responsive
	fl.fHeight = 72;
	fl.fWidth = 36;

	fl.fMidHeight = fl.fHeight / 2;
	fl.fMidWidth = fl.fWidth / 2;

	fl.x = canvasWidth * 0.23;
	fl.y = canvasHeight * 0.5;
	fl.floor = fl.y;

	fl.dx = 0; //move amount
	fl.dy = 0; //jump amount

	fl.dead = false;

	//var relating to f ballance

	fl.currentAngle = 90;
	fl.angleChange = 0;
	fl.tiltAmount = 0;
	fl.keyTilt = 4;
	fl.rotateAmount = 0;
	fl.fTilt = 0;

	fl.maxSpeed = 4.3;
	fl.minSpeed = 0.9;

	//var relating to jump

	fl.onFloor = true;
	fl.touchJump = false;
	fl.touchJumpCertainty = 0;
	fl.slowAndFall = false;
	fl.jumpApex = 0;

	fl.gracePeriod = true;

	//collision point objects

	fl.colPoints = {

		topLeft: {
			x: fl.x,
			y: fl.y - fl.fHeight
		},
		midLeft: {
			x: fl.x - fl.fMidWidth,
			y: fl.y - fl.fMidHeight
		},
		botLeft: {
			x: fl.x,
			y: fl.y
		},
		topRight: {
			x: fl.fWidth + fl.x - fl.fMidWidth,
			y: fl.y - fl.fHeight
		},
		midRight: {
			x: fl.fWidth + fl.x - fl.fMidWidth,
			y: fl.y - fl.fMidHeight
		},
		botRight: {
			x: fl.fWidth + fl.x - fl.fMidWidth,
			y: fl.y - fl.fMidHeight * 0.3
		}
	};
	fl.adjColPoints = {
		topLeft: {
			x: fl.x,
			y: fl.y - fl.fHeight
		},
		midLeft: {
			x: fl.x - fl.fMidWidth,
			y: fl.y - fl.fMidHeight
		},
		botLeft: {
			x: fl.x,
			y: fl.y
		},
		topRight: {
			x: fl.fWidth + fl.x - fl.fMidWidth,
			y: fl.y - fl.fHeight
		},
		midRight: {
			x: fl.fWidth + fl.x - fl.fMidWidth,
			y: fl.y - fl.fMidHeight
		},
		botRight: {
			x: fl.fWidth + fl.x - fl.fMidWidth,
			y: fl.y - fl.fMidHeight * 0.3
		}
	};

	if (fl.firstTime) {
		fl.movingElements = [];
		fl.lastOfElementType = {};
		fl.firstTime = false;
	} else {
		//remove collidable objects
		for (var i = 0; i < fl.movingElements.length; i++) {
			if (fl.movingElements[i].collidable) {
				fl.movingElements.splice(i, 1);
				i--;
			}
		}
	}
}

function start() {

	init();

	fl.startTime = Date.now();
	fl.started = true;
	fl.medal = undefined;
	fl.xMoved = 0;
	fl.points = 0;
	fl.difficultyModifier = 1;
}

init();

function detectStart() {
	if (!fl.started) {
		if (!fTouch.touchDown) {
			if ((Math.abs(fTouch.endX - fTouch.startX) < 6) && (Math.abs(fTouch.endY - fTouch.startY) < 6)) {
				start();
			}
		}
		if (keyPressed[39] || keyPressed[38] || keyPressed[37] || keyPressed[13] || keyPressed[32]) {
			start();
		}
	}
}

//both controls always work, but corresponding instructions are shown according to this
function detectTouch() {
	if (window.innerHeight > window.innerWidth) {
		fl.touch = true;
	}

	window.addEventListener('touchstart', function onFirstTouch() {

		fl.touch = true;
		// we only need to know once that a human touched the screen, so we can stop listening now
		window.removeEventListener('touchstart', onFirstTouch, false);
	}, false);

}


fl.blueprints = {
	cloud_close: function cloud_close() {
		return {
			type: "cloud_close",
			image: fl.images['cloud' + random(3, true)],
			scale: 2,
			y: 0.125,
			pVal: 0.17,
			spaceFrom: {
				cloud_close: { type: 'cloud_close', amount: 0.3 + random(1.2, false) }
			}
		};
	},
	cloud_medium: function cloud_medium() {
		return {
			type: "cloud_medium",
			image: fl.images['cloud' + random(3, true)],
			scale: 1.1,
			y: 0.25,
			pVal: 0.1,
			spaceFrom: {
				cloud_medium: { type: 'cloud_medium', amount: 0.2 + random(0.4, false) }
			}
		};
	},
	cloud_far: function cloud_far() {
		return {
			type: "cloud_far",
			image: fl.images['cloud' + random(3, true)],
			scale: 0.6,
			y: 0.32,
			pVal: 0.07,
			spaceFrom: {
				cloud_far: { type: 'cloud_far', amount: 0.1 + random(0.3, false) }
			}
		};
	},
	palm: function palm() {
		return {
			type: "palm",
			image: fl.images['palm' + random(3, true)],
			y: 0.26,
			pVal: 0.7,
			spaceFrom: {
				palm: { type: 'palm', amount: 0.05 + random(0.7, false) }
			}
		};
	},
	crab: function crab(type) {
		return {
			type: "obstacle_low",
			collidable: true,
			image: fl.images.crab,
			frames: 2,
			ticksPerFrame: 11,
			y: 0.47,
			spaceFrom: {
				obstacle_low: { type: 'obstacle_low', amount: (1.5 + random(0.7, false, true)) * fl.difficultyModifier },
				obstacle_high: { type: 'obstacle_high', amount: (0.7 + random(1, false)) * fl.difficultyModifier }
			},
			scale: 1.2,
			specific: type
		};
	},
	seagull: function seagull(type) {
		return {
			type: "obstacle_high",
			collidable: true,
			image: fl.images.seagull,
			frames: 2,
			ticksPerFrame: 17,
			y: 0.27,
			dx: -0.5,
			spaceFrom: {
				obstacle_low: { type: 'obstacle_low', amount: (0.6 + random(1, false)) * fl.difficultyModifier },
				obstacle_high: { type: 'obstacle_high', amount: (0.2 + random(1.2, false)) * fl.difficultyModifier }
			},
			specific: type
		};
	}
};

// function parralax(modifier) {
// 	return dx * modifier;
// }

//floor and weighted are booleans
function random(base, floor, weighted) {
	var randomNumber;
	if (!weighted) {
		if (floor) {
			randomNumber = Math.floor(Math.random() * base);
		} else {
			randomNumber = Math.random() * base;
		}
	} else {
		//simple weighting, byas towards 50%
		base /= 2;

		if (floor) {
			randomNumber = Math.floor(Math.random() * base + Math.random() * base);
		} else {
			randomNumber = Math.random() * base + Math.random() * base;
		}
	}
	return randomNumber;
}

//only run element gen once and then keep testing that same one untill it works

function elementGen(options) {
	//only generate if its generation abides spacing rules
	if (options.spaceFrom) {
		//if spacing from a specific element
		if (options.specific) {

			if (fl.lastOfElementType[options.specific] && fl.lastOfElementType[options.specific].x + fl.lastOfElementType[options.specific].width + options.spaceFrom[options.specific].amount * canvasWidth > canvasWidth) {
				//does not abide by spacing rules
				return false;
			}
		}
		//else spacing from all elements in spaceFrom object
		else {
			for (var sfElement in options.spaceFrom) {

				sfElement = options.spaceFrom[sfElement];

				if (fl.lastOfElementType[sfElement.type] && fl.lastOfElementType[sfElement.type].x + fl.lastOfElementType[sfElement.type].width + sfElement.amount * canvasWidth > canvasWidth) {
					//does not abide by spacing rules
					return false;
				}
			}
		}
	}

	var element = {};

	element.type = options.type ? options.type : undefined;
	element.collidable = options.collidable ? options.collidable : false;
	element.image = options.image ? options.image : undefined;
	element.fill = options.fill ? options.fill : undefined;
	element.scale = options.scale ? options.scale * 0.5 : 0.5;

	element.x = options.x ? options.x * canvasWidth : canvasWidth;
	element.y = options.y ? options.y * canvasHeight : 0;
	element.pVal = options.pVal ? options.pVal : 1;

	element.dx = options.dx ? options.dx : 0;

	if (options.frames) {
		element.frames = options.frames;
		element.frameIndex = 0;
		element.ticksPerFrame = options.ticksPerFrame;
		element.tickCount = 0;
		element.subWidth = element.image.width / element.frames;
		element.subHeight = element.image.height;
		element.adjustedSubWidth = element.subWidth * element.scale;
	}

	element.width = options.frames ? element.subWidth * element.scale : element.image.width * element.scale;
	element.height = element.image.height * element.scale;

	element.hasCollided = element.collidable ? false : undefined;

	fl.movingElements.unshift(element);

	return true;
}

//time, distance, death
fl.startTime;
fl.currentTime;
fl.timer;
fl.xMoved = 0;
fl.points;
fl.medal;
fl.difficultyModifier = 1;

function measurePoints() {
	fl.currentTime = Date.now();
	fl.timer = fl.currentTime - fl.startTime;
	fl.points = ((fl.timer + fl.xMoved) / 100).toFixed(0);

	if (fl.points > 600) {
		if (fl.medal != "gold") console.log("gold");
		fl.medal = "gold";
		fl.difficultyModifier = 0.6;
	} else if (fl.points > 400) {
		if (fl.medal != "silver") console.log("silver");
		fl.medal = "silver";
		fl.difficultyModifier = 0.7;
	} else if (fl.points > 200) {
		if (fl.medal != "bronze") console.log("bronze");
		fl.medal = "bronze";
		fl.difficultyModifier = 0.9;
	}
}

function drawPoints() {

	fl.pointsX = fl.dead ? canvasWidth * 0.32 : canvasWidth - 20;
	fl.pointsY = fl.dead ? canvasHeight * 0.615 : 40;
	fl.renderPoints = fl.dead ? fl.points : fl.points + ' points';



	ctx.save();
	ctx.font = '36px VT323';
	ctx.fillStyle = "purple";
	ctx.textAlign = fl.dead ? "center" : "right";
	ctx.fillText(fl.renderPoints, fl.pointsX, fl.pointsY);
	ctx.restore();

	if (fl.medal) {

		fl.medalX = fl.dead ? (canvasWidth * 0.72) - fl.images[fl.medal].width / 4 : 10;
		fl.medalY = fl.dead ? canvasHeight * 0.565 : 12;

		ctx.save();
		ctx.drawImage(fl.images[fl.medal], fl.medalX, fl.medalY, fl.images[fl.medal].width / 2, fl.images[fl.medal].height / 2);
		ctx.restore();
	}

}

//curently draws UI but also calculates UI related things
function drawUI() {

	if (!fl.touch) {
		fl.titleGap = canvasHeight * 0.17;
	} else {
		fl.titleGap = 0;
	}


	if (fl.started) {
		drawPoints();
	} else if (!fl.dead) {
		if (fl.touch) {

			ctx.drawImage(fl.images.instructionsTouch,
				0.07 * canvasWidth,											//x
				0.05 * canvasHeight + fl.titleGap,											//y
				fl.images.instructionsTouch.width * 0.5,		//adjsusted width
				fl.images.instructionsTouch.height * 0.5);

		} else {

			ctx.drawImage(fl.images.instructionsDesktop,
				0.07 * canvasWidth,											//x
				0.05 * canvasHeight + fl.titleGap,											//y
				fl.images.instructionsTouch.width * 0.5,		//adjsusted width
				fl.images.instructionsTouch.height * 0.5);

			ctx.drawImage(fl.images.title,
				0.125 * canvasWidth,											//x
				0.025 * canvasHeight,											//y
				fl.images.title.width * 0.5,		//adjsusted width
				fl.images.title.height * 0.5);

		}
	}

	if (fl.dead) {
		if (fl.medal === "bronze" || fl.medal === "silver") {
			ctx.drawImage(fl.images.bronzeSilverEnd,
				0.07 * canvasWidth,											//x
				0.05 * canvasHeight,											//y
				fl.images.bronzeSilverEnd.width * 0.5,		//adjsusted width
				fl.images.bronzeSilverEnd.height * 0.5);
			drawPoints();
		} else if (fl.medal === "gold") {
			ctx.drawImage(fl.images.goldEnd,
				0.07 * canvasWidth,											//x
				0.05 * canvasHeight,											//y
				fl.images.goldEnd.width * 0.5,		//adjsusted width
				fl.images.goldEnd.height * 0.5);
			drawPoints();
		} else {
			ctx.drawImage(fl.images.loserEnd,
				0.07 * canvasWidth,											//x
				0.05 * canvasHeight,											//y
				fl.images.loserEnd.width * 0.5,		//adjsusted width
				fl.images.loserEnd.height * 0.5);
			drawPoints();
		}
	}
}

//accelerate on player input
function dictateSpeed() {
	//if space is pressed and speed is less than max 
	if (fl.started) {
		if (fl.dx > fl.maxSpeed - 0.05 && fl.dx < fl.maxSpeed + 0.05) {
			//console.log('at max speed');
		} else if (fl.dx < fl.maxSpeed) {
			fl.dx += 0.008;
		} else if (fl.dx > fl.maxSpeed) {
			fl.dx = fl.dx > fl.minSpeed ? fl.dx - 0.02 : fl.minSpeed; //deceleration is slower than acceleration
		}
		fl.xMoved += fl.dx / 150;
	}
}

//semi-randomly tip flamingo multiplied speed
function tipFlamingo() {

	fl.angleChange = 0.29 * fl.dx;
	//if flamingo is vaguely upright & is moving
	if (fl.currentAngle > 80 && fl.currentAngle < 100 || fl.dx < 0.1) {

		fl.angleChange = Math.random() < 0.5 ? -fl.angleChange : fl.angleChange; //randomise tipping direction
		fl.angleChange = fl.angleChange * 0.4;
		fl.maxSpeed = 5;
	} else {

		fl.maxSpeed = 4.3;
		//fall fast if severley off-balance & on the floor
		if (fl.currentAngle <= 55 && fl.onFloor) {
			fl.angleChange = -fl.angleChange;
		} else if (fl.currentAngle >= 125 && fl.onFloor) {
			fl.angleChange = fl.angleChange;
		}
		//fall slowly in the direction flamingo is already tipping
		else if (fl.currentAngle <= 80) {
			fl.angleChange = -(fl.angleChange * 0.7);
		} else if (fl.currentAngle >= 97) {
			fl.angleChange = fl.angleChange * 0.7;
		}
	}
}

//compile angle ready for context translation
function processAngle() {

	if (fl.onFloor) {
		fl.currentAngle += fl.angleChange;
	}

	if (fl.currentAngle > 375) {
		fl.currentAngle -= 360;
	} else if (fl.currentAngle < -195) {
		fl.currentAngle += 360;
	}
	//impelement angle-based death
	if ((fl.currentAngle < 12 || fl.currentAngle > 178) && fl.onFloor) {
		death();
	}
	//convert to radians
	fl.rotateAmount = Math.PI / 180 * (fl.currentAngle - 90);

	if (fl.dead) {
		fl.rotateAmount = 0;
	}
}

//position and paint flamingo
function drawFlamingo() {
	ctx.save();
	ctx.beginPath();
	ctx.translate(fl.x, fl.y);
	ctx.rotate(fl.rotateAmount);
	if (fl.onFloor) {
		if (fl.dx > 0) {
			fl.sprites.fRunningSprite.update();
			fl.sprites.fRunningSprite.render();
		} else {
			if (!fl.dead) {
				fl.sprites.fStandingSprite.render();
			} else {
				fl.sprites.fDeadSprite.render();
			}
		}
	} else {
		fl.sprites.fJumpingSprite.render();
	}

	ctx.closePath();
	ctx.restore();

	//if you want to render the collision points...

	// for (var key in adjColPoints) {
	// 	//check that property is not from prototype
	// 	if (adjColPoints.hasOwnProperty(key)) {
	// 		ctx.save();
	// 		ctx.beginPath();
	// 		ctx.translate(adjColPoints[key].x , adjColPoints[key].y);
	// 		ctx.rect(-1, -1, 2, 2);
	// 		ctx.fillStyle = "green";
	// 		ctx.fill();
	// 		ctx.closePath();
	// 		ctx.restore();

	// 	}
	// }
}

function keepBalance() {
	//touch control
	if (fTouch.touchDown && !fl.touchJumpCertainty) {
		//switch abitrary number to tilt modifier variable?
		fl.fTilt = fTouch.difX * 0.6;
		fl.currentAngle += fl.fTilt;
		fTouch.prevX = fTouch.touchX;
	}
	//key controls
	if (keyPressed[37] || keyPressed[39]) {
		//if left is pressed and balance modifier is less than max
		if (keyPressed[37]) {
			fl.tiltAmount = -fl.keyTilt; //accelerate tilting
		}
		//right
		else if (keyPressed[39] && fl.tiltAmount <= fl.keyTilt) {
			fl.tiltAmount = fl.keyTilt;
		}
		fl.currentAngle += fl.tiltAmount; //alter current angle
	}
}

function jump() {
	//interpret touch movement as a jump
	if (fTouch.touchDown) {
		if (fTouch.difY < -1 && Math.abs(fTouch.difX) < -fTouch.difY) {
			fl.touchJumpCertainty++;
			//3 successive matches means its probably a swipe up 
			if (fl.touchJumpCertainty === 3) {
				fl.touchJump = true;
				fl.touchJumpCertainty = 0; //reset
			}
		} else {
			fl.touchJumpCertainty = 0;
		}
	}

	//if on floor and up is pressed/touch jump is true
	if (fl.onFloor && (keyPressed[38] || fl.touchJump)) {
		fl.dy -= 9.6;
		fl.onFloor = false;
		fl.slowAndFall = true;
	}
	//subsequently...
	else if (fl.slowAndFall) {
		fl.touchJump = false;
		//progressivly slow flamingo prior to apex, slowly float down afterwards
		fl.dy = fl.dy < fl.jumpApex ? fl.dy + 0.432 : fl.dy + 0.056;
		fl.onFloor = fl.y >= fl.floor ? true : false; //check whether the jump has landed
		//reset when the jump lands
		if (fl.onFloor) {
			fl.slowAndFall = false;
			fl.dy = 0;
		}
	}
	//alter vertical position of flamingo
	fl.y += fl.dy;
}

fl.gracePeriod = true;
fl.nextObstacle;
fl.prevObstacle;

//this still needs fixing i think

function generateObstacles() {

	if (!fl.gracePeriod) {
		//if next obstacle is known,generate that
		if (fl.nextObstacle) {
			//next obstacle is switched to undefined if element is generated
			if (elementGen(fl.nextObstacle)) {
				fl.prevObstacle = fl.nextObstacle.type;
				fl.nextObstacle = undefined;
			}
		}
		//if next obstacle is not known, assign what the next obstacle should be
		else {
			var randomNumber = random(3, true);
			if (randomNumber) {
				fl.nextObstacle = fl.blueprints.crab(fl.prevObstacle);
			} else {
				fl.nextObstacle = fl.blueprints.seagull(fl.prevObstacle);
			}
		}
	} else if (fl.xMoved > 10) {
		fl.gracePeriod = false;
	}
}

fl.nextElements = {};

function startingBackground() {
	//far clouds
	elementGen({ type: "cloud_far", collidable: false, image: fl.images.cloud1, scale: 0.6, x: 0.02, y: 0.32, pVal: 0.07 });
	elementGen({ type: "cloud_far", collidable: false, image: fl.images.cloud0, scale: 0.6, x: 0.66, y: 0.32, pVal: 0.07 });
	//medium clouds
	elementGen({ type: "cloud_medium", collidable: false, image: fl.images.cloud0, scale: 1.1, x: 0.28, y: 0.25, pVal: 0.1 });
	elementGen({ type: "cloud_medium", collidable: false, image: fl.images.cloud2, scale: 1.1, x: 0.78, y: 0.25, pVal: 0.1 });
	//close clouds
	elementGen({ type: "cloud_close", collidable: false, image: fl.images.cloud2, scale: 2, x: -0.15, y: 0.125, pVal: 0.17 });
	//palms
	elementGen({ type: "palm", collidable: false, image: fl.images.palm2, scale: 1, x: 0.17, y: 0.26, pVal: 0.7 });
	//sand texture

}

function generateBackground() {
	//generate clouds

	for (var element in fl.blueprints) {
		if (fl.nextElements[element]) {
			if (!fl.nextElements[element].collidable) {
				if (elementGen(fl.nextElements[element])) {
					fl.nextElements[element] = undefined;
				}
			}
		} else {
			fl.nextElements[element] = fl.blueprints[element]();
		}
	}
}

function drawBackground() {
	ctx.drawImage(fl.images.background, 0, 0, canvasWidth, canvasHeight);
}

//move elements, detect collisions, update last of type
function moveElements() {

	fl.lastOfElementType = {};
	//note: new elements are added to front of array in elementGen()
	for (var i = 0; i < fl.movingElements.length; i++) {

		var l = fl.movingElements[i];

		//update animation
		if (l.frames) {
			l.tickCount += 1;

			if (l.tickCount > l.ticksPerFrame) {
				l.tickCount = 0;
				// If the current frame index is in range
				if (l.frameIndex < l.frames - 1) {
					// Go to the next frame
					l.frameIndex += 1;
				} else {
					l.frameIndex = 0;
				}
			}
		}

		//move element
		l.x += -(fl.dx * l.pVal) + l.dx;
		//if collidable detect collisions
		if (l.collidable) {
			detectCollision(l);
		}
		//assigns most recent element of type to that array
		if (!fl.lastOfElementType[l.type]) {
			//recordedTypes[l.type] = l.x;
			fl.lastOfElementType[l.type] = l;
		}
		//delete all other elements which are no longer on screen 
		else if (l.x < -l.width) {
			fl.movingElements.splice(i, 1);
			i--;
		}
	}
}

//draw moving elements
function drawMovingElements() {

	var drawParams;

	fl.movingElementsSorted = fl.movingElements.slice().sort(function (a, b) {
		return a.pVal - b.pVal;
	});

	for (var i = 0; i < fl.movingElementsSorted.length; i++) {

		var l = fl.movingElementsSorted[i];

		if (l.frames) {
			drawParams = [l.image, l.subWidth * l.frameIndex, //sub x
				0, //sub y
				l.subWidth, //sub width
				l.subHeight, //sub height
				l.x, //x
				l.y, //y
				l.adjustedSubWidth, //adjsusted width
				l.height];
		} else {
			drawParams = [l.image, l.x, l.y, l.width, l.height];
		}

		ctx.drawImage.apply(ctx, _toConsumableArray(drawParams));
	}
}

fl.sprites = {};

function animatedSprite(options) {

	var that = {},
		frameIndex = 0,
		tickCount = 0,
		ticksPerFrame = options.ticksPerFrame || 0,
		numberOfFrames = options.numberOfFrames || 1,
		image = options.image;

	that.y = options.y || 0;
	that.desiredWidth = options.desiredWidth;
	that.x = -(that.desiredWidth / 2);

	that.width = image.width;
	that.width = that.width / numberOfFrames; //update width
	that.height = image.height;

	that.scale = that.desiredWidth / that.width;

	that.render = function () {

		ctx.drawImage(image, frameIndex * that.width, //sub x
			0, //sub y
			that.width, //sub width
			that.height, //sub height
			that.x, //x
			that.y, //y
			that.width * that.scale, //adjsusted width
			that.height * that.scale); //adjsusted height
	};

	that.loop = options.loop;

	that.update = function () {

		tickCount += 1;

		if (tickCount > ticksPerFrame) {
			tickCount = 0;
			// If the current frame index is in range
			if (frameIndex < numberOfFrames - 1) {
				// Go to the next frame
				frameIndex += 1;
			} else {
				frameIndex = 0;
			}
		}
	};

	return that;
}

function staticSprite(options) {
	var that = {},
		image = options.image;

	that.y = options.y || 0;
	that.desiredWidth = options.desiredWidth;
	that.x = -(that.desiredWidth / 2);

	that.width = image.width;
	that.height = image.height;

	that.scale = that.desiredWidth / that.width;

	that.render = function () {

		ctx.drawImage(image, that.x, //x
			that.y, //y
			that.width * that.scale, //adjsusted width
			that.height * that.scale); //adjsusted height
	};

	return that;
}

function declareSprites() {
	fl.sprites.fJumpingSprite = staticSprite({
		image: fl.images.jumping,
		desiredWidth: 70,
		y: -(fl.fHeight + 13)
	});

	fl.sprites.fStandingSprite = staticSprite({
		image: fl.images.standing,
		desiredWidth: 70,
		y: -(fl.fHeight + 13)
	});

	fl.sprites.fRunningSprite = animatedSprite({
		y: -(fl.fHeight + 13),
		desiredWidth: 70,
		image: fl.images.running,
		numberOfFrames: 18,
		ticksPerFrame: 6
	});

	fl.sprites.fDeadSprite = staticSprite({
		y: -(fl.fHeight - 20),
		desiredWidth: 70,
		image: fl.images.dead
	});
}

//should update this
fl.collisionZone = canvasWidth / 2;

function calcNewCollisionPoints() {
	for (var key in fl.adjColPoints) {
		//check that property is not from prototype
		if (fl.adjColPoints.hasOwnProperty(key)) {

			var cos = Math.cos(fl.rotateAmount);
			var sin = Math.sin(fl.rotateAmount);

			fl.colPoints[key].y = fl.colPoints[key].y + fl.dy;

			fl.adjColPoints[key].x = cos * (fl.colPoints[key].x - fl.x) - sin * (fl.colPoints[key].y - fl.y) + fl.x;
			fl.adjColPoints[key].y = cos * (fl.colPoints[key].y - fl.y) + sin * (fl.colPoints[key].x - fl.x) + fl.y;
		}
	}
}

function detectCollision(element) {

	if (element.x < fl.collisionZone) {

		for (var point in fl.colPoints) {
			if (fl.adjColPoints[point].x > element.x && fl.adjColPoints[point].x < element.x + element.width && fl.adjColPoints[point].y > element.y && fl.adjColPoints[point].y < element.y + element.height) {
				element.hasCollided = true;
				element.fill = 'red';
				death();
			}
		}
	}
}

fl.dead = false;

function death() {
	fl.dead = true;
	//freeze movement
	fl.dx = 0;
	fl.dy = 0;

	if (fl.touch) {
		shareButton.addEventListener("touchend", function (event) {
			event.stopPropagation();
			flamingoFacebookShare();
		}, false);
	} else {
		shareButton.addEventListener("click", function (event) {
			event.stopPropagation();
			flamingoFacebookShare();
		}, false);
	}

	setTimeout(function () {
		fl.started = false;
	}, 700);
}

//cross-browser compatibility

(function () {
	var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
	window.requestAnimationFrame = requestAnimationFrame;
})();

//wait for images to be loaded
loadImages(function () {

	declareSprites();
	//starting background
	startingBackground();
	detectTouch();
	setInterval(tipFlamingo, 50);

	//render
	function draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		if (!fl.dead) {
			updateTouchDif();
			dictateSpeed();
			keepBalance();
			if (fl.xMoved) {
				generateBackground();
				generateObstacles();
				measurePoints();
				moveElements();
				jump();
				processAngle();
				calcNewCollisionPoints();
			}
		} else {
			//deathAnimation();
		}
		detectStart();
		drawBackground();
		drawMovingElements();
		drawFlamingo();
		drawUI();
	}

	(function gameLoop() {
		draw();
		requestAnimationFrame(gameLoop);
	})();
});