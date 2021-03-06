const ShittyMap = require('../index');
const should = require('chai').should();
const expect = require('chai').expect;

describe('native Map backwards-compatibility', () => {
  describe('should have the same behaviour as native Map when we .get() an', () => {
    it('unknown string key', () => {
      expect(new ShittyMap().get('a non-existent key')).to.equal(new Map().get('another non-existent key'));
    });
    it('unknown Object key', () => {
      expect(new ShittyMap().get({a: 'hi'})).to.equal(new Map().get({b: 'hello'}));
    });
  });
});

describe('expanded Object functionality', () => {
  describe('should return value when we .get() using a ', () => {
    it('copy of a simple Object key', () => {
      const smap = new ShittyMap();
      const key = { t: 1};
      const value = 'test';

      smap.set(key, value);
      const keyCopy = Object.assign({}, key);
      
      smap.get(keyCopy).should.equal(value);
    });

    it('shallow copy of an Object key', () => {
      const smap = new ShittyMap();
      const subobject = { bla: 5 }; 
      const key = { t: 1, grr: subobject };
      const value = 'test';

      smap.set(key, value);
      const keyCopy = Object.assign({}, key);
      
      smap.get(keyCopy).should.equal(value);
    });

    it('deep copy of an Object key', () => {
      const smap = new ShittyMap();
      const subobject = { bla: 5 }; 
      const key = { t: 1, grr: subobject };
      const value = 'test';

      smap.set(key, value);
      const subojectCopy = Object.assign({}, subobject);
      const keyCopy = Object.assign({}, key);
      keyCopy.grr = subojectCopy;
      
      smap.get(keyCopy).should.equal(value);
    });
  });
});
