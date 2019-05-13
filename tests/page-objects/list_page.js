const base = require('bizzy-nightwatch-base-page');

const listGist = {
  elements: {
    goToMyGistList: '.author',
    gistList: '.d-inline-block',
  },
  commands: [{
    gotoGistList() {
      base.clickElement(this, '@goToMyGistList');
    },
    verifyGistList() {
      return base.expectPresent(this, '@gistList');
    },
  }],
};
module.exports = listGist;
