/* 上選單效果 */
$(function(){
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal >= 1476){
            $("header ul").attr('class','visited2')
        } else {
            $("header ul").attr('class','visited1')
        }
        if(scrollVal >= 2460){
            $("header ul").attr('class','visited3')
        } else {
            $("header ul").addClass('class','visited2')
        }
        if(scrollVal >= 3713){
            $("header ul").attr('class','visited4')
        } else {
            $("header ul").addClass('class','visited3')
        }
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
    });
});
/* 頁面效果Portfolio */
$(function(){
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal > 300){
            $(".portfolio").addClass("slide")
            $(".leftside2 li:nth-child(1)").delay("500").animate({
                opacity: 1
            },800);
            $(".leftside2 li:nth-child(2)").delay("1000").animate({
                opacity: 1
            },800);
            $(".leftside2 li:nth-child(3)").delay("1500").animate({
                opacity: 1
            },800);
        };
        if(scrollVal > 400){
            $(".img1").delay("1800").animate({
                opacity: 1,
            },500);
            $(".img2").delay("2100").animate({
                opacity: 1,
            },500);
            $(".img3").delay("2400").animate({
                opacity: 1,
            },500);
            $(".img4").delay("2700").animate({
                opacity: 1,
            },500);
        };
    })
})
/* 頁面效果about */
$(function(){
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal > 800){
            $('.about h1').animate({
                opacity: 1,
            },800)
            $('.about p').delay("500").animate({
                opacity: 1,
            },800)
        }
        if(scrollVal > 1300){
            $('.aboutbg h4').animate({
                opacity: 1,
            },800)
            $('.aboutbg h5').delay("500").animate({
                opacity: 1,
            },800)
        }
    })
})
/* sec1*/
$(function(){
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal > 2260){
            $('.sec1_2_1').animate({
                opacity: 1,
            },800);
            $('.sec1_2_2').delay("500").animate({
                opacity: 1,
            },800);
            $('.sec1_2_3').delay("1000").animate({
                opacity: 1,
            },800)
        }
    })
})