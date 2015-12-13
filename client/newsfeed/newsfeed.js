Template.newsfeed.helpers({
	'name': function(){
		return Meteor.user().profile.fullname;
	}
});