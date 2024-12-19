class Map {
  set(key, value) {
    this[key] = value;
    console.log(`Set: key = ${key}, value = ${value}`);
  }

  has(key) {
    const exists = key in this;
    console.log(`Has: key = ${key}, exists = ${exists}`);
    return exists;
  }

  get(key) {
    if (!this.has(key)) {
      console.log(`Get: key = ${key}, value = undefined`);
      return undefined;
    }
    const value = this[key];
    console.log(`Get: key = ${key}, value = ${value}`);
    return value;
  }

  clear() {
    for (const key in this) {
      delete this[key];
    }
    console.log("Clear: All keys and values have been removed.");
  }

  delete(key) {
    if (!this.has(key)) {
      console.log(`Delete: key = ${key} not found.`);
      return false;
    }
    delete this[key];
    console.log(`Delete: key = ${key} has been removed.`);
    return true;
  }
}

class KeyValue {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    console.log(`KeyValue created: key = ${key}, value = ${value}`);
  }
}

// Test the Map class
const map = new Map();
map.set("name", "Alice");
map.set("age", 25);

map.get("name");
map.get("age");
map.get("address");

map.has("name");
map.has("address");

map.delete("age");
map.delete("address");

map.clear();
