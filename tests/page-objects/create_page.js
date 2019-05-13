const base = require('bizzy-nightwatch-base-page');
const { client } = require('nightwatch-cucumber');

const createGist = {
  url() {
    const url = base.setURL(process.env.BASE_URL);
    return url;
  },
  testData: {
      pageTitle: 'Create a new Gist',
      textTitle: 'hello world',
      textFileName: 'file hello world',
      textDesc: 'Data Hello World',
  },
  elements: {
    // login form
    txtEmail: '#login_field',
    txtPass: '#password',
    btnLogin: '.btn.btn-primary.btn-block',
    
    // create form
    txtTitle: '.form-control.input-block.input-contrast',
    txtFilename: '.form-control.filename.js-gist-filename.js-blob-filename',
    txtDesc: ".commit-create.position-relative",
    txtFileLink: '.user-select-contain.gist-blob-name.css-truncate-target',
    btnCreate: '.form-actions>button:nth-child(1)',
  },
  commands: [{
    navigateToPage() {
      this.navigate();
      base.maxWindow(this.api);
    },
    login() {
      base.setValueElement(this, '@txtEmail', process.env.USERLOGIN);
      base.setValueElement(this, '@txtPass', process.env.USERPASS);
      base.clickElement(this, '@btnLogin');
    },
    gotoGistPage() {
        this.navigate(process.env.GIST_URL);
    },
    createGist() {
        base.setValueElement(this, '@txtTitle', createGist.testData.textTitle);
        base.setValueElement(this, '@txtFilename', createGist.testData.textFileName);
        base.clickElement(this, '@txtDesc');
        client.keys(createGist.testData.textDesc);
        base.clickElement(this, '@btnCreate');
    },
    verifyNewGist() {
        return base.expectVisible(this, '@txtFileLink');
    },
  }],
};
module.exports = createGist;
