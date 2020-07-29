

//sticky header on scroll
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".sticky").addClass("is-sticky");
    } else {
        $(".sticky").removeClass("is-sticky");
    }
});