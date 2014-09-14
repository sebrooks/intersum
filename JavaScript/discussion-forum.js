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

	loadContentFromParse(objectId);

	console.log(objectId);

	function loadContentFromParse(objectId){
		var query = new Parse.Query("Post")
		query.equalTo('disscusionID', objectId)
		query.descending("createdAt");
		query.find({
			success: function(objects) {
				for (i=0; i<objects.length; i++) {

					var postTopic = objects[i].get("text");
					var postItem = $("<li>")
					var postText = $('<a>')
					
					console.log(postTopic);


					postItem.addClass("table-view-cell");
					postText.addClass("navigate-right");
					postText.html(postTopic);
					postItem.html(postText);
					$("li.table-view-cell:last").before(postItem);
				}
			},
			error: function(error) {
				console.log("Error: " + error.code + " " + error.message);
			}
		});

	}


	var Post = Parse.Object.extend("Post");
	var post = new Post();

	$("#post-submit").click(function(){
		var text = $("#post-responce").val();

		post.set("text", text);
		post.set("disscusionID", objectId);
		post.save();
		location.reload();
	});

});
