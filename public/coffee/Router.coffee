require('routes/Application.js')
require('routes/Index.js')

require('routes/Videos.js')
require('routes/Videos/Detail.js')

require('routes/Video.js')

App.Router.map ->
  @resource "videos", ->
    @route "detail", {path: "/:video_id/:video_slug"}
  
  @resource "video", {path: "/video/:video_id"}
