const obj2gltf = require("./utils/obj2gltf");
const getDracoGltf = require("./utils/gltf2DracoGltf");
const fsExtra = require("fs-extra");
const objFilePath = `./objModel/`;
const gltfFilePath = `./gltfModel/`;

const targetFileName = `土地`;

console.log("开始执行");
obj2gltf(`${objFilePath}${targetFileName}.obj`, {
  // glTF将与KHR_materials_unlight扩展一起保存。
  unlit: true,
  separate: false,
  separateTextures: false
}).then(async gltf => {
  console.log("obj2gltf完毕，开始写入文件");
  const data = Buffer.from(JSON.stringify(gltf));
  const path = `${gltfFilePath}${targetFileName}.gltf`;
  await fsExtra.outputFile(path, data);
  console.log("obj2gltf写入文件完毕");
  console.log("开始gltf压缩");
  const results = await getDracoGltf(path, {
    separate: false,
    draco: { compressMeshes: true }
  });
  console.log("压缩成功，开始gltf压缩之后的文件写入");
  const path = `${gltfFilePath}${targetFileName}_draco.gltf`;
  await fsExtra.writeJsonSync(path, results.gltf);
  console.log("gltf压缩完毕");
});
