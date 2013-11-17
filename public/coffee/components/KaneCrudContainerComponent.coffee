App.KaneCrudContainerComponent = Ember.Component.extend

  disabled: false

  actions:
    save: (model) ->
      self = @
      self.set("disabled", true)
      model
        .save()
        .then(-> self.set('disabled', false))
        .fail(-> self.set('disabled', false))

    remove: (model) ->
      self = @
      self.set("archived", true)
