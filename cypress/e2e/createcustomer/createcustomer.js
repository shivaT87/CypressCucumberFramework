import{Given, When, Then, After, Before} from "cypress-cucumber-preprocessor/steps";
import { crm_LoginPage } from "../PageObjectModel/crm_LoginPage";
import { crm_HomePage } from "../PageObjectModel/crm_HomePage";
import { crm_ContactsPage } from "../PageObjectModel/crm_ContactsPage";

const loginpage = new crm_LoginPage
const homepage = new crm_HomePage
const contactpage = new crm_ContactsPage

const timestamp_val = Date.now();
    //var timestamp = cy.moment().utc();
    //cy.log(timestamp_val)
    Before(()=>{
        loginpage.crm_Login()
        
    })

//Given Visit free crm website
Given("Visit free crm website",()=>{
    loginpage.crm_Login()
    //homepage.verifyPageTitle()
    //homepage.verifyLoggedinUser("Shivakumar T")
    
})

//When Create a new customer
When("Create a new customer",()=>{
    homepage.clickContactsTab()
    contactpage.create_newcontact('firstname_'+timestamp_val,'lastname_'+timestamp_val,'Customer','Active')
    
})


// When("Add a event to the created customer",()=>{
//     contactpage.newcontact_Events_Creation("TestEventToday")

// })

//Then Verify Created customer
Then("Verify Created customer", ()=>{
    homepage.clickContactsTab()
    //cy.pause()
    contactpage.verify_contact_created('firstname_'+timestamp_val,'lastname_'+timestamp_val)
    //cy.pause()
})

//Given Load the created customer
Given("Load the created customer",()=>{
    //loginpage.crm_Login()
    contactpage.open_contact_created('firstname_'+timestamp_val,'lastname_'+timestamp_val)

})

//When Add event to customer
When("Add event to customer",()=>{
    contactpage.newcontact_Events_Creation("Even_"+timestamp_val)
})

//Then Verify event added successfully
Then("Verify event added successfully",()=>{
    homepage.clickContactsTab()
    contactpage.open_contact_created('firstname_'+timestamp_val,'lastname_'+timestamp_val)
    contactpage.verify_event_created("Even_"+timestamp_val)

})

//Given Reload the created customer
Given("Reload the created customer",()=>{
    homepage.clickContactsTab()
    contactpage.open_contact_created('firstname_'+timestamp_val,'lastname_'+timestamp_val)

})

//When Open deals tab and create new deal
When("Open deals tab and create new deal",()=>{
    contactpage.newcontact_Deals_Creation("Deal_"+timestamp_val)
})

//Then Verify deal added successfully
Then("Verify deal added successfully", ()=>{
    homepage.clickContactsTab()
    contactpage.open_contact_created('firstname_'+timestamp_val,'lastname_'+timestamp_val)
    contactpage.verify_deal_created("Deal_"+timestamp_val)
})

After(()=>{
  homepage.logout()
})