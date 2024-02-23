
export class crm_ContactsPage {

    create_button="//a[@href='/contacts/new']/button"
    showFilters_button="//button[text()='Show Filters']"

    firstname_textfield="//input[@name='first_name']"
    lastname_textfield="//input[@name='last_name']"
    category_dropdownlist="//div[@name='category']/div[@class='menu transition']/div[@name='category']"
    status_dropdownlist="//div[@name='status'][@role='listbox']/div[@class='menu transition']/div[@name='status']/span"

    save_button=".item>.ui.linkedin.button"

    newcontact_eventsTab="//div[@class='custom-view-list-container']/div/div//a[text()='Events']"
    event_add_icon="//h4[@class='aux-custom-title']/a[starts-with(@href,'/calendar/new?contact')]/button"
    event_title_textfield="//input[@name='title']"
    event_save_button="//div[@class='item']//button[@class='ui linkedin button']"

    newcontact_dealsTab="//div[@class='custom-view-list-container']/div/div//a[text()='Deals']"
    deal_add_icon="//button[@class='ui basic icon button']/i[@class='add icon']"
    deal_title_textfield="//input[@name='title']"
    deal_save_button="//div[@class='item']//button[@class='ui linkedin button']"


    create_newcontact(firstName,lastName,category,status){
        cy.xpath(this.create_button).click()
        cy.xpath(this.firstname_textfield).type(firstName)
        cy.xpath(this.lastname_textfield).type(lastName)
        cy.xpath(this.category_dropdownlist)
        .each(($el,index,$list)=>{
            if($el.text()==category){
                cy.wrap($el).click({force: true})
            }
        })
        cy.xpath(this.status_dropdownlist)
        .each(($el,index,$list)=>{
            if($el.text()==status){
                cy.wrap($el).click({force: true})
            }
        })
        cy.get(this.save_button).click()   
    }

    newcontact_Events_Creation(eventTitle){
        cy.xpath(this.newcontact_eventsTab).click({force: true})
        cy.xpath(this.event_add_icon).click()
        cy.xpath(this.event_title_textfield).type(eventTitle)
        cy.xpath(this.event_save_button).click()

    }

    newcontact_Deals_Creation(dealsTitle){
        cy.xpath(this.newcontact_dealsTab).click({force: true})
        cy.xpath(this.deal_add_icon).click()
        cy.xpath(this.deal_title_textfield).type(dealsTitle)
        cy.xpath(this.deal_save_button).click()

    }

    verify_contact_created(firstName,lastName){
        const contactname=firstName+" "+lastName
        cy.log("Expecting customer name "+contactname)
        cy.xpath("//table[@class='ui celled definition sortable striped table custom-grid']/tbody/tr//td/a").contains(contactname).should('exist')
        // cy.xpath("//table[@class='ui celled definition sortable striped table custom-grid']/tbody/tr//td/a")
        // .each(($e1,index,$list)=>{
        //     var name=$e1.text() 
        //     cy.log(name)
        //     if(name===contactname){
        //         cy.log('User Found')
        //         expect(name).to.equals(contactname)            
        //     }
        // })
        // console.log(contactname)
        // cy.get("table.ui>tbody>tr>td:nth-child(2)>a").each(($el,index,$list)=>{
        //     const actualcustomername=$el.text()
        //     if(actualcustomername===contactname){
        //         cy.log("Successfully found created customer")
        //         console.log("Successfully found created customer")
        //     expect(contactname).to.equals(actualcustomername)
        //     }
        // })
        
    }

    open_contact_created(firstName,lastName){
        const contactname=firstName+" "+lastName
        cy.log("Need to open contact "+contactname)
        cy.get("table.ui>tbody>tr>td:nth-child(2)>a").each(($el,index,$list)=>{
            const actualcustomername=$el.text()
            cy.log(actualcustomername)
            if(actualcustomername===contactname){
                cy.wrap($el).click()

            }
        })
        
    }

    verify_event_created(eventname){
        cy.get("span.event-text").contains(eventname)
    }

    verify_deal_created(dealname){
        cy.get("div.content>a.aux-link").contains(dealname).should('exist')
    }


    delete_contact(firstName,lastName){
        const contactname=firstName+" "+lastName
        cy.get("table[class*='striped table custom-grid']>tbody>tr").each(($el,index,$list)=>{
            const namefound=$el.find("td>a").text()
            if(namefound===contactname){
                cy.wrap($el).find("td.right.aligned.collapsing.options-buttons-container>button[class='ui button icon']").click()
                cy.wait(5000)
                cy.get("button.ui.red.button").click()

            }

        })
        

    }
    

}