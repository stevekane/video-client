require('routes/Application.js')
require('routes/Index.js')

require('routes/Videos.js')
require('routes/Videos/Detail.js')

require('routes/Video.js')
require('routes/Video/Slide.js')
require('routes/Video/Slide/Markdown.js')
require('routes/Video/Slide/Detail.js')

App.Router.map ->
  @resource "videos", {path: "/videos"}, ->
    @route "detail", {path: "/:video_id/:video_slug"}
  
  @resource "video", {path: "/video/:video_id"}, ->
    @resource "video.slide", {path: "/slide/:slide_id"}, ->
      @route "markdown"
      @route "detail"
