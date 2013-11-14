App.KaneSlideEditableComponent = Ember.Component.extend

  disabled: false

  actions:
    saveChanges: (slide) ->
      self = @
      slide.save()
