minispade.register('Application.js', function() {
window.App = Ember.Application.create();
minispade.require('Models.js');
minispade.require('Router.js');
minispade.require('Store.js');

});

minispade.register('Models.js', function() {

minispade.require('models/Video.js');

});

minispade.register('Router.js', function() {

minispade.require('routes/Application.js');

App.Router.map(function() {
  this.resource("videos");
  return this.resource("video", {
    path: "/video/video_id"
  }, function() {
    this.resource("edit", {
      path: "/edit"
    });
    return this.resource("preview", {
      path: "/preview"
    });
  });
});

});

minispade.register('Store.js', function() {
App.Store = DS.Store.extend({
  adapter: "DS.FixtureAdapter"
});

});

minispade.register('models/Video.js', function() {
var attr;

attr = DS.attr;

App.Video = DS.Model.extend({
  title: attr(),
  subtitle: attr(),
  summary: attr(),
  content: attr()
});

});

minispade.register('routes/Application.js', function() {
App.ApplicationRoute = Ember.Route.extend({
  actions: {
    createVideo: function() {
      var newVideo;
      return newVideo = this.store.push("video", {}).save().then(function(video) {
        return this.transitionTo("video.edit", video);
      }).fail(function(err) {
        return alert("There was an error");
      });
    }
  }
});

});
