// done with help of http://meteorpad.com/pad/PDdgSnR4PZz9X3hWG/Search
Template.searchbar.helpers({
	'user': function(){
    	// var regexp = new RegExp(Session.get('search/keyword'), 'i');
    	return Meteor.users.find({});
	},

	'fullname': function(){
		return this.user.profile.fullname;
	}
});

Template.searchbar.events({
	'keyup #search': function(event) {
    	Session.set('search/keyword', $('[name=search]').val().value);
  	}
});