function pixflow_tabletSliderShortcode($row){
    "use strict";

    if ($row == undefined){
        $row = $('body');
    }

    if($row.find('.tablet-slider').length < 1)
        return;
    else {

        try {
            $row.find('.tablet-slider').each(function () {

                var $tabletFrame       = $(this).find('.tablet-frame'),
                    $tabletFrameWidth  = ($tabletFrame.width()> $(window).width())? $(window).width()*.85 :$tabletFrame.width(),
                    $tabletFrameHeight = $tabletFrameWidth * (0.65);

                $(this).find('.slide-image').css({ width: $tabletFrameWidth - 35, height: $tabletFrameHeight });

                $(this).find('.flexslider ul.slides li').each(function () {
                    $(this).css({ 'height': $tabletFrameHeight });
                });

            });
        } catch (e) {}

    }
}
var $body = $('body');
window_load_functions.pixflow_tabletSliderShortcode = [$body];
window_resize_functions.pixflow_tabletSliderShortcode = [$body];

function pixflow_tabletSlider(id, slideshow) {
    'use strict';
    var $item = $('#' + id);
    if (typeof $.flexslider == 'function') {
        $item.flexslider({
            animation: "fade",
            manualControls: $('ol.flex-control-nav[data-flex-id=' + id + '] li'),
            slideshow: slideshow,
            slideshowSpeed: 3000,
            selector: '.slides > li'
        });
    }
    $item.find('ol.flex-control-paging').remove();

    var $tabletFrame = $item.find('.tablet-frame'),
        $tabletFrameWidth = ($tabletFrame.width() > $(window).width()) ? $(window).width() * .85 : $tabletFrame.width(),
        $tabletFrameHeight = $tabletFrameWidth * (0.65);

    $item.find('.slide-image').css({width: $tabletFrameWidth - 35, height: $tabletFrameHeight});

    $item.find('.flexslider ul.slides li').each(function () {
        $item.css({'height': $tabletFrameHeight});
    });
}