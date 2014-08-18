

var main = function() {



$(".jumbotron").click(function() {

alert("clicked");


});
$("#browse").click(function() {
	$(".one").animate({
		left: "-200px"
	},200);

});

$(".icon-menu").click(function(){
	$(".icon-menu").toggle();


});


}


$(document).ready(main);