describe('Protractor Element steps',function(){

	
	it('Locators',function(){
		browser.waitForAngular(false);
		browser.get('https:s//google.com');
		browser.get('https://juliemr.github.io/protractor-demo/');
		
		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("4");/*.then(function(){
			
			browser.sleep(3000);
		});*/
		element(by.id("gobutton")).click;
		//expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("7");
		element(by.css("h2[class='ng-binding']")).getText().then(function(text){
			//browser.sleep(3000);
			console.log(text);
			expect(text).toBe("7");
		})
//
		
		
		
	
	})//testcase name
	//testcase code inside the function
	
	
})

