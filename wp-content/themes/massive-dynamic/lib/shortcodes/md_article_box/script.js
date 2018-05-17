function pixflow_articleBox($top) {
    "use strict";
    var $articleBox = $('.article-box');
    $articleBox.each(function () {
        var $this = $(this);
        $this.find('.article-overlay').hover(function () {
            $this.find('.article-overlay').css({'top': '0'});
            var articleHeight = $this.height(),
                contentHeight = $this.find('.article-box-content').height(),
                marginTop = (articleHeight - contentHeight) / 2;
            $this.find('.article-box-content').css('margin-top', marginTop);
        }, function () {
            $top = $this.height() - 70;
            var $overlay = $(this);
            $overlay.css({'top': $top});
            $this.find('.article-box-content').css('margin-top', 0);
        });
    });
}

document_ready_functions.pixflow_articleBox = [];