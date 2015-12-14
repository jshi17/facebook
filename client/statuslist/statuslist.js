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
	}
});