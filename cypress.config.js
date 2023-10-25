const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 1280,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome, mocha-junit-reporter',
    mochawesomeReporterOptions: {
      charts: false,
      html: false,
      json: true,
      reportDir: 'cypress/reports/',
      reportFilename: 'report',
      overwrite: false,
    },
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/results-[hash].xml',
      toConsole: false,
      useFullSuiteTitle: true,
      jenkinsMode: true,
    },
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
