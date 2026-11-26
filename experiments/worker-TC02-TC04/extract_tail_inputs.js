#!/usr/bin/env node
// Extract exact fixed generator inputs for an independent Python C8 replay.
// This runs the committed source/certificate path and emits only the transformed
// row coefficients and per-frequency intervals needed by the separate replay.
const fs = require('node:fs');
const vm = require('node:vm');
const sourcePath = 'experiments/tc02-t832-transformed-certificate.js';
let src = fs.readFileSync(sourcePath, 'utf8');
const oldInner = 'return {tails,gm:gm.map(String),CL:CL.map(String)};';
const newInner = 'return {tails,gm:gm.map(String),CL:CL.map(String),debug:{source:source[1].map(String),dj:all.map((_,j)=>dj[j].map(String)),poles:all.map(k=>pole(k).map(String)),norms:all.map(k=>norm(k).map(String)),den:den.map(String),gm:gm.map(String),delta:delta.map(String),polecoef:polecoef.map(String),m:m.map(String)}};';
const oldOuter = 'changedTail:updated.tails[1],oldTail:';
const newOuter = 'changedTail:updated.tails[1],debug:updated.debug,oldTail:';
if (!src.includes(oldInner) || !src.includes(oldOuter)) throw Error('source anchors changed');
src = src.replace(oldInner, newInner).replace(oldOuter, newOuter);
const sandbox = { module: { exports: {} }, require, console, process, Buffer, __dirname: process.cwd(), __filename: sourcePath };
vm.runInNewContext(src, sandbox, { filename: sourcePath });
const prefix = 'experiments/results/tc02-49-20-even-m12288-t832-';
const rawText = Array.from({length: 6}, (_,i) => fs.readFileSync(`${prefix}raw-part${i+1}.txt`, 'utf8')).join('');
if (rawText.length !== 3204173) throw Error('raw length');
const result = sandbox.module.exports(JSON.parse(rawText), JSON.parse(fs.readFileSync(prefix+'constant-factors.json','utf8')), fs.readFileSync('experiments/tc01-post-log11-em.js','utf8'));
process.stdout.write(JSON.stringify({ changedTail: result.changedTail, debug: result.debug }));
