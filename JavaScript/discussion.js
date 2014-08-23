$(document).ready(function(){
	Parse.initialize("NzjDI96DNyAS8U4DNWYgGxCS8lSg9kyks2azZ2UC","F5p230fkKINZ5KP44qR7hk7isWdD9JXa2Tk1rrjm");

	$("#post-new-disscusion-button").click(function() {

		var Topic =  $("#begin-new-disscusion").val();
		var Discussions = Parse.Object.extend("Discussions");

		if (Topic) {
			var myDiscussions = new Discussions();

			myDiscussions.set("Topic", Topic);
			myDiscussions.save();
		};
	});


});


