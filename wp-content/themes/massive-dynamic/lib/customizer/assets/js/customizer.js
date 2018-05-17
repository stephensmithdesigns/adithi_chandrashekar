jQuery.noConflict();
"use strict";
var $ = jQuery, showUpAfter, headerTopWidth, headerBlock, blockSquare, layoutWidth, uniqueLoaded= 0,dirtyLoadedSettings = [];
if(window.self != window.top){
    window.top.location = window.location;
}
setTimeout(function(){
    "use strict";
    var mainLoader = $('.main-loader'),
        loaderLoading = mainLoader.find('.loading'),
        loaderSVG = loaderLoading.find('.circle svg'),
        loaderIcon = loaderLoading.find('.circle .icon'),
        loaderText = mainLoader.find('.text'),
        $rotatingText = loaderLoading.find('.rotating-text'),
        loadingText = loaderLoading.find('.loading-text');
    $rotatingText.stop().animate({right:100},{
        duration:2000,
        step:function(now,tween){
            $(this).html(Math.floor(now)+"%");
        },
        complete:function() {
            try {
                TweenMax.to(loadingText, 0.5, {
                    'opacity': 0, onComplete: function () { //loading text out
                        loadingText.text(customizerValues.allDone);
                    }
                });
                TweenMax.to(loadingText, 0.5, {'opacity': 1, delay: .6}); //all done in
                TweenMax.to(loaderLoading, 0.5, {'width': '75px', delay: .6});
                TweenMax.to(loaderSVG, 0.5, {'opacity': 0, delay: .6}); //svg out
                TweenMax.to(loaderIcon, 0.5, {
                    'opacity': 1, delay: .8, onComplete: function () { //width reduced
                        try {
                            TweenMax.to(loaderText, 0.5, {'opacity': 0, delay: 1.5});
                            TweenMax.to(loaderLoading, 0.5, {'opacity': 0, delay: 1.5});
                            TweenMax.to(mainLoader, 1, {
                                'opacity': '0', delay: 2, onComplete: function () {
                                    mainLoader.css('display', 'none');
                                }
                            });
                        } catch (e) {
                            mainLoader.css('display', 'none');
                        }
                    }
                });
            } catch (e) {
                mainLoader.css('display', 'none');
            }
        }
    })
},80000);

function pixflow_livePreviewObj() {
    "use strict";

    var $livePreview;
    if($('#customize-preview > iframe').length){
        $livePreview = $('#customize-preview > iframe')[0].contentWindow;
    }
    if(!$livePreview){
        $livePreview = window;
    }
    if(typeof $livePreview.$ != 'function'){
        $livePreview.$ = jQuery;
    }
    return $livePreview;
}

/*---------- Functions ----------*/

function pixflow_customizerLoading() {
    "use strict";

    $('.customizer-loading').css({'display': 'block'});

    TweenMax.to('.customizer-loading .dark-overlay', 0.1, {opacity: 1});
    TweenMax.to('.customizer-loading .text',1,{'opacity':1,delay:0.5});
    TweenMax.to('.customizer-loading .loading',0.3,{'opacity':1,delay:1.5});
    TweenMax.to('.customizer-loading .loading',0.3,{'border-color':'#d9d9d9',delay:2});
    TweenMax.to('.customizer-loading .loading',0.4,{'width':'125px',delay:2.5});
}

/* Required Function */
function pixflow_customRequired() {
    "use strict";

    /* remove side align - side width - header content width controller for modern side */
    var sideThemeVal = $('#input_header_side_theme').val(),
        topThemeVal = $('#input_header_theme').val(),
        layout = $("input:radio[name='_customize-radio-header_position']:checked").val();
    var $customizeControlHeaderTopHeight = $('#customize-control-header-top-height');
    $('#customize-control-header-top-height').css('display', 'list-item');
    var $customizeControlHeaderSideLogoRotator =$('#customize-control-header_side_logo_rotator');
    var $customizeControlHeaderSideAlign = $('#customize-control-header_side_align');
    var $customizeControlHeaderSideModernStyle = $('#customize-control-header_side_modern_style');
    var $customizeControlHeaderSideWidth = $('#customize-control-header-side-width');
    if (sideThemeVal == 'modern' && layout != 'top') {//remove align controller in modern side
        $customizeControlHeaderSideLogoRotator.css('display', 'list-item');
        $customizeControlHeaderSideAlign.css('display', 'none');
        $customizeControlHeaderSideWidth.css('display', 'none');
        $customizeControlHeaderSideModernStyle.css('display','block');
        $customizeControlHeaderSideWidth.removeClass('last');

    } else {
        $customizeControlHeaderSideLogoRotator.css('display', 'none');
        $customizeControlHeaderSideAlign.css('display', 'list-item');
        $customizeControlHeaderSideWidth.css('display', 'list-item');
        $customizeControlHeaderSideModernStyle.css('display','none');
        $customizeControlHeaderSideWidth.addClass('last');
    }

    if (('block' == topThemeVal && layout == 'top')||('modern' == topThemeVal && layout == 'top')||('gather' == topThemeVal && layout == 'top' && $("#input_gather_style").val() == 'style2')) {
        $customizeControlHeaderTopHeight.css('display', 'none');
    }else {
        $customizeControlHeaderTopHeight.css('display', 'list-item');
    }
    var $customizeControlHeaderSecondTitle = $('#customize-control-header_second_title');
    var $customizeControlHeaderSecondDescription = $('#customize-control-header_second_description');
    var $customizeControlNavColorSecond = $('#customize-control-nav_color_second') ;
    var $customizeControlNavHoverColorSecond = $('#customize-control-nav_hover_color_second');
    var $customizeControlHeaderBgTitleSecond = $('#customize-control-header_bg_title_second');
    var $customizeControlHeaderBgColortypeSecond = $('#customize-control-header_bg_color_type_second');
    var $customizeControlHeaderBgSolidColorSecond = $('#customize-control-header_bg_solid_color_second');
    var $customizeControlHeaderBgGradientSecondOrientation = $('#customize-control-header_bg_gradient_second_orientation');
    var $customizeControlHeaderBgGradientSecondGradient = $('#customize-control-header_bg_gradient_second_gradient');
    var $customizeControlHeaderBgGradientSecondColor1 = $('#customize-control-header_bg_gradient_second_color1');
    var $customizeControlHeaderBgGradientSecondColor2 = $('#customize-control-header_bg_gradient_second_color2');
    var $customizeControlHeaderBgOverlayDescriptionSecond = $('#customize-control-header_bg_overlay_description_second');
    var $customizeControlLogoStyleSecond = $('#customize-control-logo_style_second');
    if (layout == 'top' && $("#input_header_styles").val() == 'style1') {
        $customizeControlHeaderSecondTitle.css('display', 'none');
        $customizeControlHeaderSecondDescription.css('display', 'none');
        $customizeControlNavColorSecond.css('display', 'none');
        $customizeControlNavHoverColorSecond.css('display', 'none');
        $customizeControlHeaderBgTitleSecond.css('display', 'none');
        $customizeControlHeaderBgColortypeSecond.css('display', 'none');
        $customizeControlHeaderBgSolidColorSecond.css('display', 'none');
        $customizeControlHeaderBgGradientSecondOrientation.css('display', 'none');
        $customizeControlHeaderBgGradientSecondGradient.css('display', 'none');
        $customizeControlHeaderBgGradientSecondColor1.css('display', 'none');
        $customizeControlHeaderBgGradientSecondColor2.css('display', 'none');
        $customizeControlHeaderBgOverlayDescriptionSecond.css('display', 'none');
        $customizeControlLogoStyleSecond.css('display', 'none');
    } else {
        $customizeControlHeaderSecondTitle.css('display', 'list-item');
        $customizeControlHeaderSecondDescription.css('display', 'list-item');
        $customizeControlNavColorSecond.css('display', 'list-item');
        $customizeControlNavHoverColorSecond.css('display', 'list-item');
        $customizeControlHeaderBgTitleSecond.css('display', 'list-item');
        $customizeControlHeaderBgColortypeSecond.css('display', 'list-item');
        $customizeControlHeaderBgSolidColorSecond.css('display', 'list-item');
        $customizeControlHeaderBgGradientSecondOrientation.css('display', 'list-item');
        $customizeControlHeaderBgGradientSecondGradient.css('display', 'list-item');
        $customizeControlHeaderBgGradientSecondColor1.css('display', 'list-item');
        $customizeControlHeaderBgGradientSecondColor2.css('display', 'list-item');
        $customizeControlHeaderBgOverlayDescriptionSecond.css('display', 'list-item');
        $customizeControlLogoStyleSecond.css('display', 'list-item');
    }

    if (topThemeVal == 'modern' && layout == 'top') { //remove nav hover color controller in modern top
        $('#customize-control-nav_hover_color').css('display', 'none');
        if ($("#input_header_styles").val() != 'style1')
            $customizeControlNavHoverColorSecond.css('display', 'none');
    } else {
        $('#customize-control-nav_hover_color').css('display', 'list-item');
        if ($("#input_header_styles").val() != 'style1')
            $customizeControlNavHoverColorSecond.css('display', 'list-item');
    }

    var title = pixflow_livePreviewObj().$('title').text();
 

    $('#customize-control-header_side_theme .customizer-separator').remove();
    var $headerSideImage = $('#customize-control-header_side_image_image');
    $('#customize-control-header_styles .customizer-separator').remove();
    $headerSideImage.find('.customizer-separator').remove();

    if (layout != 'top'){
        $headerSideImage.css('display', 'list-item');
        $('#customize-control-header_side_image_repeat').css('display', 'list-item');
        $('#customize-control-header_side_image_position').css('display', 'list-item');
        $('#customize-control-header_side_image_size').css('display', 'list-item');
        $('#customize-control-header_side_image_description').css('display', 'list-item');
        $headerSideImage.addClass('first').addClass('glue').append('<hr class="customizer-separator" />');
        $('#customize-control-header_side_image_repeat').addClass('glue');
    }else{
        $headerSideImage.css('display', 'none');
        $('#customize-control-header_side_image_repeat').css('display', 'none');
        $('#customize-control-header_side_image_position').css('display', 'none');
        $('#customize-control-header_side_image_size').css('display', 'none');
        $('#customize-control-header_side_image_description').css('display', 'none');
    }

    if ($('#input_header_styles').val() == 'style3') {
        $('#customize-control-header_styles').removeClass('last').addClass('glue').append('<hr class="customizer-separator" />');
    } else {
        $('#customize-control-header_styles .customizer-separator').remove();
    }

    if ($('#input_header_theme').val() == 'modern') {
        $('#customize-control-header_theme').addClass('last').find('.customizer-separator').remove();
    }
    var $headerSideTheme = $('#customize-control-header_side_theme');
    if ($('#input_header_side_theme').val() == 'modern') {
        $headerSideTheme.addClass('last').find('.customizer-separator').remove();
    }else{
        $headerSideTheme.removeClass('last');
        if($('#customize-control-header_theme hr').length<1) {
            $headerSideTheme.append('<hr class="customizer-separator" />');
        }
    }


    if($('#customize-control-site_bg_image_image hr').length<1) {
        $('#customize-control-site_bg_image_image').append('<hr class="customizer-separator" />');
    }

    if($('#customize-control-sidebar_bg_image_image hr').length<1) {
        $('#customize-control-sidebar_bg_image_image').append('<hr class="customizer-separator" />');
    }
    var $headerBgGradientColor2 = $('#customize-control-header_bg_gradient_color2');
    $headerBgGradientColor2.removeClass('last').css({'border-bottom-left-radius'  : '0px',
        'border-bottom-right-radius' : '0px',
        'border-bottom' : 'none',
        'padding-bottom':'0px',
        'margin-bottom' : '0px'});

    if($headerBgGradientColor2.find('hr').length<1) {
        $headerBgGradientColor2.append('<hr class="customizer-separator" />');
    }
    var $headerBgGradientSecondColor2 =$('#customize-control-header_bg_gradient_second_color2');
    $headerBgGradientSecondColor2.removeClass('last');
    if($headerBgGradientSecondColor2.find('hr').length<1) {
        $headerBgGradientSecondColor2.append('<hr class="customizer-separator" />');
    }
    //background requirment
    var bgs = ['site','footer','page_sidebar','blog_sidebar','single_sidebar','shop_sidebar'];
    for(var i = 0;i<bgs.length;i++){
        var $bg = $('#'+bgs[i]+'_bg'),
            sidebar = false;
        if(bgs[i].slice(-7) == 'sidebar' || bgs[i] == 'footer'){
            sidebar = true;
        }
        if($bg.is(":checked") == false){
            if(sidebar){
                $('#customize-control-'+bgs[i]+'_bg').nextAll().css('display','none');
            }else{
                $('#sub-accordion-section-'+bgs[i]+'_bg_sec li.customize-control').not('#customize-control-'+bgs[i]+'_bg').css('display','none');
            }
        }else{
            if(sidebar){
                $('#customize-control-'+bgs[i]+'_bg').nextAll().css('display','block');
            }else{
                $('#sub-accordion-section-'+bgs[i]+'_bg_sec li.customize-control').not('#customize-control-'+bgs[i]+'_bg').css('display','block');
            }
        }
        $bg.change(function() {
            var bg_id = $(this).attr('id'),
                sidebar = false;
            if(bg_id.slice(-10) == 'sidebar_bg' || bg_id.slice(-9) == 'footer_bg'){
                sidebar = true;
            }
            bg_id = bg_id.substring(0, bg_id.length - 3);
            if($(this).is(":checked") == false){
                if(sidebar){
                    $('#customize-control-'+bg_id+'_bg').nextAll().css('display','none');
                }else{
                    $('#sub-accordion-section-'+bg_id+'_bg_sec li.customize-control').not('#customize-control-'+bg_id+'_bg').css('display','none');
                }
            }else{
                if(sidebar){
                    $('#customize-control-'+bg_id+'_bg').nextAll().css('display','block');
                }else{
                    $('#sub-accordion-section-'+bg_id+'_bg_sec li.customize-control').not('#customize-control-'+bg_id+'_bg').css('display','block');
                }
            }
        });
    }

    //Sidebar requirement
    var sidebars = ['','-blog','-single','-shop'];
    for(var i = 0;i<sidebars.length;i++){
        var $sidebar = $('#sidebar-switch'+sidebars[i]);
        if($sidebar.is(":checked") == false){
            $('#customize-control-sidebar-switch'+sidebars[i]).nextAll().css('display','none');
        }else{
            $('#customize-control-sidebar-switch'+sidebars[i]).nextAll().css('display','block');
        }
        $sidebar.change(function() {
            var sidebar_id = $(this).attr('id');
            if($(this).is(":checked") == false){
                $('#customize-control-'+sidebar_id).nextAll().css('display','none');
            }else{
                $('#customize-control-'+sidebar_id).nextAll().css('display','block');
            }
        });
    }
    //bussinessbar requirement
    var $businessbar = $('#businessBar_enable');
    if($businessbar.is(":checked") == false){
        $('#customize-control-businessBar_enable').nextAll().css('display','none');
    }else{
        $('#customize-control-businessBar_enable').nextAll().css('display','block');
    }
    $businessbar.change(function() {
        if($(this).is(":checked") == false){
            $('#customize-control-businessBar_enable').nextAll().css('display','none');
        }else{
            $('#customize-control-businessBar_enable').nextAll().css('display','block');
        }
    });

    //classic top wireframe style
    var layout = $("input:radio[name='_customize-radio-header_position']:checked").val(),
        nav_color = wp.customize.control('nav_color').setting();
    if(layout == 'top' && $('#input_header_theme').val() == "classic" && $('#input_classic_style').val() == "wireframe"){
        $('#customize-control-header_border_enable').css('display','none');
        pixflow_livePreviewObj().$('header:not(.header-clone) > .color-overlay').css({ borderBottom: '1px solid', borderBottomColor: pixflow_colorConvertor(nav_color,'rgba',0.3) });
    }

}

function pixflow_headerSecondSetting() {
    "use strict";
    pixflow_livePreviewObj().$('.header-second-setting').remove();
    pixflow_livePreviewObj().$('body').append(
        "<span class='header-second-setting'>" +
        "<input value='" + $('#input_nav_color_second').val() + "'                                    id='navColorSecond'                 type='hidden' />" +
        "<input value='" + $('#input_nav_hover_color_second').val() + "'                              id='navHoverColorSecond'            type='hidden' />" +
        "<input value='" + showUpAfter + "'                                                           id='showUpAfter'                    type='hidden' />" +
        "<input value='" + $('#input_show_up_style').val() + "'                                       id='showUpStyle'                    type='hidden' />" +
        "<input value='" + $('#input_header_bg_solid_color_second').val() + "'                        id='bgSolidColorSecond'             type='hidden' />" +
        "<input value='" + $('#input_header_bg_gradient_second_orientation').val() + "'               id='bgGradientSecondOrientation'    type='hidden' />" +
        "<input value='" + $('#input_header_bg_gradient_second_color1').val() + "'                    id='bgGradientSecondColor1'         type='hidden' />" +
        "<input value='" + $('#input_header_bg_gradient_second_color2').val() + "'                    id='bgGradientSecondColor2'         type='hidden' />" +
        "<input value='" + pixflow_livePreviewObj().$('.layout').css('padding-top') + "'                   id='headerSiteTop'                  type='hidden' />" +
        "<input value='" + $('#input_nav_color').val() + "'                                           id='navColor'                       type='hidden' />" +
        "<input value='" + $('#input_nav_hover_color').val() + "'                                     id='navHoverColor'                  type='hidden' />" +
        "<input value='" + $('#input_header_bg_solid_color').val() + "'                               id='bgSolidColor'                   type='hidden' />" +
        "<input value='" + $('#input_header_bg_gradient_orientation').val() + "'                      id='bgGradientOrientation'          type='hidden' />" +
        "<input value='" + $('#input_header_bg_gradient_color1').val() + "'                           id='bgGradientColor1'               type='hidden' />" +
        "<input value='" + $('#input_header_bg_gradient_color2').val() + "'                           id='bgGradientColor2'               type='hidden' />" +
        "<input value='" + $('#customize-control-logo_style .items').html().toLowerCase() + "'        id='logoStyle'                      type='hidden' />" +
        "<input value='" + $('#customize-control-logo_style_second .items').html().toLowerCase() + "' id='logoStyleSecond'                type='hidden' />" +
        "<input value='" + headerTopWidth + "'                                                        id='headerTopWidth'                 type='hidden' />" +
        "<input value='" + layoutWidth + "'                                                           id='layoutWidth'                    type='hidden' />" +
        "</span>");
    try{
        pixflow_livePreviewObj().pixflow_showHeaderChanges();
    }catch (e){}
}

function pixflow_headerFirstSetting() {
    "use strict";
    pixflow_headerSecondSetting();
}

function pixflow_customizerCheckboxStyleSwitchery() {
    "use strict";
    var elems = Array.prototype.slice.call(document.querySelectorAll('.pixflow-customizer-checkbox input'));
    elems.forEach(function (html) {
        var switchery = new Switchery(html, {color: '#0ad1b7', disabledOpacity: 1, speed: '0.4s'});
    });
}

/* functions to link controls */
function pixflow_setClassGlue() {
    "use strict";

    var $lastElems = $('.last'),
        $firstElems = $('.first'),
        $btnSet = $('.buttonset'),
        $glueElems = $('.glue');

    $glueElems.each(function () {
        $(this).parent('li').addClass('glue');
        $(this).removeClass('glue');
    });

    $firstElems.each(function () {
        $(this).parent('li').addClass('first');
        $(this).removeClass('first');
    });

    $lastElems.each(function () {
        $(this).parent('li').addClass('last');
        $(this).removeClass('last');
    });

    $btnSet.each(function () {
        $(this).parent('li').addClass('buttonset');
    });
}

/* Select Element(Tag) Functions */
function pixflow_selectHeight($items) {
    "use strict";
    var itemsLen = ($items.length >= 5) ? 5 : $items.length,
        sepratorsHeight = 0,
        itemsHeight = 0 ;

    sepratorsHeight = (itemsLen-1) * 10.5;
    itemsHeight = itemsLen * 54;
    return itemsHeight + sepratorsHeight;
}

function pixflow_selectField() {
    "use strict";

    var $ = jQuery,
        $select = $('.ios-select');
    $select.click(function () {
        pixflow_closeDropDown();
        var $this = $(this);
        // load google fonts on select field with font-picker class
        if($this.parent().hasClass('font-picker') && !$this.hasClass('fonts-loaded')){
            $this.find('.select').html('<span class="select-item">'+customizerValues.loading+'<span class="cd-dropdown-option"></span></span>');
            jQuery.ajax({
                type: 'post',
                url: customizerValues.ajax_url,
                data: {
                    action: 'pixflow_googleFontsDropDown',
                    nonce: customizerValues.ajax_nonce,
                    id: $this.attr('data-id')
                },
                success: function (response) {
                    $this.find('.select').html(response);
                    $this.addClass('fonts-loaded');
                    pixflow_dropDownController($this.attr('data-id'));
                }
            });
        }
        var $sItemsContainer = $(this).find('.select-outline'),
            $sItems = $sItemsContainer.find('span.select-item'),
            sH = pixflow_selectHeight($sItems),
            $nextLis = $(this).parents('li.customize-control-select').nextAll('li:visible'),
            $ul = $(this).parents('.accordion-section-content'),
            ulHeight = $ul.outerHeight(true);

        if ($nextLis.length > $sItems.length) {
            $sItemsContainer.addClass('down');
        } else if ($nextLis.length <= $sItems.length){

            var lisHeight = 0;
            if ($nextLis.length > 0) {
               /* $nextLis.each(function () {
                    if (!$(this).hasClass('controller-hide'))
                        lisHeight += $(this).outerHeight(true);
                });*/
            }

            if (lisHeight < sH) {
                ulHeight += sH - lisHeight;
                /*if ($ul.css('height') != 'auto') {
                    $ul.attr('style','height:'+ ulHeight + 'px !important;');
                }*/

                $sItemsContainer.addClass('down').attr('shift', ulHeight - (sH - lisHeight));

            } else {
                $sItemsContainer.addClass('down');
            }
        }
    });

    $(document).click(function(e){
         pixflow_closeDropDown();
    });

    $('.ios-select , .select-outline').click(function(e){
        e.stopPropagation();
    });

    /* select clicked option */
    $('.customize-control-select .select .select-item').click( function(){
        $(this).siblings('.select-item').removeClass('selected');
        $(this).addClass('selected');
    });

}

function pixflow_closeDropDown(){
    'use strict';
    var $this = $('.customize-control-select'),
        $sItemsContainer = $this.find('.select-outline'),
        $sItems = $sItemsContainer.find('span.select-item'),
        sH = pixflow_selectHeight($sItems),
        $nextLis = $this.parents('li.customize-control-select').nextAll('li:visible'),
        $ul = $this.parents('.accordion-section-content'),
        ulHeight = $ul.outerHeight(true);

    if ($nextLis.length > $sItems.length) {
        $sItemsContainer.removeClass('down');
    }else if ($nextLis.length <= $sItems.length){
        var lisHeight = 0;
        if ($nextLis.length > 0) {
            $nextLis.each(function () {
                /*if (!$(this).hasClass('controller-hide'))
                    lisHeight += $(this).outerHeight(true);*/
            });
        }

        if (lisHeight < sH){
            $sItemsContainer.removeClass('down');
            ulHeight -= sH - lisHeight;
            // $ul.attr('style','height : auto !important;');

        }else{
            $sItemsContainer.removeClass('down');
        }
    }
}

function pixflow_initSliderControllers(){
    "use strict";
    var $sliders = $('.slider-controller');
    if($sliders.length<1){
        return;
    }
    function pixflow_updateDesimal(val,step){
        'use strict';
        if(step>=1){
            return val.substr(0, val.length-3);
        }else if(step >= 0.1){
            return val.substr(0, val.length-1);
        }else if(step <0.1){
            return val;
        }
    }
    $sliders.each(function () {
        var $slider = $(this),
            id = $slider.attr('data-id'),
            MDslider = document.getElementById('slider_'+id),
            start = Number($slider.attr('value')),
            min = Number($slider.attr('min')),
            max = Number($slider.attr('max')),
            step = Number($slider.attr('step')),
            prefix = $slider.attr('unit'),
            $input = $('#input_'+id),
            $sliderValue = $("#decimal_"+id);
        noUiSlider.create(MDslider, {
            start: [ start ],
            step: step,
            range: {
                'min': min,
                'max': max
            }
        });

        MDslider.noUiSlider.on('slide', function(values){
            if($slider.attr('data-transform') != 'refresh'){
                $input.val(pixflow_updateDesimal(values[0],step)).keyup().trigger('change');
            }
            $sliderValue.html(pixflow_updateDesimal(values[0],step) + prefix);
        });
        MDslider.noUiSlider.on('set', function(values){
            $input.val(pixflow_updateDesimal(values[0],step)).keyup().trigger('change');
            $sliderValue.html(pixflow_updateDesimal(values[0],step) + prefix);
            if($slider.attr('data-transform') == 'refresh'){
                pixflow_customizerLoading('slider');
            }
        });
    });
}

function pixflow_colorController(){
    'use strict';
    $('[data-controller-type="color"]').each(function(){
        var defaultVal,
            currentPicker = $(this),
            id = currentPicker.attr('data-controller-id'),
            transport = currentPicker.attr('data-controller-transport');
        currentPicker.spectrum({
            color: currentPicker.attr('data-default-color'),
            showAlpha: currentPicker.attr('data-alpha'),
            clickoutFiresChange: true,
            preferredFormat: "hex",
            chooseText: "ADD COLOR",
            cancelText: "",
            showInput: true,
            className: id + '_alpha',
            change: function(color) {
                $( "#input_"+id ).val(color.toRgbString() );
                var numberPattern = /\d+/g,
                    colorObj = color.toRgbString().match(numberPattern),
                    item = $('li#customize-control-'+id+' label div.sp-replacer div.sp-preview div.sp-preview-inner'),
                    num1 = parseInt(colorObj[0]),
                    num2 = parseInt(colorObj[1]),
                    num3 = parseInt(colorObj[2]);
                if(num1 >= 250 && num2 >= 250 && num3 >= 250 ){
                    item.css('border','1px solid #f4f4f4');
                }else{
                    item.css('border','none');
                }
                if('refresh' == transport) {
                    pixflow_customizerLoading('rgba');
                }
            },
            beforeShow: function() {
                defaultVal = $(this).val();
            }
        });
        var numberPattern = /\d+/g,
            colorObj = currentPicker.attr('data-default-color').match(numberPattern),
            item = $('li#customize-control-'+id+' label div.sp-replacer div.sp-preview div.sp-preview-inner'),
            num1 = parseInt(colorObj[0]),
            num2 = parseInt(colorObj[1]),
            num3 = parseInt(colorObj[2]);
        if(num1 >= 250 && num2 >= 250 && num3 >= 250 ){
            item.css('border','1px solid #f4f4f4');
        }else{
            item.css('border','none');
        }
        if('portfolio_accent' == id){
            var b = true;
        }
        if(currentPicker.attr('data-alpha') == 'true'){
            $('.'+id+'_alpha .alpha-feature').css('display','block');
        }else{
            $('.'+id+'_alpha .alpha-feature').css('display','none');
            $('.'+id+'_alpha .sp-fill').css('padding-top','45%');
            $('.'+id+'_alpha .sp-top').css('margin-bottom','12px');
        }
        //Cancel button click
        $('.'+id+'_alpha .sp-cancel').click(function(){
	        currentPicker.val(defaultVal).keyup().trigger('change');
        })
    });
}

function pixflow_switchController(){
    'use strict';
    $('[data-controller-type="switch"]').each(function(){
        var $this = $(this),
            id = $this.attr('data-controller-id'),
            transport = $this.attr('data-controller-transport');
        $( "#input_"+id ).buttonset();
        var $parent = $( "#input_"+id).parents('.customize-control-switch');
        if($('#'+id).is(":checked")) {
            if($parent.hasClass('first')&& $parent.hasClass('last')&& $parent.hasClass('glue')) {
                $parent.removeClass('last');
            }
        }

        $('#'+id).change(function() {
            if($(this).is(":checked")) {
                $('#'+id+'-switch-status').html($this.attr('data-checked-text'));
                    if($parent.hasClass('first') && $parent.hasClass('last') && $parent.hasClass('glue')){
                        $parent.removeClass('last');
                    }
                }else{
                $('#'+id+'-switch-status').html($this.attr('data-unchecked-text'));
                    if($parent.hasClass('first')  && $parent.hasClass('glue')){
                        $parent.addClass('last');
                    }
                }
            if(transport == 'refresh'){
                pixflow_customizerLoading();
            }
        });
    });
}

/* Get inline Style */
function pixflow_getStyle($selector, styleName) {
    "use strict";
    var str, from, to, res;
    if (!$selector.length)
        return 0;
    str = ($selector.attr('style') === undefined) ? '' : $selector.attr('style');
    from = str.indexOf(styleName) + styleName.length+1;
    to = from + 3;
    res = str.substring(from, to);
    res = (isNaN(parseInt(res,10))) ? 110 : res;
    return res;
}

