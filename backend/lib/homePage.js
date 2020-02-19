let HomePage = require('./basePage');
let result;

HomePage.prototype.findInputAndButton = async function () {

    let searchInput = await this.findById("usernameId");
    let searchButton = await this.findById("inputId");

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

HomePage.prototype.findThroughId = async function (id) {
    result = await this.findById(id);

    return await this.driver.wait(async function () {

        return await result.getText();
    }, 5000);
};

HomePage.prototype.findThroughXPath = async function (xpath) {

    result = await this.findByXpath(xpath);

    return await this.driver.wait(async function () {

        const text = await result.getText();
    }, 5000);
}

HomePage.prototype.findThroughTagName = async function (tag) {

    result = await this.findByTagName(tag);

    return await this.driver.wait(async function () {

        const text = await result.getText();
        return text;
    }, 5000);
};

module.exports = HomePage;