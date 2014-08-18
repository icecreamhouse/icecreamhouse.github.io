

var main = function() {



$(".jumbotron").click(function() {

alert("clicked");


});
$("#browse").click(function(){             
    $('#contact-wrap').animate(
        { right: '0' }, 
        500); 
	$('.pull-left').animate(
		{ right: '100'},
		500);

});

$(".icon-menu").click(function(){
	$(".icon-menu").toggle();


});


}


$(document).ready(main);