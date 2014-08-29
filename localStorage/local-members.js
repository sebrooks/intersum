$(document).ready(function(){

	var memberItem = $("<li>")
	var memberContents = $("<a>")


	$("#submit-new-member").click(function(){
		
		localStorage.memberFirst = $("#new-member-first-name").val();
		localStorage.memberLast = $("#new-member-last-name").val();
		localStorage.memberEmail = $("#add-new-member-email").val();


		memberItem.addClass("table-view-cell");
		memberContents.addClass("navigate-right");
		memberItem.html(memberContents);
		memberContents.html(localStorage.memberFirst);
		$("li.table-view-cell:last").after(memberItem);


		$("div#openModal").fadeOut( "slow" );

	});

});
