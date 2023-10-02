const puppeteer = require('puppeteer');

(async () => {
  const urls = [
    'https://www.url.com/p/veryinterestingpost',
  ];
    

    const browser = await puppeteer.launch({
        executablePath: '7', // Replace "7" with the actual path to Brave
        userDataDir: '8', // Replace "8" with the actual path to your userDataDir, if not working, execute the browser and sign-in from there.
        headless: false, // Set to true for headless mode, false for GUI mode
    });

    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: 'networkidle0' });

    // You can customize the PDF options here
    const pdfOptions = {
      path: `page${i + 1}.pdf`, // Specify the PDF file name
      format: 'A4',
    };

    await page.pdf(pdfOptions);
    console.log(`Saved ${url} as ${pdfOptions.path}`);
  }
  await browser.close();

})();
