/**
 * Created by SuperUser on 03.04.2015.
 */
define(['text!templates/user.html'], function(UserTemplate){
   /*
   var user = Backbone.View.extend({
         el: '#wraper',
       render:function(){
           this.$el.append(_.template(UserTemplate,{first:'Ivan',last:'Pupkin'}));
       }
   });
   */

    var user = Backbone.View.extend({
        el: '#wraper',
        template: _.template(UserTemplate),
        render:function(){
            this.$el.append(this.template({first:'Ivan',last:'Pupkin'}));
        }
    });
    return user;
});