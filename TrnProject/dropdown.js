describe('Protractor Element steps', function() {
	function add(a, b) {

		element(by.model("first")).sendKeys("a");
		element(by.model("second")).sendKeys("b");
		element(by.id("gobutton")).click();

	}

	it('Locators', function() {

		browser.get('https://juliemr.github.io/protractor-demo/');

		add(3, 4);
		add(3, 5);
		add(3, 6);
		
		element.all(by.tagName("option")).each(function(item){
			
			item.getAttribute("value").then(function(values){
				console.log(values);
			})
			
		})



	});
});
