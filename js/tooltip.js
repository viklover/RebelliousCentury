$("[data-tooltip]").mousemove(function (eventObject) {

    $data_tooltip = $(this).attr("data-tooltip");

    if (window.matchMedia('(min-width: 1024px)').matches) {
        $("#tooltip").text($data_tooltip)
            .css({
                "top" : eventObject.pageY + 5,
                "left" : eventObject.pageX + 5,
                "bottom" : "auto"
            })
            .show();
    } else if (window.matchMedia('(min-width: 320px)').matches) {
        $("#tooltip").text($data_tooltip)
            .css({
                "bottom" : eventObject.pageY * -1 + window.innerHeight + 20,
                "top" : "auto",
                "left" : "auto"
            })
            .show();
    }

}).mouseout(function () {
    $("#tooltip").hide()
        .text("")
        .css({
            "display" : "none"
        });
});