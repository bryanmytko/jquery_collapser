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
  var $_u;
  var $_class;
  $.fn.Collapser = function(a){	
    $_b = $(this);	
    /* hides elements & prevents a css bug when containers elements have padding */
    $_b.next('div').css({'display': 'none','overflow' : 'hidden'});   
    /* sets 'open' class */
    $_class = (a.openClass) ? a.openClass : 'cOpen';		
    /* checks for units set to be open on load */
    $_b.each(function(){
    if($(this).hasClass($_class)) $(this).next('div').show();
  });		
  $_b.click(function(){
    $(this).toggleClass($_class);
    $_u = $(this).next();
    (a.animate) ? animateToggle($_u) : $_u.toggle();
  });	
}
function animateToggle(u){
  (a.fade) ? u.slideFadeToggle(a.speed) : u.stop(true, true).slideToggle(a.speed);
}	
/* Slide Toggle effect */
$.fn.slideFadeToggle = function(speed) {
  return this.animate({opacity: 'toggle', height: 'toggle'}, speed);
};	
})(jQuery);