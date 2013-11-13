App.VideosRoute = Ember.Route.extend

  model: ->
    @store.find("video")
