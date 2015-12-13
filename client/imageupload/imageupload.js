Template.imageupload.events({
	'change .fileInput': function(event, template){
		FS.Utility.eachFile(event, function(file){
			var fileObj = new FS.File(file);
			fileObj.owner = Meteor.userId();
			fileObj.post = 'temporary';
			Images.insert(fileObj, function(err){
				if (err != null) {
					// present an error to the user
				}
			});
		})
	},
});