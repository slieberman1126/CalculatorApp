const expect = require('chai').expect;
const calculator = require('../calculator');

describe('calculator function', () => {
  it('exists', () => {
    expect(calculator).to.be.ok;
  });
  describe('add', () => {
    it('can add 1 and 1', () => {
      expect(calculator.add(1, 1)).to.equal(2);
    });
    it('can add 1 and 2', () => {
      expect(calculator.add(1, 2)).to.equal(3);
    });
  });
  describe('subtract', () => {
    it('can subtract 1 from 2', () => {
      expect(calculator.subtract(2, 1)).to.equal(1);
    });
  });
  describe('multiply', () => {
    it('can multiply 3 and 5', () => {
      expect(calculator.multiply(3, 5)).to.equal(15);
    });
  });
});
