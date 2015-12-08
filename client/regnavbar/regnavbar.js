Template.regnavbar.helpers({
	'name': function(){
		return Meteor.user().profile.firstname;
	}
});

Template.regnavbar.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('signup');
    }
});