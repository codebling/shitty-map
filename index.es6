const isEqual = require('lodash.isequal');

class ShittyMap {
  constructor() {
    this.map = new Map();
  }
  has(key) {
    return this.get(key) !== undefined;
  }
  get(key) {
    let value = this.map.get(key);
    if(value === undefined) {
      let keys = this.map.keys();
      let backingMapKeyInstance;
      for(let k of keys) {
        if(isEqual(key, k)) {
          backingMapKeyInstance = k;
          break;
        }
      }
      if(backingMapKeyInstance) {
        value = this.map.get(backingMapKeyInstance);
      }
    }
    return value;
  }
  set(key, value) {
    return this.map.set(key, value);
  }
}

module.exports = ShittyMap;