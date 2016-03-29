// Karma configuration
// Generated on Mon Mar 14 2016 16:12:57 GMT-0300 (BRT)
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'js/libs/three.min.js',
      'js/libs/require.js',
      'src/**/*.js',
      'tests/unit/*.js'
    ],
    exclude: [],
    preprocessors: {},
    reporters: ['progress', 'html'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity,
    htmlReporter: {
      outputDir: 'reports',
      templatePath: null,
      focusOnFailures: true,
      namedFiles: false,
      pageTitle: null,
      urlFriendlyName: false,
      reportName: 'report',
      preserveDescribeNesting: false,
      foldAll: false,
    }
  })
}
