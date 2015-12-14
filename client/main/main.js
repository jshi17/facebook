Template.main.helpers({
	'homepage':function(){
		console.log('trying to redirect home')
		if (Meteor.userId() == null) {
			Router.go('homepage');
		}
	}
});

Meteor.startup(function() {
	Session.set('selectedPage', 'timeline')
})