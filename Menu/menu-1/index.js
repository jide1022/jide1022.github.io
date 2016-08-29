/**
 * Created by newSeason on 2016/8/29.
 */
$(document).ready(function () {
    $(".item").bind('mouseover', function () {
        $(this).children("ul").css("display", "block");
    });
    $(".item").bind('mouseout', function () {
        $(this).children("ul").css("display", "none");
    });
});

