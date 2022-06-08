const path = require('path');
const readline = require('readline');
const fs = require('fs');
const promisify = require('util').promisify;
const Midlleware = require('./midlleware');
const ora = require('ora');

const LINE_MAX = 5;

class SnippetItem {
  constructor({ scope, command, content }) {
    if (scope) {
      this.scope = scope;
    }
    this.prefix = [command];
    this.body = content;
    this.description = `${command} 代码片段模板`;
  }
}

class SnippetLoader {
  constructor({ entry, output, command, scope }) {
    this.entry = entry;
    this.output = output;
    this.command = command;

    this.scope = scope;

    this.content = [];

    this.spinner = ora('snippet loader start……');

    this.app = new Midlleware();
  }
  use(callback) {
    this.app.use(callback);
  }
  run() {
    this.app.use(this.readSnipetContent);

    this.app.use(this.writeSnippet);

    this.app.run(this);
  }
  async readSnipetContent(ctx, next) {
    ctx.spinner.start(`snippet read conent start`);

    const fileStream = fs.createReadStream(ctx.entry);

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    // 注意：使用 crlfDelay 选项

    // 将 input.txt 中的所有 CR LF ('\r\n') 实例识别为单个换行符。
    let content = [];
    for await (let line of rl) {
      let space = line.match(/^(\s{2})+/g);

      line = line.replaceAll('$', '$$');
      // line = line.replaceAll("$$TM_FILENAME_BASE", "$TM_FILENAME_BASE")

      if (space) {
        space = space[0];
        const tab = space.replaceAll('  ', '\t');
        content.push(line.replaceAll(space, tab));
      } else {
        content.push(line);
      }
    }

    // 少于10行，用 /n 一行展示
    if (content.length <= LINE_MAX) {
      content = [content.join('\n')];
    }

    ctx.content = content;

    ctx.spinner.succeed(`snippet read conent ok`);

    await next();
  }

  async writeSnippet(ctx, next) {
    ctx.spinner.start(`snippet write start`);

    const { output, command, scope, content } = ctx;
    const outputPath = path.resolve(
      __dirname,
      `${output}/${command}.code-snippets`.replace('//', '/')
    );

    const snippet = {
      [command]: new SnippetItem({ command, scope, content }),
    };

    const str = JSON.stringify(snippet);

    await promisify(fs.writeFile)(outputPath, str);

    ctx.spinner.succeed(`snippet write ok`);

    await next();
  }
}

module.exports = SnippetLoader;
