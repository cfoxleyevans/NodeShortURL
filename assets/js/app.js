/**
 * app.js
 *
 * This file contains some conventional defaults for working with Socket.io + Sails.
 * It is designed to get you up and running fast, but is by no means anything special.
 *
 * Feel free to change none, some, or ALL of this file to fit your needs!
 */
(function (io) {
    var socket = io.connect();
    window.socket = socket;
})(window.io);


$(document).ready(function() {
    $('.shorten-btn').click(function() {
        var url = $('.url-txt').val().toString();
        if(url == '') return;
        data = {url: url};
        console.log(data)
        $.post('/url/new', data, function(data, textStatus, xhr) {
        	$('.link').remove();
            // $('body').append('<a class="link col-xs-12 col-sm-12 col-md-12 col-lg-12" href="http://short.chrisfoxleyevans.com/' + data.shortCode + '"> http://short.chrisfoxleyevans.com/' + data.shortCode + '</a>');
            $('body').append('<a class="link col-xs-12 col-sm-12 col-md-12 col-lg-12" href="http://localhost:1337/' + data.shortCode + '"> http://localhost:1337//' + data.shortCode + '</a>');
            

        });
    });

    $('.url-txt').keypress(function(event) {
        if(event.which == 13) {
            $('.shorten-btn').click();
        }
    });
})