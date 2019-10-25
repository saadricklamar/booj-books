var BookListPage = require("../components/BookListPage.vue");
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

describe("BookListPage:", function() {
  it("should call goToBookDetails when item is clicked", function() {
    let spy = chai.spy.on(BookListPage, "goToBookDetails");
    expect(spy).to.have.been.called;
  });
});
