const {describe, it, after, before} = require('mocha');
const ExercisePage = require('../lib/createExerciseLogPage');
const dotenv = require('dotenv');
dotenv.config();
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

process.on('unhandledRejection', () => {
});

(async function example() {
    try {
        describe('Create New Exercise Log page automated testing', async function () {
            this.timeout(5000);
            let driver, page;

            beforeEach(async () => {
                page = new ExercisePage();
                driver = page.driver;
                await page.visit(`${process.env.TESTING_URL}/create`);

            });

            afterEach(async () => {
                await page.quit();
            });

            // TODO: worked
            it('Create New Exercise Log -- check if contents are displayed ', async () => {
                const title = await page.findThroughTagName("h3");
                expect(title).to.equal('Create New Exercise Log');

                const usernameLabel = await page.findThroughId("usernameLabel");
                expect(usernameLabel).to.equal('Username:');

                const descriptionLabel = await page.findThroughId("descriptionLabel");
                expect(descriptionLabel).to.equal('Description:');

                const durationLabel = await page.findThroughId("durationLabel");
                expect(durationLabel).to.equal('Duration (in minutes):');

                const dateLabel = await page.findThroughId("dateLabel");
                expect(dateLabel).to.equal('Date:');

            });

            it('find the input box and button', async () => {
                const result = await page.findExerciseInputAndButton();
                expect(result.userNameSelectionEnableFlag).to.equal(true);
                expect(result.descriptionInputEnableFlag).to.equal(true);
                expect(result.durationInputEnableFlag).to.equal(true);
                expect(result.datePickerEnableFlag).to.equal(true);
                expect(result.createButtonText).to.equal('Create Exercise Log');
            });

            // TODO: Front-end needs to add action after click on submit button
            // it('put name in input box and click create-user button', async () => {
            //     const result = await page.submitKeywordAndGetResult();
            //     expect(result.length).to.be.above(3);
            // });


        });
    } catch (ex) {
        console.log(new Error(ex.message));
    } finally {

    }
})();