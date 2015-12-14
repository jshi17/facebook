Template.statuslist.helpers({
	'status': function(){
		console.log(this)
		if (this.id == Meteor.userId()) {
			return StatusList.find({}, {sort: {createdAt: -1}});
		} else {
			return StatusList.find({owner: this.id}, {sort: {createdAt: -1}});
		}
	},
	'ownername': function() {
		return Meteor.users.findOne({_id: this.owner}).profile.fullname;
	},
	'image': function() {
		return Images.find({
			post: this._id
		})
	},
	'owned': function(){
		return this.owner == Meteor.userId();
	},
});