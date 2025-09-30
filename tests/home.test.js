require('dotenv').config();
const homeData = require('../data/homeData.json');
const homePage = require('../pages/home.page');

fixture('Home Page Tests Suite')
    .page(process.env.PAGE_URL);

test("Select item by Name", async t => {
     await homePage.verifyHomeLoads();
     await homePage.selectItemByName(homeData.item1.itemName);
});