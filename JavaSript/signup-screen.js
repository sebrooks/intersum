$(document).ready(function(){
  Parse.initialize("NzjDI96DNyAS8U4DNWYgGxCS8lSg9kyks2azZ2UC","Mvi4oDnLqRqImITOqn1pN1BwdejN6PvLoUnpVL6I");

  $("#new-user-submit").click(function()) {

        // 2. Create a new Parse.User.
        var user = new Parse.User();

        // 3. Set a username.
        user.set('username', $('#new-username').val());

        // 4. Set a password.
        user.set('password', $('#new-password').val());
        
        user.set('email', $('#new-email').val());
        // 5. Sign them up!
        user.signUp(null, {
          success: function(user) {
            alert("User signed up!");
          },
          error: function(error) {
            alert("Error: " + error.code + " " + error.message)
          }
        });
      });
    $('#existing-user-submit').click(function()) {

      Parse.User.logIn( $('#existing-username').val $('#existing-password').val  , {
        success: function(user) {
            alert("User Logged in!");
      },
      error: function(user, error) {
        // The login                                                        
        alert("Error:" + error.code + " " + error.message)
      }
    });
    $('#upload-file-button').click(function()) {


    }

});
