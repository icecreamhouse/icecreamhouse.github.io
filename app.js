

var main = function() {



$(".jumbotron").click(function() {

alert("clicked");


});
$("#browse").click(function() {
	alert("browse clicked.");
	$("#browse").toggle();

});

$(".icon-menu").click(function(){
	alert("menu clicked");


});


}


$(document).ready(main);