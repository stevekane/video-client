attr = DS.attr
hasMany = DS.hasMany
emptyString = DS.attr(String, {defaultValue: ""})

App.Video = App.ArchiveModel.extend
  
  slides: hasMany("slide", {async:true})
  title: emptyString
  subtitle: emptyString
  summary: emptyString
  mp4_url: emptyString
  slug: Ember.computed "title", ->
    Ember.String.dasherize(@get('title'))
