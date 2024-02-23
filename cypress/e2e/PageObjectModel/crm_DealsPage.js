export class crm_DealsPage {

    
deals_title="table[class*='striped table custom-grid']>tbody>tr>td>a"
deals_Create_button= '[href="/deals/new"] > .ui'
create_new_deal_title_field="input[name='title']"

clickViewDeal(deal){
    cy.get(this.deals_title).contains(deal).click()
    cy.get("i.large.money.red.icon").should("exist")
}

verifyCreatedDeal(dealname){
    cy.get(this.deals_title).contains(dealname).should('exist')
}

createNewDeal(dealname,companyname,contactname){
    cy.get(this.deals_Create_button).click({force:true})
    cy.get(this.create_new_deal_title_field).type(dealname)

    //company name selection from dynamic drop down
    cy.get("div[name='company']").type(companyname)
    cy.get("div.visible.menu.transition>div[role='option']").each(($e1, index, $list) => {
    if($e1.text()===companyname)
    {
        cy.wrap($e1).click({force: true})
    }
    })

    //contact name selection from dynamic drop down
    cy.get("div[name='contacts']").type(contactname)
    cy.get("div.visible.menu.transition>div[role='option']").each(($e1, index, $list) => {
    if($e1.text()===contactname)
    {
        cy.wrap($e1).click({force: true})
    }
    })

    cy.xpath("//button[text()='Save']").click()

}

verifyDealdetails(dealname,companyname,contactname){
    cy.get("i.large.money.red.icon").should("exist")
    cy.get("span.selectable").contains(dealname).should('exist')
    cy.get("div[class*='shortlen-container']").contains(companyname).should('exist')
    cy.get("table[class*='product-table']>tbody>tr>td>a").contains(contactname).should('exist')
}


}