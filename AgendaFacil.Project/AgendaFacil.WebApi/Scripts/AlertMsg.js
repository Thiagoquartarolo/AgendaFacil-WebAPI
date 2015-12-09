	var AlertaMsg = (function () {
	    "use strict";

	    var elem,
			hideHandler,
			that = {};

	    that.init = function (options) {
	        elem = $(options.selector);
	    };

	    that.show = function (text) {
	        clearTimeout(hideHandler);
	        document.getElementById('alertClass').innerText = text;
	        $('#alertClass').fadeIn().fadeOut(2200);
		
	    };

	    return that;
	}());