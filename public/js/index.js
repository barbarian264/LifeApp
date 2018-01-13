$(document).ready(function(){

var socket = io();

    var quotes = ["Hoy sera tu dia","No te rindas","Eres fuerte"];
    var i = 0;

    setInterval(function() {

    	// $("#street").fadeIn();
        $("#street").fadeIn(2000);
    	$("#street").text(quotes[i]);


        $("#street").fadeOut(3000);
        $("#streetfoot").fadeOut(3000);

        if(i == quotes.length) {
        	i=0;
        }

        else {

        	i++;
        }

    }, 6000);
    

$(function () {
    var socket = io();
    $('form').submit(function(){
      socket.emit('chat message', $('#m').val());
      $('#m').val('');
      return false;
    });

    socket.on('chat message', function(msg){
      $('#messages').append($('<li>').text(msg));
    });
  });



});