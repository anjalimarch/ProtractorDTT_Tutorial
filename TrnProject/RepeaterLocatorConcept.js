describe('Protractor Element steps',function(){

	
	it('Locators',function(){
		browser.waitForAngular(false);
		
		browser.get('https://juliemr.github.io/protractor-demo/');
		
		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("4");
		element(by.id("gobutton")).click;