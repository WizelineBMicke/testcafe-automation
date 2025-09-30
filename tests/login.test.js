require('dotenv').config();
const loginData = require('../data/loginData.json');

const homePage = require('../pages/home.page');
const loginPage = require('../pages/login.page');

fixture('Login Tests Suite')
    .page(process.env.PAGE_URL);

test("Login with Valid credentials", async t => {
     await homePage.verifyHomeLoads();
     await homePage.clickSignIn();
     await loginPage.login(loginData.validCredentials.email, loginData.validCredentials.password);
     await loginPage.verifyLoginSuccess();
});