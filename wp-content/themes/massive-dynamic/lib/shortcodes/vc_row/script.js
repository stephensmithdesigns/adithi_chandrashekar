function pixflow_fitRowToHeight() {
    "use strict";
    var rowsInPage = $('.vc_row:not(.vc_inner)').length;
    $('.vc_row').each(function () {
        var flag = false,
            $this = $(this),
            contentHeight = $this.find('.wrap').height();
        if ($this.hasClass('fit-to-height')) {
            if (contentHeight > $(window).height() && rowsInPage == 1) {
                $this.css({'height': contentHeight + 20});
            } else {
                if ($(window).width() < 1281 && $this.find('> .wrap').css('height').replace(/[^-\d\.]/g, '') * 1 > $(window).height()) {
                    flag = true;
                } else {
                    $this.css({'height': $(window).height()});
                }
            }

        }
    });
}
window_resize_functions.pixflow_fitRowToHeight = [];
document_ready_functions.pixflow_fitRowToHeight = [];

function pixflow_rowTransitionalColor($row, firstColor, secondColor) {
    "use strict";

    var $ = jQuery,
        scrollPos = 0,
        currentRow = $row,
        beginningColor = firstColor,
        endingColor = secondColor,
        percentScrolled,
        newRed,
        newGreen,
        newBlue,
        newColor;

    currentRow.css({'background-color': beginningColor});

    $(document).scroll(function () {
        var animationBeginPos = currentRow.offset().top,
            endPart = currentRow.outerHeight() < 800 ? currentRow.outerHeight() / 4 : $(window).height(),
            animationEndPos = animationBeginPos + currentRow.outerHeight() - endPart;
        scrollPos = $(this).scrollTop();
        if (scrollPos >= animationBeginPos && scrollPos <= animationEndPos) {
            percentScrolled = (scrollPos - animationBeginPos) / (currentRow.outerHeight() - endPart);
            newRed = Math.abs(beginningColor.red() + ( ( endingColor.red() - beginningColor.red() ) * percentScrolled ));
            newGreen = Math.abs(beginningColor.green() + ( ( endingColor.green() - beginningColor.green() ) * percentScrolled ));
            newBlue = Math.abs(beginningColor.blue() + ( ( endingColor.blue() - beginningColor.blue() ) * percentScrolled ));
            newColor = new $.Color(newRed, newGreen, newBlue);
            currentRow.animate({backgroundColor: newColor}, 0);
        } else if (scrollPos > animationEndPos) {
            currentRow.animate({backgroundColor: endingColor}, 0);
        } else if (scrollPos < animationBeginPos) {
            currentRow.animate({backgroundColor: beginningColor}, 0);
        }
    });
}

function pixflow_rowParallax() {
    "use strict";

    if ($(window).width() <= 1280 && pixflow_isTouchDevice())
        return;

    $('.row-image').each(function () {

        var $this = $(this),
            isParallax = $this.attr('isParallax'),
            $dataSpeed = $this.parent().attr('data-speed');

        $('.row-image').each(function () {

            var $this = $(this),
                isParallax = $this.attr('isParallax');

            if ((typeof isParallax !== typeof undefined && isParallax !== false)) {

            }

        });

    });

}
window_load_functions.pixflow_rowParallax = [];
responsive_functions.pixflow_rowParallax = [];