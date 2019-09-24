var assert = require ('assert');
var YourInformation_Page = require("../pageObjects/YourInformation_Page.js");
var Login_Page = require("../pageObjects/Login_Page.js");
var SortOptions_Page = require("../pageObjects/SortOptions_Page.js");
var Products_Page = require("../pageObjects/Products_Page.js");
var ShoppingCart_Page = require("../pageObjects/ShoppingCart_Page.js");
var CheckOut_Page = require("../pageObjects/CheckOut_Page.js");

describe("Verify sauce demo login page works correctly", function() {

    it("check that login button navigates to correct landing page", function(done) {
      // browser.setViewportSize({
        //   width: 1200,
          // height: 800
      // }) 
       browser.windowHandleMaximize();
       browser.url('/');
       var title = browser.getTitle();
       assert.equal(title, 'Swag Labs')
            console.log('Title is: ' + title);
        Login_Page.setUserName('standard_user');
        Login_Page.setPassword('secret_sauce');
        Login_Page.clickLoginButton();

        /*browser.setValue('#user-name', 'standard_user');
        browser.setValue('#password', 'secret_sauce');
        browser.click('.btn_action');*/

    });

    it("check that the sort option work correctly", function(done) { 
        SortOptions_Page.clickSortMenu();
        SortOptions_Page.clickSortAZ();
        SortOptions_Page.clickSortZA();
        SortOptions_Page.clickSortLowToHigh();
        SortOptions_Page.clickSortHighToLow();

        /*browser.click('.product_sort_container')
        browser.click("//select[@class='product_sort_container']/option[1]");
        browser.pause(2000);
        browser.click("//select[@class='product_sort_container']/option[2]");
        browser.pause(2000);
        browser.click("//select[@class='product_sort_container']/option[3]");
        browser.pause(2000);
        browser.click("//select[@class='product_sort_container']/option[4]");
        browser.pause(2000);*/

    });

    it("check that items can be added to shopping cart and verify items added are in shopping cart", function(done) {
       Products_Page.clickAddToCart1();
       Products_Page.clickAddToCart2();
       browser.pause(3000);
       Products_Page.clickShoppingCart();
       browser.pause(3000);
      

        /*browser.click("//div[@class= 'inventory_item'][1]/div[@class='pricebar']/button");
        browser.pause(2000);
        browser.click("//div[@class= 'inventory_item'][3]/div[@class='pricebar']/button");
        browser.click('#shopping_cart_container');
        browser.pause(2000); */

    });

    it("verify items in cart and check that items can be removed from shopping cart and user can continue shopping", function(done) {
        ShoppingCart_Page.verifyFirstProduct();
        ShoppingCart_Page.verifySecondProduct();
        ShoppingCart_Page.clickRemoveButton();
        ShoppingCart_Page.clickContinueShoppingButton();
        
        /*browser.click("//button[@class='btn_secondary cart_button'][1]")//remove button
        browser.click("//a[text()='Continue Shopping']")
        //ASSERTION TO VERIFY ITEMS IN CART
       var item1 = browser.getText("//div[text()='Sauce Labs Fleece Jacket']");
       expect(item1).to.equal('Sauce Labs Fleece Jacket');
        console.log(item1);
       var item2 = browser.getText("//div[text()='Test.allTheThings() T-Shirt (Red)']");
       expect(item2).to.equal('Test.allTheThings() T-Shirt (Red)');
        console.log(item2); */
    });

    it("Add another item and click checkout", function(done) {
        Products_Page.clickAddToCart2();
        browser.pause(3000);
        Products_Page.clickShoppingCart();
        browser.pause(3000);
        ShoppingCart_Page.clickCheckOutButton();

        /*browser.click("//div[@class= 'inventory_item'][3]/div[@class='pricebar']/button");
        browser.click('#shopping_cart_container');
        browser.click("//a[text()='CHECKOUT']")*/
    });

    it("Submit 'Checkout: Your Information' form", function(done) {
        YourInformation_Page.submitAllInformationViaYourInformationForm('Robert', 'California', '11101');
        
        /*YourInformation_Page.setFirstName('Robert');
        YourInformation_Page.setLastName('California');
        YourInformation_Page.setPostalCode('11101');
        YourInformation_Page.clickContinueButton();*/

        /*browser.setValue('#first-name', 'Robert');
        browser.setValue('#last-name', 'California');
        browser.setValue('#postal-code', '11101');
        browser.click("//input[@type='submit']");
        browser.pause(2000);*/
    });

    it("Verify total price, items in cart and finish checkout", function(done) {
        ShoppingCart_Page.verifySecondProduct();
        CheckOut_Page.verifyThirdProduct();
        CheckOut_Page.verifyTotalPrice();
        CheckOut_Page.clickFinishButton();        



        //ASSERTION TO VERIFY ITEMS IN CART
       /* var item2 = browser.getText("//div[text()='Test.allTheThings() T-Shirt (Red)']");
       expect(item2).to.equal('Test.allTheThings() T-Shirt (Red)');
        console.log(item2);
        var item3 = browser.getText("//div[text()='Sauce Labs Bolt T-Shirt']");
       expect(item3).to.equal('Sauce Labs Bolt T-Shirt');
        console.log(item3);
        //ASSERTION TO VERIFY TOTAL PRICE
        var totalPrice = browser.getText('#checkout_summary_container > div > div.summary_info > div.summary_total_label');
        expect(totalPrice).to.equal('Total: $34.54')
            console.log(totalPrice);
        //browser.click("//a[text()='FINISH']"); */
        
    }); 
    

});