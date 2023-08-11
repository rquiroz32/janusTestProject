import { Selector } from "testcafe";

class SuccessAddToCartPage{

    constructor(){
        this.SuccessfullyAddedToCart = Selector(".a-size-medium-plus")
    }

}

export default new SuccessAddToCartPage();