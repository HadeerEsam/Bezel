$(document).ready(function () {
    $("#loading").fadeOut(3000,function(){
        $("body").css("overflow","auto")
    });
});
let aboutOffset= $("#about").offset().top;

//changing nav background and anchors color and show slidup btn on scrolling
    $(window).scroll(function () { 
        let windowHeight=$(window).scrollTop();
        if(windowHeight>=aboutOffset){
            $("#headerNav").css("backgroundColor", "white");
            $(".nav-item a").css("color", "#393939");
            $(".navbar-brand img").attr("src","images/logo-dark.png");
            $("#tooglebtn").css("color","#393939"); 
            $(".slideUp").fadeIn(500);
            
        }
        else{
            $("#headerNav").css("backgroundColor", "transparent");
            $(".navbar-brand img").attr("src","images/logo-light.png");
            $("#tooglebtn").css("color","white"); 
            $(".slideUp").fadeOut(500);
            let windowWidth=$(window).innerWidth();
            if(windowWidth>992){
            $(".nav-item a").css("color", "white");
            }else{
            $(".nav-item a").css("color", "#393939");
            }
        }
        
    });

    //slide up to home
$("#btnUp").click(function () { 
    $("html,body").animate({scrollTop:'0'},3000);
});

//slide to certain section 
$(".nav-item a").click(function(){
    let href=$(this).attr("href");
    let sectionOffsetTop=$(href).offset().top;
    $("html,body").animate({scrollTop:sectionOffsetTop},700);
});
