/**
 * Created by SuperUser on 03.04.2015.
 */
require.config({
    paths: {
        jQuery: './libs/jquery-1.11.2',
        Underscore: './libs/underscore',
        Backbone: './libs/backbone',
        //less: './libs/less.min',
        templates: '../templates',
        views: './views',
        text: './libs/text'
    },
    shim: {
        'Backbone': ['Underscore', 'jQuery'],   //dependences for backbone
        'app': ['Backbone']                     //dependences for app
    }
});

require(['app'], function (app) {   // loading app.js
    console.log('app loaded');
    app.initialize();
});