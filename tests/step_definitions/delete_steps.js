const { client } = require('nightwatch-cucumber');
const { Then, When } = require('cucumber');

const browser = client.page.delete_page();

When(/^user delete data new public gist$/, () => browser.deleteGist());

Then(/^show notification success deleted$/, () => browser.verifyGistDeleted());
