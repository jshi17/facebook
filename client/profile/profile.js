Template.profile.helpers({
	'showTimeline': function() {
		return Session.get('selectedPage') == 'timeline'
	},
	'showFriends': function() {
		return Session.get('selectedPage') == 'friends'
	},
	'showSettings': function() {
		return Session.get('selectedPage') == 'settings'
	}
})