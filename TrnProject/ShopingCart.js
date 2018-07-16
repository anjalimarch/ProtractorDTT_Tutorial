describe('Protractor Element steps', function() {

	it('Locators', function() {

		browser.get('https://qaclickacademy.github.io/protocommerce/');

		element(by.name("name")).sendKeys("Anjali");
		element(by.name("email")).sendKeys("anjalimarch24@gmail.com");
		element(by.id("exampleInputPassword1")).sendKeys("password2");
		element(by.id("exampleCheck1")).click();
		element(
				by.cssContainingText("[id='exampleFormControlSelect1'] option",
						"Female")).click();
		//element(by.cssContainingText("[name='inlineRadioOptions'] label","Employed")).click();
		element.all(by.name("inlineRadioOptions")).first().click();//dropdownTwoCanhelp
		element(by.buttonText("Submit")).click().then(function() {

			browser.sleep(5000);

		});

		element(by.css("div[class*='success']")).getText().then(function(text) {
			console.log(text);

		})

		element(by.name("name")).clear();

		element(by.name("name")).sendKeys("M");

		expect(element(by.css("div[class='alert alert-danger']")).getText())
				.toBe("Name should be at least 2 characters");
		element(by.name("email")).click();

	});//testcase name
	//testcase code inside the functionfunction(

});
//1-TestSuite
//2-Second Parameter-Function  will have all test which are it blocks.

