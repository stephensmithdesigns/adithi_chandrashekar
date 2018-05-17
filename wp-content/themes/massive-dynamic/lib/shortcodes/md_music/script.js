function pixflow_music($id) {
    'use strict';

    var $ = jQuery,
        $Image, ImageWidth, musicWidth, $playPause, $trackLink, $discImage, $musicId, $btnMusicID, $musicBar, $musicDuration, playPauseBtnFlag, musicPlayed, $trackId, $playPauseBtn, $jpAudio, $trackText;

    // Music Text/Button Play Click

    $('#' + $id + ' .tracks .link, #' + $id + ' .tracks .jp-controls').click(function () {
        var $this = $(this);
        $musicId = $('#' + $this.parents('.music-sc').attr('id'));  // Music shortcode id
        $trackId = $('#' + $this.parents().attr('id'));
        $playPauseBtn = $trackId.find('.jp-controls .play-pause');  // Play-pause button click
        $trackText = $trackId.find('.link');  // track text click
        $jpAudio = $this.parents('.jp-audio');

        $discImage = $musicId.find('.image-album .disc-image');

        // Show/Hide Play/Pause button

        $musicId.find('.jp-controls').hide();
        $playPauseBtn.parents('.jp-controls').show();

        // Determine play or pause state

        if (!$jpAudio.hasClass('jp-state-playing'))
            musicPlayed = true;
        else
            musicPlayed = false;

        $('.music-sc .image-album .disc-image').removeClass('disc-image-state');
        $('.music-sc .jp-duration').css('right', '0');
        $('.music-sc .music-bar').css('display', 'none');

        if (musicPlayed) {
            pixflow_musicBtnAnimation($('.music-sc').not('#' + $musicId.attr('id')).find('.jp-controls .play-pause'), false);
            pixflow_musicBtnAnimation($musicId.find('.jp-controls .play-pause'), true);
            $discImage.addClass('disc-image-state');
            $(this).siblings('.jp-type-single').find('.jp-duration').css('right', '25px');
            $(this).siblings('.jp-type-single').find('.music-bar').css('display', 'block');
        } else {
            pixflow_musicBtnAnimation($musicId.find('.jp-controls .play-pause'), false);
        }

    });

    $('#' + $id + ' .jp-progress').bind('click', function () {
        var $this = $(this);
        $('#' + $id).jPlayer("stop");
        $('#' + $id + ' .jp-progress').not($this).find('.jp-play-bar').addClass('seekRefine');
        $this.find('.jp-play-bar').removeClass('seekRefine');
    });

}

function pixflow_musicFitSizes() {
    'use strict';

    var $musicId, $Image, $discImage, $musicImgContainer, $musicTxtsContainer, musicWidth, ImageWidth, musicIdTxtSize, musicIdImgSize, imgPosTop, imgPosLeft;

    $('.music-sc .jp-controls').show();

    $('.music-sc').each(function () {
        var $this = $(this),
            $jpControls = $this.find('.jp-controls');

        $musicId = $('#' + $this.attr('id'));
        $musicImgContainer = $musicId.find('.wrap-image');
        $musicTxtsContainer = $musicId.find('.music-main-container');
        if ($musicId.width() < 1024) {
            $musicId.css('transform', 'translateX(0)');
        }
        musicIdImgSize = $musicId.width() / 2.7;
        musicIdTxtSize = $musicId - musicIdImgSize;

        $musicImgContainer.css({width: musicIdImgSize, height: musicIdImgSize}); // set image part size
        $musicTxtsContainer.css('width', musicIdTxtSize); // set texts part size

        imgPosTop = $this.find('.btnSimulate').offset().top; // calculate play button position
        imgPosLeft = $this.find('.btnSimulate').offset().left; // calculate play button position

        $jpControls.offset({top: imgPosTop, left: imgPosLeft}).hide(); // set play button position center

        $discImage = $musicId.find('.image-album .disc-image');
        $discImage.css({width: '90%', height: '90%'}); // set disk image size

    });

    $('.music-sc .tracks .music-bar').hide();
    $('.music-sc .tracks li:nth-child(1) .jp-controls').show();

}

responsive_functions.pixflow_musicFitSizes = [];
document_ready_functions.pixflow_musicFitSizes = [];
window_resize_functions.pixflow_musicFitSizes = [];

function pixflow_musicBtnAnimation($obj, flag) {
    'use strict';

    var $ = jQuery;

    /* Play-Pause animation button */

    $obj.each(function () {

        var $this = $(this),
            bottom = $this.closest('.music-sc').find('.wrap-image').height() / 2,
            left = $this.closest('.music-sc').find('.wrap-image').width() / 2 - 40;

        if (!flag) {
            if ($this.hasClass('musicBtnClicked')) {

                if ($('body').width() > 800) {

                    $this.stop().animate({
                        'margin-left': -(left / 2),
                        'margin-top': bottom * .7,
                        width: '50px',
                        height: '50px'
                    }, 200, 'linear', function () {
                        $this.stop().animate({
                            'margin-left': 0,
                            'margin-top': 0,
                            width: '70px',
                            height: '70px'
                        }, 300, 'linear');
                    });
                }
                $this.removeClass('musicBtnClicked');
                $this.find('.icon').removeClass('icon-pause');
                $this.find('.icon').addClass('icon-play');
            }
        }
        else {
            if ($this.css('margin-left') != -(left) + "px") {

                if ($('body').width() > 800) {

                    $this.css('background-image', 'none');
                    $this.stop().animate({
                        'margin-left': -(left / 2),
                        'margin-top': bottom * .7,
                        width: '50px',
                        height: '50px'
                    }, 200, 'linear', function () {
                        $this.stop().animate({
                            'margin-left': -(left),
                            'margin-top': bottom,
                            width: '30px',
                            height: '30px'
                        }, 300, 'linear');
                    });
                }

                $this.find('.icon').removeClass('icon-play');
                $this.find('.icon').addClass('icon-pause');
                $this.addClass('musicBtnClicked');
            }

        }

    });

}
