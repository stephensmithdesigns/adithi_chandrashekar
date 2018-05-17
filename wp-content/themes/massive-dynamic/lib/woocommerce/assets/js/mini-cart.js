var $=jQuery;

$(document).ready(function(){
    $('.mini_cart_item a').not('.remove').each(function(){
        if($(this).find('img').length){
            var src = $(this).find('img').attr('src');
            $('<div/>').css('background-image',"url("+ src +")").addClass('cart-img').prependTo($(this));
            $(this).find('img').remove();
        }else{
            $('<div/>').addClass('cart-img').prependTo($(this));
        }
    })
});