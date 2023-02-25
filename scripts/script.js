$(document).ready(function() {

    (function ($) {
        var $dragMe = $(".dragme"),
            $container = $(".sl-container"),
            $viewAfter = $(".view-after");
        $dragMe.draggable({
            containment: "parent",
            drag: function () {
                $viewAfter.css({
                    width: parseFloat($(this).css('left')) + 5
                });
            }
        });
        $container.on("click", function (event) {
            var eventLeft = event.pageX - $container.offset().left - 15;
            animateTo(eventLeft);
        });
        animateTo("50%");

        function animateTo(_left) {
            $dragMe.animate({
                left: _left
            }, 'slow', 'linear');
            $viewAfter.animate({
                width: _left
            }, 'slow', 'linear');
        }
    })(jQuery);


    (function ($) {
        var $dragMe1 = $(".dragme1"),
            $container1 = $(".sl-container1"),
            $viewAfter1 = $(".view-after1");
        $dragMe1.draggable({
            containment: "parent",
            drag: function () {
                $viewAfter1.css({
                    width: parseFloat($(this).css('left')) + 5
                });
            }
        });
        $container1.on("click", function (event) {
            var eventLeft1 = event.pageX - $container1.offset().left - 15;
            animateTo(eventLeft1);
        });
        animateTo("50%");

        function animateTo(_left) {
            $dragMe1.animate({
                left: _left
            }, 'slow', 'linear');
            $viewAfter1.animate({
                width: _left
            }, 'slow', 'linear');
        }
    })(jQuery);

    (function ($) {
        var $dragMe2 = $(".dragme2"),
            $container2 = $(".sl-container2"),
            $viewAfter2 = $(".view-after2");
        $dragMe2.draggable({
            containment: "parent",
            drag: function () {
                $viewAfter2.css({
                    width: parseFloat($(this).css('left')) + 5
                });
            }
        });
        $container2.on("click", function (event) {
            var eventLeft2 = event.pageX - $container2.offset().left - 15;
            animateTo(eventLeft2);
        });
        animateTo("50%");

        function animateTo(_left) {
            $dragMe2.animate({
                left: _left
            }, 'slow', 'linear');
            $viewAfter2.animate({
                width: _left
            }, 'slow', 'linear');
        }
    })(jQuery);

    $( function() {
        $( "#accordion" ).accordion();
    } );

    $( function() {
        $( "#accordion2" ).accordion();
    } );

});



