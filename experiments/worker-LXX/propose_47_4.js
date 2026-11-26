#!/usr/bin/env node
// Invoke the established exact rational witness optimizer for the tentative 47/4 endpoint.
const fs=require('node:fs'),vm=require('node:vm');
let src=fs.readFileSync('experiments/tc01-post-log11-em.js','utf8');
src+='\nmodule.exports.rationalWitness = rationalElevenWitness;\n';
const sandbox={module:{exports:{}},require,console,process,Buffer,__dirname:process.cwd(),__filename:'experiments/tc01-post-log11-em.js'};
vm.runInNewContext(src,sandbox,{filename:'tc01-post-log11-em.js'});
process.stdout.write(JSON.stringify(sandbox.module.exports.rationalWitness(47n,4n)));
