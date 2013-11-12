App.ApplicationRoute = Ember.Route.extend
  
  actions:
    createVideo: ->
      newVideo = @store.push("video", {
      })
      .save()
      .then((video) ->
        @transitionTo("video.edit", video)
      )
      .fail((err) ->
        alert("There was an error")
      )
