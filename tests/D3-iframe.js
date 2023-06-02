const {chromium} = require( 'playwright');

( async() => {
    // function code
    const browser = await chromium.launch({headless:false, slowMo:100});
    const page = await browser.newPage();
    await page.goto('https://demoqa.com/frames');

    // handle the iframe
    const frame1 = await page.frame({ url : /sample/ });
    
    const heading= await frame1.$('#sampleHeading');

    console.log(await heading.innerText());

    await browser.close();

})();