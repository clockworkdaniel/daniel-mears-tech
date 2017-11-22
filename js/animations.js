var headerTitles = "header h1";
var navElements = "header li, .header__nav-trigger-container";
var copyElements = ".content-area p";
var casinoElements = ".casino path, .casino circle, .casino polyline, .casino rect";

//TweenMax.to(".casino", 0, {transformOrigin: "50% 50%"});

if (DM.viewportWidth > 700) {

	//FROM ABOUT TITLE ANIMATION

	var fromAboutText = function(){
		var fromAboutTextTimeline = new TimelineLite();
		fromAboutTextTimeline.add(TweenMax.to(".header__title", 0.7, { fontSize: "4rem", ease: Power1.easeInOut }));
		fromAboutTextTimeline.add(TweenMax.to(".header__subtitle", 0.7, { fontSize: "2.5rem", ease: Power1.easeInOut }), "-=0.4");
		if (DM.viewportWidth < 1201 && DM.viewportWidth > 700) {
			fromAboutTextTimeline.add(TweenMax.fromTo(
				".header__titles", 0.8,
				{ left: "50%", x: "-50%", top: "9.5rem", width: "40rem" },
				{ left: "2%", x: "0%", top: "0.5rem", width: "28rem", ease: Power2.easeInOut }
			), "-=0.7");
		} else {
			fromAboutTextTimeline.add(TweenMax.to(".header__titles", 0.8, { top: "0.5rem", width: "28rem", ease: Power2.easeInOut }), "-=0.7");
		}
		fromAboutTextTimeline.duration(0.9);
	} 

	//TO ABOUT TITLE ANIMATION

	var toAboutText = function(){
		var toAboutTextTimeline = new TimelineLite();
		if (DM.viewportWidth < 1201 && DM.viewportWidth > 700) {
			toAboutTextTimeline.add(
				TweenMax.fromTo(
					".header__titles", 0.8,
					{ left: "2rem", x: 0, top: "0.5rem", width: "28rem" },
					{ left: "50%", x: "-50%", top: "9.5rem", width: "40rem", ease: Power2.easeInOut }
				)
			);
		} else {
			toAboutTextTimeline.add(TweenMax.to(".header__titles", 0.8, { top: "9.5rem", width: "40rem", ease: Power2.easeInOut }));
		}
		toAboutTextTimeline.add(TweenMax.to(".header__subtitle", 0.8, { fontSize: "3rem", ease: Power1.easeInOut }), "-=0.8");
		toAboutTextTimeline.add(TweenMax.to(".header__title", 0.7, { fontSize: "5rem", ease: Power1.easeInOut }), "-=0.3");
		toAboutTextTimeline.duration(0.9);

	} 

	//TO ABOUT ANIMATION
	var toAbout = function(){
		var toAboutTimeline = new TimelineLite();
		toAboutTimeline.add(TweenMax.to(".background__overlay", 1.5, { backgroundColor: "#ea27a3"}));
		toAboutTimeline.add(TweenMax.to(".casino", 1.9, { scale: 3, x: "121%", y: "-46%", rotation: "-11deg", ease: Power2.easeInOut }), "-=1.5");
		toAboutTimeline.add(TweenMax.to("#metalGradient", 2, { attr: { x1: 0, x2: 0.1, y1: 1, y2: 0 }, ease: Power1.easeInOut }), "-=1.9");
		toAboutText();
	};

	//TO TECH ANIMATION
	var toTech = function(){
		var toTechTimeline = new TimelineLite();
		toTechTimeline.add(TweenMax.to(".background__overlay", 1.5, { backgroundColor: "#43b2ac" }));
		toTechTimeline.add(TweenMax.to(".casino", 1.5, { x: "37%", rotation: "-90deg", ease: Power1.easeInOut }), "-=1.5");
		toTechTimeline.add(TweenMax.to("#metalGradient", 1.5, { attr: { x1: 0, x2: 1, y1: 0, y2: 0 }, ease: Power1.easeInOut }), "-=1.5");
		toTechTimeline.add(TweenMax.to(".casino", 1.5, { y: "176%", ease: Power1.easeInOut }), "-=0.5");
		toTechTimeline.add(TweenMax.to(".casino", 1, { scale: 3 }), "-=1");
	};

	//TO EXAMPLES ANIMATION
	var toExamples = function(){
		var toExamplesTimeline = new TimelineLite();
		toExamplesTimeline.add(TweenMax.to(".background__overlay", 1.5, { backgroundColor: "#ea6227" }));
		toExamplesTimeline.add(TweenMax.to(".casino", 2, { scale: 3.4, x: "-52%", y: "-116%", rotation: "-90deg", ease: Power1.easeInOut }), "-=1.5");
	};

}

//GENERIC FADE IN/OUT

function mainContentFade(isIn){
	if (isIn) {
		TweenMax.to('.content-area', 0.4, { opacity: 1 });
	} else {
		if (DM.viewportWidth < 901) {
			TweenMax.to('.content-area', 0, { opacity: 0 });
		} else {
			TweenMax.to('.content-area', 0.4, { opacity: 0 });
		}
		
	}
}

if (DM.viewportWidth < 901) {

	var openMobNav = new TimelineLite({ paused: true });

	openMobNav.set(".header__color-wipe", {opacity: 1});
	openMobNav.add(TweenMax.to('.header__nav-trigger', 0.4, { borderWidth: "0.25rem", ease: Expo.easeInOut }));
	openMobNav.add(TweenMax.to('.header__color-wipe', 0.5, {scale: 220, ease: Power4.easeIn}), "-=0.4" );
	openMobNav.add(TweenMax.staggerFromTo('.header__nav li', 0.4, {opacity: 0}, { opacity: 1, ease: Back.easeIn }, 0.1 ), "-=0.4");
	
	var closeMobNav = new TimelineLite({ paused: true });

	closeMobNav.add(TweenMax.to('.header__color-wipe', 0.15, { opacity: 0, ease: Power1.easeIn }));	
	closeMobNav.add(TweenMax.to('.header__nav-trigger', 0.4, { borderLeftWidth: "1.2rem", borderRightWidth: "1.2rem", borderTopWidth: "1.1rem", borderBottomWidth: "1.1rem", ease: Expo.easeInOut }), "-=0.25");
	closeMobNav.set(".header__color-wipe", { opacity: 0 });
}