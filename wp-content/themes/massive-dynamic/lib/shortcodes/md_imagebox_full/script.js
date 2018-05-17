function pixflow_imageboxFull() {
    "use strict";

    $('.imagebox-full').each(function () {
        var $this = $(this),
            textContainer = $this.find('.text-container'),
            title = textContainer.find('.title'),
            containerHeight = textContainer.height(),
            titleHeight = Math.abs(title.height()),
            description = $this.find('.description'),
            descriptionHeight = description.height(),
            overlay = $this.find('.overlay'),
            overlayColor = overlay.css('background-color'),
            topPadding,
            newPadding,
            alpha = 1,
            tempColor;
           var title_margin_bottom =($(this).parents('.vc_column_container').hasClass('col-sm-12')) ? 30 : 10; //10 or 30 is title's margin-bottom
        
        topPadding = containerHeight - titleHeight;
        newPadding = topPadding - descriptionHeight - title_margin_bottom;
        title.css({'padding-top': topPadding});
        if (overlay.length) {
            alpha = overlayColor.replace(/^.*,(.+)\)/, '$1');
            tempColor = pixflow_RgbaToRgb(overlayColor);
            alpha = parseFloat(alpha) + 0.2;
        }


        $this.find('.button').hover(function () {
            TweenMax.to($this, 0.6, {'background-position': '50% 55%'});
            TweenMax.to(title, 0.4, {'padding-top': newPadding});
            TweenMax.to(overlay, 0.4, {'background-color': tempColor, 'opacity': alpha});
            TweenMax.to(description, 0.4, {'opacity': '1', delay: 0.2});

        }, function () {
            TweenMax.to($this, 0.6, {'background-position': '50% 50%'});
            TweenMax.to(title, 0.4, {'padding-top': topPadding});
            TweenMax.to(overlay, 0.4, {'background-color': overlayColor, 'opacity': '1'});
            TweenMax.to(description, 0.4, {'opacity': '0'});

        })
    })
}

window_load_functions.pixflow_imageboxFull = [];