var NetflixLoginpage = function() {
  var signInHeading = element(by.tagName('h1'));
  this.emailPhoneTextBox = element(by.xpath('//input[@id="id_userLoginId"]'));
  this.passwordTextBox = element(by.xpath('//input[@id="id_password"]'));
  this.signInButton = element(by.buttonText('Sign In'));
  this.emailPhoneError = element(by.cssContainingText('.inputError','Please enter a valid email address or phone number.'));
  this.passwordError = element(by.cssContainingText('.inputError','Your password must contain between 4 and 60 characters.'));

  this.clickSignInButton = function() {
    this.signInButton.click();
  };
  this.getHeading = function() {
    return signInHeading.getText();
  };
};
module.exports = new NetflixLoginpage();