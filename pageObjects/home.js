'use strict';
/**
 * @classdesc Object that represents Home > Search > Tops page
 */
class HomePage {

    get pageElements() {
        return {
            searchButton: '.Header-left.Header-searchButton',
            inputSearchText: '#searchTermInput',
            applySearchButton: '.SearchBar-button'
        };
    }

    /**
     *  @desc Search item in home page
     *  @param no data
     *  @ returns { Promise }
     */

    gotoPage(){
        browser.url('/');
    }

    hasLogo(){
        browser.isVisible('.BrandLogo-img');
    }

    searchItem(){
        if(browser.isExisting(this.pageElements.searchButton)){
            browser.click(this.pageElements.searchButton);
            return true;
        }else{
            return false;
        }
    }

    searchBy(item) {
        browser.setValue(this.pageElements.inputSearchText, item);
    }

    applySearch(){
        if(browser.isExisting(this.pageElements.applySearchButton)){
            browser.click(this.pageElements.applySearchButton);
            return true;
        }else{
            return false;
        }
    }

}
module.exports = new HomePage();
