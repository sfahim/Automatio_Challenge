var assert = require ('assert');
var YourInformation_Page = require("../pageObjects/YourInformation_Page.js");
var Login_Page = require("../pageObjects/Login_Page.js");
var SortOptions_Page = require("../pageObjects/SortOptions_Page.js");
var Products_Page = require("../pageObjects/Products_Page.js");
var ShoppingCart_Page = require("../pageObjects/ShoppingCart_Page.js");
var CheckOut_Page = require("../pageObjects/CheckOut_Page.js");

describe("Verify sauce demo login page works correctly", function() {

    it("check that login button navigates to correct landing page", function(done) {
       browser.windowHandleMaximize();
       browser.url('/');
       var title = browser.getTitle();
       assert.equal(title, 'Swag Labs')
            console.log('Title is: ' + title);

        Login_Page.setUserName('standard_user');
        Login_Page.setPassword('secret_sauce');
        Login_Page.clickLoginButton();

       

    });

    it("check that the sort option work correctly", function(done) { 
        SortOptions_Page.clickSortMenu();
        SortOptions_Page.clickSortAZ();
        SortOptions_Page.clickSortZA();
        SortOptions_Page.clickSortLowToHigh();
        SortOptions_Page.clickSortHighToLow();

    });

    it("check that items can be added to shopping cart and verify items added are in shopping cart", function(done) {
       Products_Page.clickAddToCart1();
       Products_Page.clickAddToCart2();
       browser.pause(3000);
       Products_Page.clickShoppingCart();
       browser.pause(3000);
      

    });

    it("verify items in cart and check that items can be removed from shopping cart and user can continue shopping", function(done) {
        ShoppingCart_Page.verifyFirstProduct();
        ShoppingCart_Page.verifySecondProduct();
        ShoppingCart_Page.clickRemoveButton();
        ShoppingCart_Page.clickContinueShoppingButton();
        
    });

    it("Add another item and click checkout", function(done) {
        Products_Page.clickAddToCart2();
        browser.pause(3000);
        Products_Page.clickShoppingCart();
        browser.pause(3000);
        ShoppingCart_Page.clickCheckOutButton();

    });

    it("Submit 'Checkout: Your Information' form", function(done) {
        YourInformation_Page.submitAllInformationViaYourInformationForm('Robert', 'California', '11101');
        
    
    });

    it("Verify total price, items in cart and finish checkout", function(done) {
        ShoppingCart_Page.verifySecondProduct();
        CheckOut_Page.verifyThirdProduct();
        CheckOut_Page.verifyTotalPrice();
        CheckOut_Page.clickFinishButton();        


        
    }); 
    

});