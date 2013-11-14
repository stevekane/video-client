attr = DS.attr
hasMany = DS.hasMany

App.Video = DS.Model.extend
  
  slides: hasMany("slide", {async:true})
  title: attr()
  subtitle: attr()
  summary: attr()
  mp4_url: attr()
  archived: attr()
  slug: Ember.computed "title", ->
    Ember.String.dasherize(@get('title'))
