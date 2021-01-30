const chai = require('chai'); const sinon = require("sinon");
const proxyquire = require("proxyquire"); const expect = chai.expect;
function stub(v) {return v*2;}
const currencyConverter = proxyquire("../cc", { convert: stub });
describe("A new bank account", function() {
  beforeEach(function() {
      this.account = new BankAccount();
      clock = sinon.useFakeTimers(constantNow); // stub/fake Date
      this.converter = new currencyConverter("mysecret");
      this.accountAWithdrawSpy=sinon.spy(this.accountA,"withdraw");
  });
  afterEach(function() {
      clock.restore();
  })
  it("is initialized by a balance of 0", function() {
      expect(this.account.balance).to.equal(0);
  });
  it("should convert correct", function() {
      this.account.add(20);
      expect(converter(this.account.balance)).to.equal(40);
  });
  it("correctly calls withdrawal", function() {
      this.transaction.execute();
      sinon.assert.calledWith(this.accountAWithdrawSpy,
      transactionAmount);
      //expect(this.accountAWithdrawSpy
      //.calledWith(transactionAmount)).to.be.true;
      });
  it("should not allow a withdraw", function() {
      expect(this.account.withdraw(50)).to.equal(false);
      expect(this.account.balance).to.throw(new NoMoneyError("No money"));
  });
});