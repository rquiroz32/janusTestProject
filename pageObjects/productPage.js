import { Selector, t } from "testcafe";

class ProductPage{
    constructor(){
        this.addToCartBtn = Selector("#add-to-cart-button")
    }

    async clickAddToCartBtn(){
        await t
        .click(this.addToCartBtn)
    }

};

export default new ProductPage();