$(document).ready(function(){
  Parse.initialize("NzjDI96DNyAS8U4DNWYgGxCS8lSg9kyks2azZ2UC","F5p230fkKINZ5KP44qR7hk7isWdD9JXa2Tk1rrjm");

	$("#begin-new-post-button").click(function() {

		var postText =  $("#begin-new-post-text").val();

if (postText) {
		var Post = Parse.Object.extend("Post");
		var myPost = new Post();

		myPost.set("text", postText);

		myPost.save()
	};

	});
});

