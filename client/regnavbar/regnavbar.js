Template.regnavbar.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('signup');
    }
});