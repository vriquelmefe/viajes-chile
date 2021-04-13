$(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var idScroll = this.hash;

            $('html, body').animate({
                scrollTop: $(idScroll).offset().top
            }, 1200, function() {
                window.location.hash = idScroll;
            });
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#navHome').addClass("bg-dark");
        } else {
            $('#navHome').removeClass("bg-dark");
        }
    });
    /* tooltip redes sociales */
    $('[data-toggle="tooltip"]').tooltip()

    $("button").on("click", function() {
        $(this).css("background-color", "black");
    });

});