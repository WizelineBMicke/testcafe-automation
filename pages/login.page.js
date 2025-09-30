const { Selector, t } = require('testcafe');

class LoginPage {
    constructor() {
        this.emailInput = Selector('#email');
        this.passwordInput = Selector('#password');
        this.signInButton = Selector('[data-test="login-submit"]');
        this.isLoginSuccessful = Selector('[data-test="page-title"]').withText('My account');
    }

    async login(email, password) {
        await t
            .typeText(this.emailInput, email)
            .typeText(this.passwordInput, password)
            .click(this.signInButton);
    }

    async verifyLoginSuccess() {
        await t.expect(this.isLoginSuccessful.exists).ok();
    }   
}

module.exports = new LoginPage();