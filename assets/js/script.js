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
});