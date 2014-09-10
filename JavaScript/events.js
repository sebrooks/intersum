$(document).ready(function(){
	Parse.initialize("NzjDI96DNyAS8U4DNWYgGxCS8lSg9kyks2azZ2UC","F5p230fkKINZ5KP44qR7hk7isWdD9JXa2Tk1rrjm");

	loadContentFromParse();

	var Events = Parse.Object.extend("Events");
	var events = new Events();

	$("#create-event-submit").click(function(){
		var eventName = $("#event-name").val();
		var date = $("#event-date").val();
		var location = $("#event-location").val();
		var start = $("#event-start").val();
		var end = $("#event-end").val();
		var description = $("#event-details").val();

		events.set("EventName", eventName);
		events.set("Date", date);
		events.set("EventLocation", location);
		events.set("StartTime", start);
		events.set("EndTime", end);
		events.set("Details", description);
 	
	});

	function loadContentFromParse(){
		var query = new Parse.Query("Events")
		query.equalTo('groupID', 'TtQYY23CHY')
		query.find({
			success: function(objects) {
				for (i=0; i<objects.length; i++) {

					var eventTopic = objects[i].get("EventName");
					var eventItem = $("<li>")
					var eventContents = $("<a>")

					eventItem.addClass("table-view-cell");
					eventContents.addClass("navigate-right");
					eventContents.attr("href","Event-Template.html")
					eventItem.html(eventContents);
					eventContents.html(eventTopic);
					$("li.table-view-cell:first").before(eventItem);
				}
			},
			error: function(error) {
				console.log("Error: " + error.code + " " + error.message);
			}
		});

	}

});