/* return rgb Val */
function pixflow_colorConvertor(color, to, alpha){
    "use strict";

    alpha = ( typeof  alpha == 'undefind' ) ? 1 : alpha ;
    var format ;
    if(!color)
        color = '';
    if (color.indexOf('#') > -1 ){
        format = 'hex';
    }else {
        if (color.indexOf('rgba') > -1 ){
            format = 'rgba';
        }else if (color.indexOf('rgb') > -1){
            format = 'rgb';
        }else {
            return '#000';
        }
    }

    switch (format){
        case 'rgb':
            if(to == 'rgba'){
               var new_col = color.replace(/rgb/i, "rgba");
               return new_col = new_col.replace(/\)/i,','+alpha+')');
            }
            else if (to == 'hex'){
                color = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
                return (color && color.length === 4) ? "#" +
                ("0" + parseInt(color[1],10).toString(16)).slice(-2) +
                ("0" + parseInt(color[2],10).toString(16)).slice(-2) +
                ("0" + parseInt(color[3],10).toString(16)).slice(-2) : '';
            }else{
                return color;
            }
            break;

        case 'rgba':
            if (to == 'rgb'){
                var rgb = color.match(/\d+/g),
                    counter = 0,
                    arrayBlockRect = [];
                for (var i in rgb) {
                    arrayBlockRect[i] = rgb[i];
                    counter++;
                    if (counter == 3)
                        break;
                }

                return ('rgb(' + arrayBlockRect + ')');
            }
            else if (to == 'hex'){
                color = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
                return (color && color.length === 4) ? "#" +
                ("0" + parseInt(color[1],10).toString(16)).slice(-2) +
                ("0" + parseInt(color[2],10).toString(16)).slice(-2) +
                ("0" + parseInt(color[3],10).toString(16)).slice(-2) : '';

            }
            else if (to == 'rgba'){
                var opacity=color.replace(/^.*,(.+)\)/,'$1');
                return color.replace(opacity, alpha);
            }else if (to == 'rgb')
                return color;
            break;

        case 'hex':
            var h = color.replace('#', '');
            h =  h.match(new RegExp('(.{'+h.length/3+'})', 'g'));

            for(var i=0; i<h.length; i++)
                h[i] = parseInt(h[i].length==1? h[i]+h[i]:h[i], 16);

            if(to == 'rgb'){
                return 'rgb('+h.join(',')+')';
            }else if (to == 'rgba'){
                h.push(alpha)
                return 'rgba('+h.join(',')+')';
            }else if(to == 'hex'){
                return color;
            }

    }


}

/*--------------- $(document).ready  ---------------*/
var documentReadyCalled = false;
function pixflow_pageLoading() {
    if (document.getElementById){
        document.querySelector('.main-loader').style.visibility='hidden';
        }
    else{
        if (document.layers){
            document.loading.visibility = 'hidden';
        }
        else {
            document.all.loading.style.visibility = 'hidden';
        }
    }
}

