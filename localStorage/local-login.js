$(document).ready(function(){

	$("#existing-user-login").click(function(){

	localStorage.existingUsername = $("#existing-username").val();
	localStorage.existingPassword = $("#existing-password").val();

	location.assign("clubs.html");		
	})

});