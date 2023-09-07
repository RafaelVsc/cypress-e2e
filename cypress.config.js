const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    defaultCommandTimeout: 10000,
    env: {
      viewportWidthBreakpoint: 768,
    },
  },
  projectId: 'ogyymo',
})
