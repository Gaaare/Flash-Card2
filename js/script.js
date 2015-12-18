$(document).ready(function(){

	var isEditing = false;
	
	$("#submit").click(function(){		
		//saves textArea text as variable
		var frontText = $("#frontText").val();
		var backText = $("#backText").val();

		//changes creator text to textArea texts
		$(".createF .cardText p").text(frontText);
		$(".createB .cardText p").text(backText)
	})
	
	//creates new index card
	function IndexCard(frontText, backText){
		this.cFrontText = frontText;
		this.cBackText = backText;
	}
	savedCards = [];
	
	//creates a new card
	function saveNew(){
		//saves creator text 
		var front = $(".createF .cardText p").text();
		var back = $(".createB .cardText p").text();
		var num = savedCards.length;
		console.log(num);
		savedCards[num] = new IndexCard(front,back);
		
		//creates new card html
		$(".savedCards").append('<div id='+num+'></div><div class="indexWrap">\
			<img src="img/arrow.png" class="flipButton"></img>\
			<img src="img/edit.png" class="editor"></img>\
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
		
		//makes sure editing is false
		isEditing=false;
	}
	function saveEdit(){
		//changes creator text to edited card text
		var front = $(".createF .cardText p").text();
		var back = $(".createB .cardText p").text();
		//changes exited text to creator text
		$(".editingFront p").text(front);
		$(".editingBack p").text(back);
		//removes editing class
		$(".editingFront").removeClass("editingFront");
		$(".editingBack").removeClass("editingClass");
		
	}
	
	$("#save").click(function(){
				
		if(isEditing){
			//saves edited card to true
			saveEdit();
			isEditing=false;
			$("#save").html("Save New Card");
			$(".mainWrap").css("background-color","#8AB1D9");
		}else{
			//saves new card if editing is false
			saveNew();
		}
	})
	
	$(document).on('click','.flipButton',function(){		
	/* 	console.log("flip clicked"); */	
		
		var fcActive = $(this).siblings(".active");
		var fcHidden = $(this).siblings(".hidden");
		
		$(fcActive).addClass("oldActive");
		$(fcActive).removeClass("active");
		$(fcHidden).addClass("active");
		$(fcHidden).removeClass("hidden");
		$(".oldActive").addClass("hidden");
		$(".oldActive").removeClass("oldActive");
		
	})	
	
	$(document).on("click",".editor",function(){
		
		//saves this cards text
		var frontText = $(this).siblings(".front").find("p").text();
		var backText = $(this).siblings(".back").find("p").text();
		
		//removes current editing class if editing is already active;
		
		//adds the editing class
		$(this).siblings(".front").addClass("editingFront");
		$(this).siblings(".back").addClass("editingBack");
		
		//sets creator text as this cards text
		$(".createF .cardText p").text(frontText);
		$(".createB .cardText p").text(backText);	
	
		
		isEditing=true;
		
		//changes background color to indicate editing
		$(".mainWrap").css("background-color","#ffb84d");
		//changes save button text to indicate editing
		$("#save").html("Save Edit");
/* 		console.log("front ="+frontText);
		console.log("back = "+backText); */
	})

	//fudge
}) 