filterProperty = Ember.computed.filterProperty

App.VideosController = Ember.ArrayController.extend

  activeVideos: filterProperty("content", "archived", false)
