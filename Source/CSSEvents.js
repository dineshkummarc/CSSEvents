(function(){

var prefix =
	(Browser.safari || Browser.Platform.ios) ? 'webkit' :
	(Browser.firefox) ? 'moz' :
	(Browser.opera) ? 'o' :
	(Browser.ie) ? 'ms' : '';

var eventTypes = [
	'transitionStart',
	'transitionEnd',
	'animationStart',
	'animationIteration',
	'animationEnd'
];

var fn = function(eventType){

	var customType = eventType;

	Element.NativeEvents[eventType.toLowerCase()] = 2;

	customType = prefix + customType.capitalize();
	Element.NativeEvents[customType] = 2;

	Element.Events[eventType.toLowerCase()] = {
		base: customType
	};
};

eventTypes.each(fn, this);

})();