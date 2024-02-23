import{Given, When, Then, Before, After} from "cypress-cucumber-preprocessor/steps";
import { crm_LoginPage } from "../PageObjectModel/crm_LoginPage";
import { crm_HomePage } from "../PageObjectModel/crm_HomePage";
import { crm_ContactsPage } from "../PageObjectModel/crm_ContactsPage";
import { crm_DealsPage } from "../PageObjectModel/crm_DealsPage";

const loginpage = new crm_LoginPage
const homepage = new crm_HomePage
const contactpage = new crm_ContactsPage
const dealspage = new crm_DealsPage


const timestamp_val = Date.now();
const firstName='firstname_'+timestamp_val
const lastName='lastname_'+timestamp_val
const contactname=firstName+" "+lastName
Before(()=>{
    loginpage.crm_Login()
    homepage.verifyPageTitle()
    homepage.verifyLoggedinUser("Shivakumar T")
})


//Given Create a new contact as customer
Given("Create a new contact as customer",()=>{
    homepage.clickContactsTab()
    contactpage.create_newcontact('firstname_'+timestamp_val,'lastname_'+timestamp_val,'Customer','Active')
    
})

//When Open deals and create deals associate with company and customer created
When("Open deals and create deals associate with company and customer created",()=>{
    cy.reload()
    homepage.clickDealsTab()
    dealspage.createNewDeal('deal_'+timestamp_val,"Cerner",contactname)

})

//Then Verify deal created successfully
Then("Verify deal created successfully",()=>{
    dealspage.verifyDealdetails('deal_'+timestamp_val,"Cerner",contactname)
})

After(()=>{
    homepage.logout()
})