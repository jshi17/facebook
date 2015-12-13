Images = new FS.Collection("images", {
	stores: [new FS.Store.FileSystem("images", {path:"~/uploads"})]
});
StatusList = new Mongo.Collection('status');