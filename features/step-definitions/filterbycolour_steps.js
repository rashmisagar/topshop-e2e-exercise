
var homepage = require('../../pageObjects/home');
var topspage = require('../../pageObjects/tops');


var assert = require('assert')
var chai = require('chai')

module.exports = function () {

    this.Given(/^I am viewing product list (homepage|tops)$/,
        function (page, done) {
            if(page == 'homepage'){
                browser.url('./');

            } else if(page == 'tops'){
                homepage.searchItem();
                homepage.searchBy('tops');
                homepage.applySearch();
                browser.pause(2000);
                topspage.showProductView();
                var hasTopsHeader = topspage.getTopsHeaderText();
                assert.equal(hasTopsHeader,'Tops','this will pass');

                browser.pause(2000);
            }
            done();

        }
    )

    this.Given(/^I filter the product list$/,
        function (done) {

            topspage.clickFilterButton();

            done();
        }
    )
    this.Given(/^I filter by option "([^"]*)?"$/,
        function (element, done) {

            const isVisible = browser.isVisible(element);
            var hasColourFilter = topspage.getColourFilterText();
            assert.equal(hasColourFilter,'Colour');
            if(hasColourFilter == "Colour"){
                browser.pause(2000);
                topspage.clickColourFilter();
                browser.pause(3000);

            } else{
                console.log("Colour filter is not visible");
            }
            done();
        }
    )

    this.Given(/^I select colour 'Black'$/,
        function (done) {

            topspage.selectBlackColourFilter();

            done();

        }

    )

    this.Given(/^I select colour 'White'$/,
        function (done) {

            topspage.selectWhiteColourFilter();

            done();
        }

    )

    this.When(/^I apply these filters$/,
        function (done) {

            topspage.applyFilter();

            done();
        }
    )
    this.Then(/^Filter button has (1|no) filter$/,
        function (numfilter, done) {

            if(numfilter == '1') {
                var numberoffilterapplied = topspage.getNumberofFilterApplied();
                assert.equal(numberoffilterapplied, '(1)', '(1) Filter applied');

            } else if(numfilter == 'no') {
                var numberoffilterapplied = topspage.getNumberofFilterApplied();
                assert.equal(numberoffilterapplied, '', 'No Filter applied');
            }

            done();
        }
    )
    this.Then(/^Filter returns a product list$/,
        function (done) {

            topspage.showProductView();
            var hasTopsHeader = topspage.getTopsHeaderText();
            assert.equal(hasTopsHeader,'Tops','this will pass');

            done();
        }
    )

    this.Then(/^I clear all filters$/,
        function (done) {

            topspage.clearFilter();

            done();
        }
    )
}