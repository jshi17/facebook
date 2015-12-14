Template.friends.helpers({
	'norequests': function(){
		return FriendList.find({'to': Meteor.userId()}) == null;
	},

	'request': function(){
		return FriendList.find({'to': Meteor.userId()});
	},

	'from': function(){
		return Meteor.users.findOne({_id: this.from}).profile.fullname;
	},

	'friends': function(){
		return this.status == "accepted";
	}
});

Template.friends.events({
	'click #accept': function(){
		FriendList.update(this._id, {
			$set: {status: 'accepted'}
		});

		console.log("HI" + this._id);

		FriendList.insert({
			to: this.from,
			from: Meteor.userId(),
			status: 'accepted'
		});
	},

	'click #deny': function(){
		FriendList.remove(this._id);
	}
})