class CheckOut_Page {
get finishButton() { return $("//a[text()='FINISH']");}


clickFinishButton() {
    return this.finishButton.click();
} 

    //ASSERTION TO VERIFY ITEMS IN CART
verifyThirdProduct() {
    var thirdProduct = "//div[text()='Sauce Labs Bolt T-Shirt']";     
    var validateThirdProduct = browser.waitUntil(function() {
       return browser.getText(thirdProduct) == 'Sauce Labs Bolt T-Shirt'
    }, 3000)
    expect(validateThirdProduct, 'Product does not exist!').to.be.true;
    console.log(validateThirdProduct);
    }
    //ASSERTION TO VERIFY TOTAL PRICE
verifyTotalPrice() {
    var totalPrice = '#checkout_summary_container > div > div.summary_info > div.summary_total_label';     
    var validateTotalPrice = browser.waitUntil(function() {
       return browser.getText(totalPrice) == 'Total: $34.54'
    }, 3000)
    expect(validateTotalPrice, 'Price is not accurate!').to.be.true;
    console.log(validateTotalPrice);
    }
        
    
}  



module.exports = new CheckOut_Page();