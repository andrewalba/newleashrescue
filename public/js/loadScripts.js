(function ($) {
    var scripts = [
        '/js/breakpoints.min.js',
        '/js/browser.min.js',
        '/js/jquery.dropotron.min.js',
        '/js/jquery.scrollex.min.js',
        '/js/util.js',
        '/js/main.js'
    ];

    $(scripts).each(function (index, value) {
        $.holdReady(true);
        $.getScript(value).done(function () {
            $.holdReady(false);
        });
    });
})(jQuery)
