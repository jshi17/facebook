Template.signup.events({
	'submit form': function(event){
		event.preventDefault();
		var firstname = $('[name=firstname]').val();
		var lastname = $('[name=lastname]').val();
        var fullname = firstname + " " + lastname;
        var email = $('#signupEmail').val();
        var password = $('#signupPassword').val();
        
        Accounts.createUser({
            email: email,
            password: password,
            profile: {
                firstname: firstname,
                lastname: lastname,
                fullname: fullname
            }
        }, function(error){
            if(error){
                console.log(error.reason); // Output error if registration fails
            } else {
                Router.go('profile'); // Redirect user if registration succeeds
            }
        });
	}
});