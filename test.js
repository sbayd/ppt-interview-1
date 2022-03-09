const puppeteer = require('puppeteer');
const sum = (a, b) => a + b;


jest.setTimeout(600000);
describe.skip('Summary', () => {
    test('should work', () => {

    })
});


describe('Workflow Page', () => {
    test('Page Title Should be "Workflow"', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: {
                width:1024,
                height:768
              }
        });
        const page = await browser.newPage();

        await page.goto('https://www.jotform.com/workflow/new');
        await page.waitForNetworkIdle();

        
        await browser.close();

    });
}, 60000)