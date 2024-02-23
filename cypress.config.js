const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 70000,
  projectId: "ommhx9",
  retries:{
    runMode:1
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/*.feature",
    testIsolation: false,
  },
});
