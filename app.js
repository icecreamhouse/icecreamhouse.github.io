

var main = function() {



$(".jumbotron").click(function() {

alert("clicked");
$(."one").remove();

});
$("#browse").click(function() {
	alert("browse clicked.");
	$("#browse").toggle();

});
}


$(document).ready(main);