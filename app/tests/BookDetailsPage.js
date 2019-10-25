var BookDetailsPage = require("../components/BookDetailsPage.vue");
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

describe("BookDetailsPage:", function() {
  it("test", function() {
    let bar = true;
    assert.equal(bar, true);
  });
});
