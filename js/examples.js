var iframeContainer = document.querySelector('.examples-iframe__container');
var iframe = iframeContainer.querySelector('iframe');
function showIframe(url){
	iframeContainer.classList.add('shown');
	iframe.setAttribute('src', url);

	iframeContainer.addEventListener('click', function (e) {
		//if the target is the container/close ubtton, close the modal
		if (e.target === this || e.target.className === "examples-iframe__close") {
			iframeContainer.classList.remove('shown');
		}
	});	
        
	iframe.onload = function(){
		
		iframe.contentWindow.document.querySelector('body').addEventListener('click', function (e) {
			//if the target it the not a child, close the modal
			if (e.target === this) {
				iframeContainer.classList.remove('shown');
			}
		});	
	};

}