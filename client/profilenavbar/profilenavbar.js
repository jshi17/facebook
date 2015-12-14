Template.profilenavbar.events({
	'click #showFriends': function() {
		Session.set('selectedPage', 'friends');
	},
	'click #showSettings': function() {
		Session.set('selectedPage', 'settings');
	},
	'click #showTimeline': function() {
		Session.set('selectedPage', 'timeline');
	}
})