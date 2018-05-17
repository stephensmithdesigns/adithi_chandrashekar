function pixflow_imageBoxFancy(id, height) {
    "use strict";
    var $ = (jQuery),
        $imgSlider = $('#' + id);

    $('#' + id + ' .image-box-fancy-collapse').click(function () {
        $(this).closest('.image-box-fancy-desc').toggleClass('image-box-fancy-open');
        $(this).find('i').toggleClass('icon-minimize').toggleClass('icon-maximize');
    })

    // change height
    if (height != 'fit') {
        $imgSlider.find('.slides').css({height: height + 'px'});
        $imgSlider.find('.slides').css({'max-height': $(window).height()});
    } else {
        $imgSlider.find('.slides').css({height: $imgSlider.closest('.vc_row').height()});
        $imgSlider.find('.slides').css({'min-height': '450px'});

        if (!isMobile()) {
            $(window).resize(function () {
                $imgSlider.find('.slides').css({height: $imgSlider.closest('.vc_row').height()});
            })
        }
        $(window).load(function () {
            $imgSlider.find('.slides').css({height: $imgSlider.closest('.vc_row').height()});
        })
    }
    if (typeof $.flexslider == 'function') {
        $imgSlider.flexslider({
            animation: $imgSlider.attr('data-effect'),
            slideshow: true,
            animationLoop: true,
            controlNav: false,
            easing: "swing",
            smoothHeight: false,
            startAt: 0,
            slideshowSpeed: $imgSlider.attr('data-speed'),
            directionNav: false,
            touch: true,
            animationSpeed: 1200,
        });
    }
}