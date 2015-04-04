/**
 * Created by SuperUser on 03.04.2015.
 */
define([],function(){
    var appRouter = Backbone.Router.extend({
        routes: {
            "user":                 "cb",    // #user
            "company":              "pasulyov"    // #user
        },

       pasulyov: function() {
            console.log('Hello Pasulyov!');
            //alert('Hello Pasulyov!');
           Backbone.history.navigate('user',{replace:true, trigger: false});    //clearing history...
        },

        cb: function() {
           console.log('Hello user!');
            require(['views/user'],function(UserView){
                var user = new UserView();
                user.render();
            });
           //alert('Hello User!');
           //Backbone.history.navigate('user',{replace:true});    //clearing history
        }
    });

    return appRouter;
});