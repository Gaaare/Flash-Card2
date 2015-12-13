$(document).ready(function(){

	$("#submit").click(function(){
		var frontText = $("#frontText").val();
		var backText = $("#backText").val();
		console.log(frontText);
		console.log(backText);
		
		$(".createF .cardText p").text(frontText);
		$(".createB .cardText p").text(backText)
	})
	
	function IndexCard(frontText, backText){
		this.cFrontText = frontText;
		this.cBackText = backText;
	}

	savedCards = [];
	
	$("#save").click(function(){
		var front = $(".createF .cardText p").text();
		var back = $(".createB .cardText p").text();
		var num = savedCards.length;
		
		savedCards[num] = new IndexCard(front,back);
		$(".savedCards").append('<div class="indexWrap"><img src="img/arrow.png" class="flipButton"></img>\
		<div class="front active">\
			<div class="cardText">\
				<p>'+front+'</p>\
			</div>\
		</div>\
		<div class="back hidden">\
			<div class="cardText">\
				<p>'+back+'</p>\
			</div>\
		</div>\
	</div>');
	})
	
	$(document).on('click','.flipButton',function(){
		
		//alert(1);
		var fcActive = $(this).siblings(".active");
		var fcHidden = $(this).siblings(".hidden");
		
		$(fcActive).addClass("oldActive");
		$(fcActive).removeClass("active");
		
		$(fcHidden).addClass("active");
		$(fcHidden).removeClass("hidden");
		
		$(".oldActive").addClass("hidden");
		$(".oldActive").removeClass("oldActive");
		
	})	
	
})