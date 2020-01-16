const Map = require('../index');
const should = require('chai').should();
const expect = require('chai').expect;

describe('map.get', function() {
  const map = new Map();
  const key = { t: 1};
  const value = 'test';

  map.set({bla: 'bla'}, 'another value here');
  map.set(key, value);
  map.set({bla: 2}, 'another value here 2');

  it('should find a keymatch for an object which is a shallow copy of a key', function() {
    const keyCopy = Object.assign({}, key);
    map.get(keyCopy).should.equal(value);
  });

  it('should return undefined for an unknown key', function() {
    expect(map.get("this key isn't in the map")).to.be.undefined;
  });

});