

var main = function() {



$(".jumbotron").click(function() {

alert("clicked");
var a = $('currentActive').next();
$('currentActive').removeClass('active');
a.addClass('active');
});

}

$(document).ready(main);