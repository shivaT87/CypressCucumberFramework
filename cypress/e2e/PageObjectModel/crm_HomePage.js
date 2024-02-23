export class crm_HomePage {

    contacts_tab="a.item[href='/contacts']>span"
    home_tab="//span[text()='Home']"
    companies_tab="//span[text()='Companies']"
    deals_tab="//span[text()='Deals']"
    loggedinuser="span.user-display"
    logout_dropdpwn="div[class*='basic button floating item dropdown']"
    logout_button="//div[@class='menu transition visible']//a/span[text()='Log Out']"



    verifyPageTitle(){
        cy.title().should('eq','Cogmento CRM')
        
    }

    clickContactsTab(){
        cy.get(this.contacts_tab).click()
        cy.wait(3000)
        cy.get(this.contacts_tab).click()
        cy.url().should('include','contacts')

    }

    clickCompaniesTab(){
        cy.xpath(this.companies_tab).click()
        cy.url().should('include','companies')
        cy.wait(5000)

    }

    clickDealsTab(){
        
        cy.xpath(this.deals_tab).click()
        cy.wait(3000)
        //cy.get('.item > .money').click({force: true})
        cy.url().should('include','deals')
    }
    
    verifyLoggedinUser(username){
        cy.get(this.loggedinuser).then(($ele)=>{
            cy.log($ele.text())
            cy.get(this.loggedinuser).should('have.text',username)
            
        })
    }
    
    logout(){
        //cy.get(this.logout_dropdpwn).click()
        cy.get('.floating > :nth-child(1)').click()
        cy.wait(3000)
        cy.xpath(this.logout_button).click()
    }


}