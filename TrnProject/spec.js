describe('Protractor baby steps',function(){

	
	it('open angularjs website',function(){
		browser.get('https://angularjs.org/');
		browser.get('https://juliemr.github.io/protractor-demo/').then(function(){
			
			console.log("I am in the last step of url");
		});
		//browser.get('https://juliemr.github.io/protractor-demo/');fun
		browser.sleep(5000);
		//javascript
	});//testcase name
	//testcase code inside the function
	
	
it('close browser',function(){
		
	});//testcase name
	//testcase code inside the function
	
});
//1-TestSuite
//2-Second Parameter-Function  will have all test which are it blocks.

