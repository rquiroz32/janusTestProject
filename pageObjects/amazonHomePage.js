import {Selector, t} from "testcafe";

class amazonHomePage{

    constructor(){
        
        this.searchInput = Selector('input[type="text"]')

        /*
        Used the class based selectorsbelow  at first to find the input by id and click on the search button by id;
        however, because Amazon renders the page differently in the testcafe browser sporadically 
        I switched the input[type="text"] selector as it's the only input of that type on the page, then chose to use the enter key press instead of clicking on the button

        this.searchInput = Selector("#twotabsearchtextbox")  
        this.searchBtn = Selector("#nav-search-submit-button")

        */
        
    }

    async searchByString(text){
        await t
        .typeText(this.searchInput, text)
        .pressKey('enter')        
    }

}

export default new amazonHomePage();