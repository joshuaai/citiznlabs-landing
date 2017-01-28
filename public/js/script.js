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

    //Use smooth scrolling when clicking on navigation
    $('.navbar a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') === 
            this.pathname.replace(/^\//,'') && 
            location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top-menuHeight+2
                }, 500);
                return false;
            } //target.length
        } //click function
    }); //smooth scrolling

});