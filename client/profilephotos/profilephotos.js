Template.profilephotos.helpers({
	'name': function(){
		console.log(this);
		try {
			return Meteor.users.findOne(this.id).profile.fullname;
		} catch (err) {
			// ignore
		}
	}
});