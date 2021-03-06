describe('Protractor Element steps', function() {
function add(a,b){

	element(by.model("first")).sendKeys("a");
	element(by.model("second")).sendKeys("b");
	element(by.id("gobutton")).click();
	
}
	
	
	it('Locators', function() {

		browser.get('https://juliemr.github.io/protractor-demo/');
/*
		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("4");
		element(by.id("gobutton")).click();*/
		add(3,4);
		add(3,5);
		add(3,6);
		/*
		 * element.all(by.repeater('result in memory').column('result
		 * .value')).get(0).getText().then(function(text){ console.log(text);
		 * });
		 */

		/*
		 * element(by.repeater("result in memory")).element(
		 * by.css("td:nth-child(3)")).getText().then(function(text) {
		 * console.log(text); });
		 */

/*		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("5");
		element(by.id("gobutton")).click();

		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("6");
		element(by.id("gobutton")).click();*/

		element.all(by.repeater("result in memory")).count().then(
				function(count) {
					console.log(count);
				});

		element.all(by.repeater("result in memory")).each(
				function(items) {

					items.element(by.css("td:nth-child(3)")).getText().then(
							function(text) {

								console.log(text);

							})
				});

	});
});