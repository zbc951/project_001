/* 上選單效果 */
$(function(){
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal >= 876){
            $("header ul").attr('class','visited2')
        } else {
            $("header ul").attr('class','visited1')
        }
        if(scrollVal >= 1860){
            $("header ul").attr('class','visited3')
        }
        if(scrollVal >= 3300){
            $("header ul").attr('class','visited4')
        }
    })
})
/* facebookbutton */
$(function(){
    $(".fbbutton").click(function(){
        $(".portfolio").toggleClass("slidetop")
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
            scrollTop: 4000
        },500);
    })
})
/* 頁面隱藏 */
$(function () {
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal > 0){
            $(".leftside").fadeOut(300)
        } else{
            $(".leftside").fadeIn(500)
        };
        if(scrollVal > 1400){
            $("main").addClass("fade1")
        } else{
            $("main").removeClass("fade1")
        };
        if(scrollVal > 2400){
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
            },300);
            $(".leftside2 li:nth-child(2)").delay("800").animate({
                opacity: 1
            },300);
            $(".leftside2 li:nth-child(3)").delay("1100").animate({
                opacity: 1
            },300);
        };
        if(scrollVal > 300){
            $(".img1").delay("1400").animate({
                opacity: 1,
            },500);
            $(".img2").delay("1700").animate({
                opacity: 1,
            },500);
            $(".img3").delay("2000").animate({
                opacity: 1,
            },500);
            $(".img4").delay("2300").animate({
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
            $('.aboutbg h3').animate({
                opacity: 1,
            },800)
            $('.aboutbg h4').delay("500").animate({
                opacity: 1,
            },800)
        }
    })
})
/* sec1 */
$(function(){
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal > 2060){
            $('.img5').animate({
                opacity: 1,
            },500);
            $('.img6').delay("500").animate({
                opacity: 1,
            },500);
            $('.img7').delay("1000").animate({
                opacity: 1,
            },500)
        }
    })
})
/* sec2 */
$(function(){
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal >= 2660){
            $('.u0').animate({
                opacity: 1,
            },300)
            $('.u1').delay('500').animate({
                opacity: 1,
            },200);
            $('.u2').delay('700').animate({
                opacity: 1,
            },200);
            $('.u3').delay('900').animate({
                opacity: 1,
            },200);
            $('.u4').delay('1100').animate({
                opacity: 1,
            },200);
            $('.u5').delay('1300').animate({
                opacity: 1,
            },200);
            $('.u6').delay('1500').animate({
                opacity: 1,
            },200);
            $('.u7').delay('1700').animate({
                opacity: 1,
            },200);
        }
    })
})
/* sec3 */
$(function(){
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal >= 2960){
            $('.img8,.img8_1').animate({
                opacity: 1,
            },500);
            $('.img9,.img9_1').delay('300').animate({
                opacity: 1,
            },500);
        }
        if(scrollVal >= 3060){
            $('.img10,.img10_1').animate({
                opacity: 1,
            },500);
            $('.img11,.img11_1').delay('300').animate({
                opacity: 1,
            },500);
        }
    })
})
/* 頁面重整問題 */
$(function(){
    $("html,body").animate({
        scrollTop: 0,
        screenLeft: 0,
    }, 0);
})
/* rwdlist */
$(function(){
    $('.rwdlistbt').click(function(){
        $('header').toggleClass('rwdslide')
    })
    $('.rwdlistbt').blur(function(){
        $('header').removeClass('rwdslide')
    })
})
/* rwd點擊滑動 */
$(function(){
    $(".rwdli1").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop: 0
        },500);
        $('header').removeClass('rwdslide')
    })
    $(".rwdli2").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop: 1896
        },500);
        $('header').removeClass('rwdslide')
    })
    $(".rwdli3").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop: 2880
        },500);
        $('header').removeClass('rwdslide')
    })
    $(".rwdli4").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop: 6500
        },500);
        $('header').removeClass('rwdslide')
    })
})