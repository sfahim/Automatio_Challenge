class SortOptions_Page {
    get sortMenu() { return $('.product_sort_container');}
    get sortAZ() { return $("//select[@class='product_sort_container']/option[1]");}    
    get sortZA() { return $("//select[@class='product_sort_container']/option[2]");}
    get sortLowToHigh() { return $("//select[@class='product_sort_container']/option[3]");}
    get sortHighToLow() { return $("//select[@class='product_sort_container']/option[4]");}


clickSortMenu() {
    return this.sortMenu.click();
}
clickSortAZ() {
    return this.sortAZ.click();
}
clickSortZA() {
    return this.sortZA.click();
}
clickSortLowToHigh() {
    return this.sortLowToHigh.click();
}
clickSortHighToLow() {
    return this.sortHighToLow.click();
}
}

module.exports = new SortOptions_Page();