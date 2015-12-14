Template.mystatuslist.helpers({
	'status': function(){
		return StatusList.find({}, {sort: {createdAt: -1}});
	},

	'ownername': function(){
		return Meteor.users.findOne({_id: this.owner}).profile.fullname;
	},

	'currentuser': function(){
		return this.owner == Meteor.userId();
	},

	'image': function() {
		return Images.find({
			post: this._id
		})
	}
});

Template.mystatuslist.events({
	'click .delete': function(){
		StatusList.remove(this._id);
	}
})