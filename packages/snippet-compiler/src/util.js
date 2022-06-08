const promisify = require('util').promisify;
// log日志颜色
const chalk = require('chalk');

const log = (content) => console.log(chalk.green(content));
const figlet = promisify(require('figlet'));
module.exports = {
  log,
  figlet,
};
