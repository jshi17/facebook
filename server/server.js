// Patrick helped me with this stuff
bounceLoggedOut = function() {
	if (Meteor.userId() == null) {
		throw new Meteor.Error('unauthorized', 'you need to be logged in for that!');
	}
}


Meteor.methods({
	'postStatus': function(text) {
		bounceLoggedOut();
		check(text, String);
		// Insert status into collection
		var statusID = StatusList.insert({
			text: text,
			owner: Meteor.userId(),
			createdAt: new Date(),
		});

		console.log('uploading ' + statusID);
		Images.update({
			owner: Meteor.userId(),
			post: 'temporary'
		}, {$set: {
			post: statusID
		}
		});
	},
	'dumpTemporaryImages': function() {
		bounceLoggedOut();
		return Images.remove({
			owner: Meteor.userId(),
			post: 'temporary'
		})
	}
})