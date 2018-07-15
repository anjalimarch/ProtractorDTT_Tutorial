describe('Protractor Element steps', function() {
	function calc(a, b, c) {

		element(by.model("first")).sendKeys("a");
		element(by.model("second")).sendKeys("b");

		element.all(by.tagName("option")).each(function(item) {

			item.getAttribute("value").then(function(values) {
				//console.log(values);
				if (values == c) {

					item.click();

				}

			})

		})
		element(by.id("gobutton")).click();

	}

	it('Locators', function() {

		browser.get('https://juliemr.github.io/protractor-demo/');
		calc(3, 5, "MULIPLICATION");
		
		//help of chainlocators
		//element(by.model("operator")).element(by.css("option:nth-child(3)")).click();

	});
});
