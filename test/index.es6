const Map = require('../index.es6');
const should = require('chai').should();
const expect = require('chai').expect;

describe('map.get', function() {
  const map = new Map();
  const key = { t: 1};
  const value = 'test';

  map.set({bla: 'bla'}, 'another value here');
  map.set(key, value);
  map.set({bla: 2}, 'another value here 2');

  it('should retrieve a value for a key which is a copy of a key', function() {
    const keyCopy = Object.assign({}, key);
    map.get(keyCopy).should.equal(value);
  });

  it('should return undefined for an unknown key', function() {
    expect(map.get("this key isn't in the map")).to.be.undefined;
  });

});