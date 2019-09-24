class Login_Page {
    get userName() { return $('#user-name');}
    get password() { return $('#password');}
    get loginButton() { return $('.btn_action');}


    
setUserName(userName) {
    return this.userName.setValue(userName);
}

setPassword(password) {
    return this.password.setValue(password);
}

clickLoginButton() {
    return this.loginButton.click();
}
}

module.exports = new Login_Page();