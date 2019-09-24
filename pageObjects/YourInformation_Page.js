class YourInformation_Page {
    get firstName() { return $('#first-name');}
    get lastName() { return $('#last-name');}
    get postalCode() { return $('#postal-code');}
    get continueButton() { return $("//input[@type='submit']");}


 setFirstName(firstName) {
    return this.firstName.setValue(firstName);
}

 setLastName(lastName) {
    return this.lastName.setValue(lastName);
}
 setPostalCode(postalCode) {
    return this.postalCode.setValue(postalCode);
}

 clickContinueButton(){
    return this.continueButton.click();
}

submitAllInformationViaYourInformationForm(firstName, lastName, postalCode) {
    if(firstName) {
        this.firstName.setValue(firstName);
    }
    if(lastName) {
        this.lastName.setValue(lastName);
    }
    if(postalCode) {
        this.postalCode.setValue(postalCode);
    }
    this.continueButton.click();


}
}

module.exports = new YourInformation_Page();




