function addEventHandler(element,evenType,handlerFunction){
	if (element.addEventListener){
		element.addEventListener(evenType,handlerFunction,false);
	} else if (element.attachEvent) {
		element.attachEvent ('on'+eventType,handlerFunction);
	}
}

function removeEventHandler(element,evenType,handlerFunction){
	if (element.removeEventListener){
		element.removeEventListener(evenType,handlerFunction,false);
	} else if (element.detachEvent) {
		element.detachEvent ('on'+eventType,handlerFunction);
	}
}