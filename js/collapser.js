/****************************
jQuery Collapser 0.1.1
Author: bryanmytko@gmail.com
@a.animate: Boolean
@a.fade: Boolean
@a.openClass: String
@a.speed: String
****************************/
(function($){
	
  var $_this;
  var $_child;
  var $_class;

  $.fn.Collapser = function(a){	
    $_this = this;	
    /* hides elements & prevents a css bug when containers elements have padding */
    $_this.next('div').css({'display': 'none','overflow' : 'hidden'});   
    /* sets 'open' class */
    $_class = (a.openClass) ? a.openClass : 'cOpen';		
    /* checks for units set to be open on load */
    $_this.each(function(){

      if($(this).hasClass($_class)) $(this).next('div').show();
    });		
    $_this.click(function(){
      $(this).toggleClass($_class);
      $_child = $(this).next();
      (a.animate) ? animateToggle(a,$_child) : $_child.toggle();
    });	
  }

  function animateToggle(a,c){
    (a.fade) ? c.slideFadeToggle(a.speed) : c.stop(true, true).slideToggle(a.speed);
  }	

  /* Slide Toggle effect */
  $.fn.slideFadeToggle = function(speed) {
    return this.animate({opacity: 'toggle', height: 'toggle'}, speed);
  };	

})(jQuery);