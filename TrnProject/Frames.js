describe('Frames',function(){

	
	it('Frames',function(){
		browser.waitForAngularEnabled(false);
		browser.driver.manage().window().maximize();
		browser.get('http://www.qaclickacademy.com/practice.php');
		browser.switchTo().frame("courses-iframe");
		element(by.css("a[href*='sign_in']>span")).getText().then(function(text){
			
			console.log(text);
		});
		
		
	});
	
});