function pixflow_documentReady() {
    "use strict";
    if(documentReadyCalled) return;
    documentReadyCalled = true;

	$('<div id="loading"></div>').appendTo(document.body);
    try{
        pixflow_initSliderControllers();
    }catch(e){}

    $('.set-logo').click(function(e){
        e.preventDefault();
        $('.back-btn').click();
        $('.back-btn').click();
        $('#accordion-section-branding .accordion-section-title').click();
        setTimeout(function(){
            $('.back-btn').css('display','block');
        },200)

    });

    var $navColorHistory = '#fff',
        $navColorHoverHistory = '#000',
        $sideIconSideClassic = pixflow_livePreviewObj().$('header.side-classic'),
        $sideIconHover = $sideIconSideClassic.find('.side nav ul > li'),
        $sideIconHoverParent = $sideIconHover.find('.menu-title span'),
        $flag = 1,
        $iconsPack, $samePartBlock, $samePartHeaderTop, $menuHoverATop, $samePartClassic,
        $menuHoverAClassic, $blockRecLi, $blockRecMenuTitle, $colorHistory,
        $iconspackLi, $iconsPackFront;

    /*******************************************************************
     *                  Header Background Controls
     ******************************************************************/
    /* Header Overlay Type */
    wp.customize('header_bg_color_type', function (value) {
        value.bind(function (newval) {
            if (newval == 'solid') {
                var $solidColor = $('#input_header_bg_solid_color').val();
                pixflow_livePreviewObj().$('header:not(.header-clone) > .color-overlay, header.side-modern .footer .info .footer-content').css({'background': 'none', 'background-color': $solidColor});
            } else if (newval == 'gradient') {
                if($('#input_header_theme').val() == 'block' && $('input_block_style').val() == 'style1'){
                    return;
                }
                pixflow_makeGradient('header_bg_gradient','header:not(.header-clone) .color-overlay');
                pixflow_makeGradient('header_bg_gradient','header.side-modern .footer .info .footer-content');
                pixflow_livePreviewObj().$('header:not(.header-clone) .color-overlay').css('background-size','100% 100%');
            }
        });
    });

    /* Header Overlay Gradient - color1 */
    wp.customize('header_bg_gradient_color1', function (value) {
        value.bind(function (newval) {

            if( $('#input_header_theme').val() == 'block' && $('#input_block_style').val() == 'style1') {
                return;
            }
            if(wp.customize.control('header_bg_color_type').setting() != 'solid') {
                pixflow_makeGradient('header_bg_gradient', 'header:not(.header-clone) .color-overlay,header_bg_gradient', newval);
            }
            pixflow_livePreviewObj().$('header .color-overlay').css('background-size','100% 100%');
            pixflow_headerFirstSetting();
            pixflow_livePreviewObj().$(window).trigger('scroll');
        });
    });

    /* Header Overlay Gradient - color2 */
    wp.customize('header_bg_gradient_color2', function (value) {
        value.bind(function (newval) {
            if( $('#input_header_theme').val() == 'block' && $('#input_block_style').val() == 'style1') {
                return;
            }
            if(wp.customize.control('header_bg_color_type').setting() != 'solid') {
                pixflow_makeGradient('header_bg_gradient', 'header:not(.header-clone) .color-overlay,header_bg_gradient', '', newval);
            }
            pixflow_livePreviewObj().$('header .color-overlay').css('background-size','100% 100%');

            pixflow_headerFirstSetting();

            pixflow_livePreviewObj().$(window).trigger('scroll');
        });
    });

    /* Header Overlay Gradient - Orientation */
    wp.customize('header_bg_gradient_orientation', function (value) {
        value.bind(function (newval) {

            if( $('#input_header_theme').val() == 'block' && $('#input_block_style').val() == 'style1') {
                return;
            }
            if(wp.customize.control('header_bg_color_type').setting() != 'solid') {
                pixflow_makeGradient('header_bg_gradient', 'header:not(.header-clone) .color-overlay,header_bg_gradient', '', '', newval);
            }
            pixflow_livePreviewObj().$('header .color-overlay').css('background-size','100% 100%');
            pixflow_headerFirstSetting();
            pixflow_livePreviewObj().$(window).trigger('scroll');
        });
    });

    var $samePart, $menuHover, $iconsPackHover, rgb;

    /* Header Overlay Solid Color */
    wp.customize('header_bg_solid_color', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('header.side-modern .footer .info .footer-content .copyright, header.side-modern .footer .info .footer-content .footer-socials, header.side-modern .search-form input[type="text"]').css('background', newval);

            // Menu Hover
            $samePart       = pixflow_livePreviewObj().$('header.top-block:not(.header-clone) .style-style1');
            $menuHover      = $samePart.find('nav > ul > li');
            $iconsPackHover = $samePart.find('.icons-pack li');

            // Menu Hover Block Rectangle
            $samePartBlock     = pixflow_livePreviewObj().$('header.top-block:not(.header-clone) .style-style1');
            $blockRecLi        = $samePartBlock.find('nav > ul > li');
            $blockRecMenuTitle = $blockRecLi.find('> a .menu-title');

            // Icons pack
            $iconspackLi = $samePartBlock.find('.icons-pack li.icon');
            $iconsPackFront = $iconspackLi.find('.title-content');

            // Header Top Block Rectangle
            $colorHistory = $('#customize-control-nav_hover_color .nav_hover_color_alpha .sp-preview-inner').css('backgroundColor');
            $colorHistory = pixflow_colorConvertor($colorHistory,'rgb');
            rgb = pixflow_colorConvertor(newval,'rgb');
            if ($samePartBlock.length) {
                // Navigation

                $blockRecLi.hover(function () {
                    $(this).find($blockRecMenuTitle).css({backgroundColor: $colorHistory});
                }, function () {
                    $(this).find($blockRecMenuTitle).css({backgroundColor: rgb});
                });

                // Icons pack
                $iconspackLi.hover(function () {
                    $(this).find($iconsPackFront).css({backgroundColor: $colorHistory});
                }, function () {
                    $(this).find($iconsPackFront).css({backgroundColor: rgb});
                });
            }
            pixflow_modernTopHover(); // Hover for Menu Top Modern

            if ( pixflow_livePreviewObj().$('header.top-block:not(.header-clone) .style-style1').length )
            {
                // header
                pixflow_livePreviewObj().$('header:not(.header-clone) > .color-overlay').css('background-color', rgb );

                // menu
                pixflow_livePreviewObj().$('nav > ul > li > a .menu-title').css('background-color', rgb);
                $menuHover.find('nav > ul > li > a .hover-effect').css('color', rgb);

                // icons pack
                pixflow_livePreviewObj().$('.elem-container .title-content').css('background-color', rgb);
                $iconsPackHover.find('.elem-container .hover-content').css('color', rgb);
            }
            else {
                // header
                pixflow_livePreviewObj().$('header:not(.header-clone) > .color-overlay').css('background-color', newval );

                // menu
                $menuHover.find('nav > ul > li > a .hover-effect').css('color', newval);

                // icons pack
                $iconsPackHover.find('.elem-container .hover-content').css('color', newval);
            }
            pixflow_headerFirstSetting();
        });

    });

    /* Header background Image Opacity */
    wp.customize('header_bg_image_opacity', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('header > .bg-image').css('opacity', newval);
        });
    });


    function pixflow_modernTopHover() {

        var layout = $("input:radio[name='_customize-radio-header_position']:checked").val();
        if ($('#input_header_theme').val() == 'modern' && layout == 'top') {
            var aColor = $('#input_nav_color').val();
            var colorOverlay = $('#input_header_bg_solid_color').val();
            pixflow_livePreviewObj().$('head').append("<style>" +
                "header.top-modern .btn-1b:after{ background : " + aColor + "}" +
                "header.top-modern .btn-1b:active, header.top-modern .btn-1b > a .title:active{color:" + colorOverlay + "}</style>");

            pixflow_livePreviewObj().$('header.top-modern .btn-1b').hover(function () {
                $(this).find('> a .title').css('color', colorOverlay);
                $(this).find('> a .icon').css('color', colorOverlay);
            }, function () {
                $(this).find('> a .title').css('color', aColor);
                $(this).find('> a .icon').css('color', aColor);
            });
        }
    }

    wp.customize('header_side_modern_style', function (value) {
        value.bind(function (newval) {
            var $elem = pixflow_livePreviewObj().$('header > .content'),
                className = 'style-'+newval;

            $elem.removeClass('style-style1 style-style2').addClass(className);

            if (newval == 'style1'){
                $elem.find('nav > ul > li').css({height:'auto',opacity:1,transform:'rotateY(0deg)'});
                if ($elem.find('nav .empty-dropdown').length){
                    $elem.find('nav .empty-dropdown').remove();
                }
            }else{
                $elem.find('nav > ul ').css({opacity:1,transform:'rotateY(0deg)'})
            }

            $elem.find('*[class *= "flip"]').each(function(){
               $(this).removeClass('flip0 flip1 flip2');
            });

            pixflow_livePreviewObj().pixflow_headerSideModern();
            pixflow_modernSideColor();

        });
    });

    /* Header dropDown Background */
    wp.customize('drop_down_style',function(value){
        value.bind(function(newval){
            if (newval == 'simple' ){
                pixflow_livePreviewObj().$('.top .navigation .side-line,.gather-overlay .navigation .side-line').each(function(){
                   $(this).removeClass('side-line').addClass('simple');
                });
            }else{
                pixflow_livePreviewObj().$('.top .navigation .simple,.gather-overlay .navigation .simple').each(function(){
                    $(this).removeClass('simple').addClass('side-line');
                });
            }
        });
    })

    wp.customize('dropdown_bg_solid_color', function (value) {
        value.bind(function (newval) {
            if (pixflow_livePreviewObj().$('.side-modern').length) {
                pixflow_livePreviewObj().$('.side-modern nav.navigation').css('background-color', 'transparent');
                pixflow_livePreviewObj().$('.side-modern nav.navigation > ul >li ').css('background-color', newval);
            } else {
                pixflow_livePreviewObj().$('nav.navigation .dropdown .megamenu-dropdown-overlay ').css('background-color', newval);
                pixflow_livePreviewObj().$('nav.navigation li.megamenu .dropdown .dropdown .megamenu-dropdown-overlay ').css('background-color', 'transparent');
            }
        });
    });

    wp.customize('dropdown_heading_solid_color', function (value) {
        value.bind(function (newval) {
            if( pixflow_livePreviewObj().$('.side-classic').length ){
                //sidemenu
            }else if (pixflow_livePreviewObj().$('.side-modern').length){
                //sidemodern menu
            }else{
                pixflow_livePreviewObj().$('nav.navigation > ul > li > ul > li > a').css('color', newval);
            }
        });
    });

    /* Header dropDown Background */
    wp.customize('dropdown_fg_solid_color', function (value) {
        value.bind(function (newval) {
            if( pixflow_livePreviewObj().$('.side-classic').length ){
                pixflow_livePreviewObj().$('.side-classic nav > ul > li.megamenu li a').css('color', newval);
                pixflow_livePreviewObj().$('.side-classic nav > ul > li.has-dropdown:not(.megamenu) a').css('color', 'inherit');
            }else if (pixflow_livePreviewObj().$('.side-modern').length){
                pixflow_livePreviewObj().$('header nav a').css('color', newval);
            }else{
                pixflow_livePreviewObj().$('nav.navigation .dropdown a').not('nav.navigation ul > li.megamenu > .dropdown > li > a').css('color', newval);
            }

        });
    });

    /*******************************************************************
     *                  Header Menu Button
     ******************************************************************/
    wp.customize('menu_button_style', function (value) {
        value.bind(function (newval) {
            if( pixflow_livePreviewObj().$('.top-classic').length ){
                pixflow_livePreviewObj().$('header.top-classic  nav > ul >.item_button').removeClass('rectangle-style oval-style oval_outline-style rectangle_outline-style').addClass(newval+'-style');
                set_menu_button_background($('#input_button_bg_color').val());
            }
        });
    });

    wp.customize('button_bg_color', function (value) {
        value.bind(function (newval) {
            set_menu_button_background(newval);
            pixflow_header_button_hover();
        });
    });

    wp.customize('button_text_color', function (value) {
        value.bind(function (newval) {
            set_menu_button_text_color(newval);
            pixflow_header_button_hover();
        });
    });

    wp.customize('button_hover_bg_color', function (value) {
        value.bind(function (newval) {
            pixflow_header_button_hover();
        });
    });

    wp.customize('button_hover_text_color', function (value) {
        value.bind(function (newval) {
            pixflow_header_button_hover();
        });
    });

    /*******************************************************************
     *                  Typography Controls
     ******************************************************************/

    /******* h1 *******/
        //h1 Color
    wp.customize('h1_color', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('h1').css('color', newval);
        });
    });

    //h1 Size
    wp.customize('h1_size', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('h1:not(.inline-editor-title h1)').css('font-size', newval + 'px');
        });
    });

    //h1 Height
    wp.customize('h1_lineHeight', function (value) {
        value.bind(function (newVal) {
            pixflow_livePreviewObj().$('h1:not(.inline-editor-title h1)').css({'line-height': newVal + 'px'});
        })
    });

    //h1 Letter space
    wp.customize('h1_letterSpace', function (value) {
        value.bind(function (newVal) {
            pixflow_livePreviewObj().$('h1').css({letterSpacing: newVal + 'px'});
        })
    });

    //h1 Style
    wp.customize('h1_style', function (value) {
        value.bind(function (newVal) {
            if (newVal) {
                pixflow_livePreviewObj().$('h1').css({fontStyle: 'italic'});
            } else {
                pixflow_livePreviewObj().$('h1').css({fontStyle: 'normal'});
            }
        });
    });

    /******* h2 *******/
    //h2 Color
    wp.customize('h2_color', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('h2').css('color', newval);
        });
    });

    //h2 size
    wp.customize('h2_size', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('h2:not(.inline-editor-title h2)').css('font-size', newval + 'px');
        });
    });

    //h2 Height
    wp.customize('h2_lineHeight', function (value) {
        value.bind(function (newVal) {
            pixflow_livePreviewObj().$('h2:not(.inline-editor-title h2)').css({'line-height': newVal + 'px'});
        })
    });

    //h2 Letter space
    wp.customize('h2_letterSpace', function (value) {
        value.bind(function (newVal) {
            pixflow_livePreviewObj().$('h2').css({letterSpacing: newVal + 'px'});
        })
    });

    //h2 Style
    wp.customize('h2_style', function (value) {
        value.bind(function (newVal) {
            if (newVal) {
                pixflow_livePreviewObj().$('h2').css({fontStyle: 'italic'});
            } else {
                pixflow_livePreviewObj().$('h2').css({fontStyle: 'normal'});
            }
        });
    });

    /******* h3 ********/
    //h3 color
    wp.customize('h3_color', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('h3').css('color', newval);
        });
    });

    //h3 size
    wp.customize('h3_size', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('h3:not(.inline-editor-title h3)').css('font-size', newval + 'px');
        });
    });

    //h3 Height
    wp.customize('h3_lineHeight', function (value) {
        value.bind(function (newVal) {
            pixflow_livePreviewObj().$('h3:not(.inline-editor-title h3)').css({'line-height': newVal + 'px'});
        })
    });

    //h3 Letter space
    wp.customize('h3_letterSpace', function (value) {
        value.bind(function (newVal) {
            pixflow_livePreviewObj().$('h3').css({letterSpacing: newVal + 'px'});
        })
    });

    //h3 Style
    wp.customize('h3_style', function (value) {
        value.bind(function (newVal) {
            if (newVal) {
                pixflow_livePreviewObj().$('h3').css({fontStyle: 'italic'});
            } else {
                pixflow_livePreviewObj().$('h3').css({fontStyle: 'normal'});
            }
        });
    });

    /******* h4 *******/
    //h4 color
    wp.customize('h4_color', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('h4').css('color', newval);
        });
    });

    //h4 size
    wp.customize('h4_size', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('h4:not(.inline-editor-title h4)').css('font-size', newval + 'px');
        });
    });

    //h4 Height
    wp.customize('h4_lineHeight', function (value) {
        value.bind(function (newVal) {
            pixflow_livePreviewObj().$('h4:not(.inline-editor-title h4)').css({'line-height': newVal + 'px'});
        })
    });

    //h4 Letter space
    wp.customize('h4_letterSpace', function (value) {
        value.bind(function (newVal) {
            pixflow_livePreviewObj().$('h4').css({letterSpacing: newVal + 'px'});
        })
    });

    //h4 Style
    wp.customize('h4_style', function (value) {
        value.bind(function (newVal) {
            if (newVal) {
                pixflow_livePreviewObj().$('h4').css({fontStyle: 'italic'});
            } else {
                pixflow_livePreviewObj().$('h4').css({fontStyle: 'normal'});
            }
        });
    });

    /******* h5 *******/
    //h5 color
    wp.customize('h5_color', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('h5').css('color', newval);
        });
    });

    //h5 size
    wp.customize('h5_size', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('h5:not(.inline-editor-title h5)').css('font-size', newval + 'px');
        });
    });

    //h5 Height
    wp.customize('h5_lineHeight', function (value) {
        value.bind(function (newVal) {
            pixflow_livePreviewObj().$('h5:not(.inline-editor-title h5)').css({'line-height': newVal + 'px'});
        })
    });

    //h5 Letter space
    wp.customize('h5_letterSpace', function (value) {
        value.bind(function (newVal) {
            pixflow_livePreviewObj().$('h5').css({letterSpacing: newVal + 'px'});
        })
    });

    //h5 Style
    wp.customize('h5_style', function (value) {
        value.bind(function (newVal) {
            if (newVal) {
                pixflow_livePreviewObj().$('h5').css({fontStyle: 'italic'});
            } else {
                pixflow_livePreviewObj().$('h5').css({fontStyle: 'normal'});
            }
        });
    });

    /******* h6 *******/
    //h6 color
    wp.customize('h6_color', function (value) {
        value.bind(function (newval) {

            pixflow_livePreviewObj().$('h6').css('color', newval);
        });
    });

    //h6 size
    wp.customize('h6_size', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('h6:not(.inline-editor-title h6)').css('font-size', newval + 'px');
        });
    });

    //h6 Height
    wp.customize('h6_lineHeight', function (value) {
        value.bind(function (newVal) {
            pixflow_livePreviewObj().$('h6').css({'line-height': newVal + 'px'});
        })
    });

    //h6 Letter space
    wp.customize('h6_letterSpace', function (value) {
        value.bind(function (newVal) {
            pixflow_livePreviewObj().$('h6').css({letterSpacing: newVal + 'px'});
        })
    });

    //h4 Style
    wp.customize('h6_style', function (value) {
        value.bind(function (newVal) {
            if (newVal) {
                pixflow_livePreviewObj().$('h6').css({fontStyle: 'italic'});
            } else {
                pixflow_livePreviewObj().$('h6').css({fontStyle: 'normal'});
            }
        });
    });

    /******* Paragraph *******/
        // paragraph font color
    wp.customize('p_color', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('p').css('color', newval);
        });
    });

    //paragraph font size
    wp.customize('p_size', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('p').css('font-size', newval + 'px');
        });
    });

    wp.customize('p_lineHeight', function (value) {
        value.bind(function (newVal) {
            pixflow_livePreviewObj().$('p').css({'line-height': newVal + 'px'});
        })
    });

    wp.customize('p_letterSpace', function (value) {
        value.bind(function (newVal) {
            pixflow_livePreviewObj().$('p').css({letterSpacing: newVal + 'px'});
        })
    });

    wp.customize('p_style', function (value) {
        value.bind(function (newVal) {
            if (newVal) {
                pixflow_livePreviewObj().$('p').css({fontStyle: 'italic'});
            } else {
                pixflow_livePreviewObj().$('p').css({fontStyle: 'normal'});
            }
        });
    });

    /******* Navigation *******/

    // Header top block rectangle (3D)
    function pixflow_blockRectFunc(newval, $samePartBlock) {
        'use strict';
        var $newval = pixflow_colorConvertor(newval,'rgb'),
            $navColorHoverHistoryRgb = pixflow_colorConvertor($navColorHoverHistory,'rgb'),
            $headerColorHistoryRgb = pixflow_colorConvertor($('#customize-control-header_bg_solid_color .header_bg_solid_color_alpha .sp-preview-inner').css('backgroundColor'),'rgb');
        if( typeof  $samePartBlock == 'undefined') {
            $samePartBlock = pixflow_livePreviewObj().$('header.top-block:not(.header-clone) .style-style1');
        }
        $blockRecLi        = $samePartBlock.find('nav > ul > li');
        //.menu-title
        $blockRecMenuTitle = $blockRecLi.find('> a ');
        $blockRecMenuTitle.css('color', $newval);

        // Icons pack
        $iconspackLi       = $samePartBlock.find('.icons-pack li.icon');
        $iconsPackFront    = $iconspackLi.find('.title-content');
        $blockRecMenuTitle = $blockRecLi.find('> a ');
        //.menu-title

        var navColor = $('#input_nav_color').val(),
            navHoverColor = $('#input_nav_hover_color').val();

        $blockRecLi.hover(function () {
            $(this).find('> a > .menu-title').css({backgroundColor: navHoverColor, color: navHoverColor});
            $(this).find('> a > .hover-effect').css({backgroundColor: navHoverColor, color: navColor});
        }, function () {
            $(this).find('> a > .menu-title').css({backgroundColor: $headerColorHistoryRgb, color: navColor});
        });

        $iconspackLi.hover(function (){
            if(!$(this).parents('.header-clone').length) {

                $(this).find('.elem-container .title-content').css({backgroundColor: navHoverColor, color: navHoverColor});
                $(this).find('.elem-container .hover-content').css({backgroundColor: navHoverColor, color:navColor });
            }
        },function (){
            $(this).find('.elem-container .title-content').css({backgroundColor: $headerColorHistoryRgb, color: navColor});
        });
    }

    function pixflow_headerClassic(newval){
        'use strict';
        $navColorHistory = newval;
        //  Hover Menu Side Classic
        if ($sideIconSideClassic.length) {
            $navColorHistory = $('#input_nav_hover_color').val();

            $sideIconHover.hover(
                function () {
                    $(this).find($sideIconHoverParent).css('color', $navColorHoverHistory);
                }, // over
                function () {
                    $(this).find($sideIconHoverParent).css('color', newval);
                }  // out
            );
        }

        pixflow_livePreviewObj().$('header.side-classic.standard-mode .icons-holder ul.icons-pack li').hover(
            function () {
                var $navColorHistory = $('#input_nav_hover_color').val();
                $(this).find('a span').css('color', $navColorHistory);
            }, // over
            function () {
                $(this).find('a span').css('color', newval);
            }  // out
        );
    }

    //Nav Color
    wp.customize('nav_color', function (value) {
        value.bind(function (newval) {

            pixflow_livePreviewObj().$(
                'header:not(.header-clone):not(.side-modern) nav > ul > li > a .menu-title,'+
                'header.side-classic .icons-pack .icon .default,'+
                'header.side-classic .footer-socials li .default,'+
                'header.side-classic .footer-socials li.info span,'+
                'header.side-classic.standard-mode .footer .copyright p,'+
                'header.side-modern .footer .copyright p,'+
                'header.side-modern .nav-modern-button span:first-child,' +
                'header.side-modern .search-form input[type="text"],'+
                'header.side-modern .footer .info > a,' +
                'header.side-modern .footer .info .footer-content ul a,' +
                'header.top-logotop:not(.header-clone) nav > ul > li,' +
                'header:not(.header-clone) .icons-pack li a,' +
                'header.top-block:not(.header-clone) .style-style2 nav > ul > li > a .hover-effect span ,' +
                'header:not(.header-clone) .icons-pack .elem-container .title-content,' +
                'header:not(.header-clone) .icons-pack .shopcart-item .number,' +
                '.gather-btn .gather-menu-icon,'+
                'header.side-classic nav > ul > li.has-dropdown:not(.megamenu) a')  .css('color', newval); // menu text color

            pixflow_livePreviewObj().$(
                'header.side-classic div.footer ul,' +
                'header.top-gather .style-style2 .icons-pack li,' +
                'header.top-classic nav > ul > li,' +
                'header.side-classic .icons-holder,' +
                'header.side-classic .icons-holder li,' +
                'header.side-classic div.footer ul li,' +
                'header.side-modern .side .logo,' +
                'header.side-modern .icons-pack li,' +
                'header.side-modern .nav-modern-button,' +
                'header.side-modern .footer,' +
                'header.side-modern .footer .info .footer-content ul,'+
                'header.top-modern:not(.header-clone) .business,'+
                'header.top-modern:not(.header-clone) nav > ul > li,'+
                'header.top-modern:not(.header-clone) .first-part'
            ).css('border-color',pixflow_colorConvertor(newval,'rgba',.3)); //menu border color

            pixflow_livePreviewObj().$(
                'header.top-block nav > ul > li ,' +
                'header.top-block .icons-pack li'
            ).css('border-color',pixflow_colorConvertor(newval,'rgba',.3)); //menu border color

            pixflow_livePreviewObj().$('header.top-modern:not(.header-clone) .icons-pack li').css('border-right' , '1px solid' +pixflow_colorConvertor(newval,'rgba',.3)); //Icons Pack Color in Modern Top
            pixflow_livePreviewObj().$('header.side-classic .icons-holder li hr').css('background-color', pixflow_colorConvertor(newval,'rgba',.3));//menu separator border color
            pixflow_livePreviewObj().$('header:not(.header-clone) .icons-pack .elem-container .title-content .icon').css('color', newval);
            pixflow_livePreviewObj().$('header:not(.header-clone) nav > ul > li.separator > a').css('background-color', pixflow_colorConvertor(newval,'rgba',.3));
            pixflow_livePreviewObj().$('.top-classic:not(.header-clone) .style-wireframe .navigation .menu-separator').css('background-color', newval);

            // Menu Hover Block Rectangle
            $samePartBlock     = pixflow_livePreviewObj().$('header.top-block:not(.header-clone) .style-style1');

            //hover
            if ($samePartBlock.length){
                pixflow_blockRectFunc(newval, $samePartBlock);
            }

            // Header Side Classic
            $sideIconSideClassic = pixflow_livePreviewObj().$('header.side-classic');
            $sideIconHover       = $sideIconSideClassic.find('.side nav > ul > li');

            $samePartClassic   = pixflow_livePreviewObj().$('header.top-classic:not(.header-clone),header.top-logotop:not(.header-clone)');
            $menuHoverAClassic = $samePartClassic.find('nav > ul > li');
            $navColorHoverHistory = $('#customize-control-nav_hover_color .nav_hover_color_alpha .sp-preview-inner').css('backgroundColor');

            if ($samePartClassic.length ) {

                $menuHoverAClassic.hover(
                    function () {
                        if(pixflow_livePreviewObj().$('header .style-wireframe').length){
                            $(this).find('.menu-separator').css('background-color', $navColorHoverHistory);
                        }else{
                            $(this).find('> a > .menu-title').css('color', $navColorHoverHistory);
                        }
                    }, // over
                    function () {
                        if(pixflow_livePreviewObj().$('header .style-wireframe').length){
                            $(this).find('.menu-separator').css('background-color', newval);
                        }else{
                            $(this).find('> a > .menu-title').css('color', newval);
                        }

                    }  // out
                );
            }

            if($('#input_header_theme').val()=='modern') {
                pixflow_livePreviewObj().$('header:not(.header-clone) nav > ul > li').css('border-color', '1px solid #4d4d4d;'); //menu border color
            }

            // Hover for Menu Classic
            pixflow_headerClassic(newval);

            // Hover for Menu Top Modern
            pixflow_modernTopHover();

            pixflow_headerFirstSetting();

            // Header Border
            var layout = $("input:radio[name='_customize-radio-header_position']:checked").val();


            if( $('#header_border_enable-switch-status').text() == 'on' && layout == 'top' || (layout == 'top' && $('#input_header_theme').val() == "classic" && $('#input_classic_style').val() == "wireframe")) {
                pixflow_livePreviewObj().$('header:not(.header-clone) > .color-overlay').css('border-bottom-color', pixflow_colorConvertor(newval,'rgba',0.3));
            }
            else if( $('#header_border_enable-switch-status').text() == 'on' && layout == 'left' ) {
                pixflow_livePreviewObj().$('header > .color-overlay').css('border-right-color', pixflow_colorConvertor(newval,'rgba',0.3));
            }
            else if( $('#header_border_enable-switch-status').text() == 'on' && layout == 'right' ) {
                pixflow_livePreviewObj().$('header > .color-overlay').css('border-left-color', pixflow_colorConvertor(newval,'rgba',0.3));
            }

            //hover
            var $samePartHeaderTop = pixflow_livePreviewObj().$('header .top'),
                $navColorHistory = $('#input_nav_hover_color').val(),
                $iconsPack = $samePartHeaderTop.find('.icons-pack .elem-container .title-content .icon');

            if($('#input_header_theme').val() != 'block'){
                //  Icons pack hover color
                if ($iconsPack.length) {
                    $iconsPack.hover(
                        function () {
                            $(this).css('color', $navColorHistory);
                        }, // over
                        function () {
                            $(this).css('color', newval);
                        }  // out
                    );
                }
            }
        });
    });

    //Nav Hover Color
    wp.customize('nav_hover_color', function (value) {
        value.bind(function (newval) {

            //$hoverColorChanged = 1;
            pixflow_livePreviewObj().$('header.side-modern .icons-pack li a span.hover, header.side-modern .nav-modern-button span.hover, header.side-modern .footer-socials span.hover').css('color', newval); // Modern Side Icons
            pixflow_livePreviewObj().$('header.side-classic .footer-socials li a .hover').css('color', newval); // Footer social icons hover Color
            pixflow_livePreviewObj().$('header.side-classic .icons-pack li a .hover').css('color', newval); // Header icons pack hover Color
            pixflow_livePreviewObj().$('header.top-gather .style-style2 .icons-pack a .hover').css('color', newval);
            pixflow_livePreviewObj().$('header:not(.header-clone) .icons-pack .shopcart-item .number').css('background-color', newval);
            pixflow_livePreviewObj().$('header.side-classic nav > ul > li.has-dropdown:not(.megamenu) .dropdown a:hover .menu-title span').css('color', newval);


            // Header Block
            $samePartBlock = pixflow_livePreviewObj().$('header.top-block:not(.header-clone) .style-style1');
            $blockRecLi = $samePartBlock.find('nav > ul > li');
            $blockRecMenuTitle = $blockRecLi.find(' > a > .menu-title');

            // Block Rectangle
            if ($samePartBlock.length) {
                // Main menu
                pixflow_blockRectFunc(newval);
            }


            $samePartHeaderTop = pixflow_livePreviewObj().$('header .top');
            $navColorHistory = $('#input_nav_color').val();
            $iconsPack = $samePartHeaderTop.find('.icons-pack .elem-container .title-content .icon');

            $menuHoverATop = $samePartHeaderTop.find('nav > ul > li > a');
            $menuHover = $samePartHeaderTop.find('nav > ul > li');
            if(pixflow_livePreviewObj().$('header .style-wireframe').length < 1){
                $menuHoverATop.find('.menu-separator').css('background-color', newval); // menu separator color
            }

            // Header Side Classic
            $sideIconSideClassic = pixflow_livePreviewObj().$('header.side-classic');
            $sideIconHover = $sideIconSideClassic.find('.side nav > ul > li');
            $sideIconHoverParent = $sideIconHover.find(' > a >.menu-title span');

            //  Hover Menu Side Classic
            if ($sideIconSideClassic.length) {
                $sideIconHover.hover(
                    function () {
                        $(this).find($sideIconHoverParent).css('color', newval);
                        $(this).find('.menu-separator').css('border-color', newval);

                    }, // over
                    function () {
                        $(this).find($sideIconHoverParent).css('color', $navColorHistory);
                        $(this).find('.menu-separator').css('border-color', $navColorHistory);
                    }  // out
                );
            }

            //  Hover Menu Top Classic
            if ($('#input_header_theme').val() != 'block') {
                if ($samePartHeaderTop.length) {
                    $menuHover.hover(
                        function () {
                            if(pixflow_livePreviewObj().$('header .style-wireframe').length){
                                $(this).find('.menu-separator').css('background-color', newval);
                            }else{
                                $(this).find('> a .menu-title').css('color', newval);
                            }

                        }, // over
                        function () {
                            if(pixflow_livePreviewObj().$('header .style-wireframe').length){
                                $(this).find('.menu-separator').css('background-color', $navColorHistory);
                            }else{
                                $(this).find('> a .menu-title').css('color', $navColorHistory);
                            }
                        }  // out
                    );
                }

                //  Icons pack hover color
                if ($iconsPack.length) {
                    $iconsPack.hover(
                        function () {
                            $(this).css('color', newval);
                        }, // over
                        function () {
                            $(this).css('color', $navColorHistory);
                        }  // out
                    );
                }


            }

            pixflow_livePreviewObj().$('header.top-block .style-style2 nav > ul > li > a >  .menu-separator-block,header.top-block .style-style2 .icons-pack .menu-separator-block').css('background-color', newval); // menu separator color
            if ($('#input_header_theme').val() == 'block' && pixflow_livePreviewObj().$('header.top-block .style-style2 ').length ){

                pixflow_livePreviewObj().$('header.top-block .style-style2 nav > ul > li,header.top-block .style-style2 .icons-pack li.icon').hover(function(){
                    $(this).css({'background-color' : pixflow_colorConvertor(newval,'rgba',.15)});
                },function(){
                    $(this).css({'background-color' : 'transparent'});
                });
            }


            pixflow_headerFirstSetting();

        });
    });

    //Navigation font size
    wp.customize('nav_size', function (value) {
        value.bind(function (newval) {

            var $target1 = pixflow_livePreviewObj().$('.navigation ul > li >  a'),
                $target2 = pixflow_livePreviewObj().$('.navigation .dropdown a'),
                $target3 = pixflow_livePreviewObj().$('header.top-block .icons-pack li .elem-container');

            $target1.css('font-size', newval + 'px');
            $target2.css('font-size', newval - 1 + 'px');
            $target3.css('font-size', newval + 'px');

            if ($('#input_header_theme').val() == 'logotop') {

                var headerHeight = pixflow_livePreviewObj().$('header.top-logotop .color-overlay').height(),
                    containerHeight = pixflow_livePreviewObj().$('.logo-top-container').outerHeight(true) + pixflow_livePreviewObj().$('.logo').outerHeight(true) + 5;

                //update header height if needed
                if (headerHeight < containerHeight) {
                    pixflow_livePreviewObj().$('header.top-logotop').css({'height': containerHeight});
                }

                //update center area width if needed
                var contentWidth = pixflow_livePreviewObj().$('header.top-logotop .content').width(),
                    iconWidth = pixflow_livePreviewObj().$('header.top-logotop .icons-pack').outerWidth(true),
                    navWidth = pixflow_livePreviewObj().$('header.top-logotop .navigation').outerWidth(true);

                if (navWidth + iconWidth >= contentWidth) {
                    var navWidth = contentWidth - iconWidth - 60;
                    pixflow_livePreviewObj().$('header.top-logotop .navigation').css({
                        'width': navWidth + 'px',
                        'float': 'left',
                        'text-align': 'left'
                    });
                    pixflow_livePreviewObj().$('header.top-logotop .icons-pack').css({
                        'width': iconWidth,
                        'float': 'right',
                        'margin': '0 30px'
                    });
                } else {
                    pixflow_livePreviewObj().$('header.top-logotop .center-area').css('width', iconWidth + 3 + navWidth + 'px');
                }

                //calculate dropdown top
                var bottomSpace = (headerHeight <= containerHeight) ? 0 : (headerHeight - containerHeight) / 2,
                    liHeight = pixflow_livePreviewObj().$('.style-logotop nav').height();

                pixflow_livePreviewObj().$('.style-logotop  nav > ul > li.has-dropdown > ul').css('top', liHeight + bottomSpace - 10);
            }
        });
    });

    //Navigation font size
    wp.customize('nav_icon_size', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('header .top .icons-pack .icon span,header.top-block .icons-pack li .title-content .icon,header.top-modern .icons-pack li .title-content .icon,header .icons-pack a').css({fontSize:newval+'px'});
            pixflow_livePreviewObj().$('header .icons-pack a.shopcart .icon-shopcart2').css({fontSize: (parseInt(newval)+3)+'px'});
            pixflow_livePreviewObj().$('.gather-btn .gather-menu-icon').css({fontSize:(newval*1.5)+'px'});
        })
    });

    //Navigation Letter space
    wp.customize('nav_letterSpace', function (value) {
        value.bind(function (newVal) {
            pixflow_livePreviewObj().$('nav a').css({letterSpacing: newVal + 'px'});
        })
    });

    //Navigation Style
    wp.customize('nav_style', function (value) {
        value.bind(function (newVal) {
            if (newVal) {
                pixflow_livePreviewObj().$('nav a').css({fontStyle: 'italic'});
            } else {
                pixflow_livePreviewObj().$('nav a').css({fontStyle: 'normal'});
            }
        });
    });

    //Header responsive skin
    wp.customize('header_responsive_skin', function (value) {
        value.bind(function (newVal) {
            if (newVal == 'dark') {
                pixflow_livePreviewObj().$('header').removeClass('header-light').addClass('header-dark');
                pixflow_livePreviewObj().$('nav.navigation-mobile').removeClass('header-light').addClass('header-dark');
            } else {
                pixflow_livePreviewObj().$('header').removeClass('header-dark').addClass('header-light');
                pixflow_livePreviewObj().$('nav.navigation-mobile').removeClass('header-dark').addClass('header-light');
            }
        });
    });

    //LOGO responsive skin
    wp.customize('logo_responsive_skin', function (value) {
        value.bind(function (newVal) {
            if (newVal == 'dark') {
                pixflow_livePreviewObj().$('header').removeClass('logo-light').addClass('logo-dark');
            } else {
                pixflow_livePreviewObj().$('header').removeClass('logo-dark').addClass('logo-light');
            }
        });
    });

    /******* links *******/
        //links Color
    wp.customize('link_color', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('a:not(header a):not(header .navigation a)').css('color', newval);
        });
    });

    //Links font size
    wp.customize('link_size', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('a').css('font-size', newval + 'px');
        });
    });

    //Links Height
    wp.customize('link_lineHeight', function (value) {
        value.bind(function (newVal) {
            pixflow_livePreviewObj().$('a').css({'line-height': newVal + 'px'});
        })
    });

    //Links Letter space
    wp.customize('link_letterSpace', function (value) {
        value.bind(function (newVal) {
            pixflow_livePreviewObj().$('a').css({letterSpacing: newVal + 'px'});
        })
    });

    //Links Style
    wp.customize('link_style', function (value) {
        value.bind(function (newVal) {
            if (newVal) {
                pixflow_livePreviewObj().$('a').css({fontStyle: 'italic'});
            } else {
                pixflow_livePreviewObj().$('a').css({fontStyle: 'normal'});
            }
        });
    });

    function pixflow_backgroundControllers(prefix,parent){
        'use strict';
        if(typeof prefix == 'undefined' || typeof parent == 'undefined'){
            return;
        }
        /*Site background*/
        wp.customize(prefix+'_bg', function (value) {
            value.bind(function (newval) {
                if(parent == '.sidebar'){
                    var sidebarBox = true,
                        boxparent = '.sidebar .widget';
                }else{
                    var sidebarBox = false;
                }
                if(newval == true){
                    var type = wp.customize(prefix+'_bg_type').get();
                    if(type == 'color'){
                        pixflow_livePreviewObj().$(parent+' > .color-overlay.color-type').css('display','block');
                        pixflow_livePreviewObj().$(parent+' > .bg-image,'+parent+' > .color-overlay.image-type,'+parent+' > .texture-overlay,'+parent+' > .color-overlay.texture-type').css('display','none');
                        if(sidebarBox){
                            pixflow_livePreviewObj().$(boxparent+' > .color-overlay.color-type').css('display','block');
                            pixflow_livePreviewObj().$(boxparent+' > .bg-image,'+boxparent+' > .color-overlay.image-type,'+boxparent+' > .texture-overlay,'+boxparent+' > .color-overlay.texture-type').css('display','none');
                        }
                    }else if(type == 'image'){
                        pixflow_livePreviewObj().$(parent+' > .bg-image').css('display','block');
                        pixflow_livePreviewObj().$(parent+' > .color-overlay.color-type,'+parent+' > .texture-overlay,'+parent+' > .color-overlay.texture-type').css('display','none');
                        if(sidebarBox){
                            pixflow_livePreviewObj().$(boxparent+' > .bg-image').css('display','block');
                            pixflow_livePreviewObj().$(boxparent+' > .color-overlay.color-type,'+boxparent+' > .texture-overlay,'+boxparent+' > .color-overlay.texture-type').css('display','none');
                        }
                        if(wp.customize(prefix+'_bg_image_overlay').get()){
                            pixflow_livePreviewObj().$(parent+' > .color-overlay.image-type').css('display','block');
                            if(sidebarBox){
                                pixflow_livePreviewObj().$(boxparent+' > .color-overlay.image-type').css('display','block');
                            }
                        }else{
                            pixflow_livePreviewObj().$(parent+' > .color-overlay.image-type').css('display','none');
                            if(sidebarBox){
                                pixflow_livePreviewObj().$(boxparent+' > .color-overlay.image-type').css('display','none');
                            }
                        }
                    }else if(type == 'texture'){
                        pixflow_livePreviewObj().$(parent+' > .texture-overlay').css('display','block');
                        pixflow_livePreviewObj().$(parent+' > .color-overlay.color-type,'+parent+' > .bg-image,'+parent+' > .color-overlay.image-type').css('display','none');;
                        if(sidebarBox){
                            pixflow_livePreviewObj().$(boxparent+' > .texture-overlay').css('display','block');
                            pixflow_livePreviewObj().$(boxparent+' > .color-overlay.color-type,'+boxparent+' > .bg-image,'+boxparent+' > .color-overlay.image-type').css('display','none');;
                        }
                        if(wp.customize(prefix+'_bg_texture_overlay').get()){
                            pixflow_livePreviewObj().$(parent+' > .color-overlay.texture-type').css('display','block');
                            if(sidebarBox){
                                pixflow_livePreviewObj().$(boxparent+' > .color-overlay.texture-type').css('display','block');
                            }
                        }else{
                            pixflow_livePreviewObj().$(parent+' > .color-overlay.texture-type').css('display','none');
                            if(sidebarBox){
                                pixflow_livePreviewObj().$(boxparent+' > .color-overlay.texture-type').css('display','none');
                            }
                        }
                    }
                }else{
                    pixflow_livePreviewObj().$(parent+' > .color-overlay,'+parent+' > .texture-overlay,'+parent+' > .bg-image').css('display','none');
                    if(sidebarBox){
                        pixflow_livePreviewObj().$(boxparent+' > .color-overlay,'+boxparent+' > .texture-overlay,'+boxparent+' > .bg-image').css('display','none');
                    }
                }
            });
        });

        wp.customize(prefix+'_bg_type', function (value) {
            value.bind(function (newval) {
                if(newval == ''){
                    return;
                }
                if(parent == '.sidebar'){
                    var sidebarBox = true,
                        boxparent = '.sidebar .widget';
                }else{
                    var sidebarBox = false;
                }
                var type = newval;
                if(type == 'color'){
                    pixflow_livePreviewObj().$(parent+' > .color-overlay.color-type').css('display','block');
                    pixflow_livePreviewObj().$(parent+' > .bg-image,'+parent+' > .color-overlay.image-type,'+parent+' > .texture-overlay,'+parent+' > .color-overlay.texture-type').css('display','none');
                    if(sidebarBox){
                        pixflow_livePreviewObj().$(boxparent+' > .color-overlay.color-type').css('display','block');
                        pixflow_livePreviewObj().$(boxparent+' > .bg-image,'+boxparent+' > .color-overlay.image-type,'+boxparent+' > .texture-overlay,'+boxparent+' > .color-overlay.texture-type').css('display','none');
                    }
                }else if(type == 'image'){
                    pixflow_livePreviewObj().$(parent+' > .bg-image').css('display','block');
                    pixflow_livePreviewObj().$(parent+' > .color-overlay.color-type,'+parent+' > .texture-overlay,'+parent+' > .color-overlay.texture-type').css('display','none');
                    if(sidebarBox){
                        pixflow_livePreviewObj().$(boxparent+' > .bg-image').css('display','block');
                        pixflow_livePreviewObj().$(boxparent+' > .color-overlay.color-type,'+boxparent+' > .texture-overlay,'+boxparent+' > .color-overlay.texture-type').css('display','none');
                    }

                    if(wp.customize(prefix+'_bg_image_overlay').get()){
                        pixflow_livePreviewObj().$(parent+' > .color-overlay.image-type').css('display','block');
                        if(sidebarBox){
                            pixflow_livePreviewObj().$(boxparent+' > .color-overlay.image-type').css('display','block');
                        }
                    }else{
                        pixflow_livePreviewObj().$(parent+' > .color-overlay.image-type').css('display','none');
                        if(sidebarBox){
                            pixflow_livePreviewObj().$(boxparent+' > .color-overlay.image-type').css('display','none');
                        }
                    }
                }else if(type == 'texture'){
                    pixflow_livePreviewObj().$(parent+' > .texture-overlay').css('display','block');
                    pixflow_livePreviewObj().$(parent+' > .color-overlay.color-type,'+parent+' > .bg-image,'+parent+' > .color-overlay.image-type').css('display','none');
                    if(sidebarBox){
                        pixflow_livePreviewObj().$(boxparent+' > .texture-overlay').css('display','block');
                        pixflow_livePreviewObj().$(boxparent+' > .color-overlay.color-type,'+boxparent+' > .bg-image,'+boxparent+' > .color-overlay.image-type').css('display','none');
                    }

                    if(wp.customize(prefix+'_bg_texture_overlay').get()){
                        pixflow_livePreviewObj().$(parent+' > .color-overlay.texture-type').css('display','block');
                        if(sidebarBox){
                            pixflow_livePreviewObj().$(boxparent+' > .color-overlay.texture-type').css('display','block');
                        }
                    }else{
                        pixflow_livePreviewObj().$(parent+' > .color-overlay.texture-type').css('display','none');
                        if(sidebarBox){
                            pixflow_livePreviewObj().$(boxparent+' > .color-overlay.texture-type').css('display','none');
                        }
                    }
                }
            });
        });

        if(prefix != 'footer'){
            /* Site Overlay Type */
            wp.customize(prefix+'_bg_color_type', function (value) {
                value.bind(function (newval) {
                    if(parent == '.sidebar'){
                        var sidebarBox = true,
                            boxparent = '.sidebar .widget';
                    }else{
                        var sidebarBox = false;
                    }
                    if (newval == 'solid') {
                        var $solidColor = $('#input_'+prefix+'_bg_solid_color').val();
                        pixflow_livePreviewObj().$(parent+' > .color-overlay.color-type').css('background', 'none').css('background-color', $solidColor);
                        if(sidebarBox){
                            pixflow_livePreviewObj().$(boxparent+' > .color-overlay.color-type').css('background', 'none').css('background-color', $solidColor);
                        }
                    } else if (newval == 'gradient') {
                        pixflow_makeGradient(prefix+'_bg_gradient', parent+' > .color-overlay.color-type');
                        if(sidebarBox){
                            pixflow_makeGradient(prefix+'_bg_gradient', boxparent+' > .color-overlay.color-type');
                        }
                    }
                });
            });

            /* site Overlay Solid Color */
            wp.customize(prefix+'_bg_solid_color', function (value) {
                value.bind(function (newval) {
                    if(parent == '.sidebar'){
                        var sidebarBox = true,
                            boxparent = '.sidebar .widget';
                    }else{
                        var sidebarBox = false;
                    }
                    pixflow_livePreviewObj().$(parent+' > .color-overlay.color-type').css('background', newval);
                    if(sidebarBox){
                        pixflow_livePreviewObj().$(boxparent+' > .color-overlay.color-type').css('background', newval);
                    }
                });
            });

            /* site Overlay Gradient - Orientation */
            wp.customize(prefix+'_bg_gradient_orientation', function (value) {
                value.bind(function (newval) {
                    if(parent == '.sidebar'){
                        var sidebarBox = true,
                            boxparent = '.sidebar .widget';
                    }else{
                        var sidebarBox = false;
                    }
                    pixflow_makeGradient(prefix+'_bg_gradient', parent+' > .color-overlay.color-type', '', '', newval);
                    if(sidebarBox){
                        pixflow_makeGradient(prefix+'_bg_gradient', boxparent+' > .color-overlay.color-type', '', '', newval);
                    }
                });
            });

            /* site Overlay Gradient - color1 */
            wp.customize(prefix+'_bg_gradient_color1', function (value) {
                value.bind(function (newval) {
                    if(parent == '.sidebar'){
                        var sidebarBox = true,
                            boxparent = '.sidebar .widget';
                    }else{
                        var sidebarBox = false;
                    }
                    pixflow_makeGradient(prefix+'_bg_gradient', parent+' > .color-overlay.color-type', newval);
                    if(sidebarBox){
                        pixflow_makeGradient(prefix+'_bg_gradient', boxparent+' > .color-overlay.color-type', newval);
                    }
                });
            });

            /* site Overlay Gradient - color2 */
            wp.customize(prefix+'_bg_gradient_color2', function (value) {
                value.bind(function (newval) {
                    if(parent == '.sidebar'){
                        var sidebarBox = true,
                            boxparent = '.sidebar .widget';
                    }else{
                        var sidebarBox = false;
                    }
                    pixflow_makeGradient(prefix+'_bg_gradient', parent+' > .color-overlay.color-type', '', newval);
                    if(sidebarBox){
                        pixflow_makeGradient(prefix+'_bg_gradient', boxparent+' > .color-overlay.color-type', '', newval);
                    }
                });
            });
        }

        /* site background image */
        wp.customize(prefix+'_bg_image_image', function (value) {
            value.bind(function (newval) {
                if(parent == '.sidebar'){
                    var sidebarBox = true,
                        boxparent = '.sidebar .widget';
                }else{
                    var sidebarBox = false;
                }
                pixflow_livePreviewObj().$(parent+' > .bg-image').css('background-image', 'url(' + newval + ')');
                if(sidebarBox){
                    pixflow_livePreviewObj().$(boxparent+' > .bg-image').css('background-image', 'url(' + newval + ')');
                }
            });
        });

        /* site background repeat */
        wp.customize(prefix+'_bg_image_repeat', function (value) {
            value.bind(function (newval) {
                if(parent == '.sidebar'){
                    var sidebarBox = true,
                        boxparent = '.sidebar .widget';
                }else{
                    var sidebarBox = false;
                }
                pixflow_livePreviewObj().$(parent+' > .bg-image').css('background-repeat', newval);
                if(sidebarBox){
                    pixflow_livePreviewObj().$(boxparent+' > .bg-image').css('background-repeat', newval);
                }
            });
        });

        /* site background attachment */
        wp.customize(prefix+'_bg_image_attach', function (value) {
            value.bind(function (newval) {
                if(parent == '.sidebar'){
                    var sidebarBox = true,
                        boxparent = '.sidebar .widget';
                }else{
                    var sidebarBox = false;
                }
                pixflow_livePreviewObj().$(parent+' > .bg-image').css('background-attachment', newval);
                if(sidebarBox){
                    pixflow_livePreviewObj().$(boxparent+' > .bg-image').css('background-attachment', newval);
                }
            });
        });

        /* site background position */
        wp.customize(prefix+'_bg_image_position', function (value) {
            value.bind(function (newval) {
                if(parent == '.sidebar'){
                    var sidebarBox = true,
                        boxparent = '.sidebar .widget';
                }else{
                    var sidebarBox = false;
                }
                pixflow_livePreviewObj().$(parent+' > .bg-image').css('background-position', newval.replace("-", " "));
                if(sidebarBox){
                    pixflow_livePreviewObj().$(boxparent+' > .bg-image').css('background-position', newval.replace("-", " "));
                }
            });
        });

        /* site background size */
        wp.customize(prefix+'_bg_image_size', function (value) {
            value.bind(function (newval) {
                if(parent == '.sidebar'){
                    var sidebarBox = true,
                        boxparent = '.sidebar .widget';
                }else{
                    var sidebarBox = false;
                }
                pixflow_livePreviewObj().$(parent+' > .bg-image').css('background-size', newval);
                if(sidebarBox){
                    pixflow_livePreviewObj().$(boxparent+' > .bg-image').css('background-size', newval);
                }
            });
        });

        /* site background Image Opacity */
        wp.customize(prefix+'_bg_image_opacity', function (value) {
            value.bind(function (newval) {
                if(parent == '.sidebar'){
                    var sidebarBox = true,
                        boxparent = '.sidebar .widget';
                }else{
                    var sidebarBox = false;
                }
                pixflow_livePreviewObj().$(parent+' > .bg-image').css('opacity', newval);
                if(sidebarBox){
                    pixflow_livePreviewObj().$(boxparent+' > .bg-image').css('opacity', newval);
                }
            });
        });

        /* Site Overlay Type */
        wp.customize(prefix+'_bg_image_overlay', function (value) {
            value.bind(function (newval) {
                if(parent == '.sidebar'){
                    var sidebarBox = true,
                        boxparent = '.sidebar .widget';
                }else{
                    var sidebarBox = false;
                }
                if (newval == true) {
                    pixflow_livePreviewObj().$(parent+' > .color-overlay.image-type').css('display','block');
                    if(sidebarBox){
                        pixflow_livePreviewObj().$(boxparent+' > .color-overlay.image-type').css('display','block');
                    }
                    var type = wp.customize(prefix+'_bg_image_overlay_type').get();
                    wp.customize.control(prefix+'_bg_image_overlay_type').setting('');
                    wp.customize.control(prefix+'_bg_image_overlay_type').setting(type);
                } else {
                    pixflow_livePreviewObj().$(parent+' > .color-overlay.image-type').css('display','none');
                    if(sidebarBox){
                        pixflow_livePreviewObj().$(boxparent+' > .color-overlay.image-type').css('display','none');
                    }
                }
            });
        });

        /* Site bg Overlay Type */
        wp.customize(prefix+'_bg_image_overlay_type', function (value) {
            value.bind(function (newval) {
                if(parent == '.sidebar'){
                    var sidebarBox = true,
                        boxparent = '.sidebar .widget';
                }else{
                    var sidebarBox = false;
                }
                if (newval == 'solid') {
                    var $solidColor = $('#input_'+prefix+'_bg_image_solid_overlay').val();
                    if($solidColor == ''){
                        $('#input_'+prefix+'_bg_image_solid_overlay').attr('value');
                    }
                    pixflow_livePreviewObj().$(parent+' > .color-overlay.image-type').css('background', 'none').css('background-color', $solidColor);
                    if(sidebarBox){
                        pixflow_livePreviewObj().$(boxparent+' > .color-overlay.image-type').css('background', 'none').css('background-color', $solidColor);
                    }
                } else if (newval == 'gradient') {
                    pixflow_makeGradient(prefix+'_bg_overlay_gradient', parent+' > .color-overlay.image-type');
                    if(sidebarBox){
                        pixflow_makeGradient(prefix+'_bg_overlay_gradient', boxparent+' > .color-overlay.image-type');
                    }
                }
            });
        });

        /* site Overlay Solid Color */
        wp.customize(prefix+'_bg_image_solid_overlay', function (value) {
            value.bind(function (newval) {
                if(parent == '.sidebar'){
                    var sidebarBox = true,
                        boxparent = '.sidebar .widget';
                }else{
                    var sidebarBox = false;
                }
                pixflow_livePreviewObj().$(parent+' > .color-overlay.image-type').css('background', newval);
                if(sidebarBox){
                    pixflow_livePreviewObj().$(boxparent+' > .color-overlay.image-type').css('background', newval);
                }
            });
        });

        /* site bg Overlay Gradient - Orientation */
        wp.customize(prefix+'_bg_overlay_gradient_orientation', function (value) {
            value.bind(function (newval) {
                if(parent == '.sidebar'){
                    var sidebarBox = true,
                        boxparent = '.sidebar .widget';
                }else{
                    var sidebarBox = false;
                }
                pixflow_makeGradient(prefix+'_bg_overlay_gradient', parent+' > .color-overlay.image-type', '', '', newval);
                if(sidebarBox){
                    pixflow_makeGradient(prefix+'_bg_overlay_gradient', boxparent+' > .color-overlay.image-type', '', '', newval);
                }
            });
        });

        /* site bg Overlay Gradient - color1 */
        wp.customize(prefix+'_bg_overlay_gradient_color1', function (value) {
            value.bind(function (newval) {
                if(parent == '.sidebar'){
                    var sidebarBox = true,
                        boxparent = '.sidebar .widget';
                }else{
                    var sidebarBox = false;
                }
                pixflow_makeGradient(prefix+'_bg_overlay_gradient', parent+' > .color-overlay.image-type', newval);
                if(sidebarBox){
                    pixflow_makeGradient(prefix+'_bg_overlay_gradient', boxparent+' > .color-overlay.image-type', newval);
                }
            });
        });

        /* site bg Overlay Gradient - color2 */
        wp.customize(prefix+'_bg_overlay_gradient_color2', function (value) {
            value.bind(function (newval) {
                if(parent == '.sidebar'){
                    var sidebarBox = true,
                        boxparent = '.sidebar .widget';
                }else{
                    var sidebarBox = false;
                }
                pixflow_makeGradient(prefix+'_bg_overlay_gradient', parent+' > .color-overlay.image-type', '', newval);
                if(sidebarBox){
                    pixflow_makeGradient(prefix+'_bg_overlay_gradient', boxparent+' > .color-overlay.image-type', '', newval);
                }
            });
        });

        /* site background texture */
        wp.customize(prefix+'_bg_texture', function (value) {
            value.bind(function (newval) {
                if(parent == '.sidebar'){
                    var sidebarBox = true,
                        boxparent = '.sidebar .widget';
                }else{
                    var sidebarBox = false;
                }
                pixflow_livePreviewObj().$(parent+' > .texture-overlay').css('background-image', 'url(' + newval + ')');
                if(sidebarBox){
                    pixflow_livePreviewObj().$(boxparent+' > .texture-overlay').css('background-image', 'url(' + newval + ')');
                }
            });
        });

        /* site background Texture Opacity */
        wp.customize(prefix+'_bg_texture_opacity', function (value) {
            value.bind(function (newval) {
                if(parent == '.sidebar'){
                    var sidebarBox = true,
                        boxparent = '.sidebar .widget';
                }else{
                    var sidebarBox = false;
                }
                pixflow_livePreviewObj().$(parent+' > .texture-overlay').css('opacity', newval);
                if(sidebarBox){
                    pixflow_livePreviewObj().$(boxparent+' > .texture-overlay').css('opacity', newval);
                }
            });
        });

        /* Site Overlay Type */
        wp.customize(prefix+'_bg_texture_overlay', function (value) {
            value.bind(function (newval) {
                if(parent == '.sidebar'){
                    var sidebarBox = true,
                        boxparent = '.sidebar .widget';
                }else{
                    var sidebarBox = false;
                }
                if (newval == true) {
                    pixflow_livePreviewObj().$(parent+' > .color-overlay.texture-type').css('display','block');
                    if(sidebarBox){
                        pixflow_livePreviewObj().$(boxparent+' > .color-overlay.texture-type').css('display','block');
                    }
                    var value = wp.customize(prefix+'_bg_texture_solid_overlay').get();
                    if(value == ''){
                        value = 'rgba(0,0,0,0.5)';
                    }
                    wp.customize.control(prefix+'_bg_texture_solid_overlay').setting('');
                    wp.customize.control(prefix+'_bg_texture_solid_overlay').setting(value);
                } else {
                    pixflow_livePreviewObj().$(parent+' > .color-overlay.texture-type').css('display','none');
                    if(sidebarBox){
                        pixflow_livePreviewObj().$(boxparent+' > .color-overlay.texture-type').css('display','none');
                    }
                }
            });
        });

        /* site  texture Overlay Solid Color */
        wp.customize(prefix+'_bg_texture_solid_overlay', function (value) {
            value.bind(function (newval) {
                if(parent == '.sidebar'){
                    var sidebarBox = true,
                        boxparent = '.sidebar .widget';
                }else{
                    var sidebarBox = false;
                }
                pixflow_livePreviewObj().$(parent+' > .color-overlay.texture-type').css('background', newval);
                if(sidebarBox){
                    pixflow_livePreviewObj().$(boxparent+' > .color-overlay.texture-type').css('background', newval);
                }
            });
        });
    }

    pixflow_backgroundControllers('site','.layout-container');
    pixflow_backgroundControllers('footer','footer');
    pixflow_backgroundControllers('page_sidebar','.sidebar');
    pixflow_backgroundControllers('blog_sidebar','.sidebar');
    pixflow_backgroundControllers('single_sidebar','.sidebar');
    pixflow_backgroundControllers('shop_sidebar','.sidebar');

    /* Content Width */
    wp.customize('site_width', function (value) {
        value.bind(function (newval) {

            if ($('#input_header_theme').val() != 'modern') {
                pixflow_livePreviewObj().$('.layout').css('width', newval + '%');
            } else {
                if (newval % 5 == 0) {
                    if (newval % 2 != 0) {
                        return;
                    }
                } else {
                    while (newval % 5 != 0) {
                        newval++;
                    }
                    if (newval % 2 != 0) {
                        return;
                    }
                }
                pixflow_livePreviewObj().$('.layout').css('width', newval + '%');
                var i=0;
                pixflow_livePreviewObj().$("header:not(.header-clone) .icons-pack li").each(function(){
                    i +=1;
                });

                var    $navItems    = pixflow_livePreviewObj().$('header:not(.header-clone) nav > ul > li');
                var    contentWidthPixel   = parseInt($('header').width());
                var    iconWidth    = i * 70 * 100 / contentWidthPixel;
                var    firstPart    = (parseInt($('header .logo').width())+21)* 100 / contentWidthPixel;
                var    secondPart   = 100 - firstPart;
                var    navWidth     = 100 - iconWidth;

                pixflow_livePreviewObj().$('header .first-part').css('width', firstPart +'%');
                pixflow_livePreviewObj().$('header .second-part').css('width', secondPart + '%');
                pixflow_livePreviewObj().$('header .navigation').css('width', navWidth + '%');
                pixflow_livePreviewObj().$('header .icons-pack').css('width', iconWidth + '%');

                if ($navItems.length) {
                    $navItems.css('width', 100 / $navItems.length + '%');
                }
            }
            layoutWidth = newval;

            pixflow_headerSecondSetting();
            pixflow_setShortcodesResponsive();

            if(typeof pixflow_livePreviewObj().pixflow_portfolioSplit == 'function'){
                pixflow_livePreviewObj().pixflow_portfolioSplit();
            }

            if(typeof pixflow_livePreviewObj().pixflow_portfolioDetailFull == 'function'){
                pixflow_livePreviewObj().pixflow_portfolioDetailFull();
            }

            if(pixflow_livePreviewObj().$('main').hasClass('has-parallax-footer')) {
                var footerwidth=parseFloat(pixflow_livePreviewObj().$("footer").attr("data-width")/100);
                var layoutwidth=parseInt(pixflow_livePreviewObj().$(".layout-container > .layout").width());
                var parallaxwidth=(layoutwidth * footerwidth);
                pixflow_livePreviewObj().$("footer.footer-parallax").width(parallaxwidth);
            }
        });
    });

    wp.customize('site_top', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('.layout').css('padding-top', newval + 'px');
            if($('#businessBar_enable').is(':checked') && $('#input_header_theme').val()!='modern') {
                pixflow_livePreviewObj().$('.header-style2').css('top', 36 + 'px');
            }else {
                pixflow_livePreviewObj().$('.header-style2').css('top',  '0px');
            }
            pixflow_headerSecondSetting();
        });
    });

    wp.customize('portfolio_accent', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('.accent-color').css('color', newval);
        });
    });

    /* Header */
    wp.customize('header_top_width', function (value) {
        value.bind(function (newval) {
            if ($('#input_header_theme').val() != 'modern') {
                pixflow_livePreviewObj().$('.business.content').css('width', newval + '%');
                pixflow_livePreviewObj().$('.business.content').css('margin', 'auto');
                pixflow_livePreviewObj().$('header').attr('data-width',newval);
            } else {
                if (newval % 5 == 0) {
                    if (newval % 2 != 0) {
                        return;
                    }
                } else {
                    while (newval % 5 != 0) {
                        newval++;
                    }
                    if (newval % 2 != 0) {
                        return;
                    }
                }

                var i=0;
                pixflow_livePreviewObj().$("header:not(.header-clone) .icons-pack li").each(function(){
                    i +=1;
                });

                var $navItems    = pixflow_livePreviewObj().$('header:not(.header-clone) nav > ul > li'),
                    contentWidthPixel   = parseInt($('header').width()),
                    iconWidth    = i * 70 * 100 / contentWidthPixel,
                    firstPart    = (parseInt($('header .logo').width())+21)* 100 / contentWidthPixel,
                    secondPart   = 100 - firstPart,
                    navWidth     = 100 - iconWidth;

                pixflow_livePreviewObj().$('header .first-part').css('width', firstPart +'%');
                pixflow_livePreviewObj().$('header .second-part').css('width', secondPart + '%');
                pixflow_livePreviewObj().$('header .navigation').css('width', navWidth + '%');
                pixflow_livePreviewObj().$('header .icons-pack').css('width', iconWidth + '%');

                if ($navItems.length) {
                    $navItems.css('width', 100 / $navItems.length + '%');
                }
            }

            pixflow_livePreviewObj().$('header').css('width', newval + '%');


            headerTopWidth=newval;
            pixflow_headerSecondSetting();
        });
    });

    /* Disable 'Menu item style' when block style2 selected */
    wp.customize('header-top-height', function (value) {
        value.bind(function (newval) {

            var $targetItem1 = pixflow_livePreviewObj().$('header'),
                $targetItem2 = pixflow_livePreviewObj().$('header.top-block .style-style1 nav > ul > li a, header.top-block .style-style1 .icons-pack li .elem-container'),
                navHeight = newval,
                link = pixflow_livePreviewObj().$('nav > ul > li.has-dropdown > a'),
                liHeight = 0;

            if (link.length > 1) {
                liHeight = $(link.get(link.length - 1)).outerHeight(true) + 20;
            } else
                liHeight = link.outerHeight(true) + 20;

            pixflow_livePreviewObj().$('body').append("<span class='header-style2-changed'></span>");

            if ($targetItem1.hasClass('top-block') || ($('#input_header_theme').val() == 'gather' && pixflow_livePreviewObj().$('header.top-gather .content').hasClass('style-style2'))) {
                return;
            }
            else{
                if ($('#input_header_theme').val() == 'gather' && pixflow_livePreviewObj().$('header.top-gather .content').hasClass('style-style1')) {
                    pixflow_livePreviewObj().$('.top-gather .icons-pack li').css('line-height', newval+'px');
                    pixflow_livePreviewObj().$('.top-gather .gather-btn.navigation').css('line-height', newval+'px');
                }

                if ($('#input_header_theme').val() == 'classic') {
                    pixflow_livePreviewObj().$('.top-classic nav > ul > li.has-dropdown > ul').css('top', liHeight + (navHeight - liHeight) / 2 - 10);
                    pixflow_livePreviewObj().$('.top-classic .icons-pack li').css('line-height', newval+'px');
                }

                if ($('#input_header_theme').val() == 'logotop') {
                    var containerHeight = pixflow_livePreviewObj().$('.logo-top-container').outerHeight(true) + pixflow_livePreviewObj().$('.logo').outerHeight(true) + 5;

                    if (newval < containerHeight) {
                        newval = containerHeight;
                    }

                    var headerHeight = newval ,
                        bottomSpace = (headerHeight <= containerHeight) ? 0 : (headerHeight - containerHeight) / 2;

                    liHeight = pixflow_livePreviewObj().$('.style-logotop nav').height();
                    pixflow_livePreviewObj().$('.style-logotop  nav > ul > li.has-dropdown > ul').css('top', liHeight + bottomSpace - 10);
                }

                if ($('#input_header_theme').val() == 'modern') {
                    if ($('#businessBar_enable').is(':checked'))
                        newval = 100;
                    else
                        newval = 70;
                }
                $targetItem2.css('height', '70px').css('line-height', '70px');
                $targetItem1.css('height', newval + 'px');
            }

            if (pixflow_livePreviewObj().$('header .top').length) {
                pixflow_livePreviewObj().$('header,header .top,.second-header-bg').css('height', newval + 'px');
            }

            if (typeof pixflow_livePreviewObj().pixflow_classicTopWireframeStyle == 'function') {
                pixflow_livePreviewObj().pixflow_classicTopWireframeStyle();
            }
        });
    });

    wp.customize('header-side-width', function (value) {
        value.bind(function (newval) {

            pixflow_livePreviewObj().$('header:not(.top)').css('width', newval + '%');

            var $content     = pixflow_livePreviewObj().$('.layout > .wrap'),
                $mainContent = pixflow_livePreviewObj().$('main #content'),
                $headerSideClassic = pixflow_livePreviewObj().$('header.side-classic'),
                $contentW,
            //get content margin
                marginL  = pixflow_getStyle($content, 'margin-left:'),
                marginR  = pixflow_getStyle($content, 'margin-right:'),
                margin   = (marginL == 0 ) ? marginR : marginL;

            if ($headerSideClassic.length)
            {
                $contentW = (100 - newval) + '%';

                if ($mainContent.hasClass('double-sidebar') && pixflow_livePreviewObj().$('header.left').length) {
                    $content.css({marginLeft: newval + '%', width: $contentW});
                }
                else if ($mainContent.hasClass('double-sidebar') && pixflow_livePreviewObj().$('header.right').length) {
                    $content.css({marginRight: newval + '%', width: $contentW});
                }
                else if ($mainContent.hasClass('single-sidebar') && pixflow_livePreviewObj().$('header.left').length) {
                    $contentW = (100 - newval) + '%';
                    $content.css({marginLeft: newval + '%', width: $contentW});
                }
                else if ($mainContent.hasClass('single-sidebar') && pixflow_livePreviewObj().$('header.right').length) {
                    $contentW = (100 - newval) + '%';
                    $content.css({marginRight: newval + '%', width: $contentW});
                }
                else if (pixflow_livePreviewObj().$('header.right').length) {
                    $content.css({marginRight: newval + '%', width: $contentW});
                }
                else if (pixflow_livePreviewObj().$('header.left').length) {
                    $content.css({marginLeft: newval + '%', width: $contentW});
                }

                if (typeof pixflow_livePreviewObj().pixflow_headerSideEffect == 'function') {
                    pixflow_livePreviewObj().pixflow_headerSideEffect();
                } else {
                    $('#customize-preview > iframe').contents().find('iframe')[0].contentWindow.pixflow_headerSideEffect();
                }
            }
            pixflow_setShortcodesResponsive();

        });
    });

    wp.customize('header-content', function (value) {
        value.bind(function (newval) {
            if ($('#input_header_theme').val() == 'modern' || $('#input_header_theme').val() == 'logotop') {
                newval = 100;
            }
            pixflow_livePreviewObj().$('header:not(.side) .content').css('width', newval + '%');
        });
    });


    /*******************************************************************
     *                  Sidebar Controls
     ******************************************************************/
    var sidebars = new Array('','-shop','-blog','-single'),
        i;
    for(i in sidebars){
        /* Sidebar width */
        wp.customize('sidebar-width'+sidebars[i], function (value) {
            var text = sidebars[i];
            value.bind(function (newval) {

                if ($('#sidebar-switch'+text+'-switch-status').text() != 'on') {
                    return;
                }
                var $sidebar = pixflow_livePreviewObj().$('main > .sidebar');
                if(text == '-blog'){
                    var $blog = pixflow_livePreviewObj().$('.blog');
                    if ( !$blog.length )
                        return;
                }else if(text == '-single'){
                    var $blog = pixflow_livePreviewObj().$('.single');
                    if ( !$blog.length )
                        return;
                }else if(text == '-shop'){

                    var $blog = pixflow_livePreviewObj().$('.woocommerce');
                    if ( !$blog.length )
                        return;
                }

                if ( !pixflow_livePreviewObj().$('.sidebar').length )
                    return;

                var $content = pixflow_livePreviewObj().$('main #content'),
                    $mainContent = pixflow_livePreviewObj().$('.wrap > main').width(),

                //get content margin
                    marginL = pixflow_getStyle($content, 'margin-left:'),
                    marginR = pixflow_getStyle($content, 'margin-right:'),
                    margin = (marginL == 0) ? marginR : marginL;

                if ($sidebar.length) {
                    $sidebar.css({width: newval + '%'});
                }

                // Double sidebar
                if ($content.hasClass('double-sidebar')) {
                    newval *= 2;
                    $mainContent = 100 - newval;
                    $content.css({width: $mainContent + '%'});
                }
                else {
                    $mainContent = 100 - newval;
                    $content.css({width: $mainContent + '%'});
                }
                pixflow_setShortcodesResponsive();
            });
        });

        /* Sidebar Skin */
        wp.customize('sidebar-skin'+sidebars[i], function (value) {
            var text = sidebars[i];
            value.bind(function (newval) {

                if(text == '-blog'){
                    var $blog = pixflow_livePreviewObj().$('.blog');
                    if ( !$blog.length )
                        return;
                }else if(text == '-single'){
                    var $blog = pixflow_livePreviewObj().$('.single');
                    if ( !$blog.length )
                        return;
                }else if(text == '-shop'){
                    var $blog = pixflow_livePreviewObj().$('.woocommerce');
                    if ( !$blog.length )
                        return;
                }
                if ( !pixflow_livePreviewObj().$('.sidebar').length )
                    return;
                var colspan, dayNum, countCell, activeColor, j,
                    $sidebar = pixflow_livePreviewObj().$('.sidebar');

                if (newval == 'dark') {
                    $sidebar.removeClass('light-sidebar');
                    $sidebar.addClass(newval + '-sidebar');
                    activeColor = '#2181fd';
                } else {
                    $sidebar.removeClass('dark-sidebar');
                    $sidebar.addClass(newval + '-sidebar');
                    activeColor = '#e09303';
                }
            });
        });

        /* Sidebar style */
        wp.customize('sidebar-style'+sidebars[i], function (value) {
            var text = sidebars[i];
            value.bind(function (newval) {
                if(text == '-blog'){
                    var $blog = pixflow_livePreviewObj().$('.blog');
                    if ( !$blog.length )
                        return;
                }else if(text == '-single'){
                    var $blog = pixflow_livePreviewObj().$('.single');
                    if ( !$blog.length )
                        return;
                }else if(text == '-shop'){
                    var $blog = pixflow_livePreviewObj().$('.woocommerce');
                    if ( !$blog.length )
                        return;
                }
                if ( !pixflow_livePreviewObj().$('.sidebar').length )
                    return;

                var $sidebar = pixflow_livePreviewObj().$('.sidebar');

                if(newval != 'box'){
                    $sidebar.find('.widget .color-overlay').css({display: 'none'});
                    $sidebar.find('.widget .texture-overlay').css({display: 'none'});
                    $sidebar.find('.widget .bg-image').css({display: 'none'});
                    $sidebar.find('.widget').css({'box-shadow': 'none'});
                    var prefix = $sidebar.attr('widgetid');
                    if(prefix == 'post-sidebar'){
                        prefix = 'single-sidebar';
                    }else if(prefix == 'main-sidebar'){
                        prefix = 'blog-sidebar';
                    }
                    prefix = prefix.substring(0, prefix.length - 8);
                    prefix = prefix + '_sidebar';
                    var type = wp.customize(prefix+'_bg_type').get();
                    if(type == 'color'){
                        $sidebar.find('> .color-overlay,> .texture-overlay,> .bg-image').css({display: 'none'});
                        $sidebar.find('> .color-overlay.color-type').css({display: 'block'});
                    }else if(type == 'image'){
                        $sidebar.find('> .color-overlay,> .texture-overlay').css({display: 'none'});
                        $sidebar.find('> .bg-image').css({display: 'block'});
                        if(wp.customize.control(prefix+'_bg_image_overlay').setting() === true){
                            $sidebar.find('> .color-overlay.image-type').css({display: 'block'});
                        }
                    }else if(type == 'texture'){
                        $sidebar.find('> .color-overlay,> .bg-image').css({display: 'none'});
                        $sidebar.find('> .texture-overlay').css({display: 'block'});
                        if(wp.customize.control(prefix+'_bg_texture_overlay').setting() === true){
                            $sidebar.find('> .color-overlay.texture-type').css({display: 'block'});
                        }
                    }
                }
                else
                {

                    var shadow = wp.customize('sidebar-shadow-color'+text).get();
                    shadow='2px 3px 16px 4px '+shadow;


                    $sidebar.find(".widget").css('box-shadow',shadow);
                }


                if (newval == 'none') {
                    $sidebar.removeClass('border box');
                } else if (newval == 'border') {
                    $sidebar.removeClass('box');
                    $sidebar.addClass(newval);
                } else {
                    $sidebar.removeClass('border');
                    var prefix = $sidebar.attr('widgetid');
                    if(prefix == 'double-sidebar'){
                        var detail = pixflow_livePreviewObj().$('meta[name="post-id"]').attr('detail');
                        if(detail == 'post'){
                            prefix = 'post-sidebar';
                        }else if(detail == 'other'){
                            prefix = 'main-sidebar';
                        }
                    }
                    if(prefix == 'post-sidebar'){
                        prefix = 'single-sidebar';
                    }else if(prefix == 'main-sidebar'){
                        prefix = 'blog-sidebar';
                    }
                    prefix = prefix.substring(0, prefix.length - 8);
                    prefix = prefix + '_sidebar';
                    var type = wp.customize(prefix+'_bg_type').get();
                    if(type == 'color'){
                        $sidebar.find('.widget .color-overlay,.widget .texture-overlay,.widget .bg-image').css({display: 'none'});
                        $sidebar.find('.widget .color-overlay.color-type').css({display: 'block'});
                    }else if(type == 'image'){
                        $sidebar.find('.widget .color-overlay,.widget .texture-overlay').css({display: 'none'});
                        $sidebar.find('.widget .bg-image').css({display: 'block'});
                        if(wp.customize.control(prefix+'_bg_image_overlay').setting() === true){
                            $sidebar.find('.widget .color-overlay.image-type').css({display: 'block'});
                        }
                    }else if(type == 'texture'){
                        $sidebar.find('.widget .color-overlay,.widget .bg-image').css({display: 'none'});
                        $sidebar.find('.widget .texture-overlay').css({display: 'block'});
                        if(wp.customize.control(prefix+'_bg_texture_overlay').setting() === true){
                            $sidebar.find('.widget .color-overlay.texture-type').css({display: 'block'});
                        }
                    }
                    $sidebar.addClass(newval);
                }
            });
        });

        /* Sidebar align */
        wp.customize('sidebar-align'+sidebars[i], function (value) {
            var text = sidebars[i];
            value.bind(function (newval) {

                if(text == '-blog'){
                    var $blog = pixflow_livePreviewObj().$('.blog');
                    if ( !$blog.length )
                        return;
                }else if(text == '-single'){
                    var $blog = pixflow_livePreviewObj().$('.single');
                    if ( !$blog.length )
                        return;
                }else if(text == '-shop'){
                    var $blog = pixflow_livePreviewObj().$('.woocommerce');
                    if ( !$blog.length )
                        return;
                }
                if ( !pixflow_livePreviewObj().$('.sidebar').length )
                    return;

                var $sidebar = pixflow_livePreviewObj().$('.sidebar');

                if (newval == 'left') {
                    $sidebar.removeClass('right-align center-align');
                    $sidebar.addClass(newval + '-align');
                } else if (newval == 'right') {
                    $sidebar.removeClass('left-align center-align');
                    $sidebar.addClass(newval + '-align')
                } else {
                    $sidebar.removeClass('left-align right-align');
                    $sidebar.addClass(newval + '-align')
                }
            });
        });



        wp.customize('sidebar-shadow-color'+sidebars[i], function (value) {
            var text = sidebars[i];
            value.bind(function (newval) {

                if(text == '-blog'){
                    var $blog = pixflow_livePreviewObj().$('.blog');
                    if ( !$blog.length )
                        return;
                }else if(text == '-single'){
                    var $blog = pixflow_livePreviewObj().$('.single');
                    if ( !$blog.length )
                        return;
                }else if(text == '-shop'){
                    var $blog = pixflow_livePreviewObj().$('.woocommerce');
                    if ( !$blog.length )
                        return;
                }
                if ( !pixflow_livePreviewObj().$('.sidebar').length )
                    return;

                var $sidebar = pixflow_livePreviewObj().$('.sidebar');


                newval='2px 3px 16px 4px '+newval;

                $sidebar.filter(".box").find(".widget").css('box-shadow',newval);


            });
        });
    }
    /*******************************************************************
     *                  Site Content Controls
     ******************************************************************/

    /* main padding top & bottom */
    wp.customize('main-top', function (value) {
        value.bind(function (newval) {
            var $blogTitle = pixflow_livePreviewObj().$('.loop-page-title');
            if($blogTitle.length){
                pixflow_livePreviewObj().$('.loop-page-title').css('margin-top', newval + 'px');
            }else{
                pixflow_livePreviewObj().$('main').css('padding-top', newval + 'px');
            }
        });
    });

    /* main width */
    wp.customize('main-width', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('main').css('width', newval + '%');
            pixflow_setShortcodesResponsive();

            if(typeof pixflow_livePreviewObj().pixflow_portfolioSplit == 'function'){
                pixflow_livePreviewObj().pixflow_portfolioSplit();
            }

            if(typeof pixflow_livePreviewObj().pixflow_portfolioDetailFull == 'function'){
                pixflow_livePreviewObj().$(".owl-carousel .item").css({width:$(window).width()});
            }

        });
    });

    /* main margin bottom */
    wp.customize('main-bottom', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('main').css('margin-bottom', newval + '%');
        });
    });


    wp.customize('mainC-width', function (value){
        value.bind(function (newval) {
            var $mainContent      = pixflow_livePreviewObj().$('main > .content'),
                $composerRow      = pixflow_livePreviewObj().$('.compose-mode .vc_vc_row .vc_row:not(.full_size)'),
                $vcRowsInner      = pixflow_livePreviewObj().$('.compose-mode .vc_vc_row_inner .vc_row_inner:not(.full_size)'),
                $mainContentChild = $mainContent.find('.box_size'),
                $boxSizeContainer = $mainContent.find('.box_size_container'),
                $sidebar          = pixflow_livePreviewObj().$('div.sidebar');

            if ( !$sidebar.length || pixflow_livePreviewObj().$('aside.sidebar').length ){
                $mainContentChild.css({'marginLeft': 'auto', 'marginRight': 'auto', 'width': newval + '%'});
                $boxSizeContainer.css({'marginLeft': 'auto', 'marginRight': 'auto', 'width': newval + '%'});
                $composerRow.css({'marginLeft': 'auto', 'marginRight': 'auto', 'width': newval + '%'});
                $vcRowsInner.css({'marginLeft': 'auto', 'marginRight': 'auto','width': newval + '%'});
                pixflow_setShortcodesResponsive();

                if(typeof pixflow_livePreviewObj().pixflow_portfolioSplit == 'function'){
                    pixflow_livePreviewObj().pixflow_portfolioSplit();
                }
                return;
            }

            var res = pixflow_getStyle($sidebar, 'width:');

            if ($sidebar.length == 1){
                var maxW = 100 - parseInt(res);

                $mainContentChild.css({'width': newval + '%'});
                $boxSizeContainer.css({'marginLeft': 'auto', 'marginRight': 'auto', 'width': newval + '%'});
                $composerRow.css({'marginLeft': 'auto', 'marginRight': 'auto', 'width': newval + '%'});
                $vcRowsInner.css({'marginLeft': 'auto', 'marginRight': 'auto','width': newval + '%'});
            }
            else if ($sidebar.length == 2) {

                var maxWidth = 100 - parseInt(res) * 2,
                    margin = (maxWidth - newval) / 2;

                $mainContentChild.css({'marginLeft': margin + '%', 'marginRight': margin + '%', 'width': newval + '%'});
                $composerRow.css({'marginLeft': 'auto', 'marginRight': 'auto', 'width': newval + '%'});
                $vcRowsInner.css({'marginLeft': 'auto', 'marginRight': 'auto','width': newval + '%'});
                $boxSizeContainer.css({'marginLeft': 'auto', 'marginRight': 'auto', 'width': newval + '%'});

            }
            if(typeof pixflow_livePreviewObj().pixflow_portfolioSplit == 'function'){
                pixflow_livePreviewObj().pixflow_portfolioSplit();
            }

            pixflow_setShortcodesResponsive();


        });
    });

    /* main content padding */
    wp.customize('mainC-padding', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('main > .content').css('padding', newval + '%');


            // Team Member Carousel
            if ( typeof pixflow_livePreviewObj().pixflow_teammemberCarousel == 'function' && pixflow_livePreviewObj().$('.wrap-teammember-style2').length ) {
                pixflow_livePreviewObj().pixflow_teammemberCarousel('resized');
            }

        });
    });

    /*Site content background*/
    wp.customize('main_bg', function (value) {
        value.bind(function (newval) {
            if(newval == true){
                pixflow_livePreviewObj().$('main .content > .color-overlay.color-type').css('display','block');
            }else{
                pixflow_livePreviewObj().$('main .content > .color-overlay').css('display','none');
            }
        });
    });
    /* Site content Overlay Type */
    wp.customize('main_bg_color_type', function (value) {
        value.bind(function (newval) {
            if (newval == 'solid') {
                var $solidColor = $('#input_main_bg_solid_color').val();
                pixflow_livePreviewObj().$('main .content .color-overlay.color-type').css('background', 'none').css('background-color', $solidColor);
            } else if (newval == 'gradient') {
                pixflow_makeGradient('main_bg_gradient', 'main .content .color-overlay.color-type');
            }
        });
    });

    /* site content Overlay Solid Color */
    wp.customize('main_bg_solid_color', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('main .content .color-overlay.color-type').css('background', newval);
        });
    });

    /* site content Overlay Gradient - Orientation */
    wp.customize('main_bg_gradient_orientation', function (value) {
        value.bind(function (newval) {
            pixflow_makeGradient('main_bg_gradient', 'main .content .color-overlay.color-type', '', '', newval);
        });
    });

    /* site content Overlay Gradient - color1 */
    wp.customize('main_bg_gradient_color1', function (value) {
        value.bind(function (newval) {
            pixflow_makeGradient('main_bg_gradient', 'main .content .color-overlay.color-type', newval);
        });
    });

    /* site content Overlay Gradient - color2 */
    wp.customize('main_bg_gradient_color2', function (value) {
        value.bind(function (newval) {
            pixflow_makeGradient('main_bg_gradient', 'main .content .color-overlay.color-type', '', newval);
        });
    });
    /*******************************************************************
     *                          Footer
     ******************************************************************/

    wp.customize('footer-width', function (value) {
        value.bind(function (newval) {
            if (!pixflow_livePreviewObj().$('footer .content').length)
                return;

            if(pixflow_livePreviewObj().$('footer').hasClass('footer-parallax')){
                var footerwidth=parseFloat(newval/100);
                var layoutwidth=parseInt(pixflow_livePreviewObj().$(".layout-container > .layout").width());
                var parallaxwidth=(layoutwidth * footerwidth);
                pixflow_livePreviewObj().$("footer.footer-parallax").width(parallaxwidth);
                pixflow_livePreviewObj().$('footer').css({left:'50%','transform':'translateX(-50%)'})
                pixflow_livePreviewObj().$('footer').attr("data-width",newval);

            }else {
                pixflow_livePreviewObj().$('footer').css('width', newval + '%');
            }
        });
    });

    wp.customize('footer-marginT', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('footer').css('margin-top', newval + 'px');
        });
    });

    wp.customize('footer-marginB', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('.layout-container > div.layout').css('padding-bottom', newval + 'px');
        });
    });

    wp.customize('footerC-width', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('footer .content').css('width', newval + '%');
        });
    });

    wp.customize('footer_widget_area_bg_color_rgba', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('footer.footer-default .footer-widgets').css('background-color', newval);
        });
    });

    wp.customize('footer_bottom_area_bg_color_rgba', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('footer.footer-default #footer-bottom').css('background-color', newval);
        });
    });

    /* Footer widget area */
    wp.customize('footer_classic_widgets_styles', function (value) {
        value.bind(function (newval) {
            if (newval == 'none'){
                pixflow_livePreviewObj().$('footer .widget-area').removeClass('border').addClass(newval);
            }else{
                pixflow_livePreviewObj().$('footer .widget-area').removeClass('none').addClass('border');
            }
        });
    });

    wp.customize('widgets_separator', function (value) {
        value.bind(function (newval) {
            if (newval == 'full'){
                pixflow_livePreviewObj().$('footer .widget-area').removeClass('boxed').addClass('full');
            }else if (newval == 'boxed'){
                pixflow_livePreviewObj().$('footer .widget-area').removeClass('full').addClass('boxed');
            }
            if(typeof pixflow_livePreviewObj().pixflow_footerParallax == 'function'){
                pixflow_livePreviewObj().pixflow_footerParallax();
            }
        });
    });

    wp.customize('footer_widget_area_height', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('footer .widget-area').css('height', newval + 'px');
            if(typeof pixflow_livePreviewObj().pixflow_footerParallax == 'function'){
                pixflow_livePreviewObj().pixflow_footerParallax();
            }
        });
    });

    wp.customize('footer_parallax',function(value){
        value.bind(function(newval){
            if(newval){
                pixflow_livePreviewObj().$("footer").css({
                'margin-right': '',
                'margin-left': '',
                'position': '',
                'right': '',
                'left': '',
                'width': '',
                'transform': '',
                });
                pixflow_livePreviewObj().$("main").addClass('has-parallax-footer');
                pixflow_livePreviewObj().$("footer").addClass('footer-parallax');
                if(typeof pixflow_livePreviewObj().pixflow_footerParallax == 'function'){
                    pixflow_livePreviewObj().pixflow_footerParallax();
                }

            }else{
                pixflow_livePreviewObj().$("main").removeClass('has-parallax-footer');
                pixflow_livePreviewObj().$("main").css('margin-bottom','0');
                pixflow_livePreviewObj().$("footer").removeClass('footer-parallax');
                pixflow_livePreviewObj().$("footer").css({
                    'margin-right': 'auto',
                    'margin-left': 'auto',
                    'position': 'relative',
                    'right': '0',
                    'left': '0',
                    'width': '100%',
                    'transform': 'translateX(0)',
                });
            }
        });

    });

    wp.customize('footer_widget_area_skin', function (value) {
        value.bind(function (newval) {
            var colspan, dayNum, countCell, activeColor, j = 1,
                $footer_widgets = pixflow_livePreviewObj().$('.footer-widgets');
            if (newval == 'dark') {
                $footer_widgets.removeClass('light');
                $footer_widgets.addClass('dark');

            } else {
                $footer_widgets.removeClass('dark');
                $footer_widgets.addClass('light');
            }

            pixflow_livePreviewObj().$('.footer-widgets .widget_calendar').each(function () {
                j = 1;

                //change day title color
                colspan = parseInt(pixflow_livePreviewObj().$('.footer-widgets .widget_calendar table tbody tr td.pad').attr('colspan'));
                dayNum = parseInt(pixflow_livePreviewObj().$('.footer-widgets .widget_calendar table tr td#today').html()) + colspan;

            });
        });
    });

    /* Footer copyright area */
    wp.customize('footer_bottom_area_height', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('#footer-bottom').css('min-height',pixflow_livePreviewObj().$('#footer-bottom .centered').outerHeight())
            pixflow_livePreviewObj().$('#footer-bottom').height(newval);
            //scroll to end ;)
            pixflow_livePreviewObj().$("html, body").scrollTop(50000);
            if(typeof pixflow_livePreviewObj().pixflow_footerParallax == 'function'){
                pixflow_livePreviewObj().pixflow_footerParallax();
            }
        });
    });

    wp.customize('footer_copyright_text', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('div#footer-bottom .copyright p').text(newval);
            pixflow_livePreviewObj().$('header .footer .copyright p').text(newval);
            if(newval !=""){
                pixflow_livePreviewObj().$(".footer.style-modern .copyright").removeClass('md-hidden');
            }else{
                pixflow_livePreviewObj().$(".footer.style-modern .copyright").addClass('md-hidden');
            }
        });
    });

    wp.customize('copyright_color', function (value) {
        value.bind(function (newval) {

            pixflow_livePreviewObj().$('#footer-bottom .social-icons span a').css({ color: newval });
            pixflow_livePreviewObj().$('#footer-bottom .copyright p').css({ color: newval });

        });
    });

    wp.customize('copyright_separator', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$("footer hr.footer-separator").css({'height':newval+'px'});
            if(typeof pixflow_livePreviewObj().pixflow_footerParallax == 'function'){
                pixflow_livePreviewObj().pixflow_footerParallax();
            }
        });
    });

    wp.customize('copyright_separator_bg_color', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('footer hr.footer-separator').css({ backgroundColor: newval });
        });
    });
    /*******************************************************************
     *                  Header  Controls
     ******************************************************************/
    /*** Business Bar ***/
    /* Style */
    wp.customize('businessBar_style', function (value) {
        value.bind(function (newval) {
            var $addressIcon = pixflow_livePreviewObj().$('.business .address .icon'),
                $telIcon = pixflow_livePreviewObj().$('.business .tel .icon'),
                $emailIcon = pixflow_livePreviewObj().$('.business .email .icon'),
                $socialIcon = pixflow_livePreviewObj().$('.business .social.text .social-icon');
            if (newval == 'dot') {
                $addressIcon.removeClass('icon-location');
                $addressIcon.addClass('icon-record');
                $telIcon.removeClass('icon-phone');
                $telIcon.addClass('icon-record');
                $emailIcon.removeClass('icon-Mail');
                $emailIcon.addClass('icon-record');
                if ($socialIcon.length) {
                    $socialIcon.css('display', 'inline-flex');
                }

            } else if (newval == 'icon') {
                $addressIcon.removeClass('icon-record');
                $addressIcon.addClass('icon-location');
                $telIcon.removeClass('icon-record');
                $telIcon.addClass('icon-phone');
                $emailIcon.removeClass('icon-record');
                $emailIcon.addClass('icon-Mail');
                if ($socialIcon.length) {
                    $socialIcon.css('display', 'none');
                }
            }
        });
    });

    /* Content Color */
    wp.customize('businessBar_content_color', function (value) {
        value.bind(function (newval) {
            if (pixflow_livePreviewObj().$('header.top-modern').length)
                return;

            var $content = pixflow_livePreviewObj().$('.business'),
                $socials = pixflow_livePreviewObj().$('.business a');
            $content.css('color', newval);
            $socials.css('color', newval);
        });
    });
    /* BG Color */
    wp.customize('businessBar_bg_color', function (value) {
        value.bind(function (newval) {
            if (pixflow_livePreviewObj().$('header.top-modern').length)
                return;

            var $content = pixflow_livePreviewObj().$('.business');
            $content.css('background', newval);
        });
    });
    /* Address */
    wp.customize('businessBar_address', function (value) {
        value.bind(function (newval) {
            var $address = pixflow_livePreviewObj().$('.business .address'),
                $address_content = pixflow_livePreviewObj().$('.business .address .address-content');
            if (newval == '') {
                $address.addClass('md-hidden');
            } else {
                $address.removeClass('md-hidden');
            }
            $address_content.html(newval);
        });
    });
    /* Tel */
    wp.customize('businessBar_tel', function (value) {
        value.bind(function (newval) {
            var $tel = pixflow_livePreviewObj().$('.business .tel'),
                $tel_content = pixflow_livePreviewObj().$('.business .tel .tel-content');
            if (newval == '') {
                $tel.addClass('md-hidden');
            } else {
                $tel.removeClass('md-hidden');
            }
            $tel_content.html(newval);
        });
    });
    /* Email */
    wp.customize('businessBar_email', function (value) {
        value.bind(function (newval) {
            var $email = pixflow_livePreviewObj().$('.business .email'),
                $email_content = pixflow_livePreviewObj().$('.business .email .email-content');
            if (newval == '') {
                $email.addClass('md-hidden');
            } else {
                $email.removeClass('md-hidden');
            }
            $email_content.html(newval);
        });
    });

    /* Header */
    function pixflow_checkClasses($elem) {
        "use strict";
        var classList = $elem.attr('class').split(/\s+/);
        $.each(classList, function (index, item) {
            if (item === 'top-classic') {
                $elem.removeClass('top-classic');
            } else if (item === 'top-gather') {
                $elem.removeClass('top-gather');
            } else if (item === 'top-block') {
                $elem.removeClass('top-block');
            } else if (item === 'top-modern') {
                $elem.removeClass('top-modern');
            } else if (item === 'top-logotop') {
                $elem.removeClass('top-logotop');
            }
        });
    }

    wp.customize('header_theme', function (value) {
        value.bind(function (newval) {
            headerBlock=newval;
            if(newval=='modern') {
                $('#customize-control-header_theme').addClass('last');
                $('#customize-control-header_theme .customizer-separator').remove();
            }else{
                $('#customize-control-header_theme').removeClass('last');
                if($('#customize-control-header_theme hr').length<1) {
                    $('#customize-control-header_theme').append('<hr class="customizer-separator" />');
                }
            }

            var $elem = pixflow_livePreviewObj().$('header');
            if ($elem.length) {
                pixflow_checkClasses($elem);
            }

            $elem.addClass(newval);
            pixflow_customRequired();
            pixflow_headerTopBlockOpacity();

        });
    });

    wp.customize('classic_style', function (value) {
        value.bind(function (newval) {
            var $elem = pixflow_livePreviewObj().$('header > .content'),
                theClass = '',
                className = 'style-' + newval,
                 txt = $elem.attr('class'),
                 p = new RegExp('(style)(-)((?:[a-z][a-z]+))',["i"]),
                 m = p.exec(txt);
            if (m != null) {
                theClass = m[1] + m[2] + m[3];
            }
            $elem.removeClass(theClass).addClass(className);
            //remove and set styles of buttons in header
            if (newval == 'none'){
                set_menu_button_background($('#input_button_bg_color').val());
            }else{
                set_menu_button_background('transparent');
            }
            if ( 'border' == newval ){
                pixflow_livePreviewObj().$('header.top-classic .style-border nav > ul > li.menu-item').last().css('padding-right','35px');
            }else {
                pixflow_livePreviewObj().$('header.top-classic .style-border nav > ul > li.menu-item').last().css('padding-right','0');
            }

            var nav_color = wp.customize.control('nav_color').setting();
            if( newval == "wireframe"){
                $('#customize-control-header_border_enable').css('display','none');
                pixflow_livePreviewObj().$('header:not(.header-clone) > .color-overlay').css({ borderBottom: '1px solid', borderBottomColor: pixflow_colorConvertor(nav_color,'rgba',0.3) });
                if (typeof pixflow_livePreviewObj().pixflow_classicTopWireframeStyle == 'function') {
                    pixflow_livePreviewObj().pixflow_classicTopWireframeStyle();
                }
            } else{
                $('#customize-control-header_border_enable').css('display','block');
                if($('#header_border_enable-switch-status').text() == 'off'){
                    pixflow_livePreviewObj().$('header .color-overlay').css({ 'border': 'none'});
                }
            }

            if(typeof pixflow_livePreviewObj().pixflow_underlineAnimation == 'function'){
                pixflow_livePreviewObj().pixflow_underlineAnimation();
            }

            if(typeof pixflow_livePreviewObj().pixflow_callDropdown() == 'function'){
                pixflow_livePreviewObj().pixflow_callDropdown();
            }

        });
    });

    wp.customize('block_style', function (value) {
        value.bind(function (newval) {
            blockSquare=newval;
            var $elem = pixflow_livePreviewObj().$('header .content');
            if (!$elem.length) {
                return;
            }
            var theClass = $elem.attr("class").match(/style[\w-]*\b/),
                className = 'style-' + newval;

            $elem.removeClass(theClass[0]).addClass(className);

            pixflow_customRequired();
        });
    });

    wp.customize('logotop_logoSpace', function (value) {
        value.bind(function (newval) {
            var $elem = pixflow_livePreviewObj().$('header.top-logotop .logo-top-container'),
                navHeight,
                liHeight;
            $elem.css({'margin-top': newval + 'px'});

            if ($('#input_header_theme').val() == 'logotop') {

                var headerHeight = pixflow_livePreviewObj().$('header').height(),
                    containerHeight = pixflow_livePreviewObj().$('.logo-top-container').height() + pixflow_livePreviewObj().$('.logo').height() + parseInt(newval) + 5;

                if (headerHeight <= containerHeight) {
                    pixflow_livePreviewObj().$('header.top-logotop').css({'height': containerHeight+'px'});
                }else{
                    pixflow_livePreviewObj().$('header.top-logotop').css({'height': headerHeight+'px'});
                }

                //for dropDown Top
                var bottomSpace = (headerHeight <= containerHeight) ? 0 : (headerHeight - containerHeight) / 2;
                liHeight = pixflow_livePreviewObj().$('.style-logotop nav').height();

                pixflow_livePreviewObj().$('.style-logotop  nav > ul > li.has-dropdown > ul').css('top', (liHeight + bottomSpace - 10)+'px');
            }
        });
    });

    wp.customize('overlay_bg', function (value) {
        value.bind(function (newval) {
            var $elem = pixflow_livePreviewObj().$('.gather-overlay');
            $elem.css({'background-color': newval});
        });
    });

    wp.customize('header_position', function (value) {
        value.bind(function (newval) {
            pixflow_customRequired();
        });
    });

    wp.customize('header_top_position', function (value) {
        value.bind(function (newval) {

            var $businessBarState = $('#businessBar_enable-switch-status').text();
            if(wp.customize.control('header_theme').setting() == 'modern'){
                $businessBarState = 'off';
            }
            if ( $businessBarState == 'on' && parseInt(newval) >= 36 ) {
                pixflow_livePreviewObj().$('header:not(.header-clone)').css('top', newval + 'px');
                pixflow_livePreviewObj().$('.business').css('top', (parseInt(newval) - 36) + 'px');
            }
            else if ( $businessBarState == 'on' ) {
                pixflow_livePreviewObj().$('header:not(.header-clone)').css('top', '36px');
                pixflow_livePreviewObj().$('.business').css('top', '0');
            }
            else {
                pixflow_livePreviewObj().$('header:not(.header-clone)').css('top', newval+'px');
            }
        });
    });


    wp.customize('header_icons', function (value) {
        value.bind(function (newval) {


            if(newval=="setone"){
                pixflow_livePreviewObj().$(".elem-container.shopcart span.icon-shopping-cart").removeClass("icon-shopping-cart").addClass("icon-shopcart2");
                pixflow_livePreviewObj().$(".elem-container.notification span.icon-bell3").removeClass("icon-bell3").addClass("icon-notification");
                pixflow_livePreviewObj().$(".elem-container.search span.icon-search5").removeClass("icon-search5").addClass("icon-search3");
                pixflow_livePreviewObj().$(".top-gather .icon-hamburger-menu").removeClass("icon-hamburger-menu").addClass("icon-gathermenu");

            }
            else{
                pixflow_livePreviewObj().$(".elem-container.shopcart span.icon-shopcart2").removeClass("icon-shopcart2").addClass("icon-shopping-cart");
                pixflow_livePreviewObj().$(".elem-container.notification span.icon-notification").removeClass("icon-notification").addClass("icon-bell3");
                pixflow_livePreviewObj().$(".elem-container.search span.icon-search3").removeClass("icon-search3").addClass("icon-search5");
                pixflow_livePreviewObj().$(".top-gather .icon-gathermenu").removeClass("icon-gathermenu").addClass("icon-hamburger-menu");

            }
        });
    });


    wp.customize('gather_style', function (value) {
        value.bind(function (newval) {
            pixflow_customRequired();
        });
    });

    wp.customize('header_side_theme', function (value) {
        value.bind(function (newval) {
            pixflow_customRequired();
        });
    });

    wp.customize('header_styles', function (value) {
        value.bind(function (newval) {

            if(newval=='style3') {
                pixflow_livePreviewObj().$('header').css({width:$('#input_header_top_width').val()+'%'});
                pixflow_livePreviewObj().$('.second-header-bg').css('height', $('#input_header-top-height').val() + 'px');
                pixflow_livePreviewObj().$('body').animate({
                        scrollTop: 0
                    },400,'swing',function() {
                        pixflow_livePreviewObj().$('header').removeClass('header-style2');
                        pixflow_livePreviewObj().$('header').removeClass('header-style1');
                        pixflow_livePreviewObj().$('header').addClass('header-style3');
                        if(typeof pixflow_livePreviewObj().pixflow_headerStates == 'function'){
                            pixflow_livePreviewObj().pixflow_headerStates();
                        }
                    }
                );
                $('#customize-control-header_styles').removeClass('last');
                $('#customize-control-header_styles').addClass('glue');
                $('#customize-control-header_styles').append('<hr class="customizer-separator" />');
                pixflow_livePreviewObj().$('.layout > .wrap > .business').css({ position: 'absolute' });
            }else if(newval=='style2') {

                pixflow_livePreviewObj().$('body').animate({

                        scrollTop: 0
                    },400,'swing',function() {
                        pixflow_livePreviewObj().$('header').removeClass('header-style3');
                        pixflow_livePreviewObj().$('header').removeClass('header-style1');
                        pixflow_livePreviewObj().$('header.header-clone').remove();
                        pixflow_livePreviewObj().$('header').addClass('header-style2');
                        if(typeof pixflow_livePreviewObj().pixflow_headerStates == 'function'){
                            pixflow_livePreviewObj().pixflow_headerStates();
                        }
                        //pixflow_livePreviewObj().pixflow_calculateFixHeader();
                    }
                );

                pixflow_livePreviewObj().$('header').css({width:$('#input_header_top_width').val()+'%'});

                if($('#customize-control-header_styles').hasClass('glue')) {
                    $('#customize-control-header_styles').removeClass('glue');
                    $('#customize-control-header_styles').addClass('last');
                    $('#customize-control-header_styles .customizer-separator').remove();
                }
            } else{

                pixflow_livePreviewObj().$('body').animate({
                        scrollTop: 0
                    },400,'swing',function() {
                        pixflow_livePreviewObj().$('header').removeClass('header-style3');
                        pixflow_livePreviewObj().$('header').removeClass('header-style2');
                        pixflow_livePreviewObj().$('header.header-clone').remove();
                        pixflow_livePreviewObj().$('header').addClass('header-style1');
                        pixflow_livePreviewObj().$('.layout > .wrap > .business').css({ position: 'absolute' });

                    }
                );

                if($('#customize-control-header_styles').hasClass('glue')) {
                    $('#customize-control-header_styles').removeClass('glue');
                    $('#customize-control-header_styles').addClass('last');
                    $('#customize-control-header_styles .customizer-separator').remove();
                }
            }
            pixflow_customRequired();

        });
    });

    wp.customize('show_up_after', function (value) {
        value.bind(function (newval) {
            showUpAfter=newval;
            pixflow_headerSecondSetting();
        });
    });

    wp.customize('show_up_style', function (value) {
        value.bind(function (newval) {
            pixflow_headerSecondSetting();
        });
    });

    wp.customize('nav_color_second', function (value) {
        value.bind(function (newval) {
            pixflow_headerSecondSetting();
        });
    });

    wp.customize('nav_hover_color_second', function (value) {
        value.bind(function (newval) {
            pixflow_headerSecondSetting();
        });
    });

    wp.customize('header_bg_solid_color_second', function (value) {
        value.bind(function (newval) {
            pixflow_headerSecondSetting();
        });
    });

    wp.customize('header_bg_color_type_second', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().typeSecond = newval;
            if (newval == 'solid') {

                var $solidColor = $('#input_header_bg_solid_color_second').val();

                pixflow_livePreviewObj().$('.second-header-bg').css('background', 'none');
                pixflow_livePreviewObj().$('.second-header-bg').css('background-color', $solidColor);

            } else if (newval == 'gradient' && $('#input_header_theme').val() != 'block' && $('#input_block_style').val() != 'style1') {
                pixflow_makeGradient('header_bg_gradient_second','header.header-clone + .second-header-bg , header.header-fix + .second-header-bg ,header_bg_gradient_second');
                pixflow_livePreviewObj().$('header.header-clone + .second-header-bg , header.header-fix + .second-header-bg').css('background-size','100% 100%');
            }

        });
    });

    wp.customize('header_bg_gradient_second_color1', function (value) {
        value.bind(function (newval) {

            if( $('#input_header_theme').val() == 'block' && $('#input_block_style').val() == 'style1') {
                return;
            }
            if(wp.customize.control('header_bg_color_type_second').setting() != 'solid') {
                pixflow_makeGradient('header_bg_gradient_second', '', newval);
            }
            pixflow_headerSecondSetting();
            pixflow_livePreviewObj().$(window).trigger('scroll');
        });
    });

    wp.customize('header_bg_gradient_second_color2', function (value) {
        value.bind(function (newval) {

            if( $('#input_header_theme').val() == 'block' && $('#input_block_style').val() == 'style1') {
                return;
            }
            if(wp.customize.control('header_bg_color_type_second').setting() != 'solid') {
                pixflow_makeGradient('header_bg_gradient_second', '', '', newval);
            }
            pixflow_headerSecondSetting();

        });
    });

    wp.customize('header_bg_gradient_second_orientation', function (value) {
        value.bind(function (newval) {

            if( $('#input_header_theme').val() == 'block' && $('#input_block_style').val() == 'style1') {
                return;
            }
            if(wp.customize.control('header_bg_color_type_second').setting() != 'solid') {
                pixflow_makeGradient('header_bg_gradient_second', '', '', '', newval);
            }
            pixflow_headerSecondSetting();

        });
    });

    wp.customize('logo_style', function (value) {
        value.bind(function (newval) {
            var logo,
                randNum = Math.random();

            if(newval=='dark'){
                if($('#customize-control-dark_logo img').length) {
                    logo = $('#customize-control-dark_logo img').attr('src');
                }else{
                    logo = customizerValues.THEME_IMAGES_URI+'/logo.png';
                }
            }else{
                if($('#customize-control-light_logo img').length) {
                    logo = $('#customize-control-light_logo img').attr('src');
                }else{
                    logo = customizerValues.THEME_IMAGES_URI+'/logo.png';
                }
            }

            pixflow_livePreviewObj().$('header:not(.header-fix,.header-clone) .logo img').attr('src',logo+'?'+randNum);

        });
    });

    // Header Border
    wp.customize('header_border_enable', function (value) {
        value.bind(function (newval) {

            var layout = $("input:radio[name='_customize-radio-header_position']:checked").val(),
                nav_color = wp.customize.control('nav_color').setting(),
                nav_color_second = wp.customize.control('nav_color_second').setting();

            if ( newval && layout == 'top') {
                pixflow_livePreviewObj().$('header:not(.header-clone) > .color-overlay').css({borderBottom: '1px solid', borderBottomColor: pixflow_colorConvertor(nav_color, 'rgba', 0.3)});
                pixflow_livePreviewObj().$('.second-header-bg').css({borderBottom: '1px solid', borderBottomColor: pixflow_colorConvertor(nav_color_second, 'rgba', 0.3)});
            }
            else if ( newval && layout == 'left') {
                pixflow_livePreviewObj().$('header:not(.header-clone) > .color-overlay').css({borderRight: '1px solid', borderRightColor: pixflow_colorConvertor(nav_color, 'rgba', 0.3)});
                pixflow_livePreviewObj().$('header:not(.header-clone) > .color-overlay.style-second').css({borderRight: '1px solid', borderRightColor: pixflow_colorConvertor(nav_color_second, 'rgba', 0.3)});
            }
            else if ( newval && layout == 'right') {
                pixflow_livePreviewObj().$('header:not(.header-clone) > .color-overlay').css({borderLeft: '1px solid', borderLeftColor: pixflow_colorConvertor(nav_color, 'rgba', 0.3)});
                pixflow_livePreviewObj().$('header:not(.header-clone) > .color-overlay.style-second').css({borderLeft: '1px solid', borderLeftColor: pixflow_colorConvertor(nav_color_second, 'rgba', 0.3)});
            }
            else {
                pixflow_livePreviewObj().$('header > .color-overlay').css('border', 'none');
                pixflow_livePreviewObj().$('.second-header-bg').css('border', 'none');
            }

        });
    });

    wp.customize('logo_style_second', function (value) {
        value.bind(function (newval) {
            var logo,
                randNum = Math.random();

            if(newval=='dark'){
                if($('#customize-control-dark_logo img').length) {
                    logo = $('#customize-control-dark_logo img').attr('src');
                }else{
                    logo = customizerValues.THEME_IMAGES_URI+'/logo.png';
                }
            }else{
                if($('#customize-control-light_logo img').length) {
                    logo = $('#customize-control-light_logo img').attr('src');
                }else{
                    logo = customizerValues.THEME_IMAGES_URI+'/logo.png';
                }
            }

            pixflow_livePreviewObj().$('header.header-fix .logo img,.header-clone .logo img').attr('src',logo+'?'+randNum);

            pixflow_headerSecondSetting();
        });
    });

    wp.customize('header_side_image_image', function (value) {
        value.bind(function (newval) {

            if( ($('#header_positionright').val()== 'left' || $('#header_positionright').val()== 'right' ) && $('#input_header_side_theme').val() != 'modern'){
                pixflow_livePreviewObj().$('header.side-classic > .bg-image').css('background-image','url( '+newval+' )');
            }
        });
    });

    wp.customize('header_side_image_position', function (value) {
        value.bind(function (newval) {
            if( ($('#header_positionright').val()== 'left' || $('#header_positionright').val()== 'right') && $('#input_header_side_theme').val() != 'modern'){
                pixflow_livePreviewObj().$('header.side-classic > .bg-image').css('background-position',newval.replace('-', ' '));
            }
        });
    });

    wp.customize('header_side_image_repeat', function (value) {
        value.bind(function (newval) {
            if( ($('#header_positionright').val()== 'left' || $('#header_positionright').val()== 'right' ) && $('#input_header_side_theme').val() != 'modern'){
                pixflow_livePreviewObj().$('header.side-classic > .bg-image').css('background-repeat',newval);
            }
        });
    });

    wp.customize('header_side_image_size', function (value) {
        value.bind(function (newval) {
            if( ($('#header_positionright').val()== 'left' || $('#header_positionright').val()== 'right' ) && $('#input_header_side_theme').val() != 'modern'){
                pixflow_livePreviewObj().$('header.side-classic > .bg-image').css('background-size',newval);
            }
        });
    });

    wp.customize('dropdown_fg_hover_color', function (value) {
        value.bind(function (newval) {
            if (pixflow_livePreviewObj().$('header.side-modern').length){
                pixflow_modernSideColor()
            }else{
                pixflow_livePreviewObj().$('.dropdown li a').not('header[class *= "top"] nav > ul > li.megamenu > ul li.has-dropdown:not(.megamenu) > a').hover(function(){
                    $(this).find('span').css('color',newval);
                },function(){
                    $(this).find('span').css('color',$('#input_dropdown_fg_solid_color').val());
                });
            }
            pixflow_livePreviewObj().$(
                'header[class *= "top-"]:not(.right) nav.navigation li.megamenu > ul.dropdown,'+
                'header[class *= "top-"]:not(.right) nav.navigation > ul > li.has-dropdown > ul.dropdown'
            ).css('border-top-color',newval);
        });
    });

    function pixflow_modernSideColor(){
        'use strict';
        if (pixflow_livePreviewObj().$('header.side-modern .style-style1').length){

            pixflow_livePreviewObj().$('.side-modern nav > ul > li').hover(function(){
                $(this).css('background-color',$('#input_dropdown_fg_hover_color').val());
                $(this).find('a').css({'color':$('#input_dropdown_fg_solid_color').val()});
            },function(){
                $(this).css('background-color',$('#input_dropdown_bg_solid_color').val());
                $(this).find('a').css({'color':$('#input_dropdown_fg_solid_color').val()});
            });

        }else if(pixflow_livePreviewObj().$('header.side-modern .style-style2').length){

            pixflow_livePreviewObj().$('.side-modern nav > ul > li').css({'background-color':$('#input_dropdown_bg_solid_color').val()})

            pixflow_livePreviewObj().$('.side-modern nav > ul > li').hover(function(){
                $(this).css('background-color',$('#input_dropdown_bg_solid_color').val());
            },function(){
                $(this).css('background-color',$('#input_dropdown_bg_solid_color').val());
            });

            pixflow_livePreviewObj().$('.side-modern nav > ul > li a').hover(function(){
                $(this).css({'color':$('#input_dropdown_fg_hover_color').val(),'border-color':$('#input_dropdown_fg_hover_color').val()});
            },function(){
                $(this).css({'color':$('#input_dropdown_fg_solid_color').val(),'border-color':$('#input_dropdown_fg_solid_color').val()});
            });
        }
    }

    /*****/
    wp.customize('search_enable', function (value) {
        value.bind(function (newval) {

            var displayVal = (pixflow_livePreviewObj().$('header').hasClass('top-modern'))?'table-cell' : 'inline-block';
            if (newval) {
                pixflow_livePreviewObj().$('header .top ul.icons-pack a.search').parent('li').css('display', displayVal);
                pixflow_livePreviewObj().$('header .side ul.icons-pack li.search-item').css('display', 'table-cell');

            } else {
                pixflow_livePreviewObj().$('header .top ul.icons-pack a.search').parent('li').css('display', 'none');
                pixflow_livePreviewObj().$('header .side ul.icons-pack li.search-item').css('display', 'none');

            }
            if(wp.customize('header_position')() == 'left' || wp.customize('header_position')() == 'right'){
                pixflow_livePreviewObj().$('header .side ul.icons-pack li hr').css('display','block');
                pixflow_livePreviewObj().$('header .side ul.icons-pack li:visible:first hr').css('display','none');
            }
            if($('#input_header_theme').val() == 'modern'){
                pixflow_livePreviewObj().pixflow_modernTop();
            }

        });
    });

    wp.customize('notification_enable', function (value) {
        value.bind(function (newval) {

            var displayVal = (pixflow_livePreviewObj().$('header').hasClass('top-modern'))?'table-cell' : 'inline-block';

            if (newval) {
                if($('#active_icon').is(":checked") && ( $('#notification_post').is(":checked") || $('#notification_portfolio').is(":checked"))){
                    pixflow_livePreviewObj().$('header .top ul.icons-pack li.notification-item').css('display', displayVal);
                    pixflow_livePreviewObj().$('header .side ul.icons-pack li.notification-item').css('display', 'table-cell');
                }
                if( $('#search_enable').is(':checked') && $('#notification_search').is(':checked') ){
                    pixflow_livePreviewObj().$('header .top ul.icons-pack a.search').parent('li').css('display', displayVal);
                    pixflow_livePreviewObj().$('header .side ul.icons-pack li.shopcart-item').css('display', 'table-cell');
                }
                if($('#shop_cart_enable').is(':checked') && $('#notification_cart').is(':checked')){
                    pixflow_livePreviewObj().$('header .top ul.icons-pack a.shopcart').parent('li').css('display', displayVal);
                    pixflow_livePreviewObj().$('header .side ul.icons-pack li.shopcart-item').css('display', 'table-cell');
                }
            } else {
                pixflow_livePreviewObj().$('header .top ul.icons-pack li').css('display', 'none');
                pixflow_livePreviewObj().$('header .side ul.icons-pack li.notification').css('display', 'none');
            }

            if(wp.customize('header_position')() == 'left' || wp.customize('header_position')() == 'right'){
                pixflow_livePreviewObj().$('header .side ul.icons-pack li hr').css('display','block');
                pixflow_livePreviewObj().$('header .side ul.icons-pack li:visible:first hr').css('display','none');
            }

            if($('#input_header_theme').val() == 'modern' && typeof pixflow_livePreviewObj().pixflow_displaySliderShortcode == 'function'){
                pixflow_livePreviewObj().pixflow_modernTop();
            }

        });
        pixflow_oneItemChecked();
    });

    wp.customize('shop_cart_enable', function (value) {
        value.bind(function (newval) {
            var displayVal = (pixflow_livePreviewObj().$('header').hasClass('top-modern'))?'table-cell' : 'inline-block';
            if (newval) {
                pixflow_livePreviewObj().$('header .top ul.icons-pack a.shopcart').parent('li').css('display', displayVal);
                pixflow_livePreviewObj().$('header .side ul.icons-pack li.shopcart-item').css('display', 'table-cell');

            } else {
                pixflow_livePreviewObj().$('header .top ul.icons-pack a.shopcart').parent('li').css('display', 'none');
                pixflow_livePreviewObj().$('header .side ul.icons-pack li.shopcart-item').css('display', 'none');
            }

            if(wp.customize('header_position')() == 'left' || wp.customize('header_position')() == 'right'){
                pixflow_livePreviewObj().$('header .side ul.icons-pack li hr').css('display','block');
                pixflow_livePreviewObj().$('header .side ul.icons-pack li:visible:first hr').css('display','none');
            }
            if($('#input_header_theme').val() == 'modern'){
                pixflow_livePreviewObj().pixflow_modernTop();
            }
        });
    });


    /***/
    wp.customize('popup_menu_color', function (value) {
        value.bind(function (newval) {
            pixflow_livePreviewObj().$('.gather-overlay nav > ul > li:after,' +
                '.gather-overlay nav > ul > li > a').css('color', newval); // menu text color

            pixflow_livePreviewObj().$('.gather-overlay .menu nav > ul > li').css('border-color', newval); // menu text color

            pixflow_livePreviewObj().$('.gather-overlay nav > ul > li:after,' +
                '.gather-overlay nav > ul > li > a ').hover(function(){
                $(this).css('color','rgba('+ pixflow_rgbVal(newval) + ',.7)');
            },function(){
                $(this).css('color',newval);
            });

        });
    });

    wp.customize('menu_item_style', function (value) {
        value.bind(function (newval) {
            var flag = true;
            if ( wp.customize('header_position').get()=='top' && wp.customize('header_theme').get()=='block' && wp.customize('block_style').get()=='style2'){
                flag = false;
            };

            if(flag){
                if(newval=='text') {
                    pixflow_livePreviewObj().$('header:not(.top-block) .top nav.navigation > ul > li > a span.icon').css('display', 'none');
                    pixflow_livePreviewObj().$('header.top-block.header-style1 .navigation > ul > li > a span.icon').css('display', 'none');
                    pixflow_livePreviewObj().$('.gather-overlay .navigation li a span.icon').css('display', 'none');
                    pixflow_livePreviewObj().$('header.side-classic nav.navigation > ul > li > a span.icon').css('display', 'none');
                    pixflow_livePreviewObj().$('header:not(.top-block) .top nav.navigation > ul > li > a span.title,header.side-classic nav.navigation > ul > li > a span.title').css('display', 'inline-block');
                    pixflow_livePreviewObj().$('.gather-overlay nav.navigation .menu-title .title').css('display', 'inline');
                    pixflow_livePreviewObj().$('.gather-overlay nav.navigation .menu-title .icon').css('display', 'none');
                    pixflow_livePreviewObj().$('header.top-block .top.style-style1 .menu-title .icon').css('display', 'none');
                    pixflow_livePreviewObj().$('header.top-block .top.style-style1 .menu-title .title').css('display', 'inline');

                    pixflow_livePreviewObj().$('header.top-block .top.style-style1 .menu-title').removeClass("md-icon-mode").addClass("text-mode");
                    pixflow_livePreviewObj().$('header.top-block .top.style-style1 .hover-effect').removeClass("md-icon-mode").addClass("text-mode");



                }else if(newval=='icon'){
                    pixflow_livePreviewObj().$('header:not(.top-block) .top nav.navigation > ul > li > a span.icon').css('display', 'inline-block');
                    pixflow_livePreviewObj().$('header.side-classic nav.navigation > ul > li > a span.icon').css('display', 'inline-block');
                    pixflow_livePreviewObj().$('header:not(.top-block) .top nav.navigation > ul > li > a span.title,header.side-classic nav.navigation > ul > li > a span.title').css('display', 'none');
                    pixflow_livePreviewObj().$('.gather-overlay nav.navigation .menu-title .title').css('display', 'none');
                    pixflow_livePreviewObj().$('.gather-overlay nav.navigation .menu-title .icon').css('display', 'inline');
                    pixflow_livePreviewObj().$('header.top-block .top.style-style1 .menu-title .icon').css('display', 'inline');
                    pixflow_livePreviewObj().$('header.top-block .top.style-style1 .menu-title .title').css('display', 'none');
                    pixflow_livePreviewObj().$('header.top-block .top.style-style1 .menu-title').removeClass("text-mode").addClass("md-icon-mode");
                    pixflow_livePreviewObj().$('header.top-block .top.style-style1 .hover-effect').removeClass("text-mode").addClass("md-icon-mode");

                }else{
                    pixflow_livePreviewObj().$('header:not(.top-block) .top nav.navigation > ul > li > a span.icon').css('display', 'inline-block');
                    pixflow_livePreviewObj().$('header.top-block.header-style1 .navigation > ul > li > a span.icon').css('display', 'inline-block');
                    pixflow_livePreviewObj().$('.gather-overlay nav.navigation .menu-title .title').css('display', 'inline');
                    pixflow_livePreviewObj().$('.gather-overlay nav.navigation .menu-title .icon').css('display', 'inline');
                    pixflow_livePreviewObj().$('header.top-block .top.style-style1 .menu-title .icon').css('display', 'inline');
                    pixflow_livePreviewObj().$('header.top-block .top.style-style1 .menu-title .title').css('display', 'inline');
                    pixflow_livePreviewObj().$('header.top-block .top.style-style1 .menu-title').removeClass("md-icon-mode").remove("text-mode");
                    pixflow_livePreviewObj().$('header.top-block .top.style-style1 .hover-effect').removeClass("md-icon-mode").remove("text-mode");



                    if ($('#input_header_side_align').val() == 'center' && (wp.customize('header_position').get()!='top' && wp.customize('header_side_theme').get()!='standard')){
                        pixflow_livePreviewObj().$('header.side-classic nav.navigation > ul > li > a span.icon').css('display', 'block');
                    }else{
                        pixflow_livePreviewObj().$('header.side-classic nav.navigation > ul > li > a span.icon').css('display', 'inline-block');
                    }
                    pixflow_livePreviewObj().$('header:not(.top-block) .top nav.navigation > ul > li > a span.title,header.side-classic nav.navigation > ul > li > a span.title').css('display', 'inline-block');
                }
            }
        });
    });

    wp.customize('businessBar_enable', function (value) {
        value.bind(function (newval) {

            var headerTopPos;

            if(newval) {

                pixflow_livePreviewObj().$('.business ').removeClass('business-off');

                headerTopPos = parseInt( pixflow_livePreviewObj().$('header').css('top') );

                if (headerTopPos <= 36) {
                    pixflow_livePreviewObj().$('header:not(.top-modern)').css('top', '36px');
                    pixflow_livePreviewObj().$('.business ').css({ display: 'block', top: '0' });
                }
                else
                    pixflow_livePreviewObj().$('.business ').css({ display: 'block', top: (parseInt(headerTopPos)-36)+'px' });

                pixflow_livePreviewObj().$('header:not(.top-modern)').css('margin-top', '0');

                if (headerTopPos > 36)
                    headerTopPos = parseInt( pixflow_livePreviewObj().$('header').css('top') ) - 36;

                pixflow_livePreviewObj().$('header.top-modern').css('height', '100px');
                pixflow_livePreviewObj().$('header.top-modern').css('position', 'absolute');
            }
            else {

                pixflow_livePreviewObj().$('.business ').addClass('business-off');

                headerTopPos = $('#decimal_header_top_position').text();
                pixflow_livePreviewObj().$('header:not(.top-modern)').css('top', headerTopPos);
                pixflow_livePreviewObj().$('.business ').css('display', 'none');
                pixflow_livePreviewObj().$('header.top-modern').css('height', '70px');
            }
        });
    });

    /******************************************************
     * notification center settings
     *****************************************************/
    wp.customize('notify_bg',function(value){
        value.bind(function(newval){
            if (newval == 'dark'){
                pixflow_livePreviewObj().$('.notification-center').removeClass('light').addClass(newval);
            }else{
                pixflow_livePreviewObj().$('.notification-center').removeClass('dark').addClass(newval);
            }
        })

    });

    wp.customize('active_tab_sec',function(value){
        value.bind(function(newval){
            pixflow_livePreviewObj().$( '#notification-tabs .pager a.'+newval).click();

            if ($('#active_icon').is(":checked") && newval == 'posts' && $('#notification_post').is(":checked")){
                var displayVal = (pixflow_livePreviewObj().$('header').hasClass('top-modern'))?'table-cell' : 'inline-block';
                pixflow_livePreviewObj().$('header .top ul.icons-pack li.notification-item').css('display', displayVal);
                pixflow_livePreviewObj().$('header .side ul.icons-pack li.notification-item').css('display', 'table-cell');

            }else if ($('#active_icon').is(":checked") && $('#notification_portfolio').is(":checked") ){
                var displayVal = (pixflow_livePreviewObj().$('header').hasClass('top-modern'))?'table-cell' : 'inline-block';
                pixflow_livePreviewObj().$('header .top ul.icons-pack li.notification-item').css('display', displayVal);
                pixflow_livePreviewObj().$('header .side ul.icons-pack li.notification-item').css('display', 'table-cell');
            }

            if($('#input_header_theme').val() == 'modern'){
                pixflow_livePreviewObj().pixflow_modernTop();
            }


        });

    });

    wp.customize('active_icon', function (value) {
        value.bind(function (newval) {
            var displayVal = (pixflow_livePreviewObj().$('header').hasClass('top-modern'))?'table-cell' : 'inline-block',
                x = ($("#input_active_tab_sec").val() == 'posts')?'post':'portfolio';

            if (newval && $('#notification_'+x).is(":checked") ) {
                pixflow_livePreviewObj().$('header .top ul.icons-pack li.notification-item').css('display', displayVal);
                pixflow_livePreviewObj().$('header .side ul.icons-pack li.notification-item').css('display', 'table-cell');
            } else {
                pixflow_livePreviewObj().$('header .top ul.icons-pack li.notification-item').css('display', 'none');
                pixflow_livePreviewObj().$('header .side ul.icons-pack li.notification-item').css('display', 'none');
            }

            if(wp.customize('header_position')() == 'left' || wp.customize('header_position')() == 'right'){
                pixflow_livePreviewObj().$('header .side ul.icons-pack li hr').css('display','block');
                pixflow_livePreviewObj().$('header .side ul.icons-pack li:visible:first hr').css('display','none');
            }

            if($('#input_header_theme').val() == 'modern'){
                pixflow_livePreviewObj().pixflow_modernTop();
            }
        });
    });

    wp.customize('notification_color',function(value){
        value.bind(function(newval){
            pixflow_livePreviewObj().$(".notification-center .accent-color,#notification-tabs .cart_list li .quantity,#notification-tabs .cart_list li .quantity .amount,#notification-tabs p.total,#notification-tabs p.total .amount").css({'color':newval});
        });

    });

    wp.customize('notification_post',function(value){
        value.bind(function(newval){
            if (newval){
                pixflow_livePreviewObj().$('.notification-center  .posts-tab').css({opacity:1});
                pixflow_livePreviewObj().$( '#notification-tabs .pager a.posts').css({'display':'inline'});
                if ($('#active_icon').is(":checked") && $("#input_active_tab_sec").val() == 'posts'){
                    var displayVal = (pixflow_livePreviewObj().$('header').hasClass('top-modern'))?'table-cell' : 'inline';
                    pixflow_livePreviewObj().$('header .top ul.icons-pack li.notification-item').css('display', displayVal);
                    pixflow_livePreviewObj().$('header .side ul.icons-pack li.notification-item').css('display', 'table-cell');
                }
            }else{
                pixflow_livePreviewObj().$('.notification-center .posts-tab').css({'opacity':0});
                pixflow_livePreviewObj().$( '#notification-tabs .pager a.posts').css({'display':'none'});
                if ($('#active_icon').is(":checked") && $("#input_active_tab_sec").val() == 'posts'){
                    pixflow_livePreviewObj().$('header .top ul.icons-pack li.notification-item').css('display', 'none');
                    pixflow_livePreviewObj().$('header .side ul.icons-pack li.notification-item').css('display', 'none');
                }

            }

            pixflow_livePreviewObj().$('.tabs-container').flickity('reloadCells');
            pixflow_oneItemChecked();
        })

    });

    wp.customize('notification_portfolio',function(value){
        value.bind(function(newval){
            if (newval){
                pixflow_livePreviewObj().$('.notification-center .protfolio-tab').css({'opacity':1});
                pixflow_livePreviewObj().$( '#notification-tabs .pager a.portfolio').css({'display':'inline'});
                if ($('#active_icon').is(":checked") && $("#input_active_tab_sec").val() == 'portfolio'){
                    var displayVal = (pixflow_livePreviewObj().$('header').hasClass('top-modern'))?'table-cell' : 'inline';
                    pixflow_livePreviewObj().$('header .top ul.icons-pack li.notification-item').css('display', displayVal);
                    pixflow_livePreviewObj().$('header .side ul.icons-pack li.notification-item').css('display', 'table-cell');
                }
            }else{
                pixflow_livePreviewObj().$('.notification-center .protfolio-tab').css({'opacity':0});
                pixflow_livePreviewObj().$( '#notification-tabs .pager a.portfolio ').css({'display':'none'});
                if ($('#active_icon').is(":checked") && $("#input_active_tab_sec").val() == 'portfolio'){
                    pixflow_livePreviewObj().$('header .top ul.icons-pack li.notification-item').css('display', 'none');
                    pixflow_livePreviewObj().$('header .side ul.icons-pack li.notification-item').css('display', 'none');
                }

            }
            pixflow_oneItemChecked();
            pixflow_livePreviewObj().$('.tabs-container').flickity('reloadCells');

        })

    });

    wp.customize('notification_search',function(value){
        value.bind(function(newval){
            if (newval){
                pixflow_livePreviewObj().$('.notification-center .search-tab').css({'opacity':1});
                pixflow_livePreviewObj().$( '#notification-tabs .pager a.search').css({'display':'inline'});
                if ($('#search_enable').is(':checked')){
                    var displayVal = (pixflow_livePreviewObj().$('header').hasClass('top-modern'))?'table-cell' : 'inline';
                    pixflow_livePreviewObj().$('header .top ul.icons-pack a.search').parent('li').css('display', displayVal);
                    pixflow_livePreviewObj().$('header .side ul.icons-pack li.search-item').css('display', 'table-cell');
                }

            }else{
                pixflow_livePreviewObj().$('.notification-center .search-tab').css({'opacity':0});
                pixflow_livePreviewObj().$( '#notification-tabs .pager a.search').css({'display':'none'});
                pixflow_livePreviewObj().$('header .top ul.icons-pack a.search').parent('li').css('display', 'none');
                pixflow_livePreviewObj().$('header .side ul.icons-pack li.search-item').css('display', 'none');
            }

            if($('#input_header_theme').val() == 'modern'){
                pixflow_livePreviewObj().pixflow_modernTop();
            }

            pixflow_livePreviewObj().$('.tabs-container').flickity('reloadCells');
            pixflow_oneItemChecked();


        })

    });

    wp.customize('notification_cart',function(value){
        value.bind(function(newval){
            if (newval){
                pixflow_livePreviewObj().$('.notification-center .shop-tab').css({'opacity':1});
                pixflow_livePreviewObj().$( '#notification-tabs .pager a:contains(SHOP)').css({'display':'inline'});
                if ($('#shop_cart_enable').is(':checked')){
                    var displayVal = (pixflow_livePreviewObj().$('header').hasClass('top-modern'))?'table-cell' : 'inline';
                    pixflow_livePreviewObj().$('header .top ul.icons-pack li.shopcart-item').css('display', displayVal);
                    pixflow_livePreviewObj().$('header .side ul.icons-pack li.shopcart-item').css('display', 'table-cell');
                }
            }else{
                pixflow_livePreviewObj().$('.notification-center .shop-tab').css({'opacity':0});
                pixflow_livePreviewObj().$( '#notification-tabs .pager a:contains(SHOP)').css({'display':'none'});
                pixflow_livePreviewObj().$('header .top ul.icons-pack li.shopcart-item').css('display', 'none');
                pixflow_livePreviewObj().$('header .side ul.icons-pack li.shopcart-item').css('display', 'none');
            }

            if($('#input_header_theme').val() == 'modern'){
                pixflow_livePreviewObj().pixflow_modernTop();
            }

            pixflow_livePreviewObj().$('.tabs-container').flickity('reloadCells');
            pixflow_oneItemChecked();

        })

    });


    wp.customize('header_side_align',function(value){
        value.bind(function(newval){
            if(newval=='right') {
                pixflow_livePreviewObj().$("header .content").addClass('style-right');
                pixflow_livePreviewObj().$("header .content").removeClass('style-left');
                pixflow_livePreviewObj().$("header .content").removeClass('style-center');
            }else if(newval=='left') {
                pixflow_livePreviewObj().$("header .content").addClass('style-left');
                pixflow_livePreviewObj().$("header .content").removeClass('style-right');
                pixflow_livePreviewObj().$("header .content").removeClass('style-center');
            }else {
                pixflow_livePreviewObj().$("header .content").addClass('style-center');
                pixflow_livePreviewObj().$("header .content").removeClass('style-left');
                pixflow_livePreviewObj().$("header .content").removeClass('style-right');
            }
        });

    });

    wp.customize('header_side_footer',function(value){
        value.bind(function(newval){
            if(newval){
                pixflow_livePreviewObj().$("header div.footer").removeClass('md-hidden');
            }else{
                pixflow_livePreviewObj().$("header div.footer").addClass('md-hidden');
            }
        });
    });

    wp.customize('footer_copyright',function(value){
        value.bind(function(newval){
            if(newval){
                pixflow_livePreviewObj().$("#footer-bottom .copyright").css('display','block');
                pixflow_livePreviewObj().$("#footer-bottom .social-icons").addClass('footer-spacer');
            }else{
                pixflow_livePreviewObj().$("#footer-bottom .copyright").css('display','none');
                pixflow_livePreviewObj().$("#footer-bottom .social-icons").removeClass('footer-spacer');
            }
        });

    });

    wp.customize('footer_social',function(value){
        value.bind(function(newval){

            if(newval){
                pixflow_livePreviewObj().$("#footer-bottom .social-icons").removeClass('md-hidden');
            }else{
                pixflow_livePreviewObj().$("#footer-bottom .social-icons").addClass('md-hidden');
            }
        });

    });

    wp.customize('footer_logo_opacity',function(value){
        value.bind(function(newval){
            pixflow_livePreviewObj().$("#footer-bottom .logo").css('opacity',newval);
        });

    });

    wp.customize('footer_switcher',function(value){
        value.bind(function(newval){
            if(newval){
                pixflow_livePreviewObj().$("#footer-bottom").css('display','block');
                if(typeof pixflow_livePreviewObj().pixflow_footerParallax == 'function'){
                    pixflow_livePreviewObj().pixflow_footerParallax();
                }
            }else{
                pixflow_livePreviewObj().$("#footer-bottom").css('display','none');
                if(typeof pixflow_livePreviewObj().pixflow_footerParallax == 'function'){
                    pixflow_livePreviewObj().pixflow_footerParallax();
                }
            }
        });

    });

    wp.customize('footer_logo',function(value){
        value.bind(function(newval){
            if(newval){
                pixflow_livePreviewObj().$("#footer-bottom .logo").css('display','block');
                pixflow_livePreviewObj().$("#footer-bottom .copyright").addClass('footer-spacer');
            }else{
                pixflow_livePreviewObj().$("#footer-bottom .logo").css('display','none');
                pixflow_livePreviewObj().$("#footer-bottom .copyright").removeClass('footer-spacer');
            }
        });

    });

    //Back to top button status
    wp.customize('go_to_top_status',function(value){
        value.bind(function(newval){
            if(newval){
                pixflow_livePreviewObj().$(".go-to-top").removeClass('md-hidden');
            }else{
                pixflow_livePreviewObj().$(".go-to-top").addClass('md-hidden');
            }
        });
    });

    //Back to top button skin
    wp.customize('footer_section_gototop_skin',function(value){
        value.bind(function(newval){

            if(newval == 'dark'){
                pixflow_livePreviewObj().$(".go-to-top").removeClass('light').addClass('dark');
            }else{
                pixflow_livePreviewObj().$(".go-to-top").removeClass('dark').addClass('light');
            }
        });

    });

    var socials = {"facebook":"icon-facebook2","twitter":"icon-twitter5","vimeo":"icon-vimeo","youtube":"icon-youtube2","googleP":"icon-googleplus","dribbble":"icon-dribbble","tumblr":"icon-tumblr","linkedin":"icon-linkedin","flickr":"icon-flickr2","forrst":"icon-forrst","github":"icon-github2","lastfm":"icon-lastfm","paypal":"icon-paypal4","rss":"icon-feed2","wp":"icon-wordpress","deviantart":"icon-deviantart2","steam":"icon-steam","soundcloud":"icon-soundcloud3","foursquare":"icon-foursquare","skype":"icon-skype","reddit":"icon-reddit","instagram":"icon-instagram","blogger":"icon-blogger","yahoo":"icon-yahoo","behance":"icon-behance","delicious":"icon-delicious","stumbleupon":"icon-stumbleupon3","pinterest":"icon-pinterest3","xing":"icon-xing"};
    $.each(socials, function(social, icon) {
        wp.customize(social+'_social',function(value){
            value.bind(function(newval){
                // Social widget
                if(pixflow_livePreviewObj().$('.widget-md-social').length){
                    if(newval != ''){
                        if(pixflow_livePreviewObj().$('.widget-md-social div[data-social="' + social + '"]').length<1){
                            pixflow_livePreviewObj(). $('.widget-md-social').append('<div data-social="'+social+'" class="item clearfix"><span><a href="'+newval+'"><i class="icon '+icon+'"></i><i class="text"> '+social+' </i></a></span></div>');
                        }
                        pixflow_livePreviewObj().$('.widget-md-social div[data-social="' + social + '"]').css('display','block').find('a').attr('href',newval);
                    }else{
                        pixflow_livePreviewObj().$('.widget-md-social div[data-social="' + social + '"]').css('display','none');
                    }
                }
                // Social widget end
                // Footer Socials
                if(pixflow_livePreviewObj().$('#footer-bottom .social-icons').length){
                    if(newval != ''){
                        if(pixflow_livePreviewObj().$('#footer-bottom .social-icons span[data-social="' + social + '"]').length<1){
                            pixflow_livePreviewObj(). $('#footer-bottom .social-icons').append('<span data-social="'+social+'"><a href="'+newval+'"><span class="'+icon+'"></span></a></span>');
                        }
                        pixflow_livePreviewObj().$('#footer-bottom .social-icons span[data-social="' + social + '"]').css('display','inline-flex').find('a').attr('href',newval);
                    }else{
                        pixflow_livePreviewObj().$('#footer-bottom .social-icons span[data-social="' + social + '"]').css('display','none');
                    }
                }
                // Footer Socials end
                // Business Bar Socials
                if(pixflow_livePreviewObj().$('.business').length){
                    if(newval != ''){
                        if(pixflow_livePreviewObj().$('.business .social span[data-social="' + social + '"]').length<1){
                            var socialType = wp.customize.control('businessBar_social').setting(),
                                content;
                            if(socialType == 'icon'){
                                content = '<span class="'+icon+'"></span>';
                            }else{
                                content = social;
                            }
                            pixflow_livePreviewObj(). $('.business .social').append('<span data-social="'+social+'"><a href="'+newval+'">'+content+'</a></span>');
                        }
                        pixflow_livePreviewObj().$('.business .social span[data-social="' + social + '"]').css('display','inline-block').find('a').attr('href',newval);
                    }else{
                        pixflow_livePreviewObj().$('.business .social span[data-social="' + social + '"]').css('display','none');
                    }
                }
                // Business Bar Socials end
                // Header Side Socials
                if(pixflow_livePreviewObj().$('header .content.side').length){

                    if(newval != ''){
                        if(pixflow_livePreviewObj().$('.footer-socials li[data-social="' + social + '"]').length<1){
                            pixflow_livePreviewObj(). $('.footer-socials').append('<li data-social="'+social+'" class="icon"><a href="'+newval+'" title="'+social+'"><span class="'+icon+' default"></span><span class="'+icon+' hover"></span></a></li>');
                        }
                        pixflow_livePreviewObj().$('.footer-socials li[data-social="' + social + '"]').css('display','list-item').find('a').attr('href',newval);
                    }else{
                        pixflow_livePreviewObj().$('.footer-socials li[data-social="' + social + '"]').css('display','none');
                    }
                    if(pixflow_livePreviewObj().$('header.side-modern').length && typeof pixflow_livePreviewObj().pixflow_headerSideModernFooterHover == 'function'){
                        pixflow_livePreviewObj().pixflow_headerSideModernFooterHover();
                    }else if(pixflow_livePreviewObj().$('header.side-classic').length && pixflow_livePreviewObj().$('header.side-classic.standard-mode').length < 1 && typeof pixflow_livePreviewObj().pixflow_headerSideClassicFooterHover == 'function'){
                        pixflow_livePreviewObj().pixflow_headerSideClassicFooterHover();
                    }

                    var socialcount=pixflow_livePreviewObj().$('.footer-socials li.icon').not(".info").length;
                    var minwidth=(parseInt(socialcount)*100).toString() + "%";
                    pixflow_livePreviewObj().$("header.side-classic div.footer ul li.info .footer-content").css({"min-width":minwidth});
                    pixflow_livePreviewObj().pixflow_headerSideEffect();

                }
                // Header Side Socials end
            });
        });
    });
    /* second document ready*/
    wp.customize.Section.prototype.defaultExpandedArguments = {duration: 420};
    pixflow_imageUploader();
   // pixflow_dropDownController();

}

