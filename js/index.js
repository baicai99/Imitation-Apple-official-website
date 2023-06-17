// ipad-pro
var ipadpro = document.querySelector('.ipadpro');
if (window.innerWidth <= 750) {
    ipadpro.src = "images/promo_ipadpro_order__upw04aj7i2qe_large_2x.jpg";
}
else {
    ipadpro.src = "images/hero_ipadpro_order__fpc2supjug66_large_2x.jpg";
}
window.addEventListener('resize', function () {
    if (window.innerWidth <= 750) {
        ipadpro.src = "images/promo_ipadpro_order__upw04aj7i2qe_large_2x.jpg";
    }
    else {
        ipadpro.src = "images/hero_ipadpro_order__fpc2supjug66_large_2x.jpg";
    }
})


// iphone14-pro
var iphone14pro = document.querySelector('.iphone14pro');
if (window.innerWidth <= 750) {
    iphone14pro.src = "images/promo_iphone14pro__4n4twj56fzmu_small_2x.jpg";
}
else {
    iphone14pro.src = "images/hero_iphone14pro__e5xbgo5ffhg2_large_2x.jpg";
}
window.addEventListener('resize', function () {
    if (window.innerWidth <= 750) {
        iphone14pro.src = "images/promo_iphone14pro__4n4twj56fzmu_small_2x.jpg";
    }
    else {
        iphone14pro.src = "images/hero_iphone14pro__e5xbgo5ffhg2_large_2x.jpg";
    }
})


// airpods-pro
var airpodspro = document.querySelector('.airpodspro');
if (window.innerWidth <= 750) {
    airpodspro.src = "images/promo_airpods_pro_avail__gaxggskofx6y_small_2x.jpg";
}
else {
    airpodspro.src = "images/promo_airpods_pro_avail__gaxggskofx6y_large_2x.jpg";
}
window.addEventListener('resize', function () {
    if (window.innerWidth <= 750) {
        airpodspro.src = "images/promo_airpods_pro_avail__gaxggskofx6y_small_2x.jpg";
    }
    else {
        airpodspro.src = "images/promo_airpods_pro_avail__gaxggskofx6y_large_2x.jpg";
    }
})
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
})