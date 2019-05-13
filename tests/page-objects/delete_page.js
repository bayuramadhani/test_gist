const base = require('bizzy-nightwatch-base-page');
const { client } = require('nightwatch-cucumber');

const deleteGist = {
  testData: {
      notifDelete: 'Gist deleted successfully.'
  },
  elements: {
    goToMyGistList: '.author',
    gistItem: '.js-gist-file-update-container.js-task-list-container.file-box',
    btnGistDelete: '.btn.btn-sm.btn-danger',
    notification: '.flash.flash-full.flash-notice',
  },
  commands: [{
    deleteGist() {
        base.clickElement(this, '@goToMyGistList');
        base.clickElement(this, '@gistItem');
        base.clickElement(this, '@btnGistDelete');
        client.acceptAlert()
    },
    verifyGistDeleted() {
        base.expectPresent(this, '@notification');
        return base.assertContainsText(this, '@notification', deleteGist.testData.notifDelete);
    }
  }],
};
module.exports = deleteGist;
