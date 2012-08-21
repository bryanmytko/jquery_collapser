/****************************
jQuery Collapser 0.1
Author: bryanmytko@gmail.com
@a.animate: Boolean
@a.fade: Boolean
@a.openClass: String
@a.speed: String
****************************/
(function($){
	var $_b;
	var $_class;
	$.fn.Collapser = function(a){
		var $_b = $(this);
		/* prevents a css bug when containers elements have padding */
    $_b.next('div').css({'display': 'none','overflow' : 'hidden'});
		/* sets 'open' class */
		$_class = (a.openClass) ? a.openClass : 'cOpen';
		/* checks for units set to be open on load */
		$_b.each(function(){
			if($(this).hasClass($_class))
				$(this).next('div').show();
		});
	  //$_b.hasClass($_class) ? console.log('open') : console.log('closed');
	  $_b.click(function(){
			$(this).toggleClass($_class);
		  var $_u = $(this).next();
			if(a.animate) animateToggle($_u);
			else $_u.toggle();
		});
		function animateToggle(u){
			if(a.fade) u.slideFadeToggle(a.speed);
			else u.stop(true, true).slideToggle(a.speed);
		}
	}
	$.fn.slideFadeToggle = function(speed) {
	  return this.animate({opacity: 'toggle', height: 'toggle'}, speed);
	};
})(jQuery);