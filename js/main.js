$(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 250,
    outDuration: 250,
    linkElement: '.animsition-link',
    loading: true,
    loadingParentElement: 'body',
    loadingClass: 'animsition-loading',
    loadingInner: '',
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
});

$("nav").headroom({
  "offset": 100,
  "tolerance": 10,
  "classes": {
    "initial": "animated-fast",
    "pinned": "slideInDown",
    "unpinned": "slideOutUp"
  }
});

atvImg();

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
	if ((location.pathname.replace(/^\//,'').length <= 0) || (location.pathname.replace(/^\//,'') == 'commerce.html')) {
            event.preventDefault();
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                $('html,body').animate({scrollTop: $target.offset().top}, 500, 'easeInOutExpo');
            }
    }
});

$(function() {
    $('.menu-link').click(function(event) {
        event.stopPropagation();
        $('#alignright').toggle();
    });
});

var $body = $('body'),
    $nav = $('#full-screen-nav'),
    $menu_icon = $('#menu-icon');
$menu_icon.on('click', function(e) {
    $(this).toggleClass('open');
    if ( $body.hasClass('open-menu') ) {
        $body.removeClass('open-menu');
        $nav.fadeOut().removeClass('open');
    } else  {
        $nav.fadeIn().addClass('open');
        $body.addClass('open-menu');
    }
});
$nav.on('click', 'a', function(e) {
    if ( $body.hasClass('open-menu') ) {
        $menu_icon.toggleClass('open');
        $body.removeClass('open-menu');
        $nav.fadeOut().removeClass('open');
    }
});
