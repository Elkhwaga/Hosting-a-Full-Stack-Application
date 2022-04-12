// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: "../",
    frameworks: ["jasmine"],
    files: ["lib/angular.js", "app/**/*.js", "test/**/*.js"],
    exclude: [],
    reporters: ["progress"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome"],
    captureTimeout: 60000,
    singleRun: false,
  });
};
