$(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 200,
    outDuration: 200,
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


var feed = new Instafeed({
    userId: "4273174377",
    target: 'instagram-feed',
    accessToken:"4273174377.6fd079a.8af98a2724d24dc7ab5280a089cf8d58",
    get: "user",
    resolution:'standard_resolution',
    template: `
    <div class="instagram-feed__block instagram-feed__block--vert">
        <video autoplay loop poster="{{model.images.standard_resolution.url}}">
            <source src="{{model.videos.standard_resolution.url}}" type="video/mp4">
        </video>
        <p>{{caption}}</p>
    </div>`,        
    filter: function(image) {
        if  (image.tags.indexOf('axonistafun') != -1) {
            return true;
        } else {
            return false;
        }
    },
    after: function() {
        var video_elements = $('video');
        for (var i=0;i < video_elements.length; i++) {
            if ($(video_elements[i]).children()[0].src.endsWith('mp4') == false) {
                var image_url = video_elements[i].poster;
                $(video_elements[i]).replaceWith("<img src=\""+image_url+"\">");
            }
        }
    }
});
if ($('#instagram-feed').length > 0) {
	feed.run();
}
