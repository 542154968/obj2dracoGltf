const obj2gltf = require("obj2gltf");

module.exports = function getGltf(url, opts) {
  opts = Object.assign({}, opts);
  return obj2gltf(url, opts);
};


