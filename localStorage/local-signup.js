$(document).ready(function(){

	$("#create-user-login").click(function(){

	localStorage.createUsername = $("#create-username").val();
	localStorage.createPassword = $("#create-password").val();
	localStorage.createEmail = $("#create-email").val
	location.assign("clubs.html");		
	})

});