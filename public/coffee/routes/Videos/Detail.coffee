App.VideosDetailRoute = Ember.Route.extend

  model: (params) ->
    id = parseInt(params.video_id)
    slug = params.video_slug
    @store.find("video", id)

  serialize: (model) ->
    return {
      video_id: model.get('id')
      video_slug: model.get('slug') || model.get('title')
    }
