const {chromium} = require( 'playwright');

( async() => {
    // function code
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://demoqa.com/automation-practice-form');

    // print the element state

    const firstName= await page.$('#firstName');
    const sportsCheckBox = await page.$('#hobbies-checkbox-1');
    const dosyaSecBtn = await page.$('#uploadPicture'); 

    console.log(await firstName.isDisabled);
    console.log(await firstName.isEnabled);
    console.log(await firstName.isEditable);
    console.log(await sportsCheckBox.isChecked);
    console.log(await sportsCheckBox.isVisible);
    console.log(await dosyaSecBtn.isHidden);
    console.log(await dosyaSecBtn.isVisible);






    await browser.close();

})();