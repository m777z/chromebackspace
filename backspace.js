// allows you to use backspace key to go back one step in browser history on Linux
// tries not to break anything on other OSes
if(navigator.platform.indexOf("Win") == -1 && navigator.platform.indexOf("Mac") == -1)
{
	
	var att = document.createAttribute("onkeydown");
	att.value = "if(document.activeElement == document.body){if(event.keyCode == 8){if(event.shiftKey){window.history.forward();}else{window.history.back();}}}";
	document.body.setAttributeNode(att);
}


