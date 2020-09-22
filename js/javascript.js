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
        $("span").text(scrollVal);
        if(scrollVal > 0){
            $(".leftside,.fbbutton").fadeOut(300)
        } else{
            $(".leftside,.fbbutton").fadeIn(500)
        };
        if(scrollVal > 950){
            $("main").addClass("fade1")
        } else{
            $("main").removeClass("fade1")
        };
        if(scrollVal > 2000){
            $("main").addClass("fade2")
        } else{
            $("main").removeClass("fade2")
        };
        if(scrollVal < 300){
            $(".leftside2").fadeOut(500)
        } else{
            $(".leftside2").fadeIn(500)
        }
    });
});