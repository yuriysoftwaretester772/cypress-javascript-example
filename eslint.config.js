import cypress from "eslint-plugin-cypress";

export default [
  {
    files: ["cypress/**/*.js"], // Target only JavaScript files in the Cypress directory
    ignores: ["cypress/screenshots/**", "cypress/videos/**"], // Ignore screenshots and videos
    plugins: {
      cypress, // Enable Cypress plugin
    },
    languageOptions: {
      ecmaVersion: "latest", // Use the latest ECMAScript version
      sourceType: "module", // Enable ES module syntax
      globals: {
        cy: "readonly", // Cypress global variable
        Cypress: "readonly", // Cypress global variable
        browser: "readonly", // Enable browser global variables
        node: "readonly", // Enable Node.js global variables
      },
    },
    rules: {
      "no-unused-vars": "warn", // Warn about unused variables
      "no-console": "off", // Allow console.log statements
    },
  },
];