require('routes/Application.js')
require('routes/Index.js')
require('routes/Videos.js')

App.Router.map ->
  @resource "videos", ->
    @route "detail", {path: "/:video_id"}
  
  @resource "video", {path: "/video/:video_id"}, ->
    @route("edit", {path: "/edit"})
    @route("preview", {path: "/preview"})
