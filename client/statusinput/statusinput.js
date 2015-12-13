Template.statusinput.events({
	'submit form': function(event){
		event.preventDefault();

		var text = $('[name=status]').val();

		Meteor.call('postStatus', text, function(err) {
			if (err != null) {
				// raise a notification or something
			}
		})


		$('[name="status"]').text.value = "";
	}
});

Template.statusinput.helpers({
	images: function(){
		return Images.find({
			owner: Meteor.userId(),
			post: 'temporary'
		});
	}
});