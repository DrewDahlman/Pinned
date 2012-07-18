/*
	Plugin: Pinned
	Author: Drew Dahlman ( www.drewdahlman.com )
	Version: 0.0.2
*/

(function($) {

	$.fn.pinned = function(options,pinning,unpinned) {
		var defaults = {
			bounds: '0px',
			scrolling: '0px',
			mobile: false
		}

		if(pinning && unpinned){
			var callback = {
				pinning: pinning,
				unpinned: unpinned
			}
		}
		
		return this.each(function() {

			var settings = $.extend(defaults,options);
			var callbacks = $.extend(callback,pinning,unpinned);

			var $this = $(this);
			var orig = $this.css('top');
			$this.data('pinned',true);

			var pinnedTimeout = 0;

			function init(){
				if(isMobile() && settings.mobile == false || !isMobile() ){
					windowScroll();
				}
				else{
					mobileScroll();
				}
			}

			windowScroll = function(){
				if($this.data('pinned'))
					$(window).scroll(function(){
						if ($(window).scrollTop() > settings.bounds && $this.css('position') != 'fixed' ){ 
							$this.css({'position': 'fixed', 'top': settings.scrolling});
							if(callbacks.pinning != null){
								callbacks.pinning();
							}
						} 
						if ($(window).scrollTop() < settings.bounds && $this.css('position') != 'absolute'){ 
							$this.css({'position': 'absolute', 'top': orig}); 
							if(callbacks.unpinned != null){
								callbacks.unpinned();
							}
						}
					});
			}

			// TODO - Add better support for mobile devices on scroll
			mobileScroll = function(){
				if($this.data('pinned',true))
					$(window).bind('touchmove',function(){
						if ($(window).scrollTop() > settings.bounds && $this.css('position') != 'fixed' ){ 
							$this.css({'position': 'fixed', 'top': settings.scrolling});
							
						} 
						if ($(window).scrollTop() < settings.bounds && $this.css('position') != 'absolute'){ 
							$this.css({'position': 'absolute', 'top': orig}); 
							
						}
					});
			}

			isMobile = function(){
				if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i))) {
					return true;
				}
				else {
					return false;
				}
			}
			init();
    });
	};

})(jQuery);