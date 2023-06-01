const {chromium} = require( 'playwright');

( async() => {
    // function code
    const browser = await chromium.launch({headless:false, slowMo:100});
    const page = await browser.newPage();
    await page.goto('https://www.amazon.com/');
    await page.getByPlaceholder('Search Amazon').click();
    await page.getByPlaceholder('Search Amazon').fill('nutella');
    await page.getByPlaceholder('Search Amazon').press('Enter');
    await page.goto('https://www.amazon.com/Nutella-Hazelnut-Chocolate-Spread-400g/dp/B00CM53N0U/ref=sr_1_2?crid=RJI3T3FS4L0H&keywords=nutella&qid=1685606478&sprefix=nutella%2Caps%2C291&sr=8-2');
    await page.getByRole('link', { name: 'Visit the Nutella Store' }).click();

    await browser.close();

})();