var iframeContainer = document.querySelector('.examples-iframe__container');
var iframe = iframeContainer.querySelector('iframe');
function showIframe(url){
	iframeContainer.classList.add('shown');
	iframe.setAttribute('src', url);
	//fallback-click if iframe didnt load for some reason
	//add in a cross here with z-index nad have if fall over the iframe? is this possible
	iframeContainer.addEventListener('click', function (e) {
		//if the target it the not a child, close the modal
		if (e.target === this) iframeContainer.classList.remove('shown');
	});	
        
	iframe.onload = function(){

		//wil this work with full
		
		iframe.contentWindow.document.querySelector('body').addEventListener('click', function (e) {
			//if the target it the not a child, close the modal
			if (e.target === this) {
				iframeContainer.classList.remove('shown');
			}
		});	
	};

}