Template.newsfeed.helpers({
	'name': function(){
		return Meteor.user().firstname + " " + Meteor.user().lastname;
	}
});