$(document).ready(function(){

var eventItem = $("<li>")
var eventContents = $("<a>")
	

	$("#create-event-submit").click(function(){

	localStorage.newEventName = $("#create-event-name").val();
	localStorage.newEventLocation = $("#create-event-location").val();
	localStorage.newEventStartTime = $("#create-event-start-time").val();
	localStorage.newEventEndTime = $("#create-event-end-time").val();
	localStorage.newEventDetails = $("#create-event-details").val();

	eventItem.addClass("table-view-cell");
	eventContents.addClass("navigate-right");
	eventItem.html(eventContents);
	eventContents.html(localStorage.newEventName);
	$("li.table-view-cell:last").after(eventItem);
	
	});

});
