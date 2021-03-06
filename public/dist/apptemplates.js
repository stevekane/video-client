Ember.TEMPLATES["OLDVIDEO"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n          ");
  hashContexts = {'value': depth0,'classNames': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'classNames': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("title"),
    'classNames': ("input-lg bare form-control"),
    'placeholder': ("TITLE")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n          ");
  hashContexts = {'value': depth0,'classNames': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'classNames': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("subtitle"),
    'classNames': ("input-lg bare form-control"),
    'placeholder': ("SUBTITLE")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n          ");
  hashContexts = {'value': depth0,'rows': depth0,'classNames': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'rows': "INTEGER",'classNames': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("summary"),
    'rows': (4),
    'classNames': ("input-lg bare form-control"),
    'placeholder': ("SUMMARY")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.textarea || depth0.textarea),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n        ");
  hashContexts = {'slide': depth0};
  hashTypes = {'slide': "ID"};
  options = {hash:{
    'slide': ("slide")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['kane-slide-thumbnail'] || depth0['kane-slide-thumbnail']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "kane-slide-thumbnail", options))));
  data.buffer.push("\n      ");
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n        <h3 class=\"text-danger\">No slides</h3> \n      ");
  }

function program11(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n        ");
  hashContexts = {'slide': depth0};
  hashTypes = {'slide': "ID"};
  options = {hash:{
    'slide': ("slide")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['kane-slide-editable'] || depth0['kane-slide-editable']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "kane-slide-editable", options))));
  data.buffer.push("\n      ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n        ");
  hashContexts = {'slide': depth0};
  hashTypes = {'slide': "ID"};
  options = {hash:{
    'slide': ("slide")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['kane-slide'] || depth0['kane-slide']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "kane-slide", options))));
  data.buffer.push("\n      ");
  return buffer;
  }

  data.buffer.push("<header class=\"row\">\n  <section class=\"col-md-12\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        ");
  hashContexts = {'value': depth0,'label': depth0};
  hashTypes = {'value': "ID",'label': "STRING"};
  options = {hash:{
    'value': ("title"),
    'label': ("TITLE")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['kane-input-floatlabel'] || depth0['kane-input-floatlabel']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "kane-input-floatlabel", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n        ");
  hashContexts = {'value': depth0,'label': depth0};
  hashTypes = {'value': "ID",'label': "STRING"};
  options = {hash:{
    'value': ("subtitle"),
    'label': ("SUBTITLE")
  },inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['kane-input-floatlabel'] || depth0['kane-input-floatlabel']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "kane-input-floatlabel", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </div>\n\n      <div class=\"col-md-6\">\n        ");
  hashContexts = {'value': depth0,'label': depth0};
  hashTypes = {'value': "ID",'label': "STRING"};
  options = {hash:{
    'value': ("summary"),
    'label': ("SUMMARY")
  },inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['kane-input-floatlabel'] || depth0['kane-input-floatlabel']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "kane-input-floatlabel", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </div>\n    </div>\n  </section>\n</header>\n\n\n<section class=\"col-md-2\">\n  <header class=\"row\">\n    <div class=\"col-md-12\">\n      <small>THUMBNAILS</small>\n    </div>\n  </header>\n\n  <section class=\"row\">\n    <div class=\"col-md-12\">\n      ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "slide", "in", "slides", {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div>\n  </section>\n</section>\n\n<section class=\"col-md-2\">\n</section>\n\n<section class=\"col-md-4\">\n  <header class=\"row\">\n    <div class=\"col-md-12\">\n      <small>SLIDES (MARKDOWN)</small>\n    </div>\n  </header>\n\n  <section class=\"row\">\n    <div class=\"col-md-12\">\n      ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "slide", "in", "slides", {hash:{},inverse:self.program(9, program9, data),fn:self.program(11, program11, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div>\n  </section>\n</section>\n\n<section class=\"col-md-4\">\n  <header class=\"row\">\n    <div class=\"col-md-12\">\n      <small>EDIT!</small>\n    </div>\n  </header>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "slide", "in", "slides", {hash:{},inverse:self.program(9, program9, data),fn:self.program(13, program13, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div> \n  </div>  \n</section>\n");
  return buffer;
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("\n      darkcloud.io\n      <i class=\"glyphicon glyphicon-cloud\"></i>\n    ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Videos");
  }

  data.buffer.push("<!-- HEADER -->\n<nav class=\"navbar navbar-fixed-top navbar-inverse\" role=\"navigation\">\n  <div class=\"navbar-header\">\n    ");
  hashContexts = {'classNames': depth0};
  hashTypes = {'classNames': "STRING"};
  options = {hash:{
    'classNames': ("navbar-brand")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push(" \n  </div>\n\n  <ul class=\"nav navbar-nav pull-left\">\n    <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "videos", options) : helperMissing.call(depth0, "link-to", "videos", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n  </ul>\n</nav>\n\n<div class=\"main-content\">\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/kane-create-video"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n    ");
  hashContexts = {'value': depth0,'placeholder': depth0,'classNames': depth0};
  hashTypes = {'value': "ID",'placeholder': "STRING",'classNames': "STRING"};
  options = {hash:{
    'value': ("newTitle"),
    'placeholder': ("NEW TITLE"),
    'classNames': ("form-control")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

  data.buffer.push("<div class=\"input-group\">\n  <div class=\"input-group-btn\">\n    <button class=\"btn btn-primary\"\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "verifyAndCreate", "newTitle", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n      <i class=\"glyphicon glyphicon-plus-sign\"></i>\n    </button>\n  </div>\n  ");
  hashContexts = {'value': depth0,'label': depth0};
  hashTypes = {'value': "ID",'label': "STRING"};
  options = {hash:{
    'value': ("newTitle"),
    'label': ("NEW TITLE")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['kane-input-floatlabel'] || depth0['kane-input-floatlabel']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "kane-input-floatlabel", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/kane-crud-container"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["components/kane-input-floatlabel"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<span\n  ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":float-label showFloatLabel:float-label-active: focused:float-label-focused:")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "label", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</span>\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["components/kane-save-button"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<button\nclass=\"btn btn-success\"\n");
  hashContexts = {'disabled': depth0};
  hashTypes = {'disabled': "STRING"};
  options = {hash:{
    'disabled': ("notDirty")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", "model", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n  SAVE\n  <i ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":glyphicon notDirty:glyphicon-saved:glyphicon-save")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push("></i>\n</button>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/kane-slide-editable"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n      ");
  hashContexts = {'value': depth0,'classNames': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'classNames': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("slide.title"),
    'classNames': ("bare input-lg form-control"),
    'placeholder': ("TITLE")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n      ");
  hashContexts = {'value': depth0,'rows': depth0,'classNames': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'rows': "INTEGER",'classNames': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("slide.content"),
    'rows': (4),
    'classNames': ("bare input-lg form-control"),
    'placeholder': ("CONTENT (MARKDOWN)")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.textarea || depth0.textarea),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"panel panel-info\">\n  <header class=\"panel-heading\">\n    ");
  hashContexts = {'value': depth0,'label': depth0};
  hashTypes = {'value': "ID",'label': "STRING"};
  options = {hash:{
    'value': ("slide.title"),
    'label': ("TITLE")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['kane-input-floatlabel'] || depth0['kane-input-floatlabel']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "kane-input-floatlabel", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </header>\n\n  <div class=\"panel-body\">\n    ");
  hashContexts = {'value': depth0,'label': depth0};
  hashTypes = {'value': "ID",'label': "STRING"};
  options = {hash:{
    'value': ("slide.content"),
    'label': ("CONTENT (MARKDOWN)")
  },inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['kane-input-floatlabel'] || depth0['kane-input-floatlabel']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "kane-input-floatlabel", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </div>\n\n  <footer class=\"panel-footer\">\n    <span>\n      Slide Number: ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "slide.number", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" of ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "slide.video.slides.length", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </span>\n    ");
  hashContexts = {'model': depth0,'action': depth0};
  hashTypes = {'model': "ID",'action': "STRING"};
  options = {hash:{
    'model': ("slide"),
    'action': ("saveChanges")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['kane-save-button'] || depth0['kane-save-button']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "kane-save-button", options))));
  data.buffer.push("\n  </footer>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/kane-slide-thumbnail"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<p>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "slide.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n<small class=\"text-info\">0-36</small>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/kane-slide"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div class=\"panel panel-info\">\n  <header class=\"panel-heading\">\n    <h3 class=\"panel-title\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "slide.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h3>\n  </header>\n  <div class=\"panel-body\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.markdown || depth0.markdown),stack1 ? stack1.call(depth0, "slide.content", options) : helperMissing.call(depth0, "markdown", "slide.content", options))));
  data.buffer.push("</div>\n  <footer class=\"panel-footer\">\n    Slide Number: ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "slide.number", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" of ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "slide.video.slides.length", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  </footer>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/kane-video-preview"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n      ");
  hashContexts = {'slide': depth0};
  hashTypes = {'slide': "ID"};
  options = {hash:{
    'slide': ("slide")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['kane-slide'] || depth0['kane-slide']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "kane-slide", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n      <h3 class=\"text-danger\">No slides</h3>\n    ");
  }

  data.buffer.push("<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h1>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "video.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h1>\n    <h2 class=\"text-h2\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "video.subtitle", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h2>\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "slide", "in", "video.slides", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n\n  <div class=\"col-md-6\">\n    ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  options = {hash:{
    'src': ("video.mp4_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['kane-video-wrapper'] || depth0['kane-video-wrapper']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "kane-video-wrapper", options))));
  data.buffer.push("\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/kane-video-wrapper"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<video ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  options = {hash:{
    'src': ("src")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push("\n  controls=true\n  height=\"100%\"\n  width=\"100%\">\n</video>\n");
  return buffer;
  
});

Ember.TEMPLATES["video"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n      ");
  hashContexts = {'tagName': depth0,'classNames': depth0};
  hashTypes = {'tagName': "STRING",'classNames': "STRING"};
  options = {hash:{
    'tagName': ("li"),
    'classNames': ("thumbnail-slide")
  },inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "video.slide.markdown", "slide", options) : helperMissing.call(depth0, "link-to", "video.slide.markdown", "slide", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        <small class=\"slide-number\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "slide.number", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</small>\n        <p class=\"slide-content\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.upperCase || depth0.upperCase),stack1 ? stack1.call(depth0, "slide.title", options) : helperMissing.call(depth0, "upperCase", "slide.title", options))));
  data.buffer.push("</p>\n      ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n            ");
  hashContexts = {'value': depth0,'classNames': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'classNames': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("title"),
    'classNames': ("form-control"),
    'placeholder': ("TITLE")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n          ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n            ");
  hashContexts = {'value': depth0,'classNames': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'classNames': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("subtitle"),
    'classNames': ("form-control"),
    'placeholder': ("SUBTITLE")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n          ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n            ");
  hashContexts = {'value': depth0,'classNames': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'classNames': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("summary"),
    'classNames': ("form-control"),
    'placeholder': ("SUMMARY")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.textarea || depth0.textarea),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n          ");
  return buffer;
  }

  data.buffer.push("<div class=\"page-section\">\n  <ol class=\"slide-thumbnails\">\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "slide", "in", "slides", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </ol>\n</div>\n\n<section class=\"page-section\">\n  <aside class=\"detail-panel\">\n    <header class=\"section-header\">\n      VIDEO\n    </header>\n    <div class=\"video-container\">\n      <video ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "ID"};
  options = {hash:{
    'src': ("mp4_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push("\n        height=\"100%\"\n        width=\"100%\"\n        controls>\n      </video>\n    </div>\n\n    <div class=\"video-details\">\n      <form role=\"form\">\n        <fieldset>\n          ");
  hashContexts = {'value': depth0,'label': depth0};
  hashTypes = {'value': "ID",'label': "STRING"};
  options = {hash:{
    'value': ("title"),
    'label': ("TITLE")
  },inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['kane-input-floatlabel'] || depth0['kane-input-floatlabel']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "kane-input-floatlabel", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n          ");
  hashContexts = {'value': depth0,'label': depth0};
  hashTypes = {'value': "ID",'label': "STRING"};
  options = {hash:{
    'value': ("subtitle"),
    'label': ("SUBTITLE")
  },inverse:self.noop,fn:self.program(6, program6, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['kane-input-floatlabel'] || depth0['kane-input-floatlabel']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "kane-input-floatlabel", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n          ");
  hashContexts = {'value': depth0,'label': depth0};
  hashTypes = {'value': "ID",'label': "STRING"};
  options = {hash:{
    'value': ("summary"),
    'label': ("SUMMARY")
  },inverse:self.noop,fn:self.program(8, program8, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['kane-input-floatlabel'] || depth0['kane-input-floatlabel']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "kane-input-floatlabel", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        </fieldset> \n      </form>\n    </div>\n  </aside>\n\n  <div class=\"main-panel\">\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  </div>\n</section>\n");
  return buffer;
  
});

Ember.TEMPLATES["video/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h1>I'm dat index</h1>\n");
  
});

Ember.TEMPLATES["video/slide"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("MARKDOWN");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("DETAIL");
  }

  data.buffer.push("<header class=\"section-header\">\n  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "video.slide.markdown", options) : helperMissing.call(depth0, "link-to", "video.slide.markdown", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "video.slide.detail", options) : helperMissing.call(depth0, "link-to", "video.slide.detail", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</header>\n<section>\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</section>\n");
  return buffer;
  
});

Ember.TEMPLATES["video/slide/detail"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  hashContexts = {'slide': depth0};
  hashTypes = {'slide': "ID"};
  options = {hash:{
    'slide': ("content")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['kane-slide'] || depth0['kane-slide']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "kane-slide", options))));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["video/slide/markdown"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  hashContexts = {'slide': depth0};
  hashTypes = {'slide': "ID"};
  options = {hash:{
    'slide': ("content")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['kane-slide-editable'] || depth0['kane-slide-editable']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "kane-slide-editable", options))));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["videos"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n            ");
  hashContexts = {'classNames': depth0};
  hashTypes = {'classNames': "STRING"};
  options = {hash:{
    'classNames': ("list-group-item")
  },inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "videos.detail", "video", options) : helperMissing.call(depth0, "link-to", "videos.detail", "video", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n          ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n              ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "video.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            ");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n            <h3 class=\"text-warning\">No videos found</h3>\n          ");
  }

  data.buffer.push("<section class=\"row\">\n\n  <aside class=\"col-md-3\">\n    <header class=\"row\">\n      <div class=\"col-md-12 well well-sm\">\n        ");
  hashContexts = {'action': depth0};
  hashTypes = {'action': "STRING"};
  options = {hash:{
    'action': ("createVideo")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['kane-create-video'] || depth0['kane-create-video']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "kane-create-video", options))));
  data.buffer.push("\n      </div>\n    </header>\n\n    <section class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"list-group\">\n          ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "video", "in", "activeVideos", {hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        </div>\n      </div>\n    </section>\n  </aside>\n\n  <section class=\"col-md-9\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("          \n      </div> \n    </div>  \n  </section>\n\n</section>\n");
  return buffer;
  
});

Ember.TEMPLATES["videos/detail"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n      <i class=\"glyphicon glyphicon-pencil\"></i>\n    ");
  }

  data.buffer.push("<header class=\"row\">\n  <div class=\"col-md-12 well well-sm\">\n    <button class=\"btn btn-danger\"\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteVideo", "content", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n      <i class=\"glyphicon glyphicon-remove-circle\"></i>\n    </button>\n    ");
  hashContexts = {'classNames': depth0};
  hashTypes = {'classNames': "STRING"};
  options = {hash:{
    'classNames': ("btn btn-primary")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "video", "content", options) : helperMissing.call(depth0, "link-to", "video", "content", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </div>\n</header>\n\n<section class=\"row\">\n  <div class=\"col-md-12\">\n    ");
  hashContexts = {'video': depth0};
  hashTypes = {'video': "ID"};
  options = {hash:{
    'video': ("content")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['kane-video-preview'] || depth0['kane-video-preview']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "kane-video-preview", options))));
  data.buffer.push("\n  </div>\n</section>\n");
  return buffer;
  
});

Ember.TEMPLATES["videos/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h1>This is your index</h1>\n");
  
});