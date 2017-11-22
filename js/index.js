//INDEX INTRO ANIMATION
if (window.location.pathname === '/' || window.location.pathname === '/index.php' || window.location.pathname === '/index') {
	var intro = new TimelineLite();
	intro.set(".casino", {opacity: 0.6});
	intro.set(casinoElements, { stroke: "#FFFFFF", strokeMiterlimit: 10, opacity: 0, fillOpacity: 0 });
	intro.set(".stop-2", { stopColor: "rgb(234, 39, 163)" });
	intro.set(headerTitles, { opacity: 0 });
	intro.set(navElements, { opacity: 0 });
	intro.set(".casino, .content-area, header", { visibility: "visible" });
	//idea, flash gradient across page to reveal outline of guitar in white

	//fade in body and  neck
	intro.add(TweenMax.to(".body, .neck", 1.2, { opacity: 1, ease: Power1.easeIn }));
	//draw speed holes
	intro.add(TweenMax.fromTo(".speed-holes path", 2, { opacity: 1, drawSVG: 0 }, { drawSVG: true, ease: Power2.easeInOut }), "-=0.6");
	//draw tuning pegs
	intro.add(TweenMax.fromTo(".tuners path", 1.5, { opacity: 1, drawSVG: "100% 100%" }, { drawSVG: true, ease: Power2.easeInOut }), "-=1");
	//frets
	intro.add(TweenMax.staggerFromTo(".frets rect", 0.45, { opacity: 1, drawSVG: 0 }, { drawSVG: true }, 0.05), "-=0.5");
	//pickups
	intro.add(TweenMax.fromTo(".neck-pickup", 0.5, { opacity: 1, drawSVG: "50% 50%" }, { drawSVG: "true" }, 0.07), "-=0.2");
	intro.add(TweenMax.fromTo(".bridge-pickup", 0.5, { opacity: 1, drawSVG: "50% 50%" }, { drawSVG: "true" }, 0.07), "-=0.2");
	intro.add(TweenMax.fromTo(".bridge", 0.35, { opacity: 1, drawSVG: 0 }, { drawSVG: "true" }, 0.07), "-=0.1");
	//circles
	intro.add(TweenMax.staggerFromTo(".knobs circle, .tuning-pins circle", 0.9, { scale: 0, transformOrigin: "center" }, { scale: 1, opacity: 1, ease: Bounce.easeOut }, 0.15));
	//strings
	intro.add(TweenMax.staggerFromTo(".strings polyline", 3, { opacity: 1, drawSVG: "100% 100%" }, { drawSVG: "0% 100%", ease: Power3.easeOut }, 0.4), "-=1");
	intro.add(TweenMax.fromTo(".tailpiece-wishbone", 1.9, { opacity: 1, drawSVG: "0% 0%" }, { drawSVG: "0% 100%", ease: Power2.easeIn }, 0.2), "-=5");
	intro.add(TweenMax.fromTo(".tailpiece-bridge", 1.2, { opacity: 1, drawSVG: "100% 100%" }, { drawSVG: "true" }, 0.2), "-=3");
	intro.add(TweenMax.to(".casino path, .casino circle, .casino polyline, .casino rect", 2, { opacity: 1, fillOpacity: 1 }), "-=2.5");
	intro.add(TweenMax.to(".stop-2", 2, { stopColor: "#FFFFFF", ease: Power2.easeOut }));

	if (DM.viewportWidth > 900) {
		intro.add(TweenMax.to(".casino", 1.9, { scale: 3, opacity: 0.3, x: "121%", y: "-46%", rotation: "-11deg", ease: Power2.easeInOut }), "-=2");
		intro.set(".header__title", { opacity: 1 }, "-=0.8");
		intro.set(".header__subtitle", { opacity: 1 }, "+=0.5");
	} else {
		intro.add(TweenMax.to(".casino", 1.9, { scale: 7.4, opacity: 0.3, x: "42%", y: "-328%", rotation: "-71deg", ease: Power2.easeInOut }), "-=2");
		intro.set(".header__title, .header__subtitle, .header__nav-trigger-container" , { opacity: 1 });
	}
	
	intro.add(TweenMax.staggerFromTo(".content-area .pull-out-copy", 1.3, { opacity: 0, scale: 0.99 }, { scale: 1, opacity: 1 }), "+=1");
	intro.add(TweenMax.staggerFromTo(".content-area .main-copy", 1.3, { opacity: 0, scale: 0.99 }, { scale: 1, opacity: 1 }), "+=0.7");

	if (DM.viewportWidth > 900) {
		intro.add(TweenMax.to(".header__nav li", 1.3, { opacity: 1 }));
	}
}	
