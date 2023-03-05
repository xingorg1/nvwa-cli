#!/usr/bin/env node

const { program } = require('commander')
const chalk = require('chalk')
const create = require('../lib/create')

program
  .name(chalk.cyan('nvwa-cli'))
  .description(chalk.red.bold(`小石头的斧子宇宙之 ${chalk.bgRed(' nvwa-cli ')} 脚手架`))
  .version(`nvwa-cli ${require('../package.json').version}`)
  .usage(chalk.cyan('<command> [options]'));

program.on('--help', () => {
  console.log()
  console.log(`  执行命令 ${chalk.yellow(`nvwa-cli <command> --help`)} 以获取各命令更详细的使用说明。`)
  console.log()
})

program.command('create')
  .argument('<app-name>', '项目名称')
  .description(chalk.green('# 创建项目'))
  .option('-s, --separator <char>', '分隔符', ',')
  .action((name, options) => {
    create(name, options)
  });

program.parse(process.argv);