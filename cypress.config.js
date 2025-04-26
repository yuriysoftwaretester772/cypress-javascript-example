const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'w9o9is',
  viewportWidth: 1280, // Set the width of the viewport
  viewportHeight: 720, // Set the height of the viewport
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    retries: {
      runMode: 2,    // When running `cypress run`, retry tests 2 additional times
      openMode: 1    // When running `cypress open`, retry tests 1 additional time
    }
  },
});
