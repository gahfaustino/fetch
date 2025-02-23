import fs from 'fs';
import assert from 'assert';
import axios from '../index.js';
import axiosBuild from '../dist.old/node/axios.cjs';

const {version} = JSON.parse(fs.readFileSync('./package.json'));

console.log('Checking versions...\n----------------------------')

console.log(`Package version: v${version}`);
console.log(`Axios version: v${axios.VERSION}`);
console.log(`Axios build version: v${axiosBuild.VERSION}`);
console.log(`----------------------------`);

assert.strictEqual(version, axios.VERSION, `Version mismatch between package and Axios`);
assert.strictEqual(version, axiosBuild.VERSION, `Version mismatch between package and build`);

console.log('✔️ PASSED\n');


