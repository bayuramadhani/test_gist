/* eslint no-unused-vars: off */

const env = require('dotenv').config();

require('nightwatch-cucumber')({
  nightwatchOutput: true,
  cucumberArgs: [
    '--require', 'tests/step_definitions', // include step_definitions folder
    '--format', 'json:reports/chrome/cucumber_chrome.json', // include cucumber.json folder
    '--format', 'node_modules/cucumber-pretty', // print nice looking cucumber in console
    '--format-options', '{"colorsEnabled":true}', // print colour scenario title
    'tests/features'],
});

module.exports = {
  test_workers: { // for paralel test
    enabled: true,
    workers: 1,
  },
  page_objects_path: 'tests/page-objects', // page object options
  custom_assertions_path: '',
  live_output: true, // live console output
  disable_colors: false, // scenarios colors
  test_settings: {
    default: {
      launch_url: '',
      selenium_port: 4444,
      selenium_host: '127.0.0.1',
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: false,
        path: 'screenshots',
      },
      desiredCapabilities: {
        browserName: 'chrome',
        acceptInsecureCerts: true,
        enableVNC: true,
        acceptSslCerts: true,
        screenResolution: '1920x1080x24',
      },
    },
  },
};
