attr = DS.attr
belongsTo = DS.belongsTo

App.Slide = DS.Model.extend

  title: attr()
  content: attr()
  number: attr()
  video: belongsTo("video")
