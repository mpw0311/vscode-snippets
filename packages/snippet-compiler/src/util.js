const fs = require('fs');
const promisify = require('util').promisify;
// log日志颜色
const chalk = require('chalk');

const log = (content) => console.log(chalk.green(content));
const figlet = promisify(require('figlet'));

async function readFileJSON(path) {
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

module.exports = {
  log,
  figlet,
  readFileJSON
};
