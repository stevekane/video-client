attr = DS.attr

App.Video = DS.Model.extend
  
  title: attr()
  subtitle: attr()
  summary: attr()
  body: attr()
  archived: attr()
