$(document).ready(function(){
	Parse.initialize("NzjDI96DNyAS8U4DNWYgGxCS8lSg9kyks2azZ2UC","F5p230fkKINZ5KP44qR7hk7isWdD9JXa2Tk1rrjm");

	var query = new Parse.Query("Discussions")
	query.equalTo('groupID', 'TtQYY23CHY')
	query.find({
		success: function(objects) {
			for (i=0; i<objects.length; i++) { 

				var discussionTopic = objects[i].get("Topic");
				var discussionItem = $("<li>")
				var discussionContents = $("<a>")

				discussionItem.addClass("table-view-cell");
				discussionContents.addClass("navigate-right");
				discussionItem.html(discussionContents);
				discussionContents.html(discussionTopic);
				$("li.table-view-cell:first").before(discussionItem);
				$("div#openModal").fadeOut("slow");
			}
		},
		error: function(error) {
			console.log("Error: " + error.code + " " + error.message);
		}
	});

	var Discussions = Parse.Object.extend("Discussions");
	var discussions = new Discussions();
	$("#new-disscusion-button").click(function(){
		var subject = $("#new-disscusion-topic").val();
		var text = $("#new-disscusion-text").val();
		discussions.set("Topic", subject);
		discussions.set("Description", text);
		discussions.set("groupID", "TtQYY23CHY");
		discussions.save();
	});
});
