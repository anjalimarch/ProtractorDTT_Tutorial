describe("Test Entering in to an input box", function() {

	it("Executing Input Box Test",function(){
		
		
		browser.get("https://angularjs.org/");
		element(by.model("yourName")).sendKeys("Raman");
		element(by.binding("yourName")).getText().then(function(text){
			
			console.log(text);
		});
		
		
		
		
		
		
	});
	
	
	
});