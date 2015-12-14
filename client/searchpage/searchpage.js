Template.searchpage.helpers({
	'text': function(){
		return Session.get('searchtext');
	},

	'user': function(){
		var text = new RegExp(Session.get('searchtext'), 'i');
		return Meteor.users.find({'profile.fullname': text});
	},

	'fullname':function(){
		return this.profile.fullname;
	},

	'me': function(){
		return this._id == Meteor.userId();
	},

	// check if users have sent friend requests to each other
	'notfriend': function(){
		if (FriendList.findOne({'to': this._id, 'from': Meteor.userId()}) == null && FriendList.findOne({'to': Meteor.userId(), 'from': this._id}) == null){
			return true;
		}
		else {
			return false;
		}
	},

	// check if other user sent a friend request and no response
	'requestunresponded': function(){
		console.log(this._id);
		if (FriendList.findOne({'to': Meteor.userId(), 'from': this._id}).status == "pending") {
			return true;
		}
		else {
			return false;
		}
	},

	// check if users are friends
	'requestaccepted': function(){
		if (FriendList.findOne({'to': this._id, 'from': Meteor.userId()}).status == "accepted"){
			return true;
		}
		else {
			return false;
		}
	}
});

Template.searchpage.events({
	'click #add': function(){
		FriendList.insert({
			to: this._id,
			from: Meteor.userId(),
			status: 'pending'
		});
	},

	'click #respond': function(){
		Session.set('selectedPage', 'friends');
		Router.go('profile');
	}
});