(function($){
	
	$.browserSelector = function(){
		
		var browser, version = 'undefined';
		var userAgent = navigator.userAgent.toLowerCase();
		
		//IE
		if($.browser.msie){
			browser = 'ie';
			version = 'ie-' + $.browser.version.substring(0,1);
		}
		
		//Opera
		if($.browser.opera){
		     browser = 'opera';
			 version = 'opera-' + parseInt($.browser.version);
		}
		
		//Firefox / Mozilla
		if($.browser.mozilla){
			
			if(navigator.userAgent.toLowerCase().indexOf('firefox') != -1){
		    	browser = 'firefox';
		
		        v = userAgent.substring(userAgent.indexOf('firefox/') +8);
		        v = v.substring(0,1);
				version = 'firefox-' + v;

			}else{
		    	browser = 'mozilla';
		    }
		}
		
		//Safari / Chrome
		if($.browser.webkit){
			
			if(/chrome/.test(navigator.userAgent.toLowerCase())){
				browser = 'chrome';
				version = 'chrome-';
			}else{
				browser = 'safari';
				version = 'safari-';
			}
			
			//Version
			v = userAgent.substring(userAgent.indexOf(browser+'/') +7);
	        v = v.substring(0,1);
			version += v;
		}

		$('html').addClass(browser + ' ' + version);
		
	};

	//Inicia automaticamente
	$.browserSelector();
	
})(jQuery);
