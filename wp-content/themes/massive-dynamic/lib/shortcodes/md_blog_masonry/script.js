function pixflow_blogMasonry(id) {
    'use strict';

    var $elem = (typeof id === "undefined" ) ? $('.masonry-blog') : $('.' + id),
        $elem2 = $('#' + $('.masonry-blog').attr('id'));


    if (id == 'edit-customizer') {

        $('.masonry-blog').isotope({
            // options
            itemSelector: '.blog-masonry-container',
            layoutMode: 'masonry',
            transitionDuration: '0.9s'
        });
    }

    if (!$elem.length)
        return;

    if ($elem.find('.flexslider').length >= 1) {

        $elem.find('.flexslider').each(function () {
            $(this).flexslider({
                directionNav: "true"
            });
        });

        $('.flex-nav-prev .flex-prev').html('');
        $('.flex-nav-next .flex-next').html('');
    }

    $elem.find('.blog-masonry-container').each(function () {
        if ($(this).find('.post-like-holder').length >= 1) {
            if ($(this).find('.like-count').html() == 'already0' || $(this).find('.like-count').html() == '&nbsp;') {
                $(this).find('.like-count').html('0');
            }
        }
    });

    $elem.isotope({
        // options
        itemSelector: '.blog-masonry-container',
        layoutMode: 'masonry',
        transitionDuration: '0.9s'
    });

    setTimeout(function () {
        $elem.isotope('layout');
    }, 300);
    $(window).load(function () {
        $elem.isotope('layout');
    });

}


orientation_change_functions.pixflow_blogMasonry = [];
document_ready_functions.pixflow_blogMasonry = [];