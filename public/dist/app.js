minispade.register('Application.js', function() {
window.App = Ember.Application.create();
minispade.require('Models.js');
minispade.require('Fixtures.js');
minispade.require('Router.js');
minispade.require('Store.js');
minispade.require('utils/Handlebars.js');

});

minispade.register('Fixtures.js', function() {

minispade.require('fixtures/Video.js');

});

minispade.register('Models.js', function() {

minispade.require('models/Video.js');

});

minispade.register('Router.js', function() {

minispade.require('routes/Application.js');
minispade.require('routes/Index.js');
minispade.require('routes/Videos.js');

App.Router.map(function() {
  this.resource("videos", function() {
    return this.route("detail", {
      path: "/:video_id"
    });
  });
  return this.resource("video", {
    path: "/video/:video_id"
  }, function() {
    this.route("edit", {
      path: "/edit"
    });
    return this.route("preview", {
      path: "/preview"
    });
  });
});

});

minispade.register('Store.js', function() {
App.Store = DS.Store.extend({
  adapter: DS.FixtureAdapter
});

});

minispade.register('fixtures/Video.js', function() {
var video1, video2, video3;

video1 = {
  id: 0,
  body: "#Hey you guys\n###let's talk about why this isn't workin\nSometimes it just seems like the devil is going to take all the cheese na mean?  Ya dawg, dat cheeze.",
  title: "Whatever you want bro"
};

video2 = {
  id: 1,
  body: "###Heyoooo",
  title: "Freedom from tyranny"
};

video3 = {
  id: 2,
  body: "#Yo dog",
  title: "Do it up"
};

App.Video.FIXTURES = [video1, video2, video3];

});

minispade.register('models/Video.js', function() {
var attr;

attr = DS.attr;

App.Video = DS.Model.extend({
  title: attr(),
  subtitle: attr(),
  summary: attr(),
  body: attr()
});

});

minispade.register('routes/Application.js', function() {
App.ApplicationRoute = Ember.Route.extend();

});

minispade.register('routes/Index.js', function() {
App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    return this.replaceWith("videos");
  }
});

});

minispade.register('routes/Videos.js', function() {
App.VideosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find("video");
  }
});

});

minispade.register('utils/Handlebars.js', function() {
var showdown;

showdown = new Showdown.converter();

Ember.Handlebars.registerBoundHelper("markdown", function(text) {
  return new Ember.Handlebars.SafeString(showdown.makeHtml(text));
});

});
