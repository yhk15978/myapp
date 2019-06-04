$(function() {
    $(".service-float").load("./template/erji.html", function() {
        // console.log($('.service-fi-links'))
        $('.service-bd li').on('mouseover', function() {
            var that = this;
            var index = $('.service-bd li').index($(this))
            var tim = setTimeout(function() {
                $('.service-bd li').removeClass('on');
                $(that).addClass('on')
                $(".service-float").fadeIn()
                $('.service-float-item').css("display", "none")
                $($('.service-float-item')[index]).css("display", "block")
            }, 300)
            $('.service').on('mouseleave', function() {
                clearTimeout(tim)
            })
        })
    })
    $('.service').on('mouseleave', function() {
        $(".service-float").stop();
        $('.service-bd li').removeClass('on');
        $(".service-float").css("display", "none");
    })
    $(".notice-hd li").on('mouseover', function() {
        var that = this;
        var index = $('.notice-hd li').index($(this))
        var ti = setTimeout(function() {
            // $('.service-bd li').removeClass('on');
            $(that).addClass('selected').siblings().removeClass('selected');
            $($('.notice-bd ul')[index]).css("display", "block").siblings().css("display", "none")
        }, 500)
        $(this).on('mouseleave', function() {
            clearTimeout(ti)
        })
    })

    for (let i = 0; i < 9; i++) {
        let temp = ` <li class="nav">
                        <a href="javascript:;">
                            <img src="./images/taobao/taobaoapp.webp" alt="">
                        </a>
                        <div class="app-qr"><img src="./images/taobao/TB1ULEoIXXXXXbXXXXXCBLiJXXX-83-83.jpg_80x80.jpg" alt=""></div>
                    </li>`
        $('.apps-nav').append(temp);
    }

    for (let i = 0; i < 119; i++) {
        let temp = `<div class="item">
        <a href="javascript:;" class="hotsale-item">
            <div class="img-wrapper">
                <img class="lazy" data-original="./images/taobao/TB2MojukmFjpuFjSspbXXXagVXa_!!495625875.jpg_200x200q90.jpg_.webp">
            </div>
            <h4>【50元三件区】沙滩裤冲浪裤速干大码宽松休闲短裤学生潮款五分裤</h4>
        </a>
        <p class="info">
            <span class="marks hotsale-hide"></span>
            <span class="price"><em>¥</em>45</span>
            <span class="sales">销量:2</span>
        </p>
        <a class="item-more" href="javascript:;">
            <p class="similar"><i class="tb-ifont love iconfont">&#xe668;
                </i>找相似</p>
            <p>发现更多相似的宝贝<span class="tb-ifont iconfont">&#xe6a3;</span></p>
        </a>
    </div>`
        $('.tbh-hotsale .list').append(temp);
    }
    $("img.lazy").lazyload({
        placeholder: "./images/taobao/TB1BlobNFXXXXXyXXXXXXXXXXXX-34-34.gif", //用图片提前占位
        // placeholder,值为某一图片路径.此图片用来占据将要加载的图片的位置,待图片加载时,占位图则会隐藏
        effect: "fadeIn", // 载入使用何种效果
        // effect(特效),值有show(直接显示),fadeIn(淡入),slideDown(下拉)等,常用fadeIn
        threshold: 100, // 提前开始加载
        // threshold,值为数字,代表页面高度.如设置为200,表示滚动条在离目标位置还有200的高度时就开始加载图片,可以做到不让用户察觉

    });
})