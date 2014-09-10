$(document).ready(function(){
	Parse.initialize("NzjDI96DNyAS8U4DNWYgGxCS8lSg9kyks2azZ2UC","F5p230fkKINZ5KP44qR7hk7isWdD9JXa2Tk1rrjm");

/*
	var postQuery = new Parse.Query("Post")
	postQuery.equalTo('', INSERT VARIABLE)
	postQuery.find({
		success: function(objects) {
			for (i=0; i<objects.length; i++) { 

				var postTopic = objects[i].get("text");
				var postItem = $("<li>")
				var postnContents = $("<a>")

				postItem.addClass("table-view-cell");
				postContents.addClass("navigate-right");
				postItem.html(postContents);
				postContents.html(postTopic);
				$("li.table-view-cell:last").after(postItem);
			}
		},
		error: function(error) {
			console.log("Error: " + error.code + " " + error.message);
		}
	});
*/
	$("#post-submit").click(function(){

	var Post = Parse.Object.extend("Post");
	var post = new Post();
	var postText = $("#post-responce").val();


		post.set("text", postText);
//		post.set("disscusionID", INSERT VARIABLE )
//		post.set("user", INSERT VARIABLE)
		post.save();

	});


});

/*

var discussionItem = $("<li>")
var discussionContents = $("<a>")

discussionItem.addClass("table-view-cell");
discussionContents.addClass("navigate-right");
discussionItem.html(discussionContents);
discussionContents.html(localStorage.discussionTitle);
$("li.table-view-cell:first").before(discussionItem);

*/