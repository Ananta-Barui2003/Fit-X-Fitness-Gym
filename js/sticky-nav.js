$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 400) {
        $(".header").addClass("sticky");
    } else {
        $(".header").removeClass("sticky");
    }
});