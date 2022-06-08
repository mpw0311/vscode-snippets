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


(async () => {
  clear();

  const content = await figlet('JS SNIPPET');

  log(content);

  const app = new MarkdownLoader({
    title: 'js-snippets-extend',
    description: 'javascript snippet',
    entry: path.resolve(__dirname, '../package.json'),
    output: path.resolve(__dirname, '../README.md'),
    models: [
      {
        title: 'js-snippets-extend',
        language: 'javascript',
        description: 'js 代码片段',
        filter: (item) => item.language === 'javascript',
      },
    ],
  });

  app.run();
})();
