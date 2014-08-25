

var main = function() {



$("#button1").click(function() {

alert("clicked");


});
$("#browse").click(function(){             
    $(".one").prepend('Here is the ');
	
});
$("#home").click(function(){             
    $(".image1").toggle();
	
});
$(".icon-menu").click(function(){
	$("#signup").addClass("active");


});


}


$(document).ready(main);