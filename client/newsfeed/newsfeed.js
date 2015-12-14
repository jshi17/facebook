Template.newsfeed.helpers({
	'name': function(){
		try {
			return Meteor.user().profile.fullname;
		} catch (err) {
			// ignore
		}
	}
});