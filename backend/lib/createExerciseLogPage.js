const basePage = require('./basePage');

let userNameSelection, descriptionInput, durationInput, datePicker, createButton, cell, result;
let ExercisePage = basePage;

ExercisePage.prototype.findExerciseInputAndButton = async function () {
    userNameSelection = await this.findById("userNameSelection");

    descriptionInput = await this.findById("descriptionInput");
    durationInput = await this.findById("durationInput");
    datePicker = await this.findById('datePicker');

    createButton = await this.findById('createButton');
    const result = await this.driver.wait(async function () {
        
        const userNameSelectionEnableFlag = await userNameSelection.isEnabled();
        const descriptionInputEnableFlag = await descriptionInput.isEnabled();
        const durationInputEnableFlag = await durationInput.isEnabled();
        const datePickerEnableFlag = await datePicker.isEnabled();
        const createButtonText = await createButton.getAttribute('value');

        return {
            userNameSelectionEnableFlag: userNameSelectionEnableFlag,
            descriptionInputEnableFlag: descriptionInputEnableFlag,
            durationInputEnableFlag: durationInputEnableFlag,
            datePickerEnableFlag: datePickerEnableFlag,
            createButtonText: createButtonText
        }
    }, 5000);
    return result;
};

ExercisePage.prototype.findThroughId = async function (id) {
    result = await this.findById(id);

    return await this.driver.wait(async function () {
        return await result.getText();
    }, 5000);
};

ExercisePage.prototype.findThroughTagName = async function (tag) {
    console.log("homePage.js -- findThroughTagName");
    try {
        result = await this.findByTagName(tag);

    } catch (e) {
        console.log("homePage.js -- ERROR ", e);
    }

    return await this.driver.wait(async function () {
        const text = await result.getText();
        console.log("homePage.js -- result text is ", text);
        return text;
    }, 5000);
};

module.exports = ExercisePage;