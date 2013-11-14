App.FloatLabelMixin = Ember.Mixin.create

  classNames: ["float-label-wrapper"]

  focused: false

  showFloatLabel: Ember.computed.bool("value")

  focusIn: (e) ->
    @set "focused", true

  focusOut: (e) ->
    @set "focused", false
