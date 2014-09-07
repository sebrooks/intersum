$(document).ready(function(){


	$("#user-greet").append(" " + localStorage.username + "!")


	var clubItem = $("<li>")
	var clubContents = $("<a>")

	$("#create-group-submit").click(function(){

		localStorage.newclubName = $("#create-group-name").val();

		clubItem.addClass("table-view-cell");
		clubContents.addClass("navigate-right");
		clubItem.html(clubContents);
		clubContents.html(localStorage.newclubName);
		$("li.table-view-cell:last").after(clubItem);

		$("div#openModal").fadeOut( "slow" );


	});

});
