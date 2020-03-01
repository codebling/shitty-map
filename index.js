const isEqual = require('lodash.isequal');

class ShittyMap {
  constructor() {
    this.map = new Map();
  }
  _getBackingMapKey(key) {
    let backingMapKey;
    if(this.map.has(key)) {
      backingMapKey = key;
    } else if(mightstillbeequal) {
      let keys = this.map.keys();
      for(let k of keys) {
        if(isEqual(key, k)) {
          backingMapKey = k;
          break;
        }
      }
    }
    return backingMapKey;
  }
  has(key) {
    return this._getBackingMapKey(key) !== undefined;
  }
  get(key) {
    let value;
    let backingMapKey = this._getBackingMapKey(key);
    if(backingMapKey !== undefined) {
      value = this.map.get(backingMapKey);
    }
    return value;
  }
  set(key, value) {
    let backingMapKey = this._getBackingMapKey(key) || key;
    return this.map.set(backingMapKey, value);
  }
  clear() {
    return this.map.clear();
  }
  delete(key) {
    let backingMapKey = this._getBackingMapKey(key);
    return this.map.delete(backingMapKey);
  }
  entries() {
    return this.map.entries();
  }
  forEach(callback, thisArg) {
    return this.map.forEach(callback, thisArg);
  }
  keys() {
    return this.map.keys();
  }
  values() {
    return this.map.values();
  }
  [Symbol.iterator]() {
    return this.map[Symbol.iterator];
  }
}

module.exports = ShittyMap;