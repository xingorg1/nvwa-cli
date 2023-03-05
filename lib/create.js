const path = require('path')
const chalk = require('chalk')

module.exports = async (projectName) => {
  // 得到命令运行时的目录
  const cwd = process.cwd()
  // 目录拼接项目名
  const targetDir = path.resolve(cwd, projectName || '.')
  console.log(`${chalk.green('创建项目的目录路径:')} ${chalk.blueBright(targetDir)}`);
}