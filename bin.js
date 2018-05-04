#!/usr/bin/env node
const program = require('commander')
const translate = require('./translator')
program.version(require('./package.json').version)
  .action((arg,cmd)=>{
    translate(arg).then((res=[])=>{
      res.forEach(r=>console.log(r.replace(new RegExp('；'),'')))
    })
  })
  .parse(process.argv)