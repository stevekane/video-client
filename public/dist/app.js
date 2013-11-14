minispade.register('Application.js', function() {
window.App = Ember.Application.create();
minispade.require('Mixins.js');
minispade.require('Components.js');
minispade.require('Controllers.js');
minispade.require('Models.js');
minispade.require('Fixtures.js');
minispade.require('Router.js');
minispade.require('Store.js');
minispade.require('Utils.js');

});

minispade.register('Components.js', function() {

minispade.require('components/KaneCreateVideoComponent.js');
minispade.require('components/KaneVideoPreviewComponent.js');
minispade.require('components/KaneVideoWrapperComponent.js');
minispade.require('components/KaneFloatlabelInputComponent.js');
minispade.require('components/KaneTextareaFloatlabelComponent.js');

});

minispade.register('Controllers.js', function() {

minispade.require('controllers/Videos.js');

});

minispade.register('Fixtures.js', function() {

minispade.require('fixtures/Video.js');

});

minispade.register('Mixins.js', function() {

minispade.require('mixins/FloatLabelMixin.js');

});

minispade.register('Models.js', function() {

minispade.require('models/Video.js');

});

minispade.register('Router.js', function() {

minispade.require('routes/Application.js');
minispade.require('routes/Index.js');
minispade.require('routes/Videos.js');
minispade.require('routes/Videos/Detail.js');
minispade.require('routes/Video.js');

App.Router.map(function() {
  this.resource("videos", function() {
    return this.route("detail", {
      path: "/:video_id/:video_slug"
    });
  });
  return this.resource("video", {
    path: "/video/:video_id"
  });
});

});

minispade.register('Store.js', function() {
App.Store = DS.Store.extend({
  adapter: DS.FixtureAdapter
});

});

minispade.register('Utils.js', function() {

minispade.require('utils/Handlebars.js');

});

minispade.register('components/KaneCreateVideoComponent.js', function() {
App.KaneCreateVideoComponent = Ember.Component.extend({
  newTitle: "",
  actions: {
    verifyAndCreate: function(newTitle) {
      if (!newTitle) {
        return;
      }
      this.sendAction("action", {
        title: newTitle
      });
      return this.set("newTitle", "");
    }
  }
});

});

minispade.register('components/KaneFloatlabelInputComponent.js', function() {
App.KaneFloatlabelInputComponent = Ember.Component.extend(App.FloatLabelMixin, {});

});

minispade.register('components/KaneTextareaFloatlabelComponent.js', function() {
App.KaneTextareaFloatlabelComponent = Ember.Component.extend(App.FloatLabelMixin, {});

});

minispade.register('components/KaneVideoPreviewComponent.js', function() {
App.KaneVideoPreviewComponent = Ember.Component.extend();

});

minispade.register('components/KaneVideoWrapperComponent.js', function() {
App.KaneVideoWrapperComponent = Ember.Component.extend();

});

minispade.register('controllers/Videos.js', function() {
var filterProperty;

filterProperty = Ember.computed.filterProperty;

App.VideosController = Ember.ArrayController.extend({
  activeVideos: filterProperty("content", "archived", false)
});

});

minispade.register('fixtures/Video.js', function() {
var video1, video2, video3;

video1 = {
  id: 0,
  body: "#Hey you guys\n###let's talk about why this isn't workin\nSometimes it just seems like the devil is going to take all the cheese na mean?  Ya dawg, dat cheeze.",
  title: "Whatever you want bro",
  subtitle: "Johnny 5 checks out for good",
  summary: "In this script we will discuss the prospects for survival on a cold dark earth after man has moved on and dinosaurs have returned",
  mp4_url: "/public/videos/test.mp4",
  archived: false
};

video2 = {
  id: 1,
  body: "###Heyoooo",
  title: "Freedom from tyranny",
  subtitle: "How the west was won",
  summary: "In this script we will discuss the prospects for survival on a cold dark earth after man has moved on and dinosaurs have returned",
  mp4_url: "/public/videos/test.mp4",
  archived: false
};

video3 = {
  id: 2,
  body: "#Yo dog",
  title: "Do it up",
  subtitle: "Darmok and Jalad at Tanagra",
  summary: "In this script we will discuss the prospects for survival on a cold dark earth after man has moved on and dinosaurs have returned",
  mp4_url: "/public/videos/test.mp4",
  archived: false
};

App.Video.FIXTURES = [video1, video2, video3];

});

minispade.register('mixins/FloatLabelMixin.js', function() {
App.FloatLabelMixin = Ember.Mixin.create({
  classNames: ["float-label-wrapper"],
  focused: false,
  showFloatLabel: Ember.computed.bool("value"),
  focusIn: function(e) {
    return this.set("focused", true);
  },
  focusOut: function(e) {
    return this.set("focused", false);
  }
});

});

minispade.register('models/Video.js', function() {
var attr;

attr = DS.attr;

App.Video = DS.Model.extend({
  title: attr(),
  subtitle: attr(),
  summary: attr(),
  body: attr(),
  mp4_url: attr(),
  archived: attr(),
  slug: Ember.computed("title", function() {
    return Ember.String.dasherize(this.get('title'));
  })
});

});

minispade.register('routes/Application.js', function() {
App.ApplicationRoute = Ember.Route.extend({
  actions: {
    createVideo: function(hash) {
      hash.archived = false;
      return this.store.createRecord("video", hash);
    },
    deleteVideo: function(video) {
      return video.set("archived", true);
    }
  }
});

});

minispade.register('routes/Index.js', function() {
App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    return this.replaceWith("videos");
  }
});

});

minispade.register('routes/Video.js', function() {
App.VideoRoute = Ember.Route.extend();

});

minispade.register('routes/Videos.js', function() {
App.VideosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find("video");
  }
});

});

minispade.register('routes/Videos/Detail.js', function() {
App.VideosDetailRoute = Ember.Route.extend({
  model: function(params) {
    var id, slug;
    id = parseInt(params.video_id);
    slug = params.video_slug;
    return this.store.find("video", id);
  },
  serialize: function(model) {
    return {
      video_id: model.get('id'),
      video_slug: model.get('slug')
    };
  }
});

});

minispade.register('utils/Handlebars.js', function() {
var showdown;

showdown = new Showdown.converter();

Ember.Handlebars.registerBoundHelper("markdown", function(text) {
  if (text) {
    return new Ember.Handlebars.SafeString(showdown.makeHtml(text));
  } else {
    return "";
  }
});

});
