const gltfPipeline = require('gltf-pipeline');
const fsExtra = require('fs-extra');
const processGltf = gltfPipeline.processGltf;
const options = {
    dracoOptions: {
        compressionLevel: 10
    }
};
// processGltf(gltf, options)
//     .then(function(results) {
//         fsExtra.writeJsonSync('model-draco.gltf', results.gltf);
//     });

module.exports = function getDracoGltf(url, opts){
    opts = Object.assign(options, opts)
    const gltf = fsExtra.readJsonSync(url, opts);
    return processGltf(gltf, options)
}