Router.configure({
	layoutTemplate: 'main'
});

Router.route('/', {
	name: 'signup',
	template: 'signup'
});

Router.route('/newsfeed', {
	name: 'newsfeed',
	template: 'newsfeed'
});

Router.route('/profile', {
	name: 'profile',
	template: 'profile'
});