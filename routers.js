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

Router.route('/profile', function(){
	name: 'profile',
	this.layout('profile');
	layoutTemplate: 'main'

	// waitOn:function(){
	// 	return Meteor.subscribe("userProfile", this.params._id);
	// },
	// data:function(){
	// 	var user = Meteor.users.findOne(this.params._id);
	// 	return {
	// 		user: user
	// 	};
	// }
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
})