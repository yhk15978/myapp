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
    for (let i = 0; i < 9; i++) {
        let temp = ` <li class="nav">
                        <a href="javascript:;">
                            <img src="./images/taobao/taobaoapp.webp" alt="">
                        </a>
                        <div class="app-qr"><img src="./images/taobao/TB1ULEoIXXXXXbXXXXXCBLiJXXX-83-83.jpg_80x80.jpg" alt=""></div>
                    </li>`
        $('.apps-nav').append(temp);
    }
    for (let i = 0; i < 5; i++) {
        let temp = `<a href="javascript:;">
                    <div class="img-wrapper">
                        <img src="./images/taobao/TB2i9NXbwkLL1JjSZFpXXa7nFXa_!!3107144874-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp" alt="" class="a-all">
                    </div>
                    <div class="info">
                        <h4 class="a-all">max破产都要买的口红</h4>
                        <p>《破产姐妹》max最爱Tarte哑光口红笔</p>
                        <p class="extra">
                            <span class="tb-ifont iconfont">&#xe64a;</span> 5950 人说好
                        </p>
                    </div>
                </a>`
        $('.goods-list').append(temp);
    }
    $('.goods-list a:gt(2)').addClass('second')
    for (let i = 0; i < 5; i++) {
        let temp = `  <li>
                        <a href="javascript:;">
                            <div class="img-wrapper">
                                <img src="./images/taobao/TB2nUVpkGmgSKJjSsplXXaICpXa_!!550588607.jpg_180x180xzq90.jpg_.webp" alt="">
                            </div>
                            <div class="info">
                                <p class="subtitle">
                                    <span class="tb-ifont iconfont">引号icon</span> 多种中秋月饼馅顺南金装红豆沙白莲蓉抹茶椰蓉凤梨芝麻翡翠低糖馅
                                </p>
                                <div class="extra">
                                    <div class="pic-wrapper">
                                        <img src="./images/taobao/TB2cLMFeYlmpuFjSZFlXXbdQXXa_!!0-mytaobao.jpg_30x30.jpg" alt="">
                                    </div>
                                    <p class="name">放飞自我的兔小姐</p>
                                </div>
                            </div>
                        </a>
                    </li>`
        $('.shopping-list').append(temp);
    }
    $('.shopping-list li:gt(2)').addClass('second');
    for (let i = 0; i < 2; i++) {
        let temp = `  <li>
                        <a href="javascript:;">
                            <div class="img-wrapper">
                                <img src="./images/taobao/O1CN011ImjBWxFKNsoePh_!!0-juitemmedia.jpg_180x180q90.jpg_.webp" alt="">
                            </div>
                            <div class="info">
                                <h4>【到手1799起】亿健Air跑步机</h4>
                                <p class="title">前1小时到手价1799</p>
                                <div class="progress">
                                    <div class="progress-bar" style="width:19%"></div>
                                </div>
                                <div class="desc">
                                    <span class="percentage">19%</span>
                                    <span class="letter">已抢27件</span>
                                </div>
                                <div class="extra">
                                    <span class="yan">￥</span>
                                    <span class="cur">2299</span>
                                    <span class="price">￥3799.00</span>
                                </div>
                            </div>
                        </a>
                    </li>`
        $('.qiang-list').append(temp);
    }
})