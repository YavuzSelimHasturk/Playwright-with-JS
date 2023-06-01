const {chromium} = require( 'playwright');

( async() => {
    // function code
    const browser = await chromium.launch({headless:false, slowMo:500});
    const page = await browser.newPage();
    await page.goto('https://www.amazon.com');
     
    const searcBox = await page.$('#twotabsearchtextbox');
    await searcBox.type('nutella', {delay:50});
    await page.click('#nav-search-submit-button');
    await page.waitForTimeout(10000);

    const dropdown = await page.$('#searchDropdownBox');
    //value degerlerine gore secme
    await dropdown.selectOption({value:'search-alias=stripbooks-intl-ship'})
    // label degerine gore secme
    await dropdown.selectOption({label:'Computers'});
    // index degerine gore secme
    await dropdown.selectOption({index:6})


    // bu secimlerdeki degerleri getirelim
    const availableOptions= await dropdown.$$('option');

    for ( let i=0; i<availableOptions.length; i++ ){

        console.log(await availableOptions[i].innerText());
    }

    // checkbox a tiklama
    
   const checkbox= await page.$$('//*[@class="a-icon a-icon-checkbox"]');

   await checkbox[0].check();

   await page.waitForTimeout(5000);

    await browser.close();
})();