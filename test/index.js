const shelljs = require('shelljs');
const execa = require('execa');
const assert = require('chai').assert;

describe('test npm-checker-cli', function () {
	it('should return package details', function (done) {
		shelljs.exec('node index.js express', function(code, stdout, stderr) {
			assert.equal(stdout, `Package : express\nRepository URI : https://github.com/expressjs/express\n`);
			done();
		});
	});
	it('should return that package doesn\'t exist', function (done) {
		shelljs.exec('node index.js whaaaaaaaat', function(code, stdout, stderr) {
			assert.equal(stdout, ``);
			done();
		});
	});
});
