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

function appendText(e){
	if (!e) var e = window.event;
	var element = (e.target) ? e.target : e.srcElement;
	document.getElementById('div1').innerHTML += element.id + "<br />";
}

function removeOnClickA(){
	removeEventHandler(document.getElementById('buttonA'),'click',appendText);
}

function removeOnClickB(){
	removeEventHandler(document.getElementById('buttonB'),'click',appendText);
}

function reset(){
	addEventHandler(document.getElementById('buttonA'),'click',appendText);
	addEventHandler(document.getElementById('buttonB'),'click',appendText);
}

window.onload = function(){
	addEventHandler(document.getElementById('button-a'),'click',removeOnClickA);
	addEventHandler(document.getElementById('button-b'),'click',removeOnClickB);
	addEventHandler(document.getElementById('reset'),'click',reset);
	reset();
}