describe('Shopping',function(){
function selectItems(product){
	
	element.all(by.tagName("app-card")).each(function(item){
		
		
		item.element(by.css("div>div>h4>a")).getText().then(function(text){
			
			
			if(text==product){
				item.element(by.css("div>button[class*='btn-info']")).click();
				// "div>button[class*='btn-info']"
				//button[class*='btn-info']
			
			}
			
		})
	})
	
	
}
	
	it('Cart',function(){
		browser.get('https://qaclickacademy.github.io/protocommerce/');
		element(by.linkText("Shop")).click();
		selectItems("iphone X");
		
		element(by.partialLinkText("Checkout")).getText().then(function(text){
			
			console.log(text);
			var array=text.split("(");
			
			expect(array[1].trim().charAt(0)).toBe("1");
			
			
		});
		});
		// browser.get('https://juliemr.github.io/protractor-demo/');fun
		browser.sleep(5000);
		// javascript
	});// testcase name
	// testcase code inside the function
	
	


