#!/usr/bin/env node

const npmChecker = require('npm-checker');
const ora = require('ora');

const packageName = process.argv[2];

if(packageName === undefined) {
	console.log(`Usage :
    $ npm-checker-cli http-fetcher

    Output :
    ⠦ Processing request
    Package found !
    Package: http-fetcher
    Repository URI : git+https://github.com/rajikaimal/http-fetcher.git
  `);
	return;
}

const spinner = ora('Finding package from npmjs.com').start();

setTimeout(() => {
	npmChecker(packageName)
		.then(res => {
			if(res === false) {
				spinner.text = 'Package not found !';
				spinner.fail();
				return;
			}
			spinner.text = 'Package found !';
			spinner.succeed();
			console.log(`Package : ${packageName}`);
			const repository = res.repository !== undefined ? "N/A" : res.repository;
			console.log(`Repository URI : ${res.repository}`);
		})
		.catch(err => {
			spinner.text = 'Something wrong happened !';
			spinner.fail();
		});
}, 1000);

