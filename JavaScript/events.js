$(document).ready(function(){
	Parse.initialize("NzjDI96DNyAS8U4DNWYgGxCS8lSg9kyks2azZ2UC","F5p230fkKINZ5KP44qR7hk7isWdD9JXa2Tk1rrjm");
	loadContentFromParse();

	var Events = Parse.Object.extend("Events");
	var events = new Events();
	$("#new-disscusion-button").click(function(){
		var name = $("#event-name").val();
		var date = $("#event-date").val();
		var location = $("#event-location").val();
		var start = $("#event-start").val();
		var end = $("#event-end").val();
		var description = $("#event-details").val();

		events.set("EventName", name);
		events.set("Date", date);
		events.set("EventLocation", location);
		events.set("StartTime", start);
		events.set("EndTime", end);
		events.set("Details", description);

		events.set("groupID", "TtQYY23CHY");
		events.save();
		location.reload();
		$("div#openModal").fadeOut("slow");
	});

	function loadContentFromParse(){
		var query = new Parse.Query("Events")
		query.equalTo('groupID', 'TtQYY23CHY')
		query.find({
			success: function(objects) {
				for (i=0; i<objects.length; i++) {

					var eventsTopic = objects[i].get("EventName");
					var eventsID = objects[i].id
					var eventsItem = $("<li>")
					var eventsContents = $("<a>")					

					eventsItem.addClass("table-view-cell");
					eventsContents.addClass("navigate-right");
					eventsItem.attr("id", eventsID );
					eventsContents.attr("href","disscussion-template.html?id=" + eventsID );
					eventsItem.html(eventsContents);
					eventsContents.html(eventsTopic);
					$("li.table-view-cell:first").after(eventsItem);
				}
			},
			error: function(error) {
				console.log("Error: " + error.code + " " + error.message);
			}
		});

	}


});
