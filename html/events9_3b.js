
function addEventHandler(element,eventType,handlerFunction){
	if (element.addEventListener){
		element.addEventListener(eventType,handlerFunction,false);
	} else if (element.attachEvent) {
		element.attachEvent ('on'+eventType,handlerFunction);
	}
}

function removeEventHandler(element,eventType,handlerFunction){
	if (element.removeEventListener){
		element.removeEventListener(eventType,handlerFunction,false);
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

function removeOnClickC(){
	removeEventHandler(document.getElementById('buttonC'),'mouseover',appendText);
}

function removeOnClickD(){
	removeEventHandler(document.getElementById('buttonD'),'mouseout',appendText);
}
function reset(){
	addEventHandler(document.getElementById('buttonA'),'click',appendText);
	addEventHandler(document.getElementById('buttonB'),'click',appendText);
	addEventHandler(document.getElementById('buttonC'),'mouseover',appendText);
	addEventHandler(document.getElementById('buttonD'),'mouseout',appendText);
}

window.onload = function(){
	addEventHandler(document.getElementById('button-a'),'click',removeOnClickA);
	addEventHandler(document.getElementById('button-b'),'click',removeOnClickB);
	addEventHandler(document.getElementById('button-c'),'mouseover',removeOnClickC);
	addEventHandler(document.getElementById('button-d'),'mouseout',removeOnClickD);
	addEventHandler(document.getElementById('reset'),'click',reset);
	reset();
}