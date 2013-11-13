App.ApplicationRoute = Ember.Route.extend
  
  actions:
    createVideo: (hash) ->
      @store.createRecord("video", hash)
