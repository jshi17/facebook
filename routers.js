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

Router.route('/profile/:id', {
	name: 'profile',
	template: 'profile',
	layoutTemplate: 'main',
	data: function() {
		return Meteor.users.findOne(this.param['id']);
	}
});

Router.route('/profile/timeline', {
	name: 'timeline',
	template: 'timeline',
	layoutTemplate: 'profile'
});

Router.route('/profile/settings', {
	name: 'settings',
	template: 'settings',
	layoutTemplate: 'profile'
});

Router.route('/user/:uid', {
	name: 'user',
	data: function() {
		return Meteor.users.findOne(this.param['uid']);
	}
})

// Patrick helped me with this 
// Router.route('/profile/_id', {
// 	template: 'profile',
// 	data: function(){
// 		return Meteor.users.findONe({'username': this.param['user']});
// 	}
// })