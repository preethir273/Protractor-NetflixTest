// spec.js
var netflixHomepage = require('../pages/NetflixHomepage');
var netflixLoginpage = require('../pages/NetflixLoginpage');

describe('Netflix login test', function() {
  
  //Go to netflix home page. verify title
  it('should have a title', function() {
    browser.waitForAngularEnabled(false);
    netflixHomepage.get(); 
    expect(browser.getTitle()).toContain('Netflix India');
  });

  //Click on signin button in home page. verify elements displayed in the redirected login page
  it('validate sign in page', function() {
    netflixHomepage.clickSignInLink(); 
    expect(browser.getTitle()).toEqual('Netflix');
    expect(netflixLoginpage.getHeading()).toEqual('Sign In');
    expect(netflixLoginpage.emailPhoneTextBox.isPresent()).toBeTruthy();
    expect(netflixLoginpage.passwordTextBox.isPresent()).toBeTruthy();
    expect(netflixLoginpage.signInButton.isPresent()).toBeTruthy();
  });
  
  //click on sign in button without entering credentials. Error should be displayed.	
  it('click on sign in button - error displayed', function() {
    netflixLoginpage.clickSignInButton();
    expect(browser.getTitle()).toEqual('Netflix');
    expect(netflixLoginpage.getHeading()).toEqual('Sign In');
    expect(netflixLoginpage.emailPhoneError.isPresent()).toBeTruthy();
    expect(netflixLoginpage.passwordError.isPresent()).toBeTruthy(); 
  });
});