function pixflow_setShortcodesResponsive(){
    "use strict";

    // Mac device slider
    if (typeof pixflow_livePreviewObj().pixflow_displaySliderShortcode == 'function') {
        pixflow_livePreviewObj().pixflow_displaySliderShortcode();
    }

    // Team member style 1
    if (typeof pixflow_livePreviewObj().pixflow_teamMemberRecall == 'function') {
        pixflow_livePreviewObj().pixflow_teamMemberRecall();
    }

    // Tablet slider
    if (typeof pixflow_livePreviewObj().pixflow_tabletSliderShortcode == 'function') {
        pixflow_livePreviewObj().pixflow_tabletSliderShortcode();
    }

    // Mobile slider
    if (typeof pixflow_livePreviewObj().pixflow_mobileSliderShortcode == 'function') {
        pixflow_livePreviewObj().pixflow_mobileSliderShortcode();
    }

    // Portfolio Multisize
    if (typeof pixflow_livePreviewObj().pixflow_portfolioMultisize == 'function') {
        pixflow_livePreviewObj().pixflow_portfolioMultisize();
    }

    // Process steps
    if (typeof pixflow_livePreviewObj().pixflow_processSteps == 'function') {
        pixflow_livePreviewObj().pixflow_processSteps();
    }

    // Music
    if (typeof pixflow_livePreviewObj().pixflow_musicFitSizes == 'function') {
        pixflow_livePreviewObj().pixflow_musicFitSizes();
    }

    // Blog MAsonary
    if (typeof pixflow_livePreviewObj().pixflow_blogMasonry == 'function') {
        pixflow_livePreviewObj().pixflow_blogMasonry('edit-customizer');
    }

}

