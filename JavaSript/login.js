$(document).ready(function(){
	Parse.initialize("NzjDI96DNyAS8U4DNWYgGxCS8lSg9kyks2azZ2UC","F5p230fkKINZ5KP44qR7hk7isWdD9JXa2Tk1rrjm");


	$("#existing-user-submit").click(function() {

			var username = $("#existing-username").val();
			var password = $("#existing-password").val();

		if (username && password) {

			Parse.User.logIn("username", "password" {
				success: function(user){ console.log("Logged in!"); };
				error: function(user, error){ console.log("Error:" + error.code + " " + error.message); };
			});
		};
		else{
			alert("Error: Missing input feild!")
		}

	});

//last
});
