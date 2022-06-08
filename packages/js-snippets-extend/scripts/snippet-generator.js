const path = require('path');
const clear = require('clear');
const {
  SnippetLoader,
  util: { log, figlet },
} = require('snippet-compiler');

(async () => {
  clear();

  const info = await figlet('IVIEW SNIPPET');
  log(info);

  let [, , filePath = 'default.js', command] = process.argv; // npm run snippet [filePath]

  let fullPath = path.resolve(
    __dirname,
    `../src/${filePath}`.replaceAll('//', '/')
  );

  const parseUrl = path.parse(fullPath);
  const ext = parseUrl.ext.slice(1);

  const scopeMap = {
    js: 'javascript',
    vue: 'vue',
  };

  const app = new SnippetLoader({
    entry: path.resolve(__dirname, '../package.json'),
    target: fullPath,
    output: path.resolve(__dirname, '../snippets'),
    command: command || parseUrl.name,
    scope: scopeMap[ext],
  });

  app.run();
})();
