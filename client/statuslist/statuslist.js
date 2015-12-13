Template.statuslist.helpers({
	'status': function(){
		return StatusList.find({}, {sort: {createdAt: -1}});
	}
});