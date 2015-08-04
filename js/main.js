
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
var window_offset = $(window).scrollTop();
if(window_offset > 100) {
    $('nav').addClass('solid');
}
$(document).scroll(function() {
    scroll_position = $(this).scrollTop();
    if(scroll_position > 100) {
        $('nav').addClass('solid');
    } else {
        $('nav').removeClass('solid');
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
