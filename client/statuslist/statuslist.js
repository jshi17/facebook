Template.statuslist.helpers({
	'status': function(){
		return StatusList.find({}, {sort: {createdAt: -1}});
	},

	'ownername': function() {
		return Meteor.users.findOne({_id: this.owner}).profile.fullname;
	},

	'image': function() {
		return Images.find({
			post: this._id
		})
	},

	'friends': function() {
		return (FriendList.findOne({'to': this.owner, 'from': Meteor.userId(), 'status': 'accepted'}) != null) || this.owner == Meteor.userId();
	}	
});