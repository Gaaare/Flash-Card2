$(document).ready(function(){
	
	$("#btn_small").click(function(){
		$(".flip-container,.front,.back,.front img,.back img")
		.width(200).height(150);
	})
	
	$("#btn_med").click(function(){
		$(".flip-container,.front,.back,.front img,.back img")
		.width(400).height(300);
	})
	
	$("#btn_large").click(function(){
		$(".flip-container,.front,.back,.front img,.back img")
		.width(600).height(450);
	})
	
	/* $(".front").click(function(){
		
		var newText= $("textarea").val();
		console.log(newText);
		$(".cardText p").text(newText);
	}) */
	$("#submit").click(function(){
		var frontText = $("#frontText").val();
		var backText = $("#backText").val();
		console.log(frontText);
		console.log(backText);
		
		$(".front .cardText p").text(frontText);
		$(".back .cardText p").text(backText);
	})
	$(".flipButton").click(function(){
	
		$(".active").addClass("oldActive");
		$(".active").removeClass("active");
		
		$(".hidden").addClass("active");
		$(".hidden").removeClass("hidden");
		
		$(".oldActive").addClass("hidden");
		$(".oldActive").removeClass("oldActive");
	})
})