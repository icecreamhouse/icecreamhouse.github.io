

var main = function() {



$(".jumbotron").click(function() {

alert("clicked");


});
$("#browse").click(function(){             
    $(."one").text(' is here.');
	
});

$(".icon-menu").click(function(){
	$(".icon-menu").toggle();


});


}


$(document).ready(main);