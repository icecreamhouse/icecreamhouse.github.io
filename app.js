

var main = function() {



$(".jumbotron").click(function() {

alert("clicked");
$('#one').removeClass('active');
$('#two').addClass('active');
});

}

$(document).ready(main);