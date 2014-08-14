

var main = function() {



$(".jumbotron").click(function() {

alert("clicked");
$('currentActive').removeClass('active');
$('#two').addClass('active');
});

}

$(document).ready(main);