Template.profilenavbar.helpers({
	'owned': function(){
		console.log("hi" + this.id);
		return this.id == Meteor.userId();
	}
});

Template.profilenavbar.events({
	'click #showTimeline': function() {
		Session.set('selectedPage', 'timeline');
	},
	'click #showFriends': function() {
		Session.set('selectedPage', 'friends');
	},
	'click #showSettings': function() {
		Session.set('selectedPage', 'settings');
	}
})