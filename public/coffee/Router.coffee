require('routes/Application.js')

App.Router.map ->
  @resource("videos")
  @resource("video", {path: "/video/video_id"}, ->
    @resource("edit", {path: "/edit"})
    @resource("preview", {path: "/preview"})
  )
