

var main = function() {



$(".jumbotron").click(function() {

alert("clicked");


});
$("#browse").click(function() {
	$(".icon-menu").toggle();

});

$(".icon-menu").click(function(){
	$(".icon-menu").toggle();


});


}


$(document).ready(main);