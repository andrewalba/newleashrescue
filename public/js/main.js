(function ($) {
    var $window = $(window),
        $body = $('body'),
        $header = $('#header'),
        $banner = $('#banner');

    // Breakpoints.
    const breakpointsLoaded = () => {
        if (typeof breakpoints === 'undefined') {
            window.setTimeout(() => {
                breakpointsLoaded();
            }, 100);
        } else {
            breakpoints({
                xlarge: ['1281px', '1680px'],
                large: ['981px', '1280px'],
                medium: ['841px', '980px'],
                small: ['737px', '840px'],
                xsmall: ['481px', '736px'],
                xxsmall: [null, '480px']
            });
        }
    }

    $window.on('load', function () {
        window.setTimeout(function () {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Dropdowns.
    const droptronLoaded = () => {
        if (typeof $('#nav > ul').dropotron === "undefined") {
            window.setTimeout(() => {
                droptronLoaded();
            }, 100);
        } else {
            $('#nav > ul').dropotron({
                alignment: 'center'
            });
            // Button.
            $(
                '<div id="navButton">' +
                '<a href="#navPanel" class="toggle"></a>' +
                '</div>'
            )
                .appendTo($body);

            // NavList
            $(
                '<div id="navPanel">' +
                '<nav>' +
                $('#nav').navList() +
                '</nav>' +
                '</div>'
            )
                .appendTo($body)
                .panel({
                    delay: 500,
                    hideOnClick: true,
                    hideOnSwipe: true,
                    resetScroll: true,
                    resetForms: true,
                    side: 'left',
                    target: $body,
                    visibleClass: 'navPanel-visible'
                });
        }
    }

    // Header.
    // If the header is using "alt" styling and #banner is present, use scrollwatch
    // to revert it back to normal styling once the user scrolls past the banner.
    // Note: This is disabled on mobile devices.
    const browserLoaded = () => {
        if (typeof browser === 'undefined') {
            window.setTimeout(() => {
                browserLoaded();
            }, 100);
        } else {
            if (!browser.mobile
                && $header.hasClass('alt')
                && $banner.length > 0) {

                $window.on('load', function () {

                    $banner.scrollex({
                        bottom: $header.outerHeight() + 5,
                        terminate: function () {
                            $header.removeClass('alt');
                        },
                        enter: function () {
                            $header.addClass('alt');
                        },
                        leave: function () {
                            $header.removeClass('alt');
                            $header.addClass('reveal');
                        }
                    });

                });
            }
        }
    }

    droptronLoaded();
    breakpointsLoaded();
    browserLoaded();
    navListLoaded();
})(jQuery);
