$(function(){
	swal("I'm Sorry", "Ab aisa nhi hoga aur!", "5.gif");
	$('.btn').click(function(e){
		e.preventDefault();
		
		window.location.href = "#about";
	});
	
});
