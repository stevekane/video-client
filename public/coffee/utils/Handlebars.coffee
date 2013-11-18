showdown = new Showdown.converter()

Ember.Handlebars.registerBoundHelper "markdown", (text) ->
  if text
    new Ember.Handlebars.SafeString(showdown.makeHtml(text))
  else
    ""
Ember.Handlebars.registerBoundHelper "upperCase", (text) ->
  text.toUpperCase()