/*--------------- $(document).ready End ---------------*/
function pixflow_imageUploader() {
    "use strict";

    $('.customize-control-image').each(function(){
        var $this=$(this);
        if($this.find('.actions .upload-button').html()=='Change Image'){
            $this.find('.upload-button').css('display', 'none');
            $this.find('.remove-button').css('display', 'block');
        }
        var src = $(this).find('.thumbnail-image img').attr('src');
        $(this).find('.thumbnail-image img').css('display','none');
        $(this).find('.thumbnail-image').css({'background': 'transparent url('+ src +') center no-repeat',
            'height': '40px',
            'background-size': 'contain'});
    });

    $(".customize-control-image .container .placeholder").off('remove');
    $(".customize-control-image .container .placeholder").on("remove", function () {
        var $this = $(this).closest('.customize-control-image');
        setTimeout(function(){
            $this.find('.upload-button').css('display', 'none');
            $this.find('.remove-button').css('display', 'block');
            $this.find('.remove-button').click(function(){
                setTimeout(function(){pixflow_imageUploader();},100);
            });
            pixflow_imageUploaderThumbs();
        },100)
    });

}

function pixflow_imageUploaderThumbs(){
    "use strict";

    $('.attachment-thumb').on('remove',function(){
        var $this = $(this).closest('.customize-control-image');
        setTimeout(function(){
            if($this.find('.upload-button').html()=='Change Image'){
                $this.find('.upload-button').css('display', 'none');
                $this.find('.remove-button').css('display', 'block');
            }
            pixflow_imageUploaderThumbs();
            pixflow_imageUploader();
        },100);
    })
}

