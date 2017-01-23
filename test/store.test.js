var expect = require('chai').expect;

var store = require ('../src/store').store;

describe('Store', function() {

  it('with toString() should return a string', function() {
    expect(store.toString()).to.be.a('string');
  });

  it('should return all these products', function() {
    expect(store.products).to.have.lengthOf(14);
  });

  it('with belowCost criteria should return right products', function() {
    expect(store.findProducts({belowCost: 20})).to.have.lengthOf(9);
  });

  it('with belowDuration criteria should return right products', function() {
    expect(store.findProducts({belowDuration: 150})).to.have.lengthOf(5);
  });

  it('with belowCost & belowDuration criteria should return right products', function() {
    expect(store.findProducts({belowCost: 15, belowDuration: 150})).to.have.lengthOf(2);
  });

  it('with asket should return right price', function() {
    expect(store.calculateTotalprice([
      store.products[3],
      store.products[5],
      store.products[6],
      store.products[10]])).to.be.equal(99.22);
  });

});

describe('Book', function() {

  it('getDuration() should return average of minDuration and maxDuration', function() {
    expect(store.products[1].getDuration()).to.be.equal(185);
  });

});

describe('DVD', function() {

  it('getDuration() should return runningTime', function() {
    expect(store.products[8].getDuration()).to.be.equal(780);
  });

});

describe('VideoGame', function() {

  it('getDuration() should return average of minDuration and maxDuration', function() {
    expect(store.products[12].getDuration()).to.be.equal(1050);
  });

});
