var $ = jQuery;

function pixflow_team_member_modern(team_member_modern_id, team_member_modern_hover_color, row_changed) {

    "use strict";

    if (row_changed == 'row_changed') {

        var team_width_row_changed = $('.vc_vc_row').find('.team-member-modern').parent().width();

        if ($('.vc_vc_row').hasClass(teamMemberId)) {
            $('.vc_vc_row').find('.team-member-modern').css({
                width: teamWidthRowChanged,
                height: teamWidthRowChanged
            });
        }
    }

}


function pixflow_set_event_touch_document(data){
    $(document).on("click touchstart" , function(){
        TweenMax.to(data[3], .1, {transform: 'translateY(30px)', opacity: 0, ease: Cubic.easeInOut});
        TweenMax.to(data[0], .1, {transform: 'translateY(60px)', opacity: 0, ease: Power0.easeNone});
        TweenMax.to(data[1], .1, {transform: 'translateY(60px)', opacity: 0, ease: Power0.easeNone});
        TweenMax.to(data[2], .1, {transform: 'translateY(60px)', opacity: 0, ease: Power0.easeNone});

        if(data[4].width() <= 285) {
            TweenMax.to(data[5], .6, {width: '43px', height: '43px', ease: Cubic.easeInOut});
        }else{
            TweenMax.to(data[5], .6, {width: '53px', height: '53px', ease: Cubic.easeInOut});
        }
        TweenMax.to(data[6], .6, {width: '50px', height: '50px', ease: Cubic.easeInOut });
        i == 1;
    });

    data[4].on('click touchstart' , function (event) {
        event.stopPropagation();
    });
}


function  pixflow_set_event_on_button(data){
    data[6].on('click touchstart', function (event) {
        event.stopPropagation();
        TweenMax.to( data[3] , .5, {transform: 'translateY(0px)', opacity: 1, ease: Cubic.easeInOut});
        TweenMax.to( data[0] , .3, {transform: 'translateY(0px)', opacity: 1 , zIndex: 99,  ease: Cubic.easeInOut});
        TweenMax.to( data[1] , .4, {transform: 'translateY(0px)', opacity: 1 , zIndex: 99,  ease: Cubic.easeInOut});
        TweenMax.to( data[2] , .5, {transform: 'translateY(0px)', opacity: 1 , zIndex: 99, ease: Cubic.easeInOut  });
        TweenMax.to( data[5] , .4, {width: '250%', height: '300%', ease: Cubic.easeInOut});
        TweenMax.to( data[6], .1, {width: '100%', height: '100%', ease: Power0.easeNone});
    });
}


function pixflow_team_member_modern_hover(id) {
    "use strict";
    var handle_event =  $(window).width() < 1050 && pixflow_isTouchDevice()  ? 'click touchstart' : 'hover' ;
    $(document).ready(function () {
        var team_member_id = $('#'+id);
        var hover_butt = $('.'+id+' .team-member-hover-button');
        var hover = $('.'+id+' .team-member-hover');
        var social_icon_1 = $('.'+id+' .social-icon-1');
        var social_icon = $('.'+id+' .social-icons');
        var social_icon_2 = $('.'+id+' .social-icon-2');
        var social_icon_3 = $('.'+id+' .social-icon-3');
        var description = $('.'+id+' .description');
        var i = 1;

        if(handle_event !== 'hover' ){
            var data = [ social_icon_1 , social_icon_2 , social_icon_3 , description , team_member_id , hover , hover_butt ] ;
            pixflow_set_event_touch_document(data);
            pixflow_set_event_on_button(data);
            return ;
        }
        hover_butt.on('hover', function (event) {
            if (i == 1) {
                TweenMax.to(description, .5, {transform: 'translateY(0px)', opacity: 1, ease: Cubic.easeInOut});
                TweenMax.to(social_icon_1, .3, {transform: 'translateY(0px)', opacity: 1 , zIndex: 99,  ease: Cubic.easeInOut});
                TweenMax.to(social_icon_2, .4, {transform: 'translateY(0px)', opacity: 1 , zIndex: 99,  ease: Cubic.easeInOut});
                TweenMax.to(social_icon_3, .5, {transform: 'translateY(0px)', opacity: 1 , zIndex: 99, ease: Cubic.easeInOut  });
                TweenMax.to(hover, .4, {width: '250%', height: '300%', ease: Cubic.easeInOut});
                TweenMax.to(hover_butt, .1, {width: '100%', height: '100%', ease: Power0.easeNone});
                i = -1;
            }
            else {
                TweenMax.to(description, .1, {transform: 'translateY(30px)', opacity: 0, ease: Cubic.easeInOut});
                TweenMax.to(social_icon_1, .1, {transform: 'translateY(60px)', opacity: 0, ease: Power0.easeNone});
                TweenMax.to(social_icon_2, .1, {transform: 'translateY(60px)', opacity: 0, ease: Power0.easeNone});
                TweenMax.to(social_icon_3, .1, {transform: 'translateY(60px)', opacity: 0, ease: Power0.easeNone});

                if(team_member_id .width() <= 285) {
                    TweenMax.to(hover, .6, {width: '43px', height: '43px', ease: Cubic.easeInOut});
                }else{
                    TweenMax.to(hover, .6, {width: '53px', height: '53px', ease: Cubic.easeInOut});
                }
                TweenMax.to(hover_butt, .6, {width: '50px', height: '50px', ease: Cubic.easeInOut });
                i = 1 ;
            }
        });

    });
}
//responsive for team member modern
function pixflow_team_memeber_modern_check_size(id){
    "use strict";
    var teamMemberId = $('#'+id);
    var team_member_hover_css = $('.'+id+'.team-member-hover ');
    var team_member_hover_button_css = $('.'+id+'.team-member-hover-button ');
    var team_member_modern_icons_css = $('.'+id+'.social-icons ');
    var team_member_hover_desc = $('.'+id+'.description');
    if ($('#'+id).width() <= 285){
        team_member_hover_css.css({'height':'43px','width':'43px','top':'29px','left':'28px'});
        team_member_hover_desc.css({'font-size':'12px', 'padding':'0px 5%', 'bottom':'40%' });
        team_member_modern_icons_css.css({ 'bottom':'40%' });
         team_member_hover_button_css.css({'top':'3px','left':'3px'});

    }
    if(teamMemberId.width() <= 230){


        teamMemberId.find('.title').css({'font-size': '16px'});
        teamMemberId.find('.subtitle').css({'font-size': '12px'});

    }
    if(teamMemberId.width() <= 170){
        team_member_hover_desc.css({'display':'none'});
        team_member_modern_icons_css.css({ 'bottom':'70%' });
        $('.social-icons li').css({
        'height': '30px',
        'width': '30px',
        'padding-left': '8px',
        'margin': '4px'});
    }
}



document_ready_functions.pixflow_team_memeber_modern_check_size = ['id'] ;
document_ready_functions.pixflow_team_member_modern_hover = ['id'] ;