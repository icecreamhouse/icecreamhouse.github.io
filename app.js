

var main = function() {



$(".jumbotron").click(function() {

alert("clicked");
var a = $('currentActive').next();
$('currentActive').removeClass('active');
$('.two').addClass('active');
});

}

$(document).ready(main);