describe('ActionsDemoFunctions', function() {
	

	it('Open Posse Website Fnctions', function() {

		browser.get('http://posse.com/');
		element(by.model("userInputQuery")).sendKeys("river");
		browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("London")).perform();
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
			
			browser.sleep(5000);
		});  
		
		expect(element.all(by.css("div[ng-mouseover='onSearchResultOver(searchResult)']")).count()).toEqual(7);
		
		element.all(by.css("div[ng-mouseover='onSearchResultOver(searchResult)']")).get(0).click();               
			
		element(by.css("a[href='/place/GB/London/River Island']")).click().then(function(){
			
			browser.getAllWindowHandles().then(function(handles){
				browser.switchTo().window(handles[1]);
			});
			
		});
		
	})
			
		});