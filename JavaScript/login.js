$(document).ready(function(){
	Parse.initialize("NzjDI96DNyAS8U4DNWYgGxCS8lSg9kyks2azZ2UC","F5p230fkKINZ5KP44qR7hk7isWdD9JXa2Tk1rrjm");


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
				
		  success: function(user) {  
        },
        error: function(error) {
          console.log("Error!");
        }
			}		
        
		};
		else{
			alert("Error: Missing input feild!")
		}
		*/

//last
