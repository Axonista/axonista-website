
// Nav Smooth Scroll to Section //
$('.nav a').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	&& location.hostname == this.hostname) {
		var $target = $(this.hash);
		$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
		if ($target.length) {
            $('html,body').animate({scrollTop: $target.offset().top}, 500);
		}
	}
});

// Nav Background on Scroll //
var scroll_start = 0;
var startchange = $('nav');
var offset = startchange.offset();
$(document).scroll(function() {
    scroll_start = $(this).scrollTop();
    if(scroll_start > offset.top) {
        $('nav').css({ 'background': 'rgba(31,38,56, 0.9)',});
    } else {
        $('nav').css('background-color', 'transparent');
    }
});

// Interaction Slider //
$('.tabs-content div:first').show();
$('.tabs-nav li:first').addClass('tab-active');

// Change tab class and display content
$('.tabs-nav a').on('click', function(event){
  event.preventDefault();
  $('.tabs-nav li').removeClass('tab-active');
  $(this).parent().addClass('tab-active');
  $('.tabs-content div').hide();
  $($(this).attr('href')).show();
});
