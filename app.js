

var main = function() {



$(".jumbotron").click(function() {

alert("clicked");


});
$("#browse").click(function(){             
    $(".one").prepend('Here is the ');
	$("#signup").addClass("active");
});

$(".icon-menu").click(function(){
	$(".icon-menu").remove();


});


}


$(document).ready(main);