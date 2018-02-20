var Register = function () {

  //elements to access
  var username = element(by.model('authModel.username'));
  var email = element(by.model('authModel.email'));
  var password = element(by.css('.e-input--password.ng-invalid-match'));
  var passwordRepeat = element(by.css('.e-input--password.ng-valid-matchnot'));
  var nextButton = element(by.css('.e-btn'));
  var registerButton = element(by.css('.e-btn.m-auth-registration__button--step2'));
  var checkBox = element(by.css('.e-label__checkbox-icon'));
  var firstName = element(by.model('authModel.firstname'));
  var lastName = element(by.model('authModel.surname'));
  var bDay = element(by.model('dateModel.days'));
  var bMonth = element(by.model('dateModel.months'));
  var bYear = element(by.model('dateModel.years'));
  var address = element(by.model('authModel.address1'));
  var postcode = element(by.model('authModel.postalCode'));
  var city = element(by.model('authModel.city'));
  var phoneNr = element(by.model('authModel.phone'));
  var until = protractor.ExpectedConditions;
  var findCountry = element(by.css('.c-dropdown__toggle.c-dropdown__toggle--bottom'))
  var selectCountry = element(by.css('.e-flag--gi'))
  var findCurrency = element(by.css('#currencySelector'));
  var selectCurrency = element(by.css('[data-value="GBP"]'));
  var findPhonePrefix = element(by.css('#phonePrefix'));
  var selectPhonePrefix = element(by.css('[data-value="+355"]'));

  this.navigateToURL = function (registerUrl) {
      browser.get(registerUrl);
  };
  this.setUsername = function (user) {
    username.sendKeys(user);
  };
  this.setEmail = function (mail) {
    email.sendKeys(mail);
  };
  this.setPassword = function (pswd) {
    password.sendKeys(pswd);
  };
  this.setPasswordRepeat = function (pswdR) {
      passwordRepeat.sendKeys(pswdR);
  };
  this.RegNextButton = function () {
    nextButton.click();
  };
  this.checkTerms = function () {
    checkBox.click();
  };
  this.setFirstName = function (fName) {
    browser.wait(until.presenceOf(firstName), 5000, 'Element took too long to appear in the DOM');
    firstName.sendKeys(fName);
  };
  this.setLastName = function (lName) {
    lastName.sendKeys(lName);
  };
  this.setbDay = function (day) {
    bDay.sendKeys(day);
  };
  this.setbMonth = function (month) {
    bMonth.sendKeys(month);
  };
  this.setbYear = function (year) {
    bYear.sendKeys(year);
  };
  this.setAddress = function(addr){
    address.sendKeys(addr);
  };
  this.setPostcode = function(zip){
    postcode.sendKeys(zip);
  };
  this.setCity = function(signUpCity){
    city.sendKeys(signUpCity);
  };
  this.setPhoneNr = function(phone){
    phoneNr.sendKeys(phone);
  };
  this.setCountry = function(){
    findCountry.click();
    selectCountry.click();
  };
  this.setCurrency = function(){
    findCurrency.click();
    selectCurrency.click();
  };
  this.setPhonePrefix = function(){
    findPhonePrefix.click();
    selectPhonePrefix.click();
  };
  this.RegCompleteButton = function () {
    browser.sleep(2000);
    registerButton.click();
  };
};

module.exports = new Register();