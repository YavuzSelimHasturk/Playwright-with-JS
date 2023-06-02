const {chromium} = require( 'playwright');

( async() => {
    // function code
    const browser = await chromium.launch({headless:false, slowMo:700});
    const page = await browser.newPage();
    await page.goto('https://paint.js.org');

    await page.mouse.move(200,200);
    await page.mouse.down();
    await page.mouse.move(400,200);
    await page.mouse.move(400,400);
    await page.mouse.move(200,400);
    await page.mouse.move(200,200);
    await page.mouse.up();

  // take screenshot

  await page.screenshot({path: 'screenshot.png'});

  const toolBox = await page.$('paint-tool-box');

  await toolBox.screenshot({path: 'tool.png'});


  // ONEMLIIIII 
  // playwright ile asagi dogru inen sayfalarda tum sayfanin screenshot ini alabiliriz. bunun icin 
  // await page.screenshot({path: 'screenshot.png', fullPage:true});  yapmamiz gerekiyor


    await browser.close();

})();