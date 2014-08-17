

var main = function() {



$(".jumbotron").click(function() {

alert("clicked");
$(."one").toggle();

});
$("#browse").click(function() {
	alert("browse clicked.");
	$("#browse").toggle();

});
}


$(document).ready(main);