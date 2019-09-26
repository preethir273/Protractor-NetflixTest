var NetflixLoginpage = function() {
  var signInHeading = element(by.tagName('h1'));
  this.emailPhoneTextBox = element(by.xpath('//input[@id="id_userLoginId"]'));
  this.passwordTextBox = element(by.xpath('//input[@id="id_password"]'));
  this.signInButton = element(by.buttonText('Sign In'));
  this.emailPhoneError = element(by.cssContainingText('.inputError','Please enter a valid email address or phone number.'));
  this.passwordError = element(by.cssContainingText('.inputError','Your password must contain between 4 and 60 characters.'));
  this.signInError = element(by.cssContainingText('.ui-message-contents',"Sorry, we can't find an account"));
 
  this.clickSignInButton = function() {
    this.signInButton.click();
  };
  this.getHeading = function() {
    return signInHeading.getText();
  };
  this.setPhoneEmail = function(phoneEmail) {
    this.emailPhoneTextBox.sendKeys(phoneEmail);
  };
  this.setPassword = function(password) {
    this.passwordTextBox.sendKeys(password);
  };
};
module.exports = new NetflixLoginpage();
