/**
 * Created by SuperUser on 03.04.2015.
 */
define(['router'],function(Router){ //[files],(variables)
    var init = function(){
        var appRouter = new Router();
    };

    Backbone.history.start({silent:true});

    return {
        initialize : init

    };
});