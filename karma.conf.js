// Karma configuration
// Generated on Wed Sep 21 2016 00:58:22 GMT+0200 (Hora de verano romance)

module.exports = function(config) {
  config.set({

    /* base path that will be used to resolve all patterns (eg. files, exclude) */
    basePath: './',

    /* frameworks to use 
      available frameworks: https://npmjs.org/browse/keyword/karma-adapter */
    frameworks: ['jasmine'],

    /* list of files / patterns to load in the browser */
    files: [
        './src/test/aux-libraries/karma-utils.js',
        './src/test/aux-libraries/jquery-3.1.1.min.js',
        './bower_components/angular/angular.js',
        './bower_components/angular/angular.js',
        './bower_components/angular-ui-router/release/angular-ui-router.js',
        './bower_components/angular-mocks/angular-mocks.js',
        // if you wanna load template files in nested directories, you must use this
        './src/app/**/*.html',
        './src/app/**/*.js',
        './src/test/**/*-spec.js'
    ],

    /* list of files to exclude */
    exclude: [
    ],

    /* preprocess matching files before serving them to the browser
      available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor */
    preprocessors: {
        // 'src/js/*.js': ['eslint'],
        './src/app/**/*.js': ['coverage', 'eslint'],
        './src/**/*.html': ['ng-html2js']
    },

    /* test results reporter to use
      possible values: 'dots', 'progress'
      available reporters: https://npmjs.org/browse/keyword/karma-reporter */
    reporters: ['spec', 'coverage', 'html'],

    /* web server port */
    port: 9876,

    /* enable / disable colors in the output (reporters and logs)  */
    colors: true,

    /* level of logging 
      possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG */
    logLevel: config.LOG_ERROR,


    /* enable / disable watching file and executing tests whenever any file changes */
    autoWatch: false,

    /* start these browsers
      available browser launchers: https://npmjs.org/browse/keyword/karma-launcher , 'Chrome' */
    browsers: ['PhantomJS'],


    /* Continuous Integration mode
      if true, Karma captures browsers, runs the tests and exits */
    singleRun: true,

    /* Concurrency level
      how many browser should be started simultaneous */
    concurrency: Infinity,

    /* https://www.npmjs.com/package/karma-coverage */
    coverageReporter: {
      type : 'html',
      dir : './src/test/coverage/',
      includeAllSources: true
    },

    htmlReporter: {
      outputFile: './src/test/report/units.html',            
      // Optional 
      pageTitle: 'Unit Tests',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true
    },

    ngHtml2JsPreprocessor: {
         // If your build process changes the path to your templates,
        // use stripPrefix and prependPrefix to adjust it.
        stripPrefix: 'src/',
        prependPrefix: '',
        moduleName: 'appTemplates'
    },

    /* todo: añadir
    engine: {
      configFile: 'client/.eslintrc'
    }
    */

    eslint: {
      stopOnError: true,
      stopOnWarning: false
    }


  })
}
