App.ApplicationRoute = Ember.Route.extend
  
  actions:
    createVideo: (hash) ->
      hash.archived = false
      @store.createRecord("video", hash)

    deleteVideo: (video) ->
      video.set("archived", true)
