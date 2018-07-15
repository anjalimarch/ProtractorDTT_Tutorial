describe('Protractor Element steps',function(){

	
	it('Locators',function(){
		
		
		browser.get('https://juliemr.github.io/protractor-demo/');
		
		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("4");
		element(by.id("gobutton")).click();
		/*element.all(by.repeater('result in memory').column('result .value')).get(0).getText().then(function(text){
		console.log(text);	
		});*/
		
		
		
		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
		console.log(text);	
		});
		
		
		
		
		});
});