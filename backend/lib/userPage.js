let UserPage = require('./basePage');
const fake = require('../utils/fakeData');
const fakeNameKeyword = fake.nameKeyword;

let searchInput, searchButton, resultStat, result;

UserPage.prototype.findUserInputAndButton = async function () {

    searchInput = await this.findById("usernameInputId");
    searchButton = await this.findById("inputId");

    const result = await this.driver.wait(async function () {
    
        const searchButtonText = await searchButton.getAttribute('value');
        const searchInputEnableFlag = await searchInput.isEnabled();
        return {
            inputEnabled: searchInputEnableFlag,
            buttonText: searchButtonText
        }
    }, 5000);
    return result;
};

UserPage.prototype.submitUserPageKeywordAndGetResult = async function (id) {

    await this.findUserInputAndButton();
    await this.write(searchInput, fakeNameKeyword);
    await searchButton.click();
    
    resultStat = await this.driver.wait(() => this.findThroughId(id), 5000);

    return await this.driver.wait(async function () {

        return await resultStat;
    }, 5000);
};

UserPage.prototype.findThroughId = async function (id) {

    result = await this.findById(id);

    return await this.driver.wait(async function () {

        return await result.getText();
    }, 5000);
};

UserPage.prototype.findThroughTagName = async function (tag) {

    result = await this.findByTagName(tag);

    return await this.driver.wait(async function () {

        const text = await result.getText();
        return text;
    }, 5000);
};

module.exports = UserPage;