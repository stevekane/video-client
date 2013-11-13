App.KaneVideoPreviewComponent = Ember.Component.extend

  full: true

  actions:
    toggleFull: ->
      @toggleProperty "full"
