'use strict';

var expect = require('chai').expect;


describe('random-hash: ', function () {

  var randomHash = require('../../');

  it('common', function () {

    var count = 100;

    while (count--) {

      expect(randomHash()).to.be.match(/^[0-9a-f]{40}$/);
      expect(randomHash({ length: 30 })).to.be.match(/^[0-9a-f]{30}$/);
      expect(randomHash({ casing: 'upper' })).to.be.match(/^[0-9A-F]{40}$/);
    }
  });
});
