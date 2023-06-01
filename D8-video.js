const {chromium} = require( 'playwright');

( async() => {
    // function code
    const browser = await chromium.launch({headless:false, slowMo:100});

    // video kaydi icin context olustur

    const context = await browser.newContext({
        recordVideo: {dir: './recordings'}
    });

    const page = await context.newPage();
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

     // click on button
    await page.click('button');

     // waiting for loading animation to appear
     await page.waitForSelector('#loading');

     // and disappear
    await page.waitForSelector('#loading', {state: 'hidden'});

    await page.waitForTimeout(3000);


    await browser.close();

})();