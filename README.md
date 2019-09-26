ABOUT
Three simple test cases are added to test Netflix home and login page.
1. Verify page title in Netflix home page
2. Redirect to sign in page and verify presence of elements
3. Verify error on click of Sign in button without entering credentials
4. Invalid login credentials

TO RUN
Prerequisites: npm installed, JDK installed, selenium server
1. Install Protractor using the below command
npm install -g protractor

2. Start selenium server using the below commands
webdriver-manager update
webdriver-manager start

3. Run the test with the below command
protractor conf.js