Template.signup.events({
	'submit form': function(event){
		event.preventDefault();
		var firstname = $('[name=firstname]').val();
		var lastname = $('[name=lastname]').val();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        
        Accounts.createUser({
        	firstname: firstname,
        	lastname: lastname,
            email: email,
            password: password
        }, function(error){
            if(error){
                console.log(error.reason); // Output error if registration fails
            } else {
                Router.go('newsfeed'); // Redirect user if registration succeeds
            }
        });
	}
});