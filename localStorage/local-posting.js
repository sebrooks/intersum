$(document).ready(function(){
	

	var postItem = $("<li>")
	var postContents = $("<a>")

	$("#post-submit").click(function(){

		localStorage.postText = $("#post-responce").val();

		postItem.addClass("table-view-cell");
		postContents.addClass("navigate-right");
		postItem.html(postContents);
		postContents.html(localStorage.postText);
		$("li.table-view-cell:last").after(postItem);

		$("div#openModal").fadeOut("slow");

	});


});
