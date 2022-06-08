const path = require('path');
const fs = require('fs');
const util = require('util');
// 进度条
const ora = require('ora');

const Midlleware = require('./midlleware');
const promisify = util.promisify;

const MAX_LENGTH = 220;
const MIN_LENGTH = 16;

async function toJSON(path) {
  const packageBuf = await promisify(fs.readFile)(path);

  // let str = ""
  // try {
  //   str = await promisify(fs.readFile)(path, { encoding: 'utf-8' });
  //   str = JSON.parse(str);
  // } catch (e) {
  //   console.log(str);
  // }
  return new Function(`return (${packageBuf.toString('utf-8')})`)();
}
const JSONParseBody = (body) => {
  return body.reduce((preVal, val) => {
    return preVal + val.replaceAll('\t', '').replaceAll('\n', ' ');
  }, '');
};

function readSnippetFiles(paths) {
  return Promise.all(
    paths.map((item) => item.path).map((path) => toJSON(path))
  );
}

class MarkdownLoader {
  constructor(props) {
    const { title, description, entry, output = './README.md', models } = props;
    this.app = new Midlleware();
    this.title = title;
    this.description = description;
    this.entry = entry;
    this.output = output;
    this.models = models;
  }
  async packageLoader(ctx, next) {
    ctx.spinner.start('load package start');

    const packageJson = await toJSON(ctx.entry);
    const snippets = packageJson.contributes.snippets;

    ctx.snippets = snippets;

    ctx.spinner.succeed(`load package ok`);

    await next();

    const rows = [`# ${ctx.title}`, `> ${ctx.description}`, ''];

    rows.push(ctx.models);

    const text = rows.join('\r\n');

    await promisify(fs.writeFile)(ctx.output, text);

    ctx.spinner.succeed(`${ctx.title} ok`);
  }

  async snippetLoader(ctx, next) {
    ctx.spinner.start(`load snippet start`);

    const req = ctx.models
      .map((model) => {
        model.paths = ctx.snippets.filter(model.filter);
        return model;
      })
      .map(async (model) => {
        const { title, language, description, paths } = model;

        const rows = [`# ${title}`, `> ${description}`, ''];

        const { header, body } = await ctx.loader(paths, language);

        rows.push(...header, ...body);

        return rows.join('\r\n');
      });

    ctx.models = await Promise.all(req);

    ctx.spinner.succeed(`load snippet ok`);
    await next();
  }

  async loader(paths, scope) {
    const datalist = await readSnippetFiles(paths);
    const tableBody = datalist
      .reduce((preval, item) => {
        const values = Object.values(item);
        preval.push(...values);
        return preval;
      }, [])
      .map((snippet) => {
        snippet.body = JSONParseBody(snippet.body);
        return snippet;
      })
      .map((row) => {
        const prefix = row.prefix.map((c) => `\`${c}\``).join(' 或 ');
        const _scope = row.scope || scope;

        let desc = '';

        if (row.body.length > MAX_LENGTH) {
          desc = row.description;
        } else if (row.body.length < MIN_LENGTH) {
          desc = row.description + `：\`${row.body}\``;
        } else {
          desc = `\`${row.body}\``;
        }

        return `|${prefix}|${_scope}|${desc}|`;
      });

    return {
      header: [
        '| Snippet    |   Type   | Purpose       |',
        '| :--------- | :------: | :------------ |',
      ],
      body: tableBody,
    };
  }
  use(callback) {
    this.app.use(callback);
  }
  async run() {
    this.spinner = ora('loading……');

    this.app.use(this.packageLoader);

    this.app.use(this.snippetLoader);

    this.app.run(this);
  }
}

module.exports = MarkdownLoader;
