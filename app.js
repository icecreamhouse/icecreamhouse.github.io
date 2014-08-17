

var main = function() {



$(".jumbotron").click(function() {

alert("clicked");
var a = $('currentActive').next();
$('currentActive').removeClass('active');
$('.two').addClass('active');
});

}
$("#browse").click(function() {
	alert("browse clicked.");


});



$(document).ready(main);