

var main = function() {



$(".jumbotron").click(function() {

alert("clicked");


});
$("#browse").click(function(){             
    $(".one").prepend('Here is the ');
	
});
$("#home").click(function(){             
    $(".image1").hide();
	
});
$(".icon-menu").click(function(){
	$("#signup").addClass("active");


});


}


$(document).ready(main);