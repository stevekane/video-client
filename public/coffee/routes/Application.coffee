App.ApplicationRoute = Ember.Route.extend
  
  actions:
    createVideo: (hash) ->
      @store.createRecord("video", hash)

    deleteVideo: (video) ->
      video.set("archived", true)
