Template.statuslist.helpers({
	'status': function(){
		return StatusList.find({}, {sort: {createdAt: -1}});
	},
	// Patrick helped me with this stuff
	'image': function() {
		return Images.find({
			post: this._id
		})
	}
});