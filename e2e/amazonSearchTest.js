import amazonHomePage from "../pageObjects/amazonHomePage";
import productResultsPage from "../pageObjects/productResultsPage";
import productPage from "../pageObjects/productPage";
import successfulAddToCartPage from "../pageObjects/successfulAddToCartPage";


fixture `Amazon search test`
.page("./")

test("User can search for a product with text ", async (t)=>{
    await t.maximizeWindow()
    await amazonHomePage.searchByText("Sriracha")            
    await t.click(productResultsPage.huyFongSriracha)    
    await t.debug()    
    await productPage.clickAddToCartBtn()
    await t
    .expect(successfulAddToCartPage.SuccessfullyAddedToCart.innerText).contains("Added to Cart")
});

test("User can search for a product by ASIN ", async (t)=>{
    await t.maximizeWindow()    
    await amazonHomePage.searchByText("B07Y8Z89L4")    
    await t.click(productResultsPage.greenPan)    
    await productPage.clickAddToCartBtn()    
    await t
    .expect(successfulAddToCartPage.SuccessfullyAddedToCart.innerText).contains("Added to Cart")
})