function pixflow_headerTopBlockOpacity() {
    "use strict";

    var counter = 0,
        refreshIntervalId;

    refreshIntervalId = setInterval(function () {
        try {
            if (pixflow_livePreviewObj().$('header.top-block .style-style1').length) {

                $('.header_bg_solid_color_alpha .alpha-feature').hide();
                $('.header_bg_solid_color_alpha .alpha-feature').hide();
                $('.header_bg_solid_color_alpha .sp-alpha').hide();
                $('.header_bg_solid_color_alpha .sp-top.sp-cf').css({'margin-bottom': '20px'});
                $('.header_bg_solid_color_alpha .sp-fill').css({'padding-top': '45%'});

                // Second color
                $('.header_bg_solid_color_second_alpha .alpha-feature').hide();
                $('.header_bg_solid_color_second_alpha .alpha-feature').hide();
                $('.header_bg_solid_color_second_alpha .sp-alpha').hide();
                $('.header_bg_solid_color_second_alpha .sp-top.sp-cf').css({'margin-bottom': '20px'});
                $('.header_bg_solid_color_second_alpha .sp-fill').css({'padding-top': '45%'});

                clearInterval(refreshIntervalId);
            } else {

                $('.header_bg_solid_color_alpha .alpha-feature').show();
                $('.header_bg_solid_color_alpha .sp-alpha').show();
                $('.header_bg_solid_color_alpha .sp-top.sp-cf').css({'margin-bottom': '58px'});
                $('.header_bg_solid_color_alpha .sp-fill').css({'padding-top': '30%'});

                // Second color
                $('.header_bg_solid_color_second_alpha .alpha-feature').show();
                $('.header_bg_solid_color_second_alpha .sp-alpha').show();
                $('.header_bg_solid_color_second_alpha .sp-top.sp-cf').css({'margin-bottom': '58px'});
                $('.header_bg_solid_color_second_alpha .sp-fill').css({'padding-top': '30%'});


            }
        }catch(e){}
        counter++;
        if (counter == 20)
            clearInterval(refreshIntervalId);

    }, 1000);
}

