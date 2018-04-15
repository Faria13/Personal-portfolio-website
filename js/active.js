(function($) {
    'use strict';

    jQuery(document).ready(function($){
        $('#circle-1').circleProgress({
            value: 0.90,
            size: 180,
            fill: {
                color: "#6195FF"
            },
            thickness:'10'
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.circle-inner').html(Math.round(90 * progress) + '<i>%</i>');
        });

        $('#circle-2').circleProgress({
            value: 0.85,
            size: 180,
            fill: {
                color: "#6195FF"
            },
            thickness:'10'
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.circle-inner').html(Math.round(85 * progress) + '<i>%</i>');
        });

        $('#circle-3').circleProgress({
            value: 0.80,
            size: 180,
            fill: {
                color: "#6195FF"
            },
            thickness:'10'
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.circle-inner').html(Math.round(80 * progress) + '<i>%</i>');
        });

        $('#circle-4').circleProgress({
            value: 0.70,
            size: 180,
            fill: {
                color: "#6195FF"
            },
            thickness:'10'
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.circle-inner').html(Math.round(70 * progress) + '<i>%</i>');
        });
    });



    jQuery(window).load(function() {

    });
}(jQuery));