Template.mystatuslist.helpers({
	'status': function(){
		return StatusList.find({}, {sort: {createdAt: -1}});
	},

	'ownername': function(){
	},

	'currentuser': function(){
		console.log(this.owner + " " + Meteor.userId());
		return this.owner == Meteor.userId();
	}
});

Template.mystatuslist.events({
	'click .delete': function(){
		StatusList.remove(this._id);
	}
})