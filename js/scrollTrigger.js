var ST = {};

window.onload = function () {

	if (DM.viewportWidth > 700) {
		ST.headerHeight = 130;
	} else {
		ST.headerHeight = 80;
	}

	ST.updateScroll = function(){

		ST.scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
		ST.currentVBottom = ST.scrollTop + DM.viewportHeight;
		ST.currentVTop = ST.scrollTop + ST.headerHeight;

	};

	ST.updateScroll();

	ST.setElements = function(){

		var elements = document.querySelectorAll('.trigger-on-scroll');

		ST.elementArray = [];

		elements.forEach(function (currentValue) {
			ST.elementArray.push({
				element: currentValue,
				top: null,
				height: null,
				lineWithinEl: (typeof currentValue.dataset.triggerPoint === "undefined") ? 1 : parseFloat(currentValue.dataset.triggerPoint),
				triggerTop: null,
				triggerBottom: null,
				isOneShot: (typeof currentValue.dataset.oneShot === "undefined") ? false : true
			});
		});
	};

	ST.setElements();

	ST.setLines = function() {

		for (var i = 0; i < ST.elementArray.length; i++) {

			var thisObj = ST.elementArray[i];
			var thisElement = thisObj.element;

			var bounds = thisElement.getBoundingClientRect();

			thisObj.height = bounds.height;
			thisObj.top = bounds.top + ST.scrollTop;
			thisObj.triggerTop = thisObj.top + (thisObj.height * thisObj.lineWithinEl);
			thisObj.triggerBottom = thisObj.top + thisObj.height - 30;

		}
	};

	ST.setLines();

	ST.checkFire = function(){
		for (var i = 0; i < ST.elementArray.length; i++) {

			var thisObj = ST.elementArray[i];
			//
			if ((thisObj.triggerTop > ST.currentVTop) &&
					(thisObj.triggerBottom < ST.currentVBottom)) {

				thisObj.element.classList.add('triggered');

			}
			else if (!thisObj.isOneShot) {

				thisObj.element.classList.remove('triggered');

			}
		}
	};

	ST.checkFire();

	ST.pullTrigger = function(){
		ST.updateScroll();
		ST.checkFire();
	};

	ST.refreshLines = function(){
		DM.measureViewport();
		ST.setLines();
		ST.updateScroll();
		ST.checkFire();
	};

	ST.completeRefresh = function () {
		DM.measureViewport();
		ST.setElements();
		ST.setLines();
		ST.updateScroll();
		ST.checkFire();
	};

	//attach listeners
	window.addEventListener("scroll", DM.throttle(ST.pullTrigger, 50));
	window.addEventListener("resize", DM.throttle(ST.refreshLines, 300));

};





    
