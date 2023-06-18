$(function () {
    $('.ribbon-shop-online-bigdiv').animate({
        marginTop: "0px",
    }, 800)

    $('.covid-ribbon-copy').animate({
        marginTop: "0px",
    }, 800)

    $('.ribbon-shop-online-bigdiv').animate({
        opacity: 0
    }, 800)

    //右侧按钮点击事件
    var count = 0;
    if (count > -300) {
        $('.btn-left').hide()
    }



    //点击右侧按钮会移动卡片
    $('.btn-right').on('click', function () {
        var add = -393;
        if (count > -1965) {
            count += add
            $('#rf-cards-scroller-content').animate({
                marginLeft: count + 'px',

            })
        }
        $('#rf-cards-scroller-content').scroll()
        if (count > -300) {
            $('.btn-left').fadeOut()
        }
        else {
            $('.btn-left').fadeIn()
        }
        console.log(count);
    })


    //鼠标进入的时候小点出现
    $('.btn-left').hide()
    $('.btn-right').hide()

    $('.rf-cards-scroller').mouseenter(function () {
        $(".btn-left").fadeIn()
        $(".btn-right").fadeIn()
    })
    $('.rf-cards-scroller').mouseleave(function () {
        $(".btn-left").stop().fadeOut()
        $(".btn-right").stop().fadeOut()
    })



    $('.btn-left').on('click', function () {
        //点击右侧按钮会移动卡片
        var add = 393;

        if (count < 0) {
            count += add
            $('#rf-cards-scroller-content').animate({
                marginLeft: count + 'px',
            })
        } else {
            count = 0
        }
        if (count < -390) {
            $('.btn-left').fadeIn()
        }
        else {
            $('.btn-left').fadeOut()
        }
        console.log(count);
    })
    const h1 = document.querySelector('.text')





    document.addEventListener('scroll', (e) => {
        //注册darker
        var darker = document.querySelector('.darker')

        // 设定初始值
        h1.style.setProperty('--percentage', `0%`)

        //整个页面的高度
        var scrollHright = document.documentElement.scrollHeight
        //darker的高度
        var darkerScorllHeight = document.querySelector('.darker').scrollHeight;
        //darker距离顶部的高度
        var darkerOffsetTop = document.querySelector('.darker').offsetTop;
        //darker距离底部
        //整个页面的高度-项目高度-距离顶部的高度
        var darkerbottom = scrollHright - darkerScorllHeight - darkerOffsetTop

        // console.log(document.documentElement.scrollHeight);//整个页面的高度
        // console.log(document.documentElement.clientHeight);//当前页面的高度
        // console.log(document.documentElement.scrollTop);//已滚动的

        //darker开始位置
        // console.log(window.scrollY - darkerOffsetTop + "px");
        var darkerStart = window.scrollY - darkerOffsetTop
        // darker结束的位置
        // console.log(window.scrollY - darkerbottom - darkerOffsetTop + "px");
        var darkerEnd = window.scrollY - darkerbottom - darkerOffsetTop

        // 屏幕滚动的百分比
        var scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

        // 当前项目的百分比
        var scrollproject = (document.documentElement.scrollTop - darkerOffsetTop) / (darkerScorllHeight - document.documentElement.clientHeight + darkerbottom);
        if (scrolled > 0.38) {
            h1.style.setProperty('--percentage', `${scrollproject * 100}%`)
        }
    })











})

