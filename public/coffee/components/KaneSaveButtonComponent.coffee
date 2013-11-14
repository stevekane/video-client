App.KaneSaveButtonComponent = Ember.Component.extend

  notDirty: Ember.computed.not("model.isDirty")

  actions:
    save: (model) ->
      @sendAction "action", model
