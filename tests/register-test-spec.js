describe('Kaboo registration form', function(){
//Decaling variables
    var username = 'carlosZXC';
    var pswd = 'WinBig2018';
    var pswdR = 'WinBig2018';
    var email = 'carlosZXC1@gmefail.com';
    var registerPage = require('../pages/register.js');
    var loginPage = require('../pages/login.js');
    var fName = 'gsdf';
    var lName = 'Sebadfgdfgstian';
    var bday = '12';
    var bmonth = '2';
    var byear = '1987';
    var address = 'Ocean Village'
    var postcode = 'GX111AA';
    var city = 'Gibraltar';
    var phone = '123456789';
    var successMsg = 'A verification email has been sent to ${email}';
    var registerUrl = 'http://kaboo:flappybird@qatest.staging.kaboo.com/en/signup';
    var lobbyUrl = 'http://kaboo:flappybird@qatest.staging.kaboo.com/en/lobby';
    var verifiedEmail = 'autouk';
    var verifiedPassword = 'Autotest1';
    //Scenario 1
    it('Should be able to create new account', function(){
    registerPage.navigateToURL(registerUrl);
    registerPage.setEmail(email);
    registerPage.setUsername(username);
    registerPage.setPassword(pswd);
    registerPage.setPasswordRepeat(pswdR);
    registerPage.checkTerms();
    registerPage.RegNextButton();
    registerPage.setFirstName(fName);
    registerPage.setLastName(lName);
    registerPage.setbDay(bday);
    registerPage.setbMonth(bmonth);
    registerPage.setbYear(byear);
    registerPage.setAddress(address);
    registerPage.setPostcode(postcode);
    registerPage.setCity(city);
    registerPage.setPhoneNr(phone);
    registerPage.setCountry();
    registerPage.setCurrency();
    registerPage.setPhonePrefix();
    registerPage.RegCompleteButton();
    expect(successMsg).toBe('A verification email has been sent to ${email}');
    });
    //Scenario 2
    it('Should be able to log in with existing user', function(){
        loginPage.navigateToURL(lobbyUrl);    
        loginPage.setEmail(verifiedEmail);
        loginPage.setPassword(verifiedPassword);
        expect(browser.getLocationAbsUrl()).toBe('/en/profile');
    });
});
