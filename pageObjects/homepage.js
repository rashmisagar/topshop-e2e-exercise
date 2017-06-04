export const gotoPage = () => {
    browser.url('/')
}

export const hasLogo = () => {
    browser.isVisible(".BrandLogo-img")
}

export const searchItem = () => {
    browser.click('.Header-left.Header-searchButton');
}

export const searchby = (item) => {
    var input = browser.element('#searchTermInput');
    input.setValue(item);
}

export const applySearch = () => {
    browser.click('.SearchBar-button');
}