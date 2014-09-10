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

var disscusionID = gup( 'id' );

console.log(disscusionID)


	var Post = Parse.Object.extend("Post");
	var post = new Post();

	$("#post-submit").click(function(){
		var text = $("#post-responce").val();

		post.set("text", text);
		post.set("disscusionID", disscusionID);
		post.save();
	});

	function loadContentFromParse(){
		var query = new Parse.Query("Post")
		query.equalTo('disscusionID', disscusionID)
		query.find({
			success: function(objects) {
				for (i=0; i<objects.length; i++) {

					var postTopic = objects[i].get("Topic");
					var postItem = $("<li>")
					var postContents = $("<a>")
					
					$("li.table-view-cell:first").after(postItem);
					postItem.html(postContents);
					postItem.addClass("table-view-cell");
					postContents.addClass("navigate-right");
					postContents.html(postTopic);
				}
			},
			error: function(error) {
				console.log("Error: " + error.code + " " + error.message);
			}
		});

	}

});
