
function pixflow_modernTabshortcode(tabid) {

    maxHeight = 0,
        tmp = 0;
    var $this = $('.' + tabid.toString()).closest('.vc_md_modernTabs');
    if ($('body').hasClass('vc_editor')) {
        $this.find('.md-modernTab-add-tab').parent().remove();
        $this.find('.px_tabs_nav').append('<li class="unsortable"><a class="md-modernTab-add-tab vc_control-btn"><strong>+</strong><div class="modernTabTitle">ADD TAB</div></a></li>');
        $this.find('.md-modernTab-add-tab').click(function (e) {
            e.preventDefault();
            $(this).closest('.mBuilder-element').find('>.mBuilder_controls .vc_control-btn[data-control="add_section"] .vc_btn-content').click();
        })
    }

    $('.' + tabid.toString() + ' .ui-tabs-nav li').click(function () {
        var contentId = "#" + $(this).attr('aria-controls');

        if ($this.find(contentId).find('.process-steps').length) {
            if (typeof pixflow_processSteps == 'function') {
                pixflow_processSteps();
            }
            if (typeof  pixflow_shortcodeScrollAnimation == 'function') {
                pixflow_shortcodeScrollAnimation();
            }
        }

        if ($this.find(contentId).find('.flexslider').length) {
            if (typeof pixflow_responsive == 'function') {
                $(window).trigger('resize');
            }
        }

        pixflow_calculateModerntab(tabid);
    });

    pixflow_calculateModerntab(tabid);

    $(window).load(function () {
        pixflow_calculateModerntab(tabid);
    });


    if (!$('.' + tabid.toString()).data("ui-tabs")) {
        $('.' + tabid.toString()).on('click', '.px_tabs_nav li > a', function (e) {
            $(this).closest('li').click();
            return false;
        });
        $('.' + tabid.toString()).on('click', '.ui-tabs-nav li', function (e) {
            e.preventDefault();

            $(this).parent().parent().find('.ui-tabs-panel').css('display', 'none');
            $(this).parent().parent().find($(this).find('a').attr('href')).css('display', 'block');
            $(this).siblings('li').removeClass('ui-tabs-active');
            $(this).addClass('ui-tabs-active');
        })
        $('.' + tabid.toString() + ' .ui-tabs-nav li:nth-child(1)').click();
    }

    $(window).resize(function () {
        window.setTimeout(function () {
            pixflow_calculateModerntab(tabid);
        }, 1000);
    });


    if (typeof pixflow_tabShortcode == 'function') {
        pixflow_tabShortcode();
    }
}

function pixflow_calculateModerntab(tabid) {
    $('.' + tabid.toString() + ' .ui-tabs-panel').each(function () {
        var display = $(this).css('display');
        $(this).css({'display': 'block', height: ''});
        maxHeight = $(this).height();
        $(this).css('display', display);
        if (maxHeight > tmp) {
            tmp = maxHeight;
        }
    });
    $('.' + tabid.toString() + ' .ui-tabs-panel').css('height', tmp + 'px');
}