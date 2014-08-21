

var main = function() {



$(".jumbotron").click(function() {

alert("clicked");


});
$("#browse").click(function(){             
    $(".one").prepend('Here is the ');
	
});

$(".icon-menu").click(function(){
	$(".icon-menu").remove();


});


}


$(document).ready(main);