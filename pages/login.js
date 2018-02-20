var Login = function(){
    //elements to access
    var email = element(by.model('authModel.usernameOrEmail'));
    var password = element(by.css('.e-input.e-input--password'));
    var loginButton = element(by.css('.m-navigation-login__primary'));
    var profileIcon = element(by.css('c-navigation-item c-navigation-item--profile'));
    this.navigateToURL = function (lobbyUrl) {
        browser.get(lobbyUrl);
    };
    this.setEmail = function(mail){
        email.sendKeys(mail);
    }
    this.setPassword = function(pswd){
        password.sendKeys(pswd);
    }
    this.ClickLogInButton = function () {
        loginButton.click();
        browser.sleep(10000);
      };
    this.IsLoggedIn = function(){
        profileIcon.isDisplayed();
    }
}
module.exports = new Login();