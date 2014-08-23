$(document).ready(function(){
	Parse.initialize("NzjDI96DNyAS8U4DNWYgGxCS8lSg9kyks2azZ2UC","F5p230fkKINZ5KP44qR7hk7isWdD9JXa2Tk1rrjm");

	$("#upload-file-button").click(function(){

		var File = Parse.Object.extend("File");

		var ​ newFile = new ​File();
		var name = $("#new-file-name").val();
		var file = $("#new-fileupload").val();

		myFile.set("fileName", name);
		​myFile.set("myFile", file);

		myFile.get("fileName");

		myFile.save().then(function()  {
			console.log("File save successful!")
		}, 
		function(error) {
			console.log("Error:" + error.code + " " + error.message);
		});
	});
});
