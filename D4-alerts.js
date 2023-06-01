const {chromium} = require( 'playwright');

( async() => {
    // function code
    const browser = await chromium.launch({headless:false, slowMo:700});
    const page = await browser.newPage();
    await page.goto('https://demoqa.com/alerts');
    
    // handle alerts
    // 1. alert
    page.once('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });
    await page.click('#confirmButton');

    // 2.alert
    page.once('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept('my text hello ');
    });
    await page.click('#promptButton');

    await browser.close();

})();