// when the user clicks "add new"
// get title
// pass the title in a localStorage variable
// go to the next page

$(document).ready(function(){
	
	$("#post-new-disscusion-button").click(function(){


		localStorage.discussionTitle = $("#begin-new-disscusion").val();

		location.assign("discusions-tab.html");



	});
});