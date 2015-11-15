/**
 * Created by user on 11.10.2015.
 */

$(document).ready(function(){
    $(".text").on("click","a", function (event) {

        event.preventDefault();

        var id  = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1200);
    });
});
