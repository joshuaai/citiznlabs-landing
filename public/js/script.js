$(function () {
   "use strict";

   //get the height of the window
   var windowHeight = $(window).height();

   //variable for menu height
   var menuHeight = 80; 

   //set to window tallness
   $('.fullheight').css('height', windowHeight); 

   //replace IMG inside carousel with a background image 
    $('#featured .item img').each(function() {
        var imgSrc = $(this).attr('src');
        $(this).parent().css({'background-image': 'url('+imgSrc+')'});
        $(this).remove();
    });

});