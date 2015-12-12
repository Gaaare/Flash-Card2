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
		
		$(".createF .cardText p").text(frontText);
		$(".createB .cardText p").text(backText);
	})
	$(".flipButton").click(function(){
	
		$(".active").addClass("oldActive");
		$(".active").removeClass("active");
		
		$(".hidden").addClass("active");
		$(".hidden").removeClass("hidden");
		
		$(".oldActive").addClass("hidden");
		$(".oldActive").removeClass("oldActive");
	})
	
	
	function IndexCard(frontText, backText){
		this.cFrontText = frontText;
		this.cBackText = backText;
	}
	/* 
	card1 = new IndexCard(1,"test","test 2"); */
/* 	card = "hello";
	 */
	 
	savedCards = [];
	
	$("#save").click(function(){
		var front = $(".createF .cardText p").text();
		var back = $(".createB .cardText p").text();
		var num = savedCards.length;
		
		savedCards[num] = new IndexCard(front,back);
		$(".savedCards").append('<div class="indexWrap"><div class="front active">\
			<img src="img/arrow.png" class="flipButton"></img>\
			<div class="cardText">\
				<p>'+front+'</p>\
			</div>\
		</div>\
		<div class="back hidden">\
			<img src="img/arrow.png" class="flipButton"></img>\
			<div class="cardText">\
				<p>'+back+'</p>\
			</div>\
		</div>\
	</div>\
	</div>');
	})
	
	
	
	$(".flipper")
	$(".front")
	$(".back")
	 
	
	
})