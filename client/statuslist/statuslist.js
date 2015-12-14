Template.statuslist.helpers({
	'status': function(){
		return StatusList.find({}, {sort: {createdAt: -1}});
	},
	'image': function() {
		return Images.find({
			post: this._id
		})
	}
});