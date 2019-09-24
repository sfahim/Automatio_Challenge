class Products_Page {

get addToCart1() { return $("//div[@class= 'inventory_item'][1]/div[@class='pricebar']/button");}
get addToCart2() { return $("//div[@class= 'inventory_item'][3]/div[@class='pricebar']/button");}
get shoppingCart() { return $('#shopping_cart_container');}


clickAddToCart1() {
    return this.addToCart1.click();
}
clickAddToCart2() {
    return this.addToCart2.click();
}
/*clickAddToCart3() {
    return this.addToCart3.click();
}*/
clickShoppingCart() {
    return this.shoppingCart.click();
}





}
module.exports = new Products_Page();