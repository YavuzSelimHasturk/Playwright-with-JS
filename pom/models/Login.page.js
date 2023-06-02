const BasePage = require('./Base.page');
class LoginPage extends BasePage {
    constructor(page){
        super(page);
    
        // Locators
        this.userNameTxt= '#username';
        this.passwordTxt = '#password';
        this.LoginBtn= '#log-in'; 
    }

    async navigate(){
        await super.navigate('index.html');
    }
        /*
    * Method to login using username and password
    * @param {string} username 
    * @param {string} password 
    */
    
    async login(username,password){
        await this.page.fill(this.userNameTxt,username);
        await this.page.fill(this.passwordTxt,password);
        await this.page.click(this.LoginBtn);
    }

}
module.exports.LoginPage;