class ShoppingCart_Page {
get removeButton() { return $("//button[@class='btn_secondary cart_button'][1]");}
get continueShoppingButton() { return $("//a[text()='Continue Shopping']");}
get checkOutButton() { return $("//a[text()='CHECKOUT']");}

clickRemoveButton() {
    return this.removeButton.click();
}
clickContinueShoppingButton() {
    return this.continueShoppingButton.click();
}
clickCheckOutButton() {
    return this.checkOutButton.click();
}

verifyFirstProduct() {
    var firstProduct = "//div[text()='Sauce Labs Fleece Jacket']";     
    var validateFirstProduct = browser.waitUntil(function() {
        return browser.getText(firstProduct) == 'Sauce Labs Fleece Jacket'
    }, 3000)
    expect(validateFirstProduct, 'Product does not exist!').to.be.true;
    console.log(validateFirstProduct);
    }
    
 verifySecondProduct() {
    var secondProduct = "//div[text()='Test.allTheThings() T-Shirt (Red)']";
    var validateSecondProduct = browser.waitUntil(function() {
        return browser.getText(secondProduct) == 'Test.allTheThings() T-Shirt (Red)'
    }, 3000)
    expect(validateSecondProduct, 'Product does not exist!').to.be.true;
    console.log(validateSecondProduct);
    }

}

module.exports = new ShoppingCart_Page();