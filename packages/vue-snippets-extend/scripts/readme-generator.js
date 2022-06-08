const {
  MarkdownLoader,
  util: { log },
} = require('snippet-compiler');

const path = require('path');
const util = require('util');

const promisify = util.promisify;
// 控制台打印
const figlet = promisify(require('figlet'));
// 清空命令行
const clear = require('clear');

const ivewReg = /iview.code-snippets$/;

(async () => {
  // clear();

  const content = await figlet('VUE SNIPPET');

  log(content);

  const app = new MarkdownLoader({
    title: 'VUE SNIPPETS',
    description: '',
    entry: path.resolve(__dirname, '../package.json'),
    output: path.resolve(__dirname, '../README.md'),
    models: [
      {
        title: 'vue',
        language: 'vue',
        description: 'Vue 代码模板',
        filter: (item) => item.language === 'vue',
      },
    ],
  });

  app.run();
})();
