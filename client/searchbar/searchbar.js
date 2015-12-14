Template.searchbar.helpers({

});

Template.searchbar.events({
	'click button':function(){
		var text = $('#search').val();
		Session.set('searchtext', text);
		$('#status').text.value = "";
		Router.go('search');
	}
});