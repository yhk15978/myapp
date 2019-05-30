(function($) {
    $.fn.extend({
        slider: function(options) {
            var main = null, //主函数
                that = this, //保存上下文环境
                init = null, //初始化
                stop = null, //停止
                start = null, //开始
                next = null, //下一张
                prev = null, //上一张
                timer = null, //计时器
                elems = {}, //命名空间，用于选取元素
                defaults = {
                    speed: 300, //动画时间
                    delay: 3000 //展示时间
                };
            options = $.extend(defaults, options); //合并参数
            // 1. 初始化
            init = function() {
                    elems._index = 1; //初始播放第一张
                    elems.sliderDiv = that.children('div').eq(1).children('div'); //选择需要移动的div元素
                    elems.btn = that.children('div').eq(2).children('div').children('a'); //选择按钮
                    console.log(elems.btn)
                    elems.sliderDiv.append(elems.sliderDiv.children('.mod').first().clone(true));

                    elems.btn.on('click', function() {
                        if (elems.btn.index($(this))) {
                            next();
                        } else {
                            prev();
                        }
                    });

                    that.hover(function() {
                        stop();
                    }, function() {
                        timer = setInterval(start.bind(null, 1), options.delay + options.speed);
                    });
                }
                // init();
                // 2. 开始动画
            start = function(fx) {
                    var t = "-=" + elems.sliderDiv.children('.mod').first().width();
                    if (!fx) {
                        t = "+=" + elems.sliderDiv.children('.mod').first().width();
                        if (elems._index <= 1) {
                            var divLeft = that.offset().left,
                                imgLeft = elems.sliderDiv.children('.mod').last().offset().left;
                            elems._index = elems.sliderDiv.children('.mod').length;
                            console.log(imgLeft - divLeft)
                            elems.sliderDiv.css('left', '-' + (imgLeft - divLeft) + 'px');
                            console.log(elems.sliderDiv.css('left'))
                        }
                    }

                    elems.sliderDiv.animate({
                        left: t
                    }, options.speed, "linear", function() {
                        if (fx) elems._index++;
                        else elems._index--;
                        if (elems._index === 7) {
                            elems._index = 1;
                            elems.sliderDiv.css('left', 0);
                            console.log(elems._index, elems.sliderDiv.css('left'))
                        }
                        that.children('div').eq(0).find('i').html(elems._index);
                    });
                }
                // 3. 上一张
            prev = function() {
                stop();
                start(0);
            };
            // 4. 下一张
            next = function() {
                stop();
                start(1);
            };

            // 5. 停止
            stop = function() {
                elems.sliderDiv.stop(true, true);
                clearInterval(timer);
            }
            main = function() {
                init();
                timer = setInterval(start.bind(null, 1), options.delay + options.speed);
            }

            main();
        }
    })



})(jQuery)