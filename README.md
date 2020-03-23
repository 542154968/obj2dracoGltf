# obj转gltf和gltf压缩工具

## 使用方法

1. 将`obj`模型放入`objModel`文件夹中，并改名为`model.obj`
2. 执行`npm run gltf`，可以将`obj`模型转化为`glft`格式，并输出在`gltfModel`文件夹下
3. 执行`npm run draco`,可以将第二步中已经转化成功的`gltf`模型或名字为`model.gltf`且在`gltfModel`文件夹下的的`gltf`压缩
4. `index.js`是使用函数执行，现存问题是贴图什么的抽离还没实现，有空研究下。直接执行`node`命令就行了
5. 贴图默认都是抽离出来的，这样网页加载会快些，模型和贴图异步同时加载
