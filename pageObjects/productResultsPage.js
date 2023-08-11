import { Selector, t } from "testcafe";

class ProductResultsPage{

    constructor(){
        this.huyFongSriracha = Selector('div[data-asin="B000HQN22A"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-section > .a-spacing-small > .s-title-instructions-style > h2.a-size-mini > a.a-link-normal > span.a-size-base-plus')  //> span.a-size-base-plus        
        this.greenPan = Selector('div[data-asin = "B07Y8Z89L4"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-section > .a-spacing-small > .s-title-instructions-style > h2.a-size-mini > a.a-link-normal')
    }
    
}

export default new ProductResultsPage();