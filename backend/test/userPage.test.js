const { describe, it } = require('mocha');
const Page = require('../lib/userPage');
const dotenv = require('dotenv');
dotenv.config();
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

process.on('unhandledRejection', () => { });

(async function example() {
    try {
        describe('User page automated testing', async function () {
            this.timeout(5000);
            let page;

            beforeEach(async () => {
                page = new Page();
                driver = page.driver;
                await page.visit(`${process.env.TESTING_URL}/user`);
            });

            afterEach(async () => {
                await page.quit();
            });

            it('find the input box and button', async () => {
                const result = await page.findUserInputAndButton();
                expect(result.inputEnabled).to.equal(true);
                expect(result.buttonText).to.include('Create User');
            });

            it('check if contents are displayed ', async () => {
                const title = await page.findThroughTagName("h3");
                expect(title).to.equal('Create New User');

                const UserNameLable = await page.findThroughTagName("label");
                expect(UserNameLable).to.equal('Username:');

            });

            it('submit input and click button with added successfully message', async () => {
                const message = await page.submitUserPageKeywordAndGetResult("userAddedId");
                expect(message).to.equal('User created successfully!');
            });
        });
    } catch (ex) {
        console.log(new Error(ex.message));
    }
})();