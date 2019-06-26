$(function(){
	swal("Nice To Meet You!", "Click on About Me or Scrolldown!", "5.gif");
	$('.btn').click(function(e){
		e.preventDefault();
		
		window.location.href = "#about";
	});
	
});