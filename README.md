# vscode snippets

## lerna 包管理工具维护

- 创建子包：`lerna create <pkgName>`
- 所有子包都添加这个依赖`lerna add <moduleName> `
- 给 scope 后的包添加依赖`lerna add <moduleName> --scope=<pkgName> --dev`
- 给 pkgName2 中添加 pkgName1，包内的互相引用，会复制 pkgName1 到 pkgName2 中`erna add <pkgName1> --scope = <pkgName2>`
- 所有子包更新依赖`lerna bootstrap`
- 运行 lerna run 命令可以执行每个包 package.json 里的 script 同名脚本：`lerna run start` # 执行所有包含有 `start` 的脚本
  - lerna run start --scope xxx-pk1 # 只执行 xxx-pk1 里的 start 脚本
  - 并行执行标记：--parallel`lerna run start --scope xxx-pk1 --scope xxx-pk2 --parallel`
