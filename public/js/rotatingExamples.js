(function() {

    $.fn.shake = function (settings) {
        var pos;

        settings = settings || {};

        $.extend(settings,{
            'shakes': 2,
            'distance': 60,
            'duration': 300
        });

        return this.each(function () {
            var $this = $(this);

            pos = $this.css('position');

            if (!pos || pos === 'static') {
                $this.css('position', 'relative');
            }

            for (var x = 1; x <= settings.shakes; x++) {
                $this
                    .animate({ left: settings.distance * -1 }, (settings.duration / settings.shakes) / 4)
                    .animate({ left: settings.distance }, (settings.duration / settings.shakes) / 2)
                    .animate({ left: 0 }, (settings.duration / settings.shakes) / 4);
            }
        });
    };

    var placeholders = [
        'https://m.youtube.com/johndoe',
        'https://www.facebook.com/cnn',
        'https://www.youtube.com/channel/UC6dda98V1YhCldt73rXCB_A',
        'https://www.vine.co/thomassanders',
        'https://www.youtube.com/pewdiepie',
        'https://www.twitter.com/taylorswift',
        'https://www.instagram.com/barackobama',
    ];

    var $input = $("input[type='text']"),
        index  = 0;

    setInterval(function() {
        $input.attr("placeholder", placeholders[index]);
        index = index === 2 ? 0 : index + 1;
    }, 2000);


    });

}());



 // if (textInput.indexOf("youtube.com") > -1)
