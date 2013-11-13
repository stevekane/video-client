App.KaneCreateVideoComponent = Ember.Component.extend

  newTitle: ""

  actions:
    verifyAndCreate: (newTitle) ->
      if not newTitle then return
      @sendAction "action", {title: newTitle}
      @set("newTitle", "")
