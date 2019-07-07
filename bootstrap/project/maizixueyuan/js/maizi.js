$(function () {
    new WOW().init();
    $('.navbar-collapse a').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    $('.navbar').singlePageNav({
        offset:70
    });
});
