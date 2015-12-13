Template.statusinput.events({
	'submit form': function(event){
		event.preventDefault();

		var text = $('[name=status]').val();

		// Insert status into collection
		StatusList.insert({
			text: text,
			owner: Meteor.userId(),
			createdAt: new Date(),
		});

		$('[name=status]').text.value = "";
	}
});

Template.statusinput.helpers({
	images: function(){
		return Images.find();
	},

	isOwner: function(){
		return Meteor.userId() == Meteor.userId();
	}
});