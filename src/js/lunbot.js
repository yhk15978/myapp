$(function() {
    let index = 0;

    let firstCh = $('.promo-bd>div>.mod').eq(0).clone(true);
    let lastCh = $('.promo-bd>div>.mod').eq(-1).clone(true);
    $('.promo-bd>div').prepend(lastCh);
    $('.promo-bd>div').append(firstCh);
    let cW = $('.promo-bd>div>.mod').width();
    $('.promo-bd>div').css({
        'width': cW * $('.promo-bd>div>.mod').length + 'px',
        'left': -cW + 'px',
    })

    function start(index) {
        $('.promo-nav li').removeClass('selected');
        $('.promo-nav li').eq(index).addClass('selected');
        $('.promo-bd>div').stop(true);
        $('.promo-bd>div').animate({
            'left': -cW * (index + 1)
        }, function() {

        })
    }
    let timer = setInterval(function() {
        index++;
        if (index > $('.promo-nav li').length - 1) {
            index = 0;
            $('.promo-bd>div').css({
                'left': 0 + 'px',
            })
        }
        start(index)
    }, 2000);
    $('.promo').hover(function() {
        clearInterval(timer)
    }, function() {
        timer = setInterval(function() {
            index++;
            if (index > $('.promo-nav li').length - 1) {
                index = 0;
                $('.promo-bd>div').css({
                    'left': 0 + 'px',
                })
            }
            start(index)
        }, 2000);
    })
    $('.promo-nav li').on('click', function() {
        index = $('.promo-nav li').index(this);
        start(index)
    })
    $('.promo-ft .prev').on('click', function() {
        index--;
        if (index < 0) {
            index = $('.promo-nav li').length - 1;
            $('.promo-bd>div').css({
                'left': -cW * ($('.promo-nav li').length + 1) + 'px',
            })
        }
        start(index)
    })
    $('.promo-ft .next').on('click', function() {
        index++;
        if (index > $('.promo-nav li').length - 1) {
            index = 0;
            $('.promo-bd>div').css({
                'left': 0 + 'px',
            })
        }
        start(index)
    })
})