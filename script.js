$(document).ready(function() {
 

 	$("#stream1_btn").click(function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});, ""
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});


}); 

// $('#card-panel-1').click(function(){
//     $('#card-panel-1').hide('slow');
// });

// $('#card-panel-2').click(function(){
//     $('#card-panel-2').hide('medium');
// });

// $('#card-panel-3').click(function(){
//     $('#card-panel-3').hide('fast');
// });

// $('#card-panel-4').click(function(){
//     $('#card-panel-4').hide(3000);
// });