class ScreenProtectorPage {
    firstItem = '.products__unit:first-child'
    sortingSelected = "#select2-chosen-8"    
    priceThree = ":nth-child(3) > * >.catalog_tovar_cost"
    priceTwo = ".phone-cat-i:nth-child(2) > *> * > .pay-box"
    rateOne = ":first-child > * > * > * >* > * > .vote-active"
    colorDropdown = "//*[contains(text(),'Цвет')]"
    blackColor = "//*[text()='Черный']"
    iPhone12ProMaxModel = "//span[contains(text(),'iPhone 12 Pro Max')]"
    modelDropdown = "//*[text()='Модель вашего устройства']"
    showMore = "//descendant::a[@class='products-filters__section__more products-filters__more'][2]"
    brandDropdown = "//div[contains(text(),'Производитель')]"
    typeDropdown = "//*[contains(text(),'Тип аксессуара')]"
    appleBrand = "#arrCatalogFilter_1006_1717292072 > * > span.js-filter-value"
    priceDropdown = "//div[contains(text(),'Цена, руб.')]"
    priceFromFiled = '[id="price-min"]'
    priceToFiled = '[id="price-max"]'

    selectColor(color) {
        cy.xpath(this.colorDropdown).click()
        cy.xpath(color).click()
        return this
    }

    selectModel(modelName) {
        cy.xpath(this.modelDropdown).click()
        cy.xpath(this.showMore).click()
        cy.xpath(modelName).trigger('mousemove').click()
        return this
    }

    fillInPrice(priceFrom, priceTo) {
        cy.xpath(this.priceDropdown).click()
        cy.get(this.priceToFiled).clear()
        cy.get(this.priceToFiled).type(priceTo)
        cy.get(this.priceFromFiled).clear().type(priceFrom)
        return this
    }

    selectBrand(brandName) {
        cy.xpath(this.brandDropdown).click()
        cy.get(brandName).trigger('mousemove').click()
        return this
    }

    selectType(typeName) {
        cy.xpath(this.typeDropdown).click()
        cy.xpath(typeName).click()
        return this
    }
}
export default new ScreenProtectorPage();
