App.CrudMixin = Ember.Mixin.create

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
