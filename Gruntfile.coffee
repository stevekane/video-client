'use strict'

module.exports = (grunt) ->

  grunt.initConfig
    #vendor directory and specific dependencies
    vendorDir: "public/vendor"

    #coffee files and outputted JS
    coffeeDir: "public/coffee"
    compiledJS: "public/compiled-js"
    templatesJS: "apptemplates.js"
    srcJS: "app.js"

    #handlebars files
    hbDir: "public/templates"
    hbCompiled: "apptemplates.js"

    #sass files
    sassDir: "public/sass"
    mainSassFile: "app.sass"
    sassCompiled: "appsass.css"

    #less files
    lessDir: "public/less"
    mainLessFile: "app.less"
    lessCompiled: "appless.css"

    #output files
    distDir: "public/dist"

    #test files
    testDir: "test"
    coffeeTests: "test/coffee-tests"
    compiledTests: "test/compiled-tests"

    #testserver port
    port: 1234
    host: '0.0.0.0'

    #UTILITIES
    clean:
      src: ['<%= compiledJS %>']

    connect:
      server:
        options:
          port: '<%= port %>'
          host: '<%= host %>'

    open:
      localhost:
        path: 'http://localhost:<%= port %>/'



    #MODULE COMPILATION
    minispade:
      options:
        renameRequire: true
        useStrict: false
        prefixToRemove: '<%= compiledJS %>'+'/'
      files:
        src: ['<%= compiledJS %>/**/*.js']
        dest: '<%= distDir %>/<%= srcJS %>'


    #LANGUAGE COMPILATION / TRANSPILING
    coffee:
      tests:
        options:
          bare: true
        files: [
          expand: true
          cwd: '<%= coffeeTests %>'
          src: ['**/*.coffee']
          dest: '<%= compiledTests %>'
          ext: '.js'
        ]

      source:
        options:
          bare: true
        files: [
          expand: true
          cwd: '<%= coffeeDir %>'
          src: ['**/*.coffee']
          dest: '<%= compiledJS %>'
          ext: '.js'
        ]

    less:
      dist:
        options:
          paths: ['<%= lessDir %>', '<%= vendorDir %>/bootstrap/less']
        files:
          '<%= distDir %>/<%= lessCompiled %>': '<%= lessDir %>/<%= mainLessFile %>'

    sass:
      dist:
        options:
          trace: true
          style: 'expanded'
        files:
          '<%= distDir %>/<%= sassCompiled %>': '<%= sassDir %>/<%= mainSassFile %>'

    emberTemplates:
      compile:
        options:
          templateName: (sourceFile) ->
            #TODO: THIS IS HARDCODED...SHOULD CHANGE TO REF GLOBAL
            return sourceFile.replace("public/templates/", "")
        files:
          "<%= distDir%>/<%= hbCompiled %>": "<%= hbDir %>/**/*.handlebars"



    #FILE WATCHERS
    watch:
      html:
        files: ['index.html']
        tasks: ['emberTemplates'] # fill in with anything, needed for livereload
        options:
          livereload: true

      less:
        files: ['<%= lessDir %>/**/*.less']
        tasks: ['less']
        options:
          livereload: true

      sass:
        files: ['<%= sassDir %>/**/*.sass']
        tasks: ['sass']
        options:
          livereload: true
      coffee:
        files: ['<%= coffeeDir %>/**/*.coffee', '<%= coffeeTests %>/**/*.coffee']
        tasks: ['clean', 'coffee', 'minispade']
        options:
          livereload: true

      handlebars:
        files: ['<%= hbDir%>/**/*.handlebars']
        tasks: ['emberTemplates']
        options:
          livereload: true

  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-minispade')
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-ember-templates')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-open')

  grunt.registerTask('test',
    [
      'coffee:tests',
      'watch'
    ]
  )

  grunt.registerTask('default',
    [
      'clean',
      'coffee',
      'minispade',
      'emberTemplates',
      'sass',
      'less',
      'connect',
      'open:localhost',
      'watch'
    ]
  )

  grunt.registerTask('noserver',
    [
      'clean',
      'coffee',
      'minispade',
      'emberTemplates',
      'sass',
      'less',
      'open:localhost',
      'watch'
    ]
  )

  grunt.registerTask('deploy',
    [
      'clean',
      'coffee',
      'minispade',
      'emberTemplates',
      'sass',
      'less'
    ]
  )
