var App = require("../components/App.vue");
const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

describe("App", function() {
  it("should have an initial state", function() {
    let data = {
      books: [],
      error: '',
      title: '',
      author: '',
      publication: ''
    }
    expect(data).to.be.an('object')
  });
  it("should call fetchBooks when mounted", function() {
    let spy = chai.spy.on(App, 'fetchBooks');
    expect(spy).to.have.been.called;
  });
});
