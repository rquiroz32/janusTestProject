import { Selector, t } from "testcafe";

class ProductResultsPage{

    constructor(){
       /* 
       Originally used the selectors below but testCafe couldn't reliably click the link (I believe it was too short and sometimes it clicks on the whitespace right next to the span instead)
       As a result I decided to have it click on the image of the product itself since it takes up much more screen real estate and hence should more reliably click on the element. 
       
       this.huyFongSriracha = Selector('div[data-asin="B000HQN22A"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-section > .a-spacing-small > .s-title-instructions-style > h2.a-size-mini > a.a-link-normal > span.a-size-base-plus')  //> span.a-size-base-plus        
       this.greenPan = Selector('div[data-asin = "B07Y8Z89L4"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-section > .a-spacing-small > .s-title-instructions-style > h2.a-size-mini > a.a-link-normal')
       

       UPDATE: decided to use the original huyFongSriracha selector to verify the product was appearing in search results
       */
        this.huyFongSriracha = Selector('div[data-asin="B000HQN22A"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-section > .a-spacing-small > .s-title-instructions-style > h2.a-size-mini > a.a-link-normal > span.a-size-base-plus')  //
        this.huyFongSrirachaImage = Selector('div[data-asin="B000HQN22A"] > .sg-col-inner > .s-widget-container > .s-card-container > div.a-section >div.s-product-image-container> span[data-component-type="s-product-image" ] >a.a-link-normal >div.a-section > img.s-image')
        this.greenPanImage = Selector('div[data-asin="B07Y8Z89L4"] > .sg-col-inner > .s-widget-container > .s-card-container > div.a-section >div.s-product-image-container> span[data-component-type="s-product-image" ] >a.a-link-normal >div.a-section > img.s-image')
    }
    
}

export default new ProductResultsPage();