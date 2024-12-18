$(document).ready(function(){
    "use strict";
    /***
        Form Area
    ***/
    $(".tab-btn").on("click" , function(){
        $(".join-form").slideToggle(500,"easeInCubic");
        
        return false;
    });
    $(".join-form").hide();
    $(".join-form p i").on("click" , function(){
        $(".join-form").fadeOut(400);
    });    
   
    $(".input_email input").on("click" , function(){
        $(".input_email .input_icon").hide();
    });
    $(".input_password input").on("click" , function(){
        $(".input_password .input_icon").hide();
    });
    
    /***
        Sub Menu
    ***/
    if ($(".main-menu ul li ul").hide()){
         $(".spinner-master").on("click" , function(e){
            e.preventDefault();
             $(".main-menu ul li ul").toggle(500);
         });
    }
    $(".control-panel .icon a").on("click" , function(){
        return false;
    });
    
    /***
        Tab
    ***/
    $('#myTab a').on("click" , function (e) {
          e.preventDefault()
          $(this).tab('show')
    });
    
    /***
        Counter
    ***/
     $('.counter').counterUp({
            delay: 10,
            time: 1000
    });
    
    /***
        WOW
    ***/
    new WOW().init();
    
    /***
        Video Area
    ***/
    $('.video-play').magnificPopup({
        type: 'iframe',

        iframe: {
            patterns: {
              vimeo: {

                index: 'vimeo.com',

                id:'https://vimeo.com/54298665',

                src: 'https://player.vimeo.com/video/54298665?badge=0'

              }
            }
        }
    });
    
    /***
        Scroll To Top
    ***/
    var top_0 = {scrollTop:0};
    var topClass = $(".scrolltotop i");
    topClass.on("click" , function(e){
        $("html,body").animate(top_0,1000);
    });
    $(window).scroll(function(){
        if($(this).scrollTop() > 400) {
            topClass.fadeIn(500);
        }
        else {
            topClass.fadeOut(500);
        }
    });
    
    /***
        Smooth Scroll
    ***/
    $('.main-menu a[href*="#"]:not([href="#"])').on("click" , function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    
    /***
        Preloder
    ***/
    $("#loading").fakeLoader({
        spinner:"spinner5",
        bgColor:"#13776F",
        timeToHide:3500
    });
        
});