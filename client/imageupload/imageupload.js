Template.imageupload.events({
	'change .fileInput': function(event, template){
		FS.Utility.eachFile(event, function(file){
			var fileObj = new FS.File(file);
			Images.insert(fileObj, function(err){
				owner: Meteor.userId();
			});
		})
	},
});