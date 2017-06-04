'use strict';
/**
 * @classdesc Object that represents Home > Tops page > Filters.
 */
class TopsPage {

    get pageElements() {
        return {
            homeURL: '/',
            topsURL: '/en/tsuk/category/clothing-427/tops-44',
            topsHeaderText: '.PlpContainer-productListContainer > h1 > span.PlpHeader-title',
            productListView: ':nth-child(1) > div.ProductViews.Filters-column > button.Button.ProductViews-button.is-active',
            filterButton:'.Filters-column.Filters-refineButtonContainer > button',
            colourFilter: '.PlpContainer-productListContainer > div.Refinements.is-shown > div > ' +
            'div.AccordionGroup.RefinementList > article:nth-child(1) > div.Accordion-header.is-padded > header > ' +
            'div > span.RefinementList-label.is-value',
            blackColourFilter: '.PlpContainer-productListContainer > div.Refinements.is-shown > div > div.AccordionGroup.RefinementList > ' +
            'article.Accordion.Accordion-groupMember.is-expanded > div.Accordion-wrapper > div > div > div > ' +
            'button:nth-child(1) > span.ValueOption-label',
            whiteColourFilter: '.PlpContainer-productListContainer > div.Refinements.is-shown > div > div.AccordionGroup.RefinementList > ' +
            'article.Accordion.Accordion-groupMember.is-expanded > div.Accordion-wrapper > div > div > div > ' +
            'button:nth-child(15) > span.ValueOption-label',
            applyFilterButton: '.PlpContainer-productListContainer > div.Refinements.is-shown > div > ' +
            'div.Refinements-applyButtonWrapper > button',
            numberofFilterApplied: '.PlpContainer-productListContainer > div.Filters > div.Filters-row.Filters-refinement > ' +
            'div.Filters-column.Filters-refineButtonContainer > button > span',
            clearFilterButton:'.Refinements-clearButton',
            //browser.isExisting('');
        };
    }

    /**
     *  @desc Gets tops page header text
     *  @param no data
     *  @ returns { Promise }
     */
    getTopsHeaderText() {
        if(browser.isExisting(this.pageElements.topsHeaderText)){
            return browser.getText(this.pageElements.topsHeaderText);
        }else{
            return false;
        }
    }
    /**
     *  @desc Checks if the product list view is enabled on the page
     *  @param no data
     *  @ returns { Promise }
     */
    showProductView() {
        if(browser.isEnabled(this.pageElements.productListView)){
            return true;
        }else{
            return false;
        }
    }

    clickFilterButton(){
        if(browser.isExisting(this.pageElements.filterButton)){
            browser.click(this.pageElements.filterButton);
            return true;
        }else{
            return false;
        }
    }
    getColourFilterText() {
        if(browser.isExisting(this.pageElements.colourFilter)){
            return browser.getText(this.pageElements.colourFilter);
        }else{
            return false;
        }
    }
    clickColourFilter(){
        if(browser.isExisting(this.pageElements.colourFilter)){
            browser.click(this.pageElements.colourFilter);
            return true;
        }else{
            return false;
        }
    }
    selectBlackColourFilter(){
        if(browser.isExisting(this.pageElements.blackColourFilter)){
            browser.click(this.pageElements.blackColourFilter);
            return true;
        }else{
            return false;
        }
    }
    selectWhiteColourFilter(){
        if(browser.isExisting(this.pageElements.whiteColourFilter)){
            browser.click(this.pageElements.whiteColourFilter);
            return true;
        }else{
            return false;
        }
    }
    applyFilter(){
        if(browser.isExisting(this.pageElements.applyFilterButton)){
            browser.click(this.pageElements.applyFilterButton);
            return true;
        }else{
            return false;
        }
    }
    getNumberofFilterApplied() {
        if(browser.isExisting(this.pageElements.numberofFilterApplied)){
            return browser.getText(this.pageElements.numberofFilterApplied);
        }else{
            return false;
        }
    }
    clearFilter(){
        if(browser.isExisting(this.pageElements.clearFilterButton)){
            browser.click(this.pageElements.clearFilterButton);
            return true;
        }else{
            return false;
        }
    }

}
module.exports = new TopsPage();
