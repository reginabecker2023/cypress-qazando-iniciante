const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'asp6dj',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto do curso de Cypress',
      reportPageTitle: 'Projeto do curso de Cypress'
      },
    viewportWidth: 1366,
    viewportHeight: 768,
    baseUrl: 'https://cwi.com.br/',
    defaultCommandTimeout: 5000,
    specPattern: 'cypress/e2e/**/*.feature',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return require('./cypress/plugins/index.js')(on, config)
    },    
  },
})