function pixflow_rgbVal(str) {
    "use strict";

    var $temp = str.substr(4, str.length - 5);
    return $temp;
}

function pixflow_showNewLogo(){
    "use strict";

    var style, logo,
        randNum = Math.random();

    style=$('#customize-control-logo_style input').val();

    if(style=='dark'){
        if($('#customize-control-dark_logo img').length) {
            logo = $('#customize-control-dark_logo img').attr('src');
        }else{
            logo = customizerValues.THEME_IMAGES_URI+'/logo.png';
        }
    }else{
        if($('#customize-control-light_logo img').length) {
            logo = $('#customize-control-light_logo img').attr('src');
        }else{
            logo = customizerValues.THEME_IMAGES_URI+'/logo.png';
        }
    }

    pixflow_livePreviewObj().$('header:not(.header-fix,.header-clone) .logo img').attr('src',logo+'?'+randNum);

    style=$('#customize-control-logo_style_second input').val();
    if(style=='dark'){
        if($('#customize-control-dark_logo img').length) {
            logo = $('#customize-control-dark_logo img').attr('src');
        }else{
            logo = customizerValues.THEME_IMAGES_URI+'/logo.png';
        }
    }else{
        if($('#customize-control-light_logo img').length) {
            logo = $('#customize-control-light_logo img').attr('src');
        }else{
            logo = customizerValues.THEME_IMAGES_URI+'/logo.png';
        }
    }
    pixflow_livePreviewObj().$('header.header-clone .logo img').attr('src',logo+'?'+randNum);

}

function pixflow_collapse() {
    "use strict";

    var $collapseBtn = $('.customizer-options-menu .collaps'),
        teamMemberstyleNone = $('<style>.sliphover-container { display: none; }</style>'),
        teamMemberstyleBlock = $('<style>.sliphover-container { display: block; }</style>');

    if (!$collapseBtn.length)
        return;

    pixflow_livePreviewObj().$('html > head').append(teamMemberstyleNone);
    $collapseBtn.unbind('click');
    $collapseBtn.click(function () {
        var $iframe = $('#customize-preview > iframe').contents(),
            cntWin = $('iframe')[0].contentWindow;

        $('#customize-controls').toggleClass('form-closed');
        if($(this).hasClass('hold-collapse')){
            $iframe.find('body.compose-mode').removeClass('gizmo-off');
            TweenMax.to('body:not(.md-isIE) .wp-full-overlay',.3,{
                'margin-left':285
            });

            $('#customize-controls').stop().delay(300).fadeIn();
            pixflow_livePreviewObj().$('html > head').append(teamMemberstyleNone);// Fix team member Hover Bug
            try{
                $(this).removeClass('hold-collapse');
                $iframe.find('.vc_welcome').css('display','block');
                $iframe.find('.wpb_content_element .px_tabs_nav.md-custom-tab > li:last-child').css('display','inline-block');
                $iframe.find('.sortable-handle').css('border','1px dashed #338ffc');
                $iframe.find('.footer-setting').removeClass('md-hidden');
                $iframe.find('div.widget-area-column').addClass('ui-sortable-handle');
                cntWin.pixflow_itemOrderSetter('enable');

            }catch (e){}
        }else {
            if($iframe.find('body.compose-mode').length){
                $iframe.find('body.compose-mode').addClass('gizmo-off');
            }

            TweenMax.to('body:not(.md-isIE) .wp-full-overlay',.3,{
                'margin-left':0
            });
            //$('body').addClass('customizer-view');

            setTimeout(function(){
                $('#customize-controls').hide();
            },300)

            pixflow_livePreviewObj().$('html > head').append(teamMemberstyleBlock);// Fix team member Hover Bug


            try {
                $(this).addClass('hold-collapse');
                $iframe.find('.sortable-handle').css('border','none');
                $iframe.find('.vc_welcome').css('display','none');
                $iframe.find('.footer-setting').addClass('md-hidden');
                $iframe.find('div.widget-area-column').removeClass('ui-sortable-handle');
                cntWin.pixflow_itemOrderSetter('disable');

            } catch (e) {}
        }
    });
}

function pixflow_messageBox(title, customClass, text, btn1, callback1, btn2, callback2, closeCallback){
    "use strict";

    $('.message-box-wrapper').remove();
    var $messageBox = $('' +
        '<div class="message-box-wrapper">' +
        '   <div class="message-box-container '+ customClass +'">' +
        '       <div class="message-box-close"/>' +
        '       <div class="message-box-title">' + title + '</div>' +
        '       <div class="message-box-text">' + text + '</div>' +
        '       <button class="message-box-btn1">'+ btn1 +'</button>' +
        '   </div>' +
        '</div>').appendTo('body'),
        $btn1;

    $messageBox.animate({opacity:1},200);
    $btn1 = $messageBox.find('.message-box-btn1');

    $btn1.click(function(){
        if(typeof callback1 == 'function') {
            callback1();
        }
    });
    if(btn2){
        var $btn2 = $('<button class="message-box-btn2">'+ btn2 +'</button>').insertAfter($btn1);
        $btn2.click(function(){
            if(typeof callback2 == 'function'){
                callback2();
            }
        });
    }
    if(!btn2){
        $btn1.css("width","100%");
    }

    var $close = $messageBox;
    $close.on('click', function(e) {
        if (e.target !== this)
            return;
        if(typeof closeCallback == 'function'){
            closeCallback();
        }
        pixflow_closeMessageBox();
    });
}

function pixflow_closeMessageBox(){
    "use strict";

    $('.message-box-wrapper').fadeOut(300,function(){
        $(this).remove();
    })
}

function pixflow_isJson(str) {
    'use strict';
    try {
        var j = JSON.parse(str);
    } catch (e) {
        return false;
    }
    if(typeof j == 'object'){
        return true;
    }else{
        return false;
    }
}

function pixflow_demoImporter(){
    "use strict";
    var demos = [
        { "name":"general", "category":"business store" , "importFile":"0" , "demo":"http://theme.pixflow.net/massive-dynamic/general" },
        { "name":"business-agency", "category":"business" , "importFile":"1" , "demo":"http://theme.pixflow.net/massive-dynamic/business-agency" },
        { "name":"restaurant",  "category":"career" , "importFile":"2" , "demo":"http://theme.pixflow.net/massive-dynamic/restaurant/"},
        { "name":"seo", "revslider":true, "category":"business store" , "importFile":"3" , "demo":"http://theme.pixflow.net/massive-dynamic/seo/" },
        { "name":"minimal-agency", "category":"career" , "importFile":"4" , "demo":"http://theme.pixflow.net/massive-dynamic/minimal-agency"},
        { "name":"branding", "category":"career" , "importFile":"5" , "demo":"http://theme.pixflow.net/massive-dynamic/branding"},
        { "name":"business-firm", "category":"business" , "importFile":"6" , "demo":"http://theme.pixflow.net/massive-dynamic/business-firm" },
        { "name":"app1", "category":"business store" , "importFile":"7" , "demo":"http://theme.pixflow.net/massive-dynamic/app1" },
        { "name":"shop-jewelry",  "revslider":true, "category":"store" , "importFile":"8" , "demo":"http://theme.pixflow.net/massive-dynamic/shop-jewelry/" },
        { "name":"interior-design", "revslider":true, "category":"career" , "importFile":"9" , "demo":"http://theme.pixflow.net/massive-dynamic/interior-design/"},
        { "name":"architecture", "category":"business" , "importFile":"10" , "demo":"http://theme.pixflow.net/massive-dynamic/architecture/" },
        { "name":"store-classic-fashion", "revslider":true, "category":"store" , "importFile":"11" , "demo":"http://theme.pixflow.net/massive-dynamic/store-classic-fashion/" },
        { "name":"business-classic", "revslider":true, "category":"business" , "importFile":"12" , "demo":"http://theme.pixflow.net/massive-dynamic/business-classic/" },
        { "name":"portfolio-design-agency", "category":"portfolio" , "importFile":"13" , "demo":"http://theme.pixflow.net/massive-dynamic/portfolio-design-agency/" },
        { "name":"musician", "revslider":true, "category":"career" , "importFile":"14" , "demo":"http://theme.pixflow.net/massive-dynamic/musician/"},
        { "name":"startup", "category":"career" , "importFile":"15" , "demo":"http://theme.pixflow.net/massive-dynamic/startup/"},
        { "name":"store-modern-fashion", "category":"store" , "importFile":"16" , "demo":"http://theme.pixflow.net/massive-dynamic/store-modern-fashion/" },
        { "name":"agency", "category":"business" , "importFile":"17" , "demo":"http://theme.pixflow.net/massive-dynamic/agency/"},
        { "name":"portfolio-agency", "category":"portfolio" , "importFile":"18" , "demo":"http://theme.pixflow.net/massive-dynamic/portfolio-agency/" },
        { "name":"resume-boxed", "revslider":true, "category":"personal" , "importFile":"19" , "demo":"http://theme.pixflow.net/massive-dynamic/resume-boxed/"},
        { "name":"Gym","revslider":true, "category":"career" , "importFile":"20" , "demo":"http://theme.pixflow.net/massive-dynamic/gym/"},
        { "name":"resume-modern", "category":"personal" , "importFile":"21" , "demo":"http://theme.pixflow.net/massive-dynamic/resume-modern/" },
        { "name":"wedding","category":"personal" , "importFile":"22" , "demo":"http://theme.pixflow.net/massive-dynamic/wedding/" },
        { "name":"blog-masonry", "category":"blog" , "importFile":"23" , "demo":"http://theme.pixflow.net/massive-dynamic/blog-masonry/" },
        { "name":"blog - vertical", "revslider":true, "category":"blog" , "importFile":"24" , "demo":"http://theme.pixflow.net/massive-dynamic/blog-vertical/" },
        { "name":"blog - boxed", "revslider":true, "category":"blog" , "importFile":"25" , "demo":"http://theme.pixflow.net/massive-dynamic/blog-boxed/" },
        { "name":"construction", "category":"career" , "importFile":"26" , "demo":"http://theme.pixflow.net/massive-dynamic/construction/" },
        { "name":"business-modern", "category":"business" , "importFile":"27" , "demo":"http://theme.pixflow.net/massive-dynamic/business-modern/" },
        { "name":"store-handicraft", "revslider":true, "category":"store" , "importFile":"28" , "demo":"http://theme.pixflow.net/massive-dynamic/store-handicraft/" },
        { "name":"Artistic" , "category":"career" , "importFile":"29" , "demo":"http://theme.pixflow.net/massive-dynamic/artistic/" },
        { "name":"Corporate" , "category":"business store" , "importFile":"30" , "demo":"http://theme.pixflow.net/massive-dynamic/corporate-1/" },
        { "name":"fashion-photography" , "category":"career" , "importFile":"31" , "demo":"http://theme.pixflow.net/massive-dynamic/fashion-photography/" },
        { "name":"portfolio-web-design" , "category":"personal" , "importFile":"32" , "demo":"http://theme.pixflow.net/massive-dynamic/portfolio-web-design/" },
        { "name":"resume-graphic-designer" , "category":"career" , "importFile":"33" , "demo":"http://theme.pixflow.net/massive-dynamic/resume-graphic-designer" },
        { "name":"resume-tab" , "category":"personal" , "importFile":"34" , "demo":"http://theme.pixflow.net/massive-dynamic/resume-tab" },
        { "name":"motion" , "category":"career" , "importFile":"35" , "demo":"http://theme.pixflow.net/massive-dynamic/motion" },
        { "name":"it-service" , "category":"business" , "importFile":"36" , "demo":"http://theme.pixflow.net/massive-dynamic/it-service"},
        { "name":"travel" , "category":"business" , "importFile":"37" , "demo":"http://theme.pixflow.net/massive-dynamic/travel" },
        { "name":"hotel" , "category":"business" , "importFile":"38" , "demo":"http://theme.pixflow.net/massive-dynamic/hotel" },
        { "name":"barber" , "category":"business" , "importFile":"39" , "demo":"http://theme.pixflow.net/massive-dynamic/barber" },
        { "name":"health-care" , "category":"business" , "importFile":"40" , "demo":"http://theme.pixflow.net/massive-dynamic/health-care" },
        { "name":"marketing" , "category":"business" , "importFile":"41" , "demo":"http://theme.pixflow.net/massive-dynamic/marketing" },
        { "name":"rtl" , "category":"business" , "importFile":"42" , "demo":"http://theme.pixflow.net/massive-dynamic/rtl" },
        { "name":"empire-business" , "revslider":true, "category":"business store" , "importFile":"43" , "demo":"http://theme.pixflow.net/massive-dynamic/empire-business" },
        { "name":"business-consulting" , "category":"business" , "importFile":"44" , "demo":"http://theme.pixflow.net/massive-dynamic/business-consulting" },
        { "name":"communication" , "category":"business" , "importFile":"45" , "demo":"http://theme.pixflow.net/massive-dynamic/communication/" },
        { "name":"business-clean" , "category":"business" , "importFile":"46" , "demo":"http://theme.pixflow.net/massive-dynamic/business-clean/" },
        { "name":"strategy" , "category":"business" , "importFile":"47" , "demo":"http://theme.pixflow.net/massive-dynamic/strategy/" },
        { "name":"association" , "category":"business" , "revslider":true, "importFile":"48" , "demo":"http://theme.pixflow.net/massive-dynamic/association/" },
        { "name":"app2" , "category":"business" , "revslider":true, "importFile":"49" , "demo":"http://theme.pixflow.net/massive-dynamic/app2/" },
        { "name":"creative-studio" , "category":"business" , "revslider":true, "importFile":"50" , "demo":"http://theme.pixflow.net/massive-dynamic/creative-studio/" },
        { "name":"seo2" , "category":"business" , "revslider":true, "importFile":"51" , "demo":"http://theme.pixflow.net/massive-dynamic/seo-2/" },
        { "name":"portfolio-minimal" , "category":"portfolio store" , "revslider":true, "importFile":"52" , "demo":"http://theme.pixflow.net/massive-dynamic/portfolio-minimal/" },
        { "name":"technology" , "category":"business" , "importFile":"53" , "demo":"http://theme.pixflow.net/massive-dynamic/technology/" },
        { "name":"christmas" ,  "category":"business store" , "importFile":"54" , "demo":"http://theme.pixflow.net/massive-dynamic/christmas/" },
        { "name":"landing" , "category":"business" , "importFile":"55" , "demo":"http://theme.pixflow.net/massive-dynamic/landing/" },
        { "name":"media-agency" , "category":"business" , "importFile":"56" , "demo":"http://theme.pixflow.net/massive-dynamic/media-agency/" },
        { "name":"innovation-agency" , "category":"business" , "importFile":"57" , "demo":"http://theme.pixflow.net/massive-dynamic/innovation-agency/" },
        { "name":"interactive-agency" , "category":"business" , "importFile":"58" , "demo":"http://theme.pixflow.net/massive-dynamic/interactive-agency/" },
        { "name":"startup2" , "category":"career" , "importFile":"59" , "demo":"http://theme.pixflow.net/massive-dynamic/startup2/" },
        { "name":"rtl-agency" , "category":"career" , "importFile":"60" , "demo":"http://theme.pixflow.net/massive-dynamic/rtl-agency/" } ,
        { "name":"design-Studio" ,"revslider":true,  "category":"portfolio business" , "importFile":"61" , "demo":"http://theme.pixflow.net/massive-dynamic/design-studio/" },
        { "name":"small-business" ,"category":"business" , "importFile":"62" , "demo":"http://theme.pixflow.net/massive-dynamic/small-business/" },
        { "name":"digital-agency" , "category":"career" , "importFile":"63" , "demo":"http://theme.pixflow.net/massive-dynamic/digital-agency/" },
        { "name":"corporation" , "category":"business" , "importFile":"64" , "demo":"http://theme.pixflow.net/massive-dynamic/corporation/" },
        { "name":"case-study" , "revslider":true,  "category":"portfolio" , "importFile":"65" , "demo":"http://theme.pixflow.net/massive-dynamic/case-study/" }
    ];

    $('.customizer-btn.import').click(function(){
        $('body').append('<div class="importer-overlay"> <div class="importer-popup">' +
            '<span class="close"></span>' +
            '<div class="head clearfix"> <h2>'+customizerValues.chooseTemplate+'</h2>' +
            '<div class="demos-filter">' +
            '<div class="filter-button-group">' +
            '<a data-filter="* " class="active">'+customizerValues.showAll+'</a>' +
            '<a data-filter=".business">'+customizerValues.business+'</a>' +
            '<a data-filter=".store">'+customizerValues.store+'</a>' +
            '<a data-filter=".portfolio">'+customizerValues.portfolio+'</a>' +
            '<a data-filter=".personal">'+customizerValues.personal+'</a>' +
            '<a data-filter=".blog">'+customizerValues.blog+'</a>' +
            '</div></div>' +
            '</div>' +
            '<div class="demos"></div>' +
            ' </div>' +
            '</div>');

       var demosHtml = '';
        var i,count = Object.keys(demos).length;
        for(i=0;i<count;i++){
            var itemClass = "demo "+demos[i].category,
                itemID = demos[i].importFile,
                itemRevSlider = false;
            if(typeof demos[i].revslider != "undefined"){
                itemRevSlider = true;
            }
           demosHtml += '<div data-revslider="'+itemRevSlider+'" data-index="'+i+'" class ="'+ itemClass+'"><span style="background-image:url(http://theme.pixflow.net/massive-dynamic/dummydata/demo'+itemID+'/preview.png)"></span><div class="hover-overlay"><a href="#">DEMO DETAIL</a></div>' +
               '<section class="demo-importer-title">' + demos[i].name + '</section>'  +
               '</div>';
        }
        
        var height = $(window).height()*.75,
            width = $(window).width()*.8;

        height = height /220; // 86 head height
        height = Math.floor(height)*220;
        $('.importer-overlay .demos').css({maxHeight:height+'px'});


        $('.importer-overlay .demos').append(demosHtml);

        if(typeof $.nicescroll == 'function' )
             $('.importer-overlay .demos').nicescroll();

        $('.importer-overlay').fadeIn(300);

        $('.demos').isotope({
            itemSelector: '.demo',
            layoutMode: 'fitRows'
        });

        $('.filter-button-group').on( 'click', 'a', function(event) {
            event.stopPropagation();
            var filterValue = $(this).attr('data-filter');
            $('.filter-button-group > a ').removeClass('active');
            $(this).addClass('active');
            $('.demos').isotope({ filter: filterValue });
        });

        $('.demo').on( 'click', 'a', function(event) {
            event.stopPropagation();
            var number = $(this).parents('.demo').attr('data-index'),
                revslider = $(this).parents('.demo').attr('data-revslider'),
                demoUrl = demos[number].demo,
                importUrl = demos[number].importFile,
                imgId = importUrl,
                isStore = $(this).parents('.demo').hasClass('store');

            var secondPopUp = '<div class="second-popup"><div class="clearfix ">' +
                '<span class="close"></span>' +
                '<div class="left">' +
                '<div class="screen">' +
                '<a class="live-demo" target="_blank" href="'+demoUrl+'">'+customizerValues.viewDemo+'</a>' +
                '</div>' +
                '<span class="demo-image"  style="background-image:url(http://theme.pixflow.net/massive-dynamic/dummydata/demo'+imgId+'/preview.png)"></span>'+
                '</div>' +
                '<div class="right">' +
                '<h3>'+customizerValues.demoImporter1+'</h3>' +
                '<p>'+customizerValues.demoImporter2+'</p>' +

                '<input class="md-hidden import-choice import-setting" type="checkbox" value="yes" checked>' +
                '<span class="import-option  checked" data-option="setting"><i class="option-icon icon-check"></i>'+customizerValues.setting+'</span>' +
                '<input class="md-hidden import-choice import-widget" type="checkbox" value="yes" checked>' +
                '<span class="import-option checked" data-option="widget"><i class="option-icon icon-check"></i>'+customizerValues.widgets+'</span>' +
                '<input class="md-hidden import-choice import-content" type="checkbox" value="yes" checked>' +
                '<span class="import-option checked" data-option="content"><i class="option-icon icon-check"></i>'+customizerValues.content+'</span>' +
                '<input class="md-hidden import-media" type="checkbox" value="yes" checked>' +
                '<span class="import-option  checked last" data-option="media"><i class="option-icon icon-check"></i>'+customizerValues.media+'</span>' +
                '<p>'+customizerValues.demoImporter3+'</p>' +
                '<input class="agree" type="checkbox" value="no"><span>'+customizerValues.importConfirm+'</span>' +
                '<a class="import-demo" data-revslider="'+revslider+'" data-id="'+importUrl+'">'+customizerValues.importDemo+'</a></div>' +
                '</div>' +
                '</div>';

            $('.importer-popup').append(secondPopUp);

            $('.importer-popup,.second-popup > .clearfix').click(function(e){
                e.stopPropagation();
                var  $this = $(e.target);

                if($this.hasClass('close')){
                    var $elem = ($this.parent().hasClass('clearfix'))?$('.second-popup'):$('.importer-overlay');
                    $elem.animate({opacity:0},300,function(){
                        $elem.remove();
                    });

                }else if($this.hasClass('import-demo')){

                    // Add false to this condition to temprory disable purchase code
                    if(  ($('textarea#purchase_code').val() == '' || !$this.hasClass('purchase-code-true')) && false ){

                         pixflow_messageBox('Verify Purchase','caution',"Before importing the demo website, please enter and validate your purchase code <a style='cursor: pointer' onclick='pixflow_enterPurchaseCode();'>here</a>, save and come back to demo importer.",'Enter Purchase Code',function(){
                             pixflow_enterPurchaseCode();
                         });
                    }else{
                        var importContent = $('.import-content').is(":checked"),
                            importSetting = $('.import-setting').is(":checked"),
                            importWidget = $('.import-widget').is(":checked"),
                            importMedia = $('.import-media').is(":checked"),
                            importConfirm = false,
                            ready = false;

                        if( ($('.agree').is(":checked") || $('.agree').val() == 'yes')){
                            importConfirm = true;
                        }

                        if( importContent || importSetting || importWidget ){
                            ready = true;
                        }

                        if( importConfirm && ready ){
                            e.preventDefault();
                            /*setTimeout(function(){
                             pixflow_messageBox('Give it some time','caution',"If you want to import media, please wait at least 10 to 15 minutes. It won't break or stop, it just takes time to load all those images.",'GOT IT',function(){
                             pixflow_closeMessageBox();
                             });
                             },60000);*/

                            if (!$this.find('.loader').length ) {
                                $('.import-demo').text(customizerValues.importing).append('<span class="loader"><div>1%</div></span>');
                                $('.import-demo .loader').css({'background-color': '#e1e1e1 ', 'color': '#000'});
                                $('.import-err').remove();
                                jQuery.ajax({
                                    type: 'post',
                                    url: customizerValues.ajax_url,
                                    data: {
                                        action: 'pixflow_ImportClearCache',
                                        nonce: customizerValues.ajax_nonce,
                                        demo: $('.import-demo').attr('data-id')
                                    },
                                    success: function (response) {
                                        if(response == 'retry'){

                                        }
                                        pixflow_doImport(isStore);
                                    }
                                });
                            }

                        }else{
                            if(ready == false){
                                $('.second-popup .import-choice').next('span').animate({marginLeft:'10px'},100,function(){
                                    $('.second-popup .import-choice').next('span').animate({marginLeft:0},100);
                                });
                            }
                            if(importConfirm == false){
                                $('.second-popup .agree').next('span').animate({marginLeft:'10px'},100,function(){
                                    $('.second-popup .agree').next('span').animate({marginLeft:0},100);
                                });
                            }
                        }
                    }
                }else if($this.hasClass('live-demo')){
                    e.preventDefault();
                    window.open($this.attr('href'), '_blank');
                }else if($this.hasClass('import-option') || $this.hasClass('option-icon')){
                    if($this.hasClass('checked')){
                        $this.removeClass('checked');
                        $this.find('.option-icon').removeClass('icon-check').addClass('icon-cross');
                    }else{
                        $this.addClass('checked');
                        $this.find('.option-icon').removeClass('icon-cross').addClass('icon-check');
                    }
                    $('.import-'+$this.attr('data-option')).click();
                }
            });

            $('.second-popup').click(function(event){
                event.stopPropagation();
                $('.second-popup').animate({opacity:0},300,function(){
                    $('.second-popup').remove();
                });
            })


        });
    });

    $('body').on('click','.importer-overlay', function(e){
        e.stopPropagation();
        if($(e.target).hasClass('close')) {
            $('.importer-overlay').animate({opacity: 0}, 300, function () {
                $('.importer-overlay').remove();
            });
        }
    });


    $('body').delegate('.import-content', 'change', function(){
        if($('.import-content').is(":checked")){
            $('.import-media').fadeIn();
            $('.import-media').next('span').fadeIn();
        }else{
            $('.import-media').fadeOut();
            $('.import-media').next('span').fadeOut();
        }
    });

}

