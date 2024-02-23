export class crm_LoginPage{
    
    email_textbox="input[name='email']"
    password_textbox="input[name='password']"
    login_button=".ui.fluid.large.blue.submit.button"
    
    enterUsername(username){
        cy.get(this.email_textbox).type(username)
    }

    enterPassword(password){
        cy.get(this.password_textbox).type(password)
    }

    clickLogin(){
        cy.get(this.login_button).click()

    }

    crm_Login(){
        cy.visit("https://ui.freecrm.com/")
        this.enterUsername("tshiva27may@gmail.com")
        this.enterPassword("Shiva@87")
        this.clickLogin()
    }
}