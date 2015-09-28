$(".animsition").animsition({
    inClass: 'zoom-in-sm',
    outClass: 'zoom-out-sm',
    inDuration: 500,
    outDuration: 500,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^=#])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '<img src="/assets/images/puff.svg" />',
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
});

// Update highlighted word in sync with video
var $hero_vid = $('#bgvid'),
    $highlight_word = $('#hero-content span.highlight');

$highlight_word.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e) {
    $highlight_word.removeClass('animated rotateIn');
});

$hero_vid.on('timeupdate', function(e) {
    var time = $hero_vid[0].currentTime;
    if((time >= 9.6 && time < 17.4)&& $highlight_word.text() !== "mobile") {
        $highlight_word.addClass('animated rotateIn');
        $highlight_word.text("mobile");
    } else if((time >= 17.4 && time <= $hero_vid[0].duration) && $highlight_word.text() !== "global") {
        $highlight_word.addClass('animated rotateIn');
        $highlight_word.text("global");
    } else if(time < 9.6 && $highlight_word.text() !== "interactive") {
        $highlight_word.addClass('animated rotateIn');
        $highlight_word.text("interactive");
    }
});

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
        $nav.find('img.logo').attr('src', '/assets/images/axonista-logo.png');
    } else if(scroll_position < 200) {
        $nav.removeClass('solid').show();
        $nav.find('img.logo').attr('src', '/assets/images/axonista-logo.png');
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

$(function() {

    $('.menu-link').click(function(event) {
        event.stopPropagation();
        $('#toggle-menu').toggle();
    });

    $('body').click(function() {
        var submenu = $('#toggle-menu');
        if(submenu.is(":visible")) {
            submenu.hide();
        }
    })


});


