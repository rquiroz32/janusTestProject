import amazonHomePage from "../pageObjects/amazonHomePage";
import productResultsPage from "../pageObjects/productResultsPage";
import productPage from "../pageObjects/productPage";
import successfulAddToCartPage from "../pageObjects/successfulAddToCartPage";


fixture `Amazon search and add to cart test suite`
.page("./")

test("Verify Sriracha appears in search results", async (t)=>{
    await t.maximizeWindow()
    await amazonHomePage.searchByString("Sriracha")            
    await t
    .expect(productResultsPage.huyFongSriracha.innerText).contains("Huy Fong")
});


test("User can search for Sriracha with text ", async (t)=>{
    await t.maximizeWindow()
    await amazonHomePage.searchByString("Sriracha")            
    await t.click(productResultsPage.huyFongSrirachaImage)        
    await productPage.clickAddToCartBtn()
    await t
    .expect(successfulAddToCartPage.SuccessfullyAddedToCart.innerText).contains("Added to Cart")
});

test("User can search for Sriracha by ASIN ", async (t)=>{
    await t.maximizeWindow()    
    await amazonHomePage.searchByString("B000HQN22A")    
    await t.click(productResultsPage.huyFongSrirachaImage)    
    await productPage.clickAddToCartBtn()    
    await t
    .expect(successfulAddToCartPage.SuccessfullyAddedToCart.innerText).contains("Added to Cart")
});

test("User can search for greenpan with text ", async (t)=>{
    await t.maximizeWindow()
    await amazonHomePage.searchByString("greenpan")            
    await t.click(productResultsPage.greenPanImage)        
    await productPage.clickAddToCartBtn()
    await t
    .expect(successfulAddToCartPage.SuccessfullyAddedToCart.innerText).contains("Added to Cart")
});

test("User can search for a greenpan by ASIN ", async (t)=>{
    await t.maximizeWindow()    
    await amazonHomePage.searchByString("B07Y8Z89L4")    
    await t.click(productResultsPage.greenPanImage)    
    await productPage.clickAddToCartBtn()    
    await t
    .expect(successfulAddToCartPage.SuccessfullyAddedToCart.innerText).contains("Added to Cart")
});
