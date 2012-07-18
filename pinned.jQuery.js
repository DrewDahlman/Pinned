/*
	Plugin: Pinned
	Author: Drew Dahlman ( www.drewdahlman.com )
	Version: 1.0
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
			var pinnedTimeout = 0;

			function init(){
				if(isMobile() && setings.mobile == false || !isMobile() ){
					console.log('desktop only');
					windowScroll();
				}
				else{
					console.log('mobile only');
					mobileScroll();
				}
			}

			windowScroll = function(){
				$(window).bind('scroll',function(){
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
	$.fn.unpin = function(){
		$(window).unbind('scroll');
		$(window).unbind('touchmove');
	}

})(jQuery);