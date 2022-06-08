const MarkdownLoader = require('./markdown-loader');
const SnippetLoader = require('./snippet-loader');
const { log, figlet } = require('./util');

module.exports = {
  MarkdownLoader,
  SnippetLoader,
  util: {
    figlet,
    log,
  },
};
