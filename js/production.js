var DM = {}; DM.measureViewport = function () { DM.viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0), DM.viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) }, DM.measureViewport(), DM.throttle = function (a, b, c) { var d, f, g, h = null, j = 0; c || (c = {}); var k = function () { j = !1 === c.leading ? 0 : Date.now(), h = null, g = a.apply(d, f), h || (d = f = null) }; return function () { var l = Date.now(); j || !1 !== c.leading || (j = l); var m = b - (l - j); return d = this, f = arguments, 0 >= m || m > b ? (h && (clearTimeout(h), h = null), j = l, g = a.apply(d, f), !h && (d = f = null)) : !h && !1 !== c.trailing && (h = setTimeout(k, m)), g } }; var headerTitles = "header h1", navElements = "header li, .header__nav-trigger-container", copyElements = ".content-area p", casinoElements = ".casino path, .casino circle, .casino polyline, .casino rect"; if (700 < DM.viewportWidth) var fromAboutText = function () { var a = new TimelineLite; a.add(TweenMax.to(".header__title", 0.7, { fontSize: "4rem", ease: Power1.easeInOut })), a.add(TweenMax.to(".header__subtitle", 0.7, { fontSize: "2.5rem", ease: Power1.easeInOut }), "-=0.4"), 1201 > DM.viewportWidth && 700 < DM.viewportWidth ? a.add(TweenMax.fromTo(".header__titles", 0.8, { left: "50%", x: "-50%", top: "9.5rem", width: "40rem" }, { left: "2%", x: "0%", top: "0.5rem", width: "28rem", ease: Power2.easeInOut }), "-=0.7") : a.add(TweenMax.to(".header__titles", 0.8, { top: "0.5rem", width: "28rem", ease: Power2.easeInOut }), "-=0.7"), a.duration(0.9) }, toAboutText = function () { var a = new TimelineLite; 1201 > DM.viewportWidth && 700 < DM.viewportWidth ? a.add(TweenMax.fromTo(".header__titles", 0.8, { left: "2rem", x: 0, top: "0.5rem", width: "28rem" }, { left: "50%", x: "-50%", top: "9.5rem", width: "40rem", ease: Power2.easeInOut })) : a.add(TweenMax.to(".header__titles", 0.8, { top: "9.5rem", width: "40rem", ease: Power2.easeInOut })), a.add(TweenMax.to(".header__subtitle", 0.8, { fontSize: "3rem", ease: Power1.easeInOut }), "-=0.8"), a.add(TweenMax.to(".header__title", 0.7, { fontSize: "5rem", ease: Power1.easeInOut }), "-=0.3"), a.duration(0.9) }, toAbout = function () { var a = new TimelineLite; a.add(TweenMax.to(".background__overlay", 1.5, { backgroundColor: "#ea27a3" })), a.add(TweenMax.to(".casino", 1.9, { scale: 3, x: "121%", y: "-46%", rotation: "-11deg", ease: Power2.easeInOut }), "-=1.5"), a.add(TweenMax.to("#metalGradient", 2, { attr: { x1: 0, x2: 0.1, y1: 1, y2: 0 }, ease: Power1.easeInOut }), "-=1.9"), toAboutText() }, toTech = function () { var a = new TimelineLite; a.add(TweenMax.to(".background__overlay", 1.5, { backgroundColor: "#43b2ac" })), a.add(TweenMax.to(".casino", 1.5, { x: "37%", rotation: "-90deg", ease: Power1.easeInOut }), "-=1.5"), a.add(TweenMax.to("#metalGradient", 1.5, { attr: { x1: 0, x2: 1, y1: 0, y2: 0 }, ease: Power1.easeInOut }), "-=1.5"), a.add(TweenMax.to(".casino", 1.5, { y: "176%", ease: Power1.easeInOut }), "-=0.5"), a.add(TweenMax.to(".casino", 1, { scale: 3 }), "-=1") }, toExamples = function () { var a = new TimelineLite; a.add(TweenMax.to(".background__overlay", 1.5, { backgroundColor: "#ea6227" })), a.add(TweenMax.to(".casino", 2, { scale: 3.4, x: "-52%", y: "-116%", rotation: "-90deg", ease: Power1.easeInOut }), "-=1.5") }; function mainContentFade(a) { a ? TweenMax.to(".content-area", 0.4, { opacity: 1 }) : 901 > DM.viewportWidth ? TweenMax.to(".content-area", 0, { opacity: 0 }) : TweenMax.to(".content-area", 0.4, { opacity: 0 }) } if (901 > DM.viewportWidth) { var openMobNav = new TimelineLite({ paused: !0 }); openMobNav.set(".header__color-wipe", { opacity: 1 }), openMobNav.add(TweenMax.to(".header__nav-trigger", 0.4, { borderWidth: "0.25rem", ease: Expo.easeInOut })), openMobNav.add(TweenMax.to(".header__color-wipe", 0.5, { scale: 220, ease: Power4.easeIn }), "-=0.4"), openMobNav.add(TweenMax.staggerFromTo(".header__nav li", 0.4, { opacity: 0 }, { opacity: 1, ease: Back.easeIn }, 0.1), "-=0.4"); var closeMobNav = new TimelineLite({ paused: !0 }); closeMobNav.add(TweenMax.to(".header__color-wipe", 0.15, { opacity: 0, ease: Power1.easeIn })), closeMobNav.add(TweenMax.to(".header__nav-trigger", 0.4, { borderLeftWidth: "1.2rem", borderRightWidth: "1.2rem", borderTopWidth: "1.1rem", borderBottomWidth: "1.1rem", ease: Expo.easeInOut }), "-=0.25"), closeMobNav.set(".header__color-wipe", { opacity: 0 }) } if ("/" === window.location.pathname || "/index.php" === window.location.pathname || "/index" === window.location.pathname) { var intro = new TimelineLite; intro.set(".casino", { opacity: 0.6 }), intro.set(casinoElements, { stroke: "#FFFFFF", strokeMiterlimit: 10, opacity: 0, fillOpacity: 0 }), intro.set(".stop-2", { stopColor: "rgb(234, 39, 163)" }), intro.set(headerTitles, { opacity: 0 }), intro.set(navElements, { opacity: 0 }), intro.set(".casino, .content-area, header", { visibility: "visible" }), intro.add(TweenMax.to(".body, .neck", 1.2, { opacity: 1, ease: Power1.easeIn })), intro.add(TweenMax.fromTo(".speed-holes path", 2, { opacity: 1, drawSVG: 0 }, { drawSVG: !0, ease: Power2.easeInOut }), "-=0.6"), intro.add(TweenMax.fromTo(".tuners path", 1.5, { opacity: 1, drawSVG: "100% 100%" }, { drawSVG: !0, ease: Power2.easeInOut }), "-=1"), intro.add(TweenMax.staggerFromTo(".frets rect", 0.45, { opacity: 1, drawSVG: 0 }, { drawSVG: !0 }, 0.05), "-=0.5"), intro.add(TweenMax.fromTo(".neck-pickup", 0.5, { opacity: 1, drawSVG: "50% 50%" }, { drawSVG: "true" }, 0.07), "-=0.2"), intro.add(TweenMax.fromTo(".bridge-pickup", 0.5, { opacity: 1, drawSVG: "50% 50%" }, { drawSVG: "true" }, 0.07), "-=0.2"), intro.add(TweenMax.fromTo(".bridge", 0.35, { opacity: 1, drawSVG: 0 }, { drawSVG: "true" }, 0.07), "-=0.1"), intro.add(TweenMax.staggerFromTo(".knobs circle, .tuning-pins circle", 0.9, { scale: 0, transformOrigin: "center" }, { scale: 1, opacity: 1, ease: Bounce.easeOut }, 0.15)), intro.add(TweenMax.staggerFromTo(".strings polyline", 3, { opacity: 1, drawSVG: "100% 100%" }, { drawSVG: "0% 100%", ease: Power3.easeOut }, 0.4), "-=1"), intro.add(TweenMax.fromTo(".tailpiece-wishbone", 1.9, { opacity: 1, drawSVG: "0% 0%" }, { drawSVG: "0% 100%", ease: Power2.easeIn }, 0.2), "-=5"), intro.add(TweenMax.fromTo(".tailpiece-bridge", 1.2, { opacity: 1, drawSVG: "100% 100%" }, { drawSVG: "true" }, 0.2), "-=3"), intro.add(TweenMax.to(".casino path, .casino circle, .casino polyline, .casino rect", 2, { opacity: 1, fillOpacity: 1 }), "-=2.5"), intro.add(TweenMax.to(".stop-2", 2, { stopColor: "#FFFFFF", ease: Power2.easeOut })), 900 < DM.viewportWidth ? (intro.add(TweenMax.to(".casino", 1.9, { scale: 3, opacity: 0.3, x: "121%", y: "-46%", rotation: "-11deg", ease: Power2.easeInOut }), "-=2"), intro.set(".header__title", { opacity: 1 }, "-=0.8"), intro.set(".header__subtitle", { opacity: 1 }, "+=0.5")) : (intro.add(TweenMax.to(".casino", 1.9, { scale: 7.4, opacity: 0.3, x: "42%", y: "-328%", rotation: "-71deg", ease: Power2.easeInOut }), "-=2"), intro.set(".header__title, .header__subtitle, .header__nav-trigger-container", { opacity: 1 })), intro.add(TweenMax.staggerFromTo(".content-area .pull-out-copy", 1.3, { opacity: 0, scale: 0.99 }, { scale: 1, opacity: 1 }), "+=1"), intro.add(TweenMax.staggerFromTo(".content-area .main-copy", 1.3, { opacity: 0, scale: 0.99 }, { scale: 1, opacity: 1 }), "+=0.7"), 900 < DM.viewportWidth && intro.add(TweenMax.to(".header__nav li", 1.3, { opacity: 1 })) } var ST = {}; window.onload = function () { ST.headerHeight = 700 < DM.viewportWidth ? 200 : 200, ST.updateScroll = function () { ST.scrollTop = window.pageYOffset === void 0 ? (document.documentElement || document.body.parentNode || document.body).scrollTop : window.pageYOffset, ST.currentVBottom = ST.scrollTop + DM.viewportHeight, ST.currentVTop = ST.scrollTop + ST.headerHeight }, ST.updateScroll(), ST.setElements = function () { var a = document.querySelectorAll(".trigger-on-scroll"); ST.elementArray = [], a.forEach(function (b) { ST.elementArray.push({ element: b, top: null, height: null, bottom: null, lineWithinEl: "undefined" == typeof b.dataset.triggerPoint ? 1 : parseFloat(b.dataset.triggerPoint), triggerTop: null, triggerBottom: null, isOneShot: "undefined" != typeof b.dataset.oneShot }) }) }, ST.setElements(), ST.setLines = function () { for (var a = 0; a < ST.elementArray.length; a++) { var b = ST.elementArray[a], c = b.element, d = c.getBoundingClientRect(); b.height = d.height, b.top = d.top + ST.scrollTop, b.triggerTop = b.top + b.height * b.lineWithinEl, b.triggerBottom = b.top + b.height } }, ST.setLines(), ST.checkFire = function () { for (var b, a = 0; a < ST.elementArray.length; a++)b = ST.elementArray[a], b.triggerTop < ST.currentVBottom && b.triggerBottom > ST.currentVTop ? b.element.classList.add("triggered") : !b.isOneShot && b.element.classList.remove("triggered") }, ST.checkFire(), ST.pullTrigger = function () { ST.updateScroll(), ST.checkFire() }, ST.refreshLines = function () { DM.measureViewport(), ST.setLines(), ST.updateScroll(), ST.checkFire() }, ST.completeRefresh = function () { DM.measureViewport(), ST.setElements(), ST.setLines(), ST.updateScroll(), ST.checkFire() }, window.addEventListener("scroll", DM.throttle(ST.pullTrigger, 50)), window.addEventListener("resize", DM.throttle(ST.refreshLines, 300)) }; var content = document.querySelector(".content-area"), body = document.getElementsByTagName("body")[0], mobNavShown = !1, headerNav = document.querySelector(".header__nav"), isAbsolute = /^(?:[a-z]+:)?\/\//i; document.addEventListener("click", function (a) { for (var b = a.target; b && !b.href;)b = b.parentNode; if (b) { if (isAbsolute.test(b.getAttribute("href"))) return; a.preventDefault(), changePage(b.pathname, !0) } }); var cache = {}; function loadPage(a) { return cache[a] ? new Promise(function (b) { b(cache[a]) }) : fetch(a, { method: "GET" }).then(function (b) { return cache[a] = b.text(), cache[a] }) } function changePage(a, b) { headerNav.style.pointerEvents = "none"; var c = body.classList[1].replace("-page", ""); if (700 < DM.viewportWidth && ("index" === c || "" === c || "about" === c) && fromAboutText(), b) { var d = window.location.origin + a; history.pushState(null, null, d) } mainContentFade(!1); var f = a.replace("/", "").replace(".php", ""); body.classList.remove("static"), body.className = body.className.replace(/(?:^|\s)[a-zA-Z]+-page(?!\S)/g, " " + f + "-page"), 701 > DM.viewportWidth && ("index" === c || "" === c) && (document.querySelector(".casino").style.transform = ""), 700 < DM.viewportWidth && ("about" === f ? toAbout() : "tech" === f ? toTech() : "examples" === f ? toExamples() : void 0); var g = loadPage(d), h = new Promise(function (j) { var k = TimelineLite.exportRoot(), l = setInterval(function () { var m = k.isActive(); m || (j(), clearInterval(l)) }, 100) }); Promise.all([g, h]).then(function (j) { var k = document.createElement("div"); k.innerHTML = j[0]; var l = k.querySelector(".content-area").innerHTML; content.innerHTML = l, headerNav.style.pointerEvents = "", mainContentFade(!0), ST.completeRefresh() }).catch(function () { console.log("promise failed"), window.location = window.location.origin + a }) } window.onpopstate = function () { changePage(window.location.pathname, !1) }, 901 > DM.viewportWidth && (document.querySelector(".header__nav-trigger").addEventListener("click", function () { mobNavShown ? (closeMobNav.time(0).play(), headerNav.classList.remove("open")) : (openMobNav.time(0).play(), headerNav.classList.add("open")), mobNavShown = !mobNavShown }), document.querySelectorAll(".header__nav a").forEach(function (a) { a.addEventListener("click", function () { closeMobNav.time(0).play(), headerNav.classList.remove("open"), mobNavShown = !1 }) }));