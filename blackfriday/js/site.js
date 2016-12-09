$(function () {
    // var c = $('.config');
    // $('.toggle-state', c).on('click', function () {
    //     if (c.hasClass('on')) {
    //         c.removeClass('on');
    //     } else {
    //         c.addClass('on');
    //     }
    // });

    var Main = {
        getCountdown: function (type) {
            var configs = null;

            switch (type) {
                case 'day':
                    configs = function (event) {
                        var format = '<div class="item"><strong>%H</strong><span>Hours</span></div>';
                        format += '<div class="item"><strong>%M</strong><span>Minutes</span></div>';
                        format += '<div class="item"><strong>%S</strong><span>Seconds</span></div>';
                        if (event.offset.totalDays > 0) {
                            format = '<div class="item"><strong>%D</strong><span>Days</span></div>' + format;
                        }
                        $(this).html(event.strftime(format));
                    };
                    break;

                case 'month':
                    configs = function (event) {
                        var format = '<div class="item"><strong>%m</strong><span>Months</span></div>';
                        format += '<div class="item"><strong>%D</strong><span>Days</span></div>';
                        format += '<div class="item"><strong>%H</strong><span>Hours</span></div>';
                        $(this).html(event.strftime(format));
                    };
                    break;
            }

            $('.countdown').countdown('2016/12/25 00:00:00')
                .on('update.countdown', configs);
        }
    };

    // $('.form-control', c).each(function () {
    //     var obj = $(this),
    //         name = obj.attr('name');

    //     obj.on('change', function () {
    //         if (name == 'bg_color') {
    //             var b = $('body');
    //             b.removeClass().addClass(obj.val());
    //         } else if (name == 'time_format') {
    //             Main.getCountdown(obj.val());
    //         }
    //     });
    // });

    Main.getCountdown('day');
});