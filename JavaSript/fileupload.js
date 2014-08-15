$(document).ready(function(){
	Parse.initialize("NzjDI96DNyAS8U4DNWYgGxCS8lSg9kyks2azZ2UC","F5p230fkKINZ5KP44qR7hk7isWdD9JXa2Tk1rrjm");

	$("#upload-file-button").click(function() {
		var base64 = "V29ya2luZyBhdCBQYXJzZSBpcyBncmVhdCE=";

		var upload = $("#new-fileupload").val();
		var file= new Parse.File(upload".txt", { base64: base64 });
		var file = new Parse.File(upload".zzz","image/png");
		

		var fileUploadControl = $("#upload-file-button")[0];
		if (fileUploadControl.files.length > 0) {
			var file = fileUploadControl.files[0];
			var name = "photo.jpg";

			var parseFile = new Parse.File(name, file);
		}
		parseFile.save().then(function()  {
			console.log("File save successful!")
		}, 
		function(error) {
		console.log("Error:" + error.code + " " + error.message);
	   }


   });
}); 



