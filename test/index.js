const ShittyMap = require('../index');
const should = require('chai').should();
const expect = require('chai').expect;

describe('native Map backwards-compatibility', function() {
  describe('should have the same behaviour as native Map when we .get() an', () => {
    it('unknown string key', function() {
      expect(new ShittyMap().get('a non-existant key')).to.equal(new Map().get('another non-existant key'));
    });
    it('unknown Object key', function() {
      expect(new ShittyMap().get({a: 'hi'})).to.equal(new Map().get({b: 'hello'}));
    });
  });
});

describe('map.get', function() {
  it('should find a keymatch for an object which is a deep copy of a key', function() {
    const smap = new ShittyMap();
    const key = { t: 1};
    const value = 'test';
    smap.set(key, value);
    const keyCopy = Object.assign({}, key);
    
    smap.get(keyCopy).should.equal(value);
  });
});
