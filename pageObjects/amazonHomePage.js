import {Selector, t} from "testcafe";

class amazonHomePage{

    constructor(){
        //this.searchInput = Selector("#twotabsearchtextbox")  - used this selector at first but the Amazon page loaded by TestCafe changed upon test run and would cause failures
        this.searchInput = Selector('input[type="text"]')
        this.searchBtn = Selector("#nav-search-submit-button")
    }

    async searchByText(text){
        await t
        .typeText(this.searchInput, text)
        .click(this.searchBtn)
    }

}

export default new amazonHomePage();