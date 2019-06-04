"use strict";

$(function () {
    $(".service-float").load("./template/erji.html", function () {
        // console.log($('.service-fi-links'))
        $('.service-bd li').on('mouseover', function () {
            var that = this;
            var index = $('.service-bd li').index($(this));
            var tim = setTimeout(function () {
                $('.service-bd li').removeClass('on');
                $(that).addClass('on');
                $(".service-float").fadeIn();
                $('.service-float-item').css("display", "none");
                $($('.service-float-item')[index]).css("display", "block");
            }, 300);
            $('.service').on('mouseleave', function () {
                clearTimeout(tim);
            });
        });
    });
    $('.service').on('mouseleave', function () {
        $(".service-float").stop();
        $('.service-bd li').removeClass('on');
        $(".service-float").css("display", "none");
    });
    $(".notice-hd li").on('mouseover', function () {
        var that = this;
        var index = $('.notice-hd li').index($(this));
        var ti = setTimeout(function () {
            // $('.service-bd li').removeClass('on');
            $(that).addClass('selected').siblings().removeClass('selected');
            $($('.notice-bd ul')[index]).css("display", "block").siblings().css("display", "none");
        }, 500);
        $(this).on('mouseleave', function () {
            clearTimeout(ti);
        });
    });

    for (var i = 0; i < 9; i++) {
        var temp = " <li class=\"nav\">\n                        <a href=\"javascript:;\">\n                            <img src=\"./images/taobao/taobaoapp.webp\" alt=\"\">\n                        </a>\n                        <div class=\"app-qr\"><img src=\"./images/taobao/TB1ULEoIXXXXXbXXXXXCBLiJXXX-83-83.jpg_80x80.jpg\" alt=\"\"></div>\n                    </li>";
        $('.apps-nav').append(temp);
    }

    for (var _i = 0; _i < 119; _i++) {
        var _temp = "<div class=\"item\">\n        <a href=\"javascript:;\" class=\"hotsale-item\">\n            <div class=\"img-wrapper\">\n                <img class=\"lazy\" data-original=\"./images/taobao/TB2MojukmFjpuFjSspbXXXagVXa_!!495625875.jpg_200x200q90.jpg_.webp\">\n            </div>\n            <h4>\u301050\u5143\u4E09\u4EF6\u533A\u3011\u6C99\u6EE9\u88E4\u51B2\u6D6A\u88E4\u901F\u5E72\u5927\u7801\u5BBD\u677E\u4F11\u95F2\u77ED\u88E4\u5B66\u751F\u6F6E\u6B3E\u4E94\u5206\u88E4</h4>\n        </a>\n        <p class=\"info\">\n            <span class=\"marks hotsale-hide\"></span>\n            <span class=\"price\"><em>\xA5</em>45</span>\n            <span class=\"sales\">\u9500\u91CF:2</span>\n        </p>\n        <a class=\"item-more\" href=\"javascript:;\">\n            <p class=\"similar\"><i class=\"tb-ifont love iconfont\">&#xe668;\n                </i>\u627E\u76F8\u4F3C</p>\n            <p>\u53D1\u73B0\u66F4\u591A\u76F8\u4F3C\u7684\u5B9D\u8D1D<span class=\"tb-ifont iconfont\">&#xe6a3;</span></p>\n        </a>\n    </div>";
        $('.tbh-hotsale .list').append(_temp);
    }
    $("img.lazy").lazyload({
        placeholder: "./images/taobao/TB1BlobNFXXXXXyXXXXXXXXXXXX-34-34.gif", //用图片提前占位
        // placeholder,值为某一图片路径.此图片用来占据将要加载的图片的位置,待图片加载时,占位图则会隐藏
        effect: "fadeIn", // 载入使用何种效果
        // effect(特效),值有show(直接显示),fadeIn(淡入),slideDown(下拉)等,常用fadeIn
        threshold: 100 // 提前开始加载
        // threshold,值为数字,代表页面高度.如设置为200,表示滚动条在离目标位置还有200的高度时就开始加载图片,可以做到不让用户察觉

    });
});
