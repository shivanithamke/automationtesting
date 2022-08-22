export class linkedinlogin{
    signin_username='input[name=session_key]'//assign locator name 
    signin_password='input[id=password]'//assign locator id
    signin_loginbutton='.btn__primary--large'//assign locator id
    forget_email='#username'
    
    
    entername(username){//username is pass parameter
        cy.get(this.signin_username).type(username)//getname
    }
    enterpass(password){
        cy.get(this.signin_password).type(password)//get id
    }
    clicklogin(){
        cy.get(this.signin_loginbutton).click()//get id
    }
    forgetemail(email){
        cy.get(this.forget_email).type(email)
    }
    
}