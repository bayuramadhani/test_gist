const { client } = require('nightwatch-cucumber');
const { Then, When } = require('cucumber');

const browser = client.page.edit_page();

When(/^user edit data new public gist$/, () => browser.editGist());

Then(/^user will see updated gist$/, () => browser.verifyGistEdit());
