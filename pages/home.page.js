const { Selector, t } = require('testcafe');

class HomePage {
    constructor() {
        this.SignInLink = Selector("a").withText('Sign in');
        this.imgBanner = Selector("[alt='Banner']");
        this.listItems = Selector("[class='card']");
        this.ProductName = Selector('h1').withText('Bolt Cutters');
    }

    async verifyHomeLoads() {
        await t
            .expect(this.SignInLink.exists).ok()
            .expect(this.imgBanner.exists).ok();
    }

    async selectItemByName(itemName) {
        const itemCount = await this.listItems.count;

        for (let i = 0; i < itemCount; i++){
            const itemCard = this.listItems.nth(i);
            if (await itemCard.find('[data-test="product-name"]').innerText === itemName) {
                console.log(`Item Name: ${await itemCard.find('[data-test="product-name"]').innerText}`);
                await t
                    .click(itemCard);
                break;
            }
        }

        await t.expect(this.ProductName.exists).ok()
    }

    async clickSignIn() {
        await t
            .click(this.SignInLink);
    }
}

module.exports = new HomePage();