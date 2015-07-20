
// Nav Smooth Scroll to Section //
$(document).ready(function(){
  	$('.nav a').click(function() {
    		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    		&& location.hostname == this.hostname) {

     				var $target = $(this.hash);
      				$target = $target.length && $target
      				|| $('[name=' + this.hash.slice(1) +']');
      				if ($target.length) {
       						var targetOffset = $target.offset().top;

        			$('html,body')
        			.animate({scrollTop: targetOffset}, 1000);
       				return false;
      			}
    			}
  		});
		});

// Nav Background on Scroll //
$(document).ready(function(){       
  var scroll_start = 0;
  var startchange = $('.nav');
  var offset = startchange.offset();
  $(document).scroll(function() { 
    scroll_start = $(this).scrollTop();
    if(scroll_start > offset.top) {
      $('.nav').css({ 'background': 'rgba(36, 42, 53, 0.97)',});
    } else {
      $('.nav').css('background-color', 'transparent');
    }
  });
});



