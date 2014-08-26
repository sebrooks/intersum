$(document).ready(function(){
/*
	var existingUsername = $("#existing-username").val();
	var existingPassword = $("#existing-password").val();

if(existingUsername&&existingPassword){
*/
	$("#existing-user-login").click(function(){

	localStorage.existingUsername = $("#existing-username").val();
	localStorage.existingPassword = $("#existing-password").val();

	location.assign("clubs.html");		
	})
/*
}
else{
	alert("Missing input feild!")
}
*/
});