$(document).ready(function(){
	Parse.initialize("NzjDI96DNyAS8U4DNWYgGxCS8lSg9kyks2azZ2UC","F5p230fkKINZ5KP44qR7hk7isWdD9JXa2Tk1rrjm");

	$('div#login-page').hide();
	$('h2#splash-name').hide().delay(800).fadeIn("slow");

	$("body").mousedown(function(){

		$("img").delay(250).slideup(100);
		$("h1").fadeOut(250);
		$('div#login-page').delay(250).slideup(100);
	});

	$("#existing-user-login").click(function() {

		var username = $("#existing-username").val();
		var password = $("#existing-password").val();

		if (username && password) {

			localStorage.username = $("#existing-username").val();
			Parse.User.logIn( username, password)

			location.assign("clubs.html");	
		}

	});

});






/*
		location.assign("login.html");

  */