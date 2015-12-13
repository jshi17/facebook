Template.regnavbar.helpers({
	// Patrick helped me with this
	'name': function(){
		try {
			return Meteor.user().profile.firstname;
		} catch (err) {
			// ignore safely, page hasn't started
		}
	}
});

Template.regnavbar.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('signup');
    }
});