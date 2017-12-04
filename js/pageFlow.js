var content = document.querySelector('.content-area');
var body = document.getElementsByTagName('body')[0];
var mobNavShown =  false;
var headerNav = document.querySelector('.header__nav');

var isAbsolute = new RegExp('^(?:[a-z]+:)?//', 'i');

document.addEventListener('click', function (e) {

	var el = e.target;
	//go up node list
	while (el && !el.href) {
		el = el.parentNode;
	}
	//if element being clicked bubbles to a link
	if (el) {

		//return if the link being clicked is absolute
		if (el.hasAttribute('data-iframe-trigger')) {
			if (DM.viewportWidth > 700) {
				e.preventDefault();
				showIframe(el.pathname);
				return;
			}
			else {
				return;
			}
			
		} else if (isAbsolute.test(el.getAttribute('href'))) {
			return;
		}

		e.preventDefault();
		changePage(el.pathname, true);
	}

});

var cache = {};

function loadPage(url) {

	if (cache[url]) {
		return new Promise(function (resolve) {
			resolve(cache[url]);
		});
	}

	return fetch(url, {
		method: 'GET'
	}).then(function (response) {
		cache[url] = response.text();
		return cache[url];
	});
}

function changePage(newPath, fromLink) {

	headerNav.style.pointerEvents = "none";

	var fromPage = body.classList[1].replace('-page', '');

	if (DM.viewportWidth > 700 && (fromPage === "index" || fromPage === "" || fromPage === "about")) {
		fromAboutText();
	}
	if (fromLink) {
		var newURL = window.location.origin + newPath;
		history.pushState(null, null, newURL);
	}

	//fade out content
	mainContentFade(false);

	var toPage = newPath.replace('/', '').replace('.php', '');
	
	body.classList.remove('static');
	body.className = body.className.replace(/(?:^|\s)[a-zA-Z]+-page(?!\S)/g, ' '+toPage+'-page');
	
	if (DM.viewportWidth < 701 && (fromPage === "index" || fromPage === "")) {
		document.querySelector('.casino').style.transform = "";
	}

	if (DM.viewportWidth > 700){
		switch (toPage) {
		case "about":
			toAbout();
			break;
		case "tech":
			toTech();
			break;
		case "examples":
			toExamples();
			break;			
		}
	}


	var pageLoaded = loadPage(newURL);
	var animationFinished = new Promise(function(resolve) {

		var currentlyPlaying = TimelineLite.exportRoot();

		var timer = setInterval(function(){
			var isActive = currentlyPlaying.isActive();
			if (!isActive) {
				resolve();
				clearInterval(timer);
			}

		} , 100);
	});

	Promise.all([pageLoaded, animationFinished]).then(function (values) {

		var wrapper = document.createElement('div');
		wrapper.innerHTML = values[0];

		var newContent = wrapper.querySelector('.content-area').innerHTML;

		content.innerHTML = newContent;

		headerNav.style.pointerEvents = "";

		mainContentFade(true);
		ST.completeRefresh();

	}).catch(function(){
		console.log('promise failed');
		window.location = window.location.origin + newPath;
	});
}

window.onpopstate = function () {
	changePage(window.location.pathname, false);
};

if (DM.viewportWidth < 901) {

	document.querySelector('.header__nav-trigger').addEventListener('click', function(){

		if (!mobNavShown){
			openMobNav.time(0).play();
			headerNav.classList.add('open');
		} else {
			closeMobNav.time(0).play();
			headerNav.classList.remove('open');
		}

		mobNavShown = !mobNavShown;
	});

	document.querySelectorAll('.header__nav a').forEach(function(currentValue){
		currentValue.addEventListener('click', function(){
			closeMobNav.time(0).play();
			headerNav.classList.remove('open');
			mobNavShown = false;
		});
	});
}