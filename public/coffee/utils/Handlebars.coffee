showdown = new Showdown.converter()

Ember.Handlebars.registerBoundHelper("markdown", (text) ->
  new Ember.Handlebars.SafeString(showdown.makeHtml(text))
)
