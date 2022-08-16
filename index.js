$(document).ready(function () {
    $("nav ul h2:nth-child(1)").hover(function() {
        $(this).css({
            "background-color": "rgb(5, 4, 4)",
            "color": "rgb(204, 51, 51)",
            "border": "2px solid rgb(102, 102, 102)"
        });
    });
    $("nav ul h2:nth-child(2)").hover(function() {
        $(this).css({
            "background-color": "rgb(7, 7, 7)",
            "color": "rgb(255, 255, 255)",
            "border": "2px solid rgb(102, 102, 102)"
        });
    });
    $("nav ul h2:nth-child(3)").hover(function() {
        $(this).css({
            "background-color": "rgb(204, 51, 51)",
            "color": "rgb(255, 204, 204)",
            "border": "2px solid rgb(102, 102, 102)"
        });
    });
    $("nav ul h2:nth-child(4)").hover(function() {
        $(this).css({
            "background-color": "rgb(204, 102, 51)",
            "color": "rgb(255, 204, 153)",
            "border": "2px solid rgb(102, 102, 102)"
        });
    });
    $("nav ul h2:nth-child(5)").hover(function() {
        $(this).css({
            "background-color": "rgb(204, 153, 0)",
            "color": "rgb(255, 255, 204)",
            "border": "2px solid rgb(102, 102, 102)"
        });
    });
    $("nav ul h2:nth-child(6)").hover(function() {
        $(this).css({
            "background-color": "rgb(0, 102, 102)",
            "color": "rgb(153, 204, 153)",
            "border": "2px solid rgb(102, 102, 102)"
        });
    });
    $("nav ul h2:nth-child(7)").hover(function() {
        $(this).css({
            "background-color": "rgb(5, 101, 101)",
            "color": "rgb(255, 255, 255)",
            "border": "2px solid rgb(102, 102, 102)"
        });
    });
    $("nav ul h2").mouseleave(function() {
        $(this).css({
            "background-color": "rgb(255, 255, 255)",
            "color": "rgba(0,0,0)"
        });
    });

    $(".fa-bars").click(function(event) {
        $("nav ul").slideToggle();
    });
    $(window).resize(function(){  
        var w = $(window).width();  
        if(w > 780) {  
            $("nav ul").removeAttr("style");  
        }  
    });

    //home page
    $(".penguin > img:gt(0)").hide();
    setInterval(function() {
        $(".penguin > img:first")
            .fadeIn(500)
            .fadeOut(2000)
            .next()
            .fadeIn(2000)
            .end()
            .appendTo(".penguin");
    }, 4000);

    var height = 650;
    var duration = 500;
    $(window).scroll(function() {
        if($(this).scrollTop() > height) {
            $("#backToTop").fadeIn(duration);
        } else {
            $("#backToTop").fadeOut(duration);
        }
    });
    $("#backToTop").click(function() {
        $("html").animate({scrollTop: 0}, duration);
    });

    //endangered
    $(".en-penguin").click(function() {
        $(this).toggleClass("flipped")
    }); 
    var en = $(document).find("title").text();
    if(en == "Endangered") {
        $("nav ul h2:nth-child(4)").css({
                "background-color": "rgb(204, 102, 51)",
                "color": "rgb(255, 204, 153)",
                "border": "2px solid rgb(102, 102, 102)"
        })
        .off("mouseleave");
    };

    //vulnerable
    $(".fa-angle-down").on("click", function() {
        $(".vu-intro").toggle();
    });
    var vu = $(document).find("title").text();
    if(vu == "Vulnerable") {
        $("nav ul h2:nth-child(5)").css({
                "background-color": "rgb(204, 153, 0)",
                "color": "rgb(255, 255, 204)",
                "border": "2px solid rgb(102, 102, 102)"
        })
        .off("mouseleave");
    };

    //near-threatened
    $(".bi-heart").click(function() {
        $(this).toggleClass("bi-heart bi-heart-fill");
    });
    $(".card-img").dblclick(function() {
        $(this).parent(".card").find(".card-icon").children(".heart").removeClass("bi-heart");
        $(this).parent(".card").find(".card-icon").children(".heart").addClass("bi-heart-fill");
    });
    $(".bi-chat").click(function() {
        $(this).parents(".card").find(".comment").children(".comment-input").focus();
    })
    $(".bi-bookmark").click(function() {
        $(this).toggleClass("bi-bookmark bi-bookmark-fill");
    });

    var nt = $(document).find("title").text();
    if(nt == "Near Threatened") {
        $("nav ul h2:nth-child(6)").css({
                "background-color": "rgb(0, 102, 102)",
                "color": "rgb(153, 204, 153)",
                "border": "2px solid rgb(102, 102, 102)"
        })
        .off("mouseleave");
    };

    //least-concerned
    $(".hang img:eq(0)").wrap("<a href='#lc'></a>");
    $(".hang img:eq(1)").wrap("<a href='#king'></a>");
    $(".hang img:eq(2)").wrap("<a href='#little'></a>");
    $(".hang img:eq(3)").wrap("<a href='#magellanic'></a>");
    $(".hang img:eq(4)").wrap("<a href='#adelie'></a>");
    $(".hang img:eq(5)").wrap("<a href='#gentoo'></a>");
    $(".hang img:eq(6)").wrap("<a href='#chinstrap'></a>");

    $(window).scroll( function(){
        $('.lc-penguin:gt(0)').each( function(i){
            var objectHeight = $(this).offset().top + $(this).outerHeight();
            var windowHeight = $(window).scrollTop() + $(window).height();
            
            if( windowHeight > objectHeight ){
                $(this).animate({"opacity": "1"}, 500);  
            }
        }); 
    });

    var lc = $(document).find("title").text();
    if(lc == "Least Concerned") {
        $("nav ul h2:nth-child(7)")
        .css({
                "background-color": "rgb(5, 101, 101)",
                "color": "rgb(255, 255, 255)",
                "border": "2px solid rgb(102, 102, 102)"
        })
        .off("mouseleave");
    };
});