const {chromium} = require( 'playwright');

( async() => {
    // function code
    const browser = await chromium.launch({headless:false, slowMo:100});
    const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/key_presses');

    await page.click('input');
    await page.keyboard.type(' merhaba benim adim yavuz');
    await page.keyboard.down('Shift');

    for (let i=0; i< 'dim yavuz'.length; i++){
        await page.keyboard.press('ArrowLeft');
    }

    await page.keyboard.up('Shift');
    await page.keyboard.press('Delete');

    // burdan sonra tekrar keyboard.type diyerek baska seyler yazabiliriz
    

    await page.waitForTimeout(5000);

    await browser.close();

})();