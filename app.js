

var main = function() {



$(".jumbotron").click(function() {

alert("clicked");


});
$("#browse").click(function(){             
    $(".one").prepend('Here is the ');
	$("#signup").toggleClass("active");
});

$(".icon-menu").click(function(){
	$(".icon-menu").remove();


});


}


$(document).ready(main);