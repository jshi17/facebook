Router.configure({
	layoutTemplate: 'main'
});

Router.route('/', {
	name: 'homepage',
	template: 'homepage'
});

Router.route('/newsfeed', {
	name: 'newsfeed',
	template: 'newsfeed'
});

Router.route('/profile', {
	name: 'profile',
	template: 'profile',
	data: function() {
		return Meteor.user();
	}
});

Router.route('/search', {
	name: 'search',
	template: 'searchpage'
});

// Router.route('/profile/:id', {
// 	name: 'profile',
// 	template: 'profile',
// 	data: function() {
// 		return Meteor.users.findOne(this.params['id']);
// 	}
// });

// Router.route('/timeline', {
// 	name: 'timeline',
// 	template: 'timeline',
// 	layoutTemplate: 'profile'
// });

// Router.route('/settings', {
// 	name: 'settings',
// 	template: 'settings',
// 	layoutTemplate: 'profile'
// });