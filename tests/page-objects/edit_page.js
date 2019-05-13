const base = require('bizzy-nightwatch-base-page');

const editGist = {
  testData: {
    textTitle: 'updated hello world',
    textFileName: 'updated file hello world by me',
  },
  elements: {
    // choose from list
    gistItem: '.js-gist-file-update-container.js-task-list-container.file-box',
    btnGistEdit: '.pagehead-actions>li:nth-child(1)',

    // edit form
    txtTitle: '.form-control.input-block.input-contrast',
    txtFilename: '.form-control.filename.js-gist-filename.js-blob-filename',
    btnUpdate: '.btn.btn-primary',
  
    txtFileLink: '.user-select-contain.gist-blob-name.css-truncate-target',
  },
  commands: [{
    editGist() {
        base.clickElement(this, '@gistItem');
        base.clickElement(this, '@btnGistEdit');
        base.setValueElement(this, '@txtTitle', editGist.testData.textTitle);
        base.setValueElement(this, '@txtFilename', editGist.testData.textFileName);
        base.clickElement(this, '@btnUpdate');
    },
    verifyGistEdit() {
        return base.assertContainsText(this, '@txtFileLink', editGist.testData.textFileName);
    },
  }],
};
module.exports = editGist;