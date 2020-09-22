/* list */
$(function(){
    $("header li:nth-child(1)").click(function(){
        $("header ul").attr('class','visited1')
    })
    $("header li:nth-child(2)").click(function(){
        $("header ul").attr('class','visited2')
    })
    $("header li:nth-child(3)").click(function(){
        $("header ul").attr('class','visited3')
    })
    $("header li:nth-child(4)").click(function(){
        $("header ul").attr('class','visited4')
    })
})
/* facebookbutton */
$(function(){
    $(".fbbutton").click(function(){
        $("header").toggleClass("slide")
    })
})
/* 點擊滑動 */
$(function(){
    $(".li1").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop: 0
        },500);
    })
    $(".li2").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop: 1476
        },500);
    })
    $(".li3").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop: 2460
        },500);
    })
    $(".li4").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop: 3713
        },500);
    })
})
/* 頁面隱藏 */
$(function () {
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal > 0){
            $(".leftside,.fbbutton").fadeOut(300)
        } else{
            $(".leftside,.fbbutton").fadeIn(500)
        };
        if(scrollVal > 1300){
            $("main").addClass("fade1")
        } else{
            $("main").removeClass("fade1")
        };
        if(scrollVal > 2200){
            $("main").addClass("fade2")
        } else{
            $("main").removeClass("fade2")
        };
        if(scrollVal > 300){
            $(".portfolio").addClass("slide")
        };
        if(scrollVal > 300){
            $(".leftside2 li:nth-child(1)").animate({
                opacity: 1
            },800);
        };
        if(scrollVal > 300){
            $(".leftside2 li:nth-child(2)").animate({
                opacity: 1
            },1200);
        };
        if(scrollVal > 300){
            $(".leftside2 li:nth-child(3)").animate({
                opacity: 1
            },1600);
        };
        if(scrollVal > 400){
            $(".img1").animate({
                opacity: 1,
            },500);
        };
        if(scrollVal > 400){
            $(".img2").animate({
                opacity: 1,
            },900);
        };
        if(scrollVal > 400){
            $(".img3").animate({
                opacity: 1,
            },1300);
        };
        if(scrollVal > 400){
            $(".img4").animate({
                opacity: 1,
            },1700);
        };
    });
});
/* 頁面效果Portfolio */
$(function(){
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal > 300){
            $(".portfolio").addClass("slide")
        };
        if(scrollVal > 300){
            $(".leftside2 li:nth-child(1)").animate({
                opacity: 1
            },1000);
        };
        if(scrollVal > 300){
            $(".leftside2 li:nth-child(2)").animate({
                opacity: 1
            },2000);
        };
        if(scrollVal > 300){
            $(".leftside2 li:nth-child(3)").animate({
                opacity: 1
            },3000);
        };
        if(scrollVal > 400){
            $(".img1").animate({
                opacity: 1,
            },1000);
        };
        if(scrollVal > 400){
            $(".img2").animate({
                opacity: 1,
            },1500);
        };
        if(scrollVal > 400){
            $(".img3").animate({
                opacity: 1,
            },2000);
        };
        if(scrollVal > 400){
            $(".img4").animate({
                opacity: 1,
            },2500);
        };
    })
})
/* 頁面效果about */
$(function(){
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        $("span").text(scrollVal);
        if(scrollVal > 800){
            $('.about h1').animate({
                opacity: 1,
            },800)
        }
        if(scrollVal > 800){
            $('.about p').animate({
                opacity: 1,
            },1500)
        }
        if(scrollVal > 1500){
            $('.aboutbg h4').animate({
                opacity: 1,
            },800)
        }
        if(scrollVal > 1500){
            $('.aboutbg h5').animate({
                opacity: 1,
            },1500)
        }
    })
})