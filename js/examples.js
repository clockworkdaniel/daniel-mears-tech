var iframeContainer = document.querySelector('.examples-iframe__container');
var iframe = iframeContainer.querySelector('iframe');
function showIframe(url){
	iframeContainer.classList.add('shown');
	iframe.setAttribute('src', url);
	console.log();
        
	iframe.onload = function(){
		iframe.contentWindow.document.querySelector('body').addEventListener('click', function (e) {
			//if the target it the not a child, close the modal
			if (e.target === this) {
				iframeContainer.classList.remove('shown');
			}

		});	
	};

}