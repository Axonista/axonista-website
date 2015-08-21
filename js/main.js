$(window).fadeThis({speed: 200, offset: -100, reverse: false});

// Smooth Scroll to Section //
$('a.anchor-link').click(function(event) {
    event.preventDefault();
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	&& location.hostname == this.hostname) {
		var $target = $(this.hash);
		$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
		if ($target.length) {
            $('html,body').animate({scrollTop: $target.offset().top}, 500, 'easeInOutExpo');
		}
	}
});

// Nav Background on Scroll //
var window_offset = $(window).scrollTop();
var previous_scroll_position = 0;
var $nav = $('nav');
if(window_offset > 100) {
    $nav.addClass('solid');
}
$(document).scroll(function() {
    scroll_position = $(this).scrollTop();
    if(scroll_position > 200 && scroll_position < previous_scroll_position) {
        $nav.addClass('solid').show();
        $nav.find('img.logo').attr('src', '/assets/images/axonista-logo-text-gold.png');
    } else if(scroll_position < 200) {
        $nav.removeClass('solid').show();
        $nav.find('img.logo').attr('src', '/assets/images/axonista-logo-text.png');
    } else {
        $nav.hide();
    }
    previous_scroll_position = scroll_position;
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

// Segmented Control UI
$(".segmented-control label input[type=radio]").each(function(){
    $(this).on("change", function(){
        if($(this).is(":checked")){
           $(this).parent().siblings().each(function(){
                $(this).removeClass("checked");
            });
            $(this).parent().addClass("checked");
        }
    });
});

$(".illustrations .segmented-control input").on("change", function() {
    var image_id = $(this).data('image-id'),
        $parent = $(this).closest('.illustration');
    $parent.find('img:not(".' + image_id + '")').hide();
    $parent.find('img.' + image_id).show();
});
