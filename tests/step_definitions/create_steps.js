const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');

const browser = client.page.create_page();

Given(/^user login to gist homepage/, () => {
    browser.navigateToPage();
    browser.login();
    browser.gotoGistPage();
});

When(/^user create new public gist$/, () => browser.createGist());

Then(/^user will see data new public gist$/, () => browser.verifyNewGist());
