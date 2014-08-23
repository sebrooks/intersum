$(document).ready(function(){
    Parse.initialize("NzjDI96DNyAS8U4DNWYgGxCS8lSg9kyks2azZ2UC","F5p230fkKINZ5KP44qR7hk7isWdD9JXa2Tk1rrjm");

  $("#new-user-submit").click(function() {

    var username = $("#new-username").val();
    var password = $("#new-password").val();
    var email = $("#new-email").val()

    if(username && password){

      var user = new Parse.User();

      user.set("username", username);

      user.set("password", password);

      user.set("email", email);

      user.signUp(null, {
        success: function(user) {
          console.log("User signed up!");
        },

        error: function(error) {
          console.log("Error!");
        }
      });
    }
    else{
      alert("Missing feild input.")
    }
  }); 
});