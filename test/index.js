const Map = require('../index');
const should = require('chai').should();
const expect = require('chai').expect;

describe('native Map backwards compatibility', function() {
  it('should return undefined for an unknown key', function() {
    const map = new Map();
    map.set('here is', 'a value which will not be used');

    expect(map.get(`this key isn't in the map`)).to.be.undefined;
  });
});

describe('map.get', function() {
  it('should find a keymatch for an object which is a deep copy of a key', function() {
    const map = new Map();
    const key = { t: 1};
    const value = 'test';
    map.set(key, value);
    const keyCopy = Object.assign({}, key);
    
    map.get(keyCopy).should.equal(value);
  });
});
