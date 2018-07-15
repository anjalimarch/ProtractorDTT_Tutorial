describe('NonAngularAlerts',function(){

	
	it('Locators',function(){
		browser.waitForAngularEnabled(false);
		browser.get('http://www.qaclickacademy.com/practice.php');
		
		element(by.id("confirmbtn")).click();
		browser.switchTo().alert().accept().then(function(){
			
			browser.sleep(3000);
		});
		
	});//testcase name
	//testcase code inside the function
	
	

});
//1-TestSuite
//2-Second Parameter-Function  will have all test which are it blocks.

