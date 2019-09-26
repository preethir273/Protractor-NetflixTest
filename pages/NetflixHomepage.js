var NetflixHomepage = function() {
  var signInLink = element(by.cssContainingText('a.authLinks.redButton','Sign In'));
  
  this.get = function() {
    browser.get('https://www.netflix.com/in/'); 
  };

  this.clickSignInLink = function() {
    signInLink.click();
  };
};
module.exports = new NetflixHomepage();