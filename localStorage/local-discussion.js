// when the user clicks "add new"
// get title
// pass the title in a localStorage variable
// go to the next page

$(document).ready(function(){
	
	var discussionItem = $("<li>")
	var discussionContents = $("<a>")

	$("#post-new-disscusion-button").click(function(){

		localStorage.discussionTitle = $("#begin-new-disscusion-topic").val();
		localStorage.discussionTopic = $("#begin-new-disscusion-text").val();

		discussionItem.addClass("table-view-cell");
		discussionContents.addClass("navigate-right");
		discussionItem.html(discussionContents);
		discussionContents.html(localStorage.discussionTitle);
		$("ul.table-view:first").before(discussionItem);

		$("div#openModal").fadeOut("slow");

	});
});
