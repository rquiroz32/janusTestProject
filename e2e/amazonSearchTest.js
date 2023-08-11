import amazonHomePage from "../pageObjects/amazonHomePage";
import productResultsPage from "../pageObjects/productResultsPage";
import productPage from "../pageObjects/productPage";
import successfulAddToCartPage from "../pageObjects/successfulAddToCartPage";

fixture `Amazon search test`
.page("./")

test("Can search for a product with text ", async (t)=>{
    await t.debug()
    await amazonHomePage.searchByText("Sriracha")
    await t.debug()
    await productResultsPage.clickProduct()
    await t.debug()
    await productPage.clickAddToCartBtn()
    await t.debug()
    await t
    .expect(successfulAddToCartPage.SuccessfullyAddedToCart.innerText).contains("Added to Cart")
})