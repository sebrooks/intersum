$(document).ready(function(){
	Parse.initialize("NzjDI96DNyAS8U4DNWYgGxCS8lSg9kyks2azZ2UC","F5p230fkKINZ5KP44qR7hk7isWdD9JXa2Tk1rrjm");



	var Discussions = Parse.Object.extend("Discussions");
	var Post = Parse.Object.extend("Post");
	var text =  $("#begin-new-post-text").val();

	$("#begin-new-post-button").click(function() {

		if (text) {
			var myPost = new Post();

			myPost.set("text", text);
			myPost.save();
		};
	});


	var innerQuery = new Parse.Query(Discussions);
	var query = new Parse.Query(Post);

	innerQuery.equalTo("objectid","9gxhUv40wg");
	query.matchesQuery("discussionID", innerQuery);

	query.find({
		success: function(Discussions) {
			alert("IT WORKS")
		},
		error: function(error) {
			alert("Error: " + error.code + " " + error.message)
		}
	});

});
