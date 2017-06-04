export const gotoTopsPage = () => {
    browser.url('/en/tsuk/category/clothing-427/tops-44')
}

export const gettopsheaderText = () => {
    return browser.getText('.PlpContainer-productListContainer > h1 > span.PlpHeader-title');
}

export const showProductView = () => {
    browser.isEnabled(':nth-child(1) > div.ProductViews.Filters-column > button.Button.ProductViews-button.is-active');
}

export const clickFilterButton = () => {
    browser.isVisible('.Filters-column.Filters-refineButtonContainer > button');
    browser.click('.Filters-column.Filters-refineButtonContainer > button');
}

export const getColourFilterText = () => {
    return browser.getText('.PlpContainer-productListContainer > div.Refinements.is-shown > div > ' +
        'div.AccordionGroup.RefinementList > article:nth-child(1) > div.Accordion-header.is-padded > header > ' +
        'div > span.RefinementList-label.is-value');
}

export const clickColourFilter = () => {
    browser.click('.PlpContainer-productListContainer > div.Refinements.is-shown > div > ' +
        'div.AccordionGroup.RefinementList > article:nth-child(1) > div.Accordion-header.is-padded > header > ' +
        'div > span.RefinementList-label.is-value');
}


export const isVisibleBlackColourFilter = () => {
    return browser.isVisible('.PlpContainer-productListContainer > div.Refinements.is-shown > div > div.AccordionGroup.RefinementList > ' +
        'article.Accordion.Accordion-groupMember.is-expanded > div.Accordion-wrapper > div > div > div > ' +
        'button:nth-child(1) > span.ValueOption-label');
}

export const getBlackColourFilterText = () => {
    return browser.getText('.PlpContainer-productListContainer > div.Refinements.is-shown > div > div.AccordionGroup.RefinementList > ' +
        'article.Accordion.Accordion-groupMember.is-expanded > div.Accordion-wrapper > div > div > div > ' +
        'button:nth-child(1) > span.ValueOption-label');
}

export const selectBlackColourFilter = () => {
    browser.click('.PlpContainer-productListContainer > div.Refinements.is-shown > div > div.AccordionGroup.RefinementList > ' +
        'article.Accordion.Accordion-groupMember.is-expanded > div.Accordion-wrapper > div > div > div > ' +
        'button:nth-child(1) > span.ValueOption-label');
}

export const isVisibleWhiteColourFilter = () => {
    return browser.isVisible('.PlpContainer-productListContainer > div.Refinements.is-shown > div > div.AccordionGroup.RefinementList > ' +
        'article.Accordion.Accordion-groupMember.is-expanded > div.Accordion-wrapper > div > div > div > ' +
        'button:nth-child(15) > span.ValueOption-label');
}

export const getWhiteColourFilterText = () => {
    return browser.getText('.PlpContainer-productListContainer > div.Refinements.is-shown > div > div.AccordionGroup.RefinementList > ' +
        'article.Accordion.Accordion-groupMember.is-expanded > div.Accordion-wrapper > div > div > div > ' +
        'button:nth-child(15) > span.ValueOption-label');
}

export const selectWhiteColourFilter = () => {
    browser.click('.PlpContainer-productListContainer > div.Refinements.is-shown > div > div.AccordionGroup.RefinementList > ' +
        'article.Accordion.Accordion-groupMember.is-expanded > div.Accordion-wrapper > div > div > div > ' +
        'button:nth-child(15) > span.ValueOption-label');
}

export const getColourFilters = () => {
    browser.getText('.PlpContainer-productListContainer > div.Refinements.is-shown > div > ' +
        'div.AccordionGroup.RefinementList > article.Accordion.Accordion-groupMember.is-expanded > ' +
        'div.Accordion-header.is-padded > header > div > span.RefinementList-selection.is-value');
}

export const applyFilter = () => {
    browser.isVisible('.PlpContainer-productListContainer > div.Refinements.is-shown > div > ' +
        'div.Refinements-applyButtonWrapper > button');
    browser.click('.PlpContainer-productListContainer > div.Refinements.is-shown > div > ' +
        'div.Refinements-applyButtonWrapper > button');
}

export const getNumberofFilterApplied = () => {
    return browser.getText('.PlpContainer-productListContainer > div.Filters > div.Filters-row.Filters-refinement > ' +
        'div.Filters-column.Filters-refineButtonContainer > button > span');
}

export const clearFilter = () => {
    browser.isVisible('.Refinements-clearButton');
    browser.click('.Refinements-clearButton');
}
