const { client } = require('nightwatch-cucumber');
const { Then, When } = require('cucumber');

const browser = client.page.list_page();

When(/^user go to list gist$/, () => browser.gotoGistList());

Then(/^user will see list data new public gist$/, () => browser.verifyGistList());
