/*
 * jQuery endcredits Plugin
 *
 * Copyright (c) 2014 Daniel Malkafly <malk@epichail.com>
 * Dual licensed under the MIT or GPL Version 2 licenses or later.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */
$(document).ready(function () {

    $(function(){
        
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();

        $('#titles').css({
            'width': maskWidth,
            'height': maskHeight
        });
        function runIt() {
        $('#titles').fadeIn();
        $('#titles').fadeTo();
        $('#titles').fadeIn();
        $('#credits').css("left", (($('#credits').parent().width() - $('#credits').outerWidth()) / 2) + "px");
        $('#credits').css("bottom", "-" + (maskHeight * 16) + "px");
        $('#credits').show('fast');
        $('#credits').animate({
            bottom: [maskHeight + "px", "linear"]
        }, {
            duration: 200000
        });
        $('#credits').hide("slow", runIt);
        //     { 
        //         duration: 5000000,
        // //  complete: function () {
        // //         // $('#titles').fadeOut();
        // //         // $('.window').fadeOut();
        // //         // $('#credits').css("bottom", "-" + (maskHeight * 2) + "px");
        //     }
        } 
        runIt();

    //         step: function (n, t) {
    //             var pos = $(this).position();
    //             console.log('X: ' + pos.left.toFixed(2) + ' Y: ' + pos.top.toFixed(2));
    //         }
    //     });

    // });

    // $('.window .close').click(function (e) {
    //     e.preventDefault();
    //     $('#credits').css("bottom", "-" + ($(document).height() * 2) + "px");
    //     $('#titles').hide();
    //     $('.window').hide();
    // });

    // $('#titles').click(function () {
    //     $(this).hide();
    //     $('#credits').css("bottom", "-" + ($(document).height() * 2) + "px");
    //     $('.window').hide();
    // });
   });
});