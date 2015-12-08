Template.newsfeed.helpers({
	'name': function(){
		return Meteor.user().profile.firstname + " " + Meteor.user().profile.lastname;
	}
});