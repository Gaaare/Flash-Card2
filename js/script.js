$(document).ready(function(){

	var isEditing = false;
	var clearTextArea = true;
	var drawAllNum = 0;
	
	$("#submit").click(function(){		
		//saves textArea text as variable
		var frontText = $("#frontText").val();
		var backText = $("#backText").val();

		//changes creator text to textArea texts
		$(".createF .cardText p").text(frontText);
		$(".createB .cardText p").text(backText);
	})
	
	$("#frontText").keyup(function(){
		
		var frontText = $("#frontText").val();
		$(".creatF .cardText p").text(frontText);
	})
	
	$(document).on("click",".delete",function(){
		$(this).parent().remove();		
		var test = $(this).closest(".indexWrap").attr("id");
		savedCards.splice(test, 1);
		console.log(test);
	})
	
	//creates new index card
	function IndexCard(frontText, backText){
		this.cFrontText = frontText;
		this.cBackText = backText;
	}
	savedCards = [];
	
	function drawAllCards(){
		
		$(".savedCards").empty();
		for(i = 0; i < savedCards.length ; i++)
		{
			var card = savedCards[i];
			
		//creates new card html
		$(".savedCards").append('</div><div class="indexWrap" id='+i+'>\
			<img src="img/arrow.png" class="flipButton"></img>\
			<img src="img/edit.png" class="editor"></img>\
			<img src="img/trash.png" class="delete"></img>\
			<div class="front active">\
				<div class="cardText">\
					<p>'+card.cFrontText+'</p>\
				</div>\
			</div>\
			<div class="back hidden">\
				<div class="cardText">\
					<p>'+card.cBackText+'</p>\
				</div>\
			</div>');
		}
		console.log(savedCards);
	}
	$("#drawAll").click(function(){
		drawAllCards();
		drawAllNum = 0;
		$("#drawNum").text(drawAllNum);
	})
	//creates a new card
	function saveNew(){
		//saves creator text 
		var front = $(".createF .cardText p").text();
		var back = $(".createB .cardText p").text();
		var num = savedCards.length;
		drawAllNum += 1;
		/* console.log(num); */
		savedCards[num] = new IndexCard(front,back);

		$("#drawNum").text(drawAllNum);
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
		creatorMode();
		
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
	 	console.log("flip clicked"); 	
		
		var fcActive = $(this).siblings(".active");
		var fcHidden = $(this).siblings(".hidden");
		
		$(fcActive).addClass("oldActive");
		$(fcActive).removeClass("active");
		$(fcHidden).addClass("active");
		$(fcHidden).removeClass("hidden");
		$(".oldActive").addClass("hidden");
		$(".oldActive").removeClass("oldActive");
		
	})	
	function editorMode(){
		isEditing=true;
		$("#save").html("Save Changes");
		$(".mainWrap").css("background-color","#ffb84d");
		$("#mode").text("Edit Mode")
		
	}
	function creatorMode(){
		isEditing=false;
		//changes background color to indicate editing
		$(".mainWrap").css("background-color","#8AB1D9");
		//changes save button text to indicate editing
		$("#save").html("Save New Card");
		$("#mode").text("Creator Mode");
	}
	
	$(document).on("click",".editor",function(){
		if(isEditing){			
			creatorMode();
		}else{
			editorMode();		
		}
				
		//saves this cards text
		var frontText = $(this).siblings(".front").find("p").text();
		var backText = $(this).siblings(".back").find("p").text();		
	
		//adds the editing class
		$(this).siblings(".front").addClass("editingFront");
		$(this).siblings(".back").addClass("editingBack");
		
		//sets creator text as this cards text
		$(".createF .cardText p").text(frontText);
		$(".createB .cardText p").text(backText);	
	})

	//fudge
}) 