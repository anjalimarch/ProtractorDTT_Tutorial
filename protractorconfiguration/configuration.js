exports.config = {
		// directConnect: true,and need not to give this address.
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
/*   jasmineNodeOpts: {
    defaultTimeoutInterval: 120000,
}*/

/*capabilities: {
	  'browserName': 'internet explorer'
	}*/
}