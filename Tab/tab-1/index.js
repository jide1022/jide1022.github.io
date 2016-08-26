/**
 * Created by newSeason on 2016/7/18.
 */
$(document).ready(function () {
    $(".tab-title").each(function (i) {
        /** click  **/
        //$(this).bind('click', function () {
        //    $(".tab-title.active").removeClass('active');
        //    $(this).addClass('active');
        //    //
        //    $('.tab-panel .tab-one.active').removeClass('active');
        //    $($('.tab-panel .tab-one')[i]).addClass('active');
        //});
        /** hover  **/
        $(this).hover(function () {
            $(".tab-title.active").removeClass('active');
            $(this).addClass('active');
            //
            $('.tab-panel .tab-one.active').removeClass('active');
            $($('.tab-panel .tab-one')[i]).addClass('active');
        });
    });
});
