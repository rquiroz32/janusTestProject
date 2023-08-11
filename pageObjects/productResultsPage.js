import { Selector, t } from "testcafe";

class ProductResultsPage{

    constructor(){
        this.huyFongSriracha = Selector('div[data-asin="B000HQN22A"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-section > .a-spacing-small > .s-title-instructions-style > h2.a-size-mini > a.a-link-normal')  //> span.a-size-base-plus
    }

    async clickProduct(){
        await t
        .click(this.huyFongSriracha)
    }
}

export default new ProductResultsPage();