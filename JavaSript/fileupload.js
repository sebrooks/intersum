$(document).ready(function(){
	Parse.initialize("NzjDI96DNyAS8U4DNWYgGxCS8lSg9kyks2azZ2UC","F5p230fkKINZ5KP44qR7hk7isWdD9JXa2Tk1rrjm");

	$("#upload-file-button").click(function() {

		var file = new Parse.File("myfile.zzz", fileData, "image/png"); {

			var fileUpLoadControl = $("#new-fileupload")[0];
			if(fileUpLoadControl.files.length > 0) {
				var file = fileUpLoadControl.file[0];
				var name = $("#new-file-name").val;

				var parseFile = new Parse.File(name, file);
			}

			parseFile.save().then(function()  {
				console.log("File save successful!")
			}, function(error)
			console.log("Error:" + error.code + " " + error.message);
		}
	});
});

