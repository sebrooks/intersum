$(document).ready(function(){
	Parse.initialize("NzjDI96DNyAS8U4DNWYgGxCS8lSg9kyks2azZ2UC","F5p230fkKINZ5KP44qR7hk7isWdD9JXa2Tk1rrjm");

	function gup( name ){
		name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
		var regexS = "[\\?&]"+name+"=([^&#]*)";
		var regex = new RegExp( regexS );
		var results = regex.exec( window.location.href );
		if( results == null )
			return null;
		else
			return results[1];
	}

	var objectId = gup( 'id' );

	var query = new Parse.Query("Events")
	query.equalTo('objectId', objectId )
	query.find({
		success: function(objects) {
			for (i=0; i<objects.length; i++) {


				var eventName = objects[i].get("EventName");
				var date = objects[i].get("Date");
				var location = objects[i].get("EventLocation");
				var start = objects[i].get("StartTime");
				var end = objects[i].get("EndTime");
				var description = objects[i].get("Details");

				$("h2#discussion").append(eventName);
				$("p#date").html(date);
				$("p#start").html(location);
				$("p#end").html(start);
				$("p#location").html(end);
				$("p#details").html(description);


			}
		},
		error: function(error) {
			console.log("Error: " + error.code + " " + error.message);
		}
	});

});