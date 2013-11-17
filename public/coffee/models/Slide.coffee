attr = DS.attr
belongsTo = DS.belongsTo

App.Slide = App.ArchiveModel.extend

  title: attr()
  content: attr()
  number: attr()
  video: belongsTo("video")
