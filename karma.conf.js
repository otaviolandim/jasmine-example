// Karma configuration
// Generated on Mon Mar 14 2016 16:12:57 GMT-0300 (BRT)
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'js/libs/three.min.js',
      'js/libs/require.js',
      {pattern: 'src/**/*.js', included: false},
      {pattern: 'tests/**/*spec.js', included: false},

      'tests/exemplo.spec.js'
    ],
    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    //browsers: ['Chrome', 'PhantomJS', 'Firefox'],
    singleRun: true,
    concurrency: Infinity
  })
}