var trying = 0;
function pixflow_doImport(isStore,loaded,total){

    if(!$('.import-demo .loader').length){
        $('.import-demo').html(customizerValues.importing);
        $('.import-demo').append('<span class="loader"><div>1%</div></span>');
    }
    if(loaded && total){
        var precent = loaded/total * 95;

        if(!$('.import-demo .loader div').length) {
            $('.import-demo .loader').append('<div>' + Math.ceil(parseInt(precent)) + '%</div>');
        }else{
            $('.import-demo .loader div').html( Math.ceil(parseInt(precent)) + '%');
        }
        $('.import-demo .loader').animate({width:  precent+ "%"}, 1000);
    }

    var importContent = $('.import-content').is(":checked"),
        importSetting = $('.import-setting').is(":checked"),
        importWidget = $('.import-widget').is(":checked"),
        importMedia = $('.import-media').is(":checked"),
        importConfirm = false,
        ready = false;
    jQuery.ajax({
        type: 'post',
        url: customizerValues.ajax_url,
        data: {
            action: 'pixflow_ImportDummyData',
            nonce: customizerValues.ajax_nonce,
            demo: $('.import-demo').attr('data-id'),
            revslider: $('.import-demo').attr('data-revslider'),
            purchase: $('textarea#purchase_code').val(),
            content: importContent,
            setting: importSetting,
            widget: importWidget,
            media: importMedia,
            isStore: isStore
        },
        success: function (response) {
            if (pixflow_isJson(response)) {
                var err = JSON.parse(response);
                for (var i = 0; i < err.length; i++) {
                    var error = err[i];
                    $(".import-demo").after('<p class="import-err"><span class="icon-cancel3"></span>' + error + '</p>');
                }
                $('.import-demo .loader').stop().animate({width: '0%'}, 100, function () {
                    $('.import-demo .loader').remove();
                });
                $('.import-err').animate({marginLeft: '10px'}, 100, function () {
                    $('.import-err').next('span').animate({marginLeft: 0}, 100);
                });
                $('.import-demo').text(customizerValues.importDemo);
            } else if (response.indexOf('continue') !=-1) {
                var regex = /continue:([0-9]+)\/([0-9]+)/i;
                var content = regex.exec(response);

                setTimeout(function () {
                    if(content) {
                        pixflow_doImport(isStore, content[1], content[2]);
                    }else
                        pixflow_doImport(isStore);
                }, 1);

            } else {
                jQuery.ajax({
                    url: customizerValues.importFileUrl,
                    type: 'HEAD',
                    // Successful Import
                    error: function(data)
                    {
                        // Regenerate Thumbnails
                        /*jQuery.ajax({
                            type: 'post',
                            url: customizerValues.ajax_url,
                            data: {
                                action: 'pixflow_generateThumbs',
                                nonce: customizerValues.ajax_nonce
                            },
                            success: function (response) {
                                console.log(response);
                            }
                        });*/
                        $('.import-demo .loader').animate({width: '100%'}, 1000, function () {
                            $('.import-demo .loader').remove();
                        });
                        $('.import-demo').text(customizerValues.imported);
                        trying=0;
                        pixflow_messageBox('Successfully Done','caution',"Import process is completed. Please reload the builder to see the demo.<br><br> After reloading the builder, if header navigation is not set correctly, go to Massive Builder > Menus and set the correct menu as primary and mobile menu. <br><br> Also if you want to get the correct size of imported images, you can install and use <a  target='_blank' style='text-decoration: none' href='https://wordpress.org/plugins/regenerate-thumbnails/'>Regenerate Thumbnails</a> .",'Reload Now',function(){
                            window.location.href = customizerValues.customizer_url ;
                        });

                    },
                    // Failed Import
                    success: function (data) {
                        if (typeof data != 'undefind') {
                            if (data.indexOf("Permission is Not Avaialable" > 0)) {
                                $(".import-demo").after('<p class="import-err"><span class="icon-cancel3"></span>' + customizerValues.faildImportPermission + '</p>');
                            }

                            if (data.indexOf('Remote Function Failed') > 0) {
                                $(".import-demo").after('<p class="import-err"><span class="icon-cancel3"></span>' + customizerValues.faildImportServer + '</p>');
                            }
                            else {
                                $(".import-demo").after('<p class="import-err"><span class="icon-cancel3"></span>' + customizerValues.faildImport + '</p>');
                            }
                        }

                        $('.import-demo .loader').stop().animate({width: '0%'}, 100, function () {
                            $('.import-demo .loader').remove();
                        });
                        $('.import-err').animate({marginLeft: '10px'}, 100, function () {
                            $('.import-err').next('span').animate({marginLeft: 0}, 100);
                        });
                        $('.import-demo').text(customizerValues.importDemo);
                        trying=0;
                    }
                });

            }
        },
        error: function(){
            if(loaded == '1' && total=='1'){
                trying++;
                if(trying>5){
                    trying = 0;
                    $('.import-demo .loader').animate({width: '100%'}, 1000, function () {
                        $('.import-demo .loader').remove();
                    });
                    $('.import-demo').text(customizerValues.imported);
                    jQuery.ajax({
                        type: 'post',
                        url: customizerValues.ajax_url,
                        data: {
                            action: 'pixflow_ImportClearAllCache',
                            nonce: customizerValues.ajax_nonce,
                            demo: $('.import-demo').attr('data-id')
                        },
                        success: function (response) {
                            window.location.reload();
                        }
                    });

                    return;
                }
            }
            pixflow_doImport(isStore, loaded, total);

        }
    });
}

var lastStatus = '',
    lastUrl = '';

function pixflow_masterSetting() {
    'use strict';
    var currentStatus = pixflow_livePreviewObj().$('meta[name="post-id"]').attr('setting-status');
    if (currentStatus == 'unique') {
        pixflow_loadRelatedSetting('unique');
        pixflow_setUniqueCustomizer();
        $('li.unique-page-setting').click()
    }else{
        pixflow_setGeneralCustomizer();
        $('li.general-page-setting').click();
    }

    $('li.general-page-setting').click(function () {
        var currentStatus = pixflow_livePreviewObj().$('meta[name="post-id"]').attr('setting-status');
        if (currentStatus == 'general') {
            return;
        }
        var detailStatus = pixflow_livePreviewObj().$('meta[name="post-id"]').attr('detail');
        var text = customizerValues.mastersettingMsg1;
        pixflow_messageBox(customizerValues.mastersettingMsgTitle,'caution',text,customizerValues.mastersettingMsgYes,function(){
            pixflow_livePreviewObj().$('meta[name="post-id"]').attr('setting-status', 'general');
            pixflow_livePreviewObj().pixflow_save_status('general', pixflow_livePreviewObj().$('meta[name="post-id"]').attr('content'), detailStatus,'change',function(){
                pixflow_setGeneralCustomizer();
                pixflow_closeMessageBox();
            });
        },customizerValues.mastersettingMsgNo,function(){
            $('li.unique-page-setting').click();
            pixflow_closeMessageBox();
        },function(){
            $('li.unique-page-setting').click();
        });
    });
    $('li.unique-page-setting').click(function () {
        lastStatus = 'unique';
        //Running back button click twice - I'm not noob, I'm just tired :)
        $('.back-btn').click();
        $('.back-btn').click();

        var currentStatus = pixflow_livePreviewObj().$('meta[name="post-id"]').attr('setting-status');
        if (currentStatus == 'unique') {
            return;
        }
        var detailStatus = pixflow_livePreviewObj().$('meta[name="post-id"]').attr('detail');
        if (detailStatus == 'post' || detailStatus == 'portfolio' || detailStatus == 'product') {
            var text;
            if(detailStatus == 'post'){
                text = customizerValues.mastersettingMsgPost;
            }else if(detailStatus == 'portfolio'){
                text = customizerValues.mastersettingMsgPortfolio;
            }else if(detailStatus == 'product'){
                text = customizerValues.mastersettingMsgProduct;
            }
            pixflow_messageBox(customizerValues.mastersettingMsgTitle,'caution',text,customizerValues.mastersettingMsgYes,function(){
                pixflow_livePreviewObj().$('meta[name="post-id"]').attr('setting-status', 'unique');
                try {
                    pixflow_livePreviewObj().pixflow_save_status('unique', pixflow_livePreviewObj().$('meta[name="post-id"]').attr('content'), detailStatus, 'change',function(){
                        pixflow_setUniqueCustomizer();
                        pixflow_closeMessageBox();
                    });
                }catch(e){}
            },customizerValues.mastersettingMsgNo1,function(){
                $('li.general-page-setting').click();
                pixflow_closeMessageBox();
            },function(){
                $('li.general-page-setting').click();
            });
        }else {
            pixflow_livePreviewObj().$('meta[name="post-id"]').attr('setting-status', 'unique');
            try {
                pixflow_livePreviewObj().pixflow_save_status('unique', pixflow_livePreviewObj().$('meta[name="post-id"]').attr('content'), detailStatus, 'change',function(){
                    pixflow_setUniqueCustomizer();
                });
            }catch(e){}
        }
    });
}

function pixflow_loadRelatedSetting(status){
    'use strict';

    var settings = JSON.parse(customizerValues.uniqueSettings),
        data={},
        id;

    for(var i = 0;i < settings.length ; i++){
        var k = settings[i],
            value = wp.customize(k).get(),
            type = wp.customize.control(k).params.type;
        data[k] = {"value":value,"type":type};
    }
    //Get and load unique settings
    id = pixflow_livePreviewObj().$('meta[name="post-id"]').attr('content');
    /*if((lastStatus != status || lastUrl != wp.customize.previewer.previewUrl()) && !(lastStatus == 'general' && status == 'unique')) {*/
    if((lastStatus != status || lastUrl != wp.customize.previewer.previewUrl())) {
        jQuery.ajax({
            type: "post",
            url: customizerValues.ajax_url,
            data: "action=pixflow-get-setting" +
            "&nonce=" + customizerValues.ajax_nonce +
            "&pixflow_get_setting=" +
            "&id=" + id +
            "&settings=" + JSON.stringify(data) +
            "&status=" + status,
            success: function (result) {
                var loadedSettings = JSON.parse(result);
                // Set loaded values on controllers
                // Maybe need to call loading overlay manually
                for (var key in loadedSettings) {
                    var lObj = data[key];
                    if (loadedSettings.hasOwnProperty(key)) {
                        var obj = loadedSettings[key];
                        if (obj.value != lObj.value) {
                            switch (obj.type) {
                                case 'checkbox':
                                    if (obj.value == 'true' && $('#' + key).is(":checked") == false) {
                                        //check mark checkbox
                                        $('#customize-control-' + key + ' span.switchery').click()
                                    } else if ($('#' + key).is(":checked") == true) {
                                        //unckeck check box
                                        $('#customize-control-' + key + ' span.switchery').click()
                                    }
                                    break;
                                case 'image':
                                    wp.customize.control(key).setting(obj.value);
                                    if (obj.value == '') {
                                        $('#customize-control-' + key + ' button.remove-button').click();
                                    } else {
                                        $('#customize-control-' + key + ' .current .container').html('<div class="container"><div class="attachment-media-view attachment-media-view-image landscape"><div class="thumbnail thumbnail-image"><img class="attachment-thumb" src="'+obj.value+'" draggable="false"></div></div></div>');
                                        $('#customize-control-' + key + ' .actions').html('<div class="actions"><button type="button" class="button remove-button" style="display: block;">'+customizerValues.remove+'</button><button type="button" class="button upload-button" id="footer_bg_image_image-button" style="display: none;">'+customizerValues.changeImage+'</button><div style="clear:both"></div></div>');
                                    }
                                    break;
                                case 'radio':
                                    $('label[for="' + key + obj.value + '"]').click();
                                    break;
                                case 'rgba':
                                    wp.customize.control(key).setting(obj.value);
                                    $("#input_" + key).spectrum("set", obj.value);
                                    break;
                                case 'slider':
                                    var slider = document.getElementById('slider_' + key);
                                    if(slider.noUiSlider != undefined) {
                                        slider.noUiSlider.set(obj.value);
                                    }
                                    break;
                                case 'switch':
                                    if (Boolean(obj.value) != $('#' + key).is(":checked")) {
                                        //check mark checkbox
                                        $('label[for=' + key + ']').click();
                                    }
                                    break;
                                case 'text':
                                    wp.customize.control(key).setting(obj.value);
                                    break;
                                case 'textarea':
                                    wp.customize.control(key).setting(obj.value);
                                    break;
                                case 'select':
                                    if (obj.value == '') {
                                        $('#select_' + key + ' span.select-item:first-child').click();
                                    } else {
                                        $('#select_' + key + ' span.select-item[value="' + obj.value + '"]').click();
                                    }
                                    pixflow_closeDropDown();
                                    break;
                            }
                        }
                    }
                }
                for (var key in loadedSettings) {
                    if (loadedSettings.hasOwnProperty(key)) {
                        var obj = loadedSettings[key];
                        switch (obj.type) {
                            case 'select':
                                if($('#select_' + key + ' span.select-item.selected').attr('value')!=obj.value) {
                                    dirtyLoadedSettings.push($('#select_' + key + ' span.select-item[value="' + obj.value + '"]'))
                                }
                                break;
                        }
                    }
                }
                
                $('#customize-header-actions #save').val('Saved');
            }
        });
        lastStatus = status;
        lastUrl = wp.customize.previewer.previewUrl();
    }

}

function pixflow_refreshFrame(){
    if($('#save-btn .save').attr('data-state')=='saving'){
        $('#save-btn .save').attr('data-state','saved');
        pixflow_closeMessageBox();
        wp.customize.previewer.refresh();

    }
}

function pixflow_setUniqueCustomizer(){
    "use strict";

    pixflow_loadRelatedSetting('unique');
    /* Unique setting customizer headings */
    var uniqueSwitch =
        '<li id="unique-setting-switch" class="accordion-section control-section control-panel control-panel-default close">' +
        '<h3 class="accordion-section-title" tabindex="0">' +
        '<i class="px-icon icon-arrow-down2"></i>' +
        customizerValues.websiteOptions + ' ' +
        '<span class="screen-reader-text">'+customizerValues.pressEnter+'</span> ' +
        '</h3> ' +
        '</li>';

    if(!$('#unique-setting-switch').length){
        $(uniqueSwitch).insertAfter($('#accordion-panel-sidebar'));
    }

    $('#accordion-section-branding,#accordion-panel-typography,#accordion-section-social_item,#accordion-panel-nav_menus,#accordion-panel-widgets,#accordion-section-notification_main').css({'opacity':'0'});
    setTimeout(function(){
        $('#accordion-section-branding,#accordion-panel-typography,#accordion-section-social_item,#accordion-panel-nav_menus,#accordion-panel-widgets,#accordion-section-notification_main').css({'display':'none'});
    },300);

    //Clicking website option button
    $('#unique-setting-switch').unbind('click');
    $('#unique-setting-switch').click(function(){
        if($(this).hasClass('close')){

            $('#accordion-section-branding,#accordion-panel-typography,#accordion-section-social_item,#accordion-panel-nav_menus,#accordion-panel-widgets,#accordion-section-notification_main').css({'display':'block'});
            setTimeout(function(){
                $('#accordion-section-branding,#accordion-panel-typography,#accordion-section-social_item,#accordion-panel-nav_menus,#accordion-panel-widgets,#accordion-section-notification_main').css({'opacity':'1'});
            },100);
            $(this).find('i').removeClass('icon-arrow-down2').addClass('icon-arrow-up2');
            $(this).removeClass('close');

        } else{

            $('#accordion-section-branding,#accordion-panel-typography,#accordion-section-social_item,#accordion-panel-nav_menus,#accordion-panel-widgets,#accordion-section-notification_main').css({'opacity':'0'});
            setTimeout(function(){
                $('#accordion-section-branding,#accordion-panel-typography,#accordion-section-social_item,#accordion-panel-nav_menus,#accordion-panel-widgets,#accordion-section-notification_main').css({'display':'none'});
            },500);
            $(this).find('i').removeClass('icon-arrow-up2').addClass('icon-arrow-down2');
            $(this).addClass('close');
        }
    });
}

function pixflow_setGeneralCustomizer(){
    "use strict";

    pixflow_loadRelatedSetting('general');
    /* Unique setting customizer headings */

    $('#unique-setting-switch').remove();

    $('#accordion-section-branding,#accordion-panel-typography,#accordion-section-social_item,#accordion-panel-nav_menus,#accordion-panel-widgets,#accordion-section-notification_main').css({'display':'block'});
    setTimeout(function(){
        $('#accordion-section-branding,#accordion-panel-typography,#accordion-section-social_item,#accordion-panel-nav_menus,#accordion-panel-widgets,#accordion-section-notification_main').css({'opacity':'1'});
    },100);
}

/*--------------- $(window).load  ---------------*/
function pixflow_loaded(){
    'use strict';

    pixflow_documentReady();


    pixflow_headerTopBlockOpacity();  // Header block rectangle opacity issue
    // Add Customizer loading

    showUpAfter    = $('#customize-control-show_up_after input').val();
    layoutWidth    = $('#customize-control-site_width input').val();
    headerTopWidth = $('#customize-control-header_top_width input').val();
    pixflow_showNewLogo();
    pixflow_collapse();
    pixflow_demoImporter();
    /* show nice scroll for drop down after wordpress update */
    $('.ios-select .select').niceScroll({
     horizrailenabled: false,
     cursorcolor: "rgba(204, 204, 204, 0.8)",
     cursorborder: "1px solid rgba(204, 204, 204, 0.8)",
     cursorwidth: "3px",
     autohidemode:"leave"
     });


    $('.customize-control-image ').each(function(){
        if ($(this).find('.current .container img').length )
        {
            var text = $(this).find('.upload-button').text();
            if ( text == 'Change Image' ){
                $(this).find('.upload-button').css({'display':'none'});
                $(this).find('.remove-button').css({'display':'block'})
            }
        }

    });

}

function pixflow_oneItemChecked(){
    'use strict';

    var oneItemChecked = 0;

    if ( $('#notification_post').is(":checked") ) {
        oneItemChecked++;
    }
    if ( $('#notification_portfolio').is(":checked") ) {
        oneItemChecked++;
    }
    if ( $('#notification_search').is(":checked") ) {
        oneItemChecked++;
    }
    if ( $('#notification_cart').is(":checked") ) {
        oneItemChecked++;
    }

    if (oneItemChecked == 1)
        pixflow_livePreviewObj().$('#notification-tabs').find('.pager').css({display: 'none'});
    else
        pixflow_livePreviewObj().$('#notification-tabs').find('.pager').css({display: 'block'});

}

function pixflow_isMobile() {
    'use strict';
    try {
        if(/Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent)) {
            return true;
        }
        return false;
    } catch(e){ console.log("Error in isMobile"); return false; }
}

function pixflow_customizer(){
    'use strict';

    if(pixflow_isMobile() && $(window).width() < 1280){
        var url = window.location.href;
        if(url.indexOf('customize.php')>-1){
            window.location.assign(customizerValues.forbiddenUrl+'?url='+customizerValues.adminUrl);
        }

    }
}

jQuery.expr[':'].ContainsText = function(a, i, m) {
    return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
};

function pixflow_dropDownController(id){
    'use strict';

    if( typeof  id == 'undefind'){
        return;
    }
    var $select = $('#select_'+id),
        $input = $('#input_'+id),
        text   = $('#select_' + id + ' span.selected').text();

    $select.prev('.items').text(text);

    $('#select_' + id + ' span.select-item').click(function(){
        $select.prev('.items').text($(this).text());
        if(wp.customize.control(id).setting.transport == 'refresh'){
            if ( !$(this).hasClass('selected')){
                pixflow_customizerLoading();
            }
        }
        $(this).siblings('.select-item').removeClass('selected');
        $(this).addClass('selected');
        $input.val($(this).attr('value')).keyup().trigger('change');
    });

    //enable search
    if ($select.find('.select .select-item').length > 10 ){
        $select.find('.select').prepend('<input type="text" placeholder="search..." class="search" id="search_'+id+'">');
        $select.find('.select').addClass('with-search');
        $('#search_'+id).keyup(function(){

            $(this).parent().find('span.select-item').addClass('hidden')
            var $compatible = $(this).parent().find('span.select-item:ContainsText('+$(this).val()+')');

            if($(this).next('p').length) $(this).next('p').remove();

            if ($compatible.length) {

                $compatible.removeClass('hidden');
            }else{
                $(this).after('<p>Nothing Found..</p>');
            }
        })
    }
}

function pixflow_customizeMenu(){
    'use strict';
    if($('.menu-desc-holder').length){
        return;
    }
    $('.assigned-to-menu-location .accordion-section-title,.assigned-to-menu-location .customize-section-description-container h3').find('span').remove();
    $('.customize-control-nav_menu_name .menu-name-field').val(customizerValues.menuName);
    $('#accordion-section-add_menu button:not(#create-new-menu-submit)').html(customizerValues.addMenu);
   setTimeout(function(){
       $('#accordion-panel-nav_menus .accordion-sub-container').append(
           '<li class="menu-desc-holder">'+
           '<table>'+
           '<tr><td colspan="2" class="menu-desc-title">'+customizerValues.howToUse+'</td></tr>'+
           '<tr><td class="menu-desc-text">1.</td><td class="menu-desc-text"><span>'+customizerValues.editMenuSystem+'</span></td></tr>'+
           '<tr><td class="menu-desc-text">2.</td><td class="menu-desc-text"><span>'+customizerValues.createMegaMenu+'</span></td></tr>'+
           '<tr><td class="menu-desc-text">3.</td><td class="menu-desc-text"><span>'+customizerValues.createSubMenu+'</span></td></tr>'+
           '</table>'+
           '<img class="menu-desc-img" src="'+customizerValues.THEME_CUSTOMIZER_URI+'/assets/images/add-menu-guid.png" />'+
           '</li>');
   } , 100);


    $('.assigned-to-menu-location .customize-control-nav_menu_name').append(
        '<p class="menu-name-desc">'+customizerValues.editMenuSysBtn+'</p>');

    $('#customize-control-nav_menu_locations-primary-nav').find('.customize-control-title').text('Primary Nav');
    $('#customize-control-nav_menu_locations-mobile-nav').find('.customize-control-title').text('Mobile Nav');

}

function pixflow_checkBoxController(){
    'use strict';
    $('[data-controller-type="checkbox"]').each(function(){
        if($(this).attr('data-controller-transport') == 'refresh'){
            $(this).change(function() {
                pixflow_customizerLoading();
            });
        }
    })
}

function pixflow_textController(){
    $('[data-controller-type="text"]').each(function(){
        if($(this).attr('data-controller-transport') == 'refresh'){
            $(this).keyup(function() {
                pixflow_customizerLoading();
            });
        }
    })
}

function pixflow_textareaController(){
    $('[data-controller-type="textarea"]').each(function(){
        if($(this).attr('data-controller-transport') == 'refresh'){
            $('#<?php echo esc_attr($this->id) ?>').keyup(function(){
                pixflow_customizerLoading();
            })
        }
    })
}

function pixflow_selectController(){
    $('[data-controller-type="select"]').each(function(){
        pixflow_dropDownController($(this).attr('data-id'));
    })
}

function pixflow_radioController(){
    $('[data-controller-type="radio"]').each(function() {
        $(this).buttonset();
        if($(this).attr('data-controller-transport') == 'refresh') {
            $('input[name='+$(this).attr('data-name')+']').change(function () {
                pixflow_customizerLoading();
            });
        }
    })
}

function pixflow_detect_screen(){
    if($(window).width() >= 1024 && $(window).width() <= 1440){
        $('body').addClass('md-screen');
    }
    if((('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0))){
        $('body').addClass('touch-screen');
    }
}

function pixflow_enterPurchaseCode(){
    'use strict';
    pixflow_closeMessageBox();

    if ($('.shortcodes-panel').css('display') == 'block' && $('.shortcodes-panel').css('opacity') == 1) {

        $('.importer-overlay').animate({opacity: 0}, 300, function () {
            $('.importer-overlay').remove();
            $('.shortcodes-panel-button').click();
            if($('#accordion-section-purchase_code').hasClass('open')){
                return;
            }

            setTimeout(function(){
                $('#accordion-panel-layout > h3').click();
                $('#accordion-section-purchase_code > h3').click();
            },800);

        });

    }else{
        $('.importer-overlay').animate({opacity: 0}, 300, function () {
            $('.importer-overlay').remove();
            if($('#accordion-section-purchase_code').hasClass('open')){
                return;
            }
            $('#accordion-panel-layout > h3').click();
            $('#accordion-section-purchase_code > h3').click();
        });

    }

}

function pixflow_purchaseValidate(){
    "use strict";
    $("#customize-control-validate_purchase_code label").unbind().click(function(){

        var pcode=$("#purchase_code").val().toString().trim();
        if(pcode==''){
            pixflow_messageBox("<div class='msgbox-align-title'> Enter Purchase Code</div>",'caution',"<div class='msgbox-align-des'>Plese Make Sure You Entered Purchase Code</div>","Got It",function(){
                pixflow_closeMessageBox();
            });
            return;
        }
        if(!$("#validate_loading").length){
            $("#input_validate_purchase_code").append("<span id='validate_loading'></span>");
        }



        $("#customize-control-purchase_validation").animate({
            height: 0
        }, 500, function() {
            $.ajax(
                {
                    url: "http://massivedynamic.co/dummydata/demo-importer.php",
                    data:{'pcode':pcode},
                    type:'post',
                    success: function(result){
                        $("#validate_loading").remove();
                        $("#customize-control-purchase_validation").animate({
                            height: "20px"
                        }, 500,function(){


                            if (result.indexOf("invalid") >= 0){
                                $("#customize-control-purchase_validation").html("Purchase code is not valid.");
                                $("#customize-control-purchase_validation").removeClass("valid invalid").addClass("invalid");
                                wp.customize.control('purchase_code_status').setting('false')
                                $("a.import-demo").each(function(){
                                    $(this).removeClass("purchase-code-true");
                                });

                            }else{
                                $("#customize-control-purchase_validation").html("Successfully verified.");
                                $("#customize-control-purchase_validation").removeClass("valid invalid").addClass("valid");
                                wp.customize.control('purchase_code_status').setting('true');
                                $(this).addClass("purchase-code-true");
                            }
                        });
                    }
                });
        });

    });
}

//check demo shoud be open or not when user come from MD builder
function pixflow_check_demo_status(){
    if( window.location.hash == "#open-demo" ){
        $('.customizer-btn.import').click();
    }
}

$(window).load(function () {
    'use strict';
    pixflow_customizerCheckboxStyleSwitchery();
    pixflow_customRequired();
    pixflow_setClassGlue();
    pixflow_selectField();
    pixflow_oneItemChecked(); // if notification has just one item, it's title will disappear
    pixflow_loaded();
    pixflow_check_demo_status();
	pixflow_pageLoading();
    pixflow_customizeMenu();
});

function pixflow_rtl_fix() {
    "use strict";
    if ($('body').hasClass('rtl')) {
        $('body').removeClass('rtl').addClass('massive-rtl');
        $(".massive-rtl .control-panel-widgets .accordion-section-title").html("Widgets");
        $(".massive-rtl .control-panel-nav_menus .accordion-section-title").html("Menu");
        $('html').css({'direction':'ltr'});
    }
}

function pixflow_detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    var trident = ua.indexOf('Trident/');
    var edge = ua.indexOf('Edge/');

    if (msie > 0 || trident > 0 || edge > 0) {
        $('body').addClass('md-isIE');
    }

    // other browser
    return false;
}

$(document).ready(function () {
    'use strict';
    pixflow_rtl_fix();
    pixflow_detect_screen();
    pixflow_customizer();
    pixflow_checkBoxController();
    pixflow_textController();
    pixflow_textareaController();
    pixflow_selectController();
    pixflow_radioController();
    pixflow_colorController();
    pixflow_switchController();
    pixflow_purchaseValidate();
    pixflow_change_remove_name();
    pixflow_change_remove_to_x();
    
	 if(!$('.customizer-loading').length){
        $('#customize-preview').prepend('<div class="customizer-loading">'  +
		'<div class="showbox_loading"><div class="loader_loading">' +
            '<svg class="circular_loading" viewBox="25 25 50 50">' +
      '<circle class="path_loading" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>' +
            ' </svg><span>loading</span></div></div></div>');
          $('.customizer-loading').css('display' , 'none');
    }

    pixflow_detectIE();

    $('#customize-controls').prepend('<button class="back-btn" style="display: none;">'+customizerValues.back+'</button>');
    $('#create-new-menu-submit').click(function(){
        $('.back-btn').css('display','block').addClass('button');
    });

    $('body').on('click','li.accordion-section,li.customize-control-new_menu .button',function(){
        var $this=$(this);
        setTimeout(function(){
            if($('.customize-pane-child').hasClass('open')){
                $('.back-btn').css('display','block').addClass('this-section');
            }else if ($('.customize-pane-child').hasClass('current-panel')){
                $('.back-btn').css('display','block').addClass('this-panel');
            }else{
                $('.back-btn').css('display','none');
            }
        },10);
    });

    $('.back-btn').click(function(event){
        event.preventDefault();

        if( $(this).hasClass('this-section') ) {
            $('.open .customize-section-back').click();
            $(this).removeClass('this-section');
        }else if($(this).hasClass('button')){
            $('.open .customize-section-back').click();
            $(this).removeClass('button');
        }else if( $(this).hasClass('this-panel') ){
            $('.current-panel .customize-panel-back').click();
            $(this).removeClass('this-panel');
        }else{
            $('.open .customize-section-back').click();
        }

        $('.menu-desc-holder').remove();
        $('#accordion-panel-nav_menus .accordion-sub-container').append(
            '<li class="menu-desc-holder">'+
            '<table>'+
            '<tr><td colspan="2" class="menu-desc-title">'+customizerValues.howToUse+'</td></tr>'+
            '<tr><td class="menu-desc-text">1.</td><td class="menu-desc-text"><span>'+customizerValues.editMenuSystem+'</span></td></tr>'+
            '<tr><td class="menu-desc-text">2.</td><td class="menu-desc-text"><span>'+customizerValues.createMegaMenu+'</span></td></tr>'+
            '<tr><td class="menu-desc-text">3.</td><td class="menu-desc-text"><span>'+customizerValues.createSubMenu+'</span></td></tr>'+
            '</table>'+
            '<img class="menu-desc-img" src="'+customizerValues.THEME_CUSTOMIZER_URI+'/assets/images/add-menu-guid.png" />'+
            '</li>');
        if(!$(this).hasClass('this-panel') && !$(this).hasClass('this-section') && !$(this).hasClass('button')){
            $(this).css({display : 'none'});
        }

    });

});

function pixflow_change_remove_name() {
    "use strict";
    $('.attachment-media-view-image .actions .remove-button').html('x');

}
function pixflow_change_remove_to_x(){
    "use strict";
    $('body').on('click','.search-form', function(){
    $('.attachment-media-view-image .actions .remove-button').html('x');
});
}

function pixflow_header_button_hover() {
    pixflow_livePreviewObj().$('header.top-classic  nav > ul >.item_button').hover(function () {
        set_menu_button_background($('#input_button_hover_bg_color').val(),true);
        set_menu_button_text_color($('#input_button_hover_text_color').val());
    },function () {
        set_menu_button_background($('#input_button_bg_color').val());
        set_menu_button_text_color($('#input_button_text_color').val());
    })
    
}

function set_menu_button_background(bg_color,hover) {
    var $this = pixflow_livePreviewObj().$('header.top-classic  nav > ul >.item_button a');
    hover = (typeof hover == 'undefined')?false:true;
    if( pixflow_livePreviewObj().$('.top-classic').length ) {
        if ($('#input_menu_button_style').val() == 'oval' || $('#input_menu_button_style').val() == 'rectangle') {
            $this.css({'border-color': '','background-color': bg_color});
        }else{

            if (hover){
                $this.css({'background-color': bg_color,'border-color': bg_color});
            }else{
                $this.css({'background-color': '','border-color': bg_color});
            }
        }
    }
}

function set_menu_button_text_color(text_color) {
    if( pixflow_livePreviewObj().$('.top-classic').length ){
        pixflow_livePreviewObj().$('header.top-classic  nav > ul >.item_button').css({'color':text_color});
    }
}
/*--------------- $(window).load End ---------------*/