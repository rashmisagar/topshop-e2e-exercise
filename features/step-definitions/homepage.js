var homepage = require('../../pageObjects/home');

module.exports = function () {
    this.Given(/^I am on the landing page$/, homepage.gotoPage)
    this.Then(/^I can see logo in navigation bar$/, homepage.hasLogo)
}
