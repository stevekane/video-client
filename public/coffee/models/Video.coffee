attr = DS.attr

App.Video = DS.Model.extend
  
  title: attr()
  subtitle: attr()
  summary: attr()
  body: attr()
  mp4_url: attr()
  archived: attr()
  slug: Ember.computed "title", ->
    Ember.String.dasherize(@get('title'))
