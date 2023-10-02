const puppeteer = require('puppeteer');

(async () => {
  const urls = [
    'https://www.thegoodpropaganda.com/p/education-and-fraternity',
    'https://www.thegoodpropaganda.com/p/the-champions-mindset',
    'https://www.thegoodpropaganda.com/p/metaphor',
    'https://www.thegoodpropaganda.com/p/a-few-anathemas',
    'https://www.thegoodpropaganda.com/p/life-paths',
    'https://www.thegoodpropaganda.com/p/q-and-a-no-4',
    'https://www.thegoodpropaganda.com/p/elements-of-greatness',
    'https://www.thegoodpropaganda.com/p/something-about-happiness',
    'https://www.thegoodpropaganda.com/p/the-cloud-and-the-matador',
    'https://www.thegoodpropaganda.com/p/the-cosmopolitan',
    'https://www.thegoodpropaganda.com/p/the-role-of-music-in-life',
    'https://www.thegoodpropaganda.com/p/the-capitalists-wager',
    'https://www.thegoodpropaganda.com/p/finding-purpose',
    'https://www.thegoodpropaganda.com/p/living-offline',
    'https://www.thegoodpropaganda.com/p/a-modern-life',
    'https://www.thegoodpropaganda.com/p/lessons-from-lent',
    'https://www.thegoodpropaganda.com/p/on-self-education',
    'https://www.thegoodpropaganda.com/p/failing-isnt-being-a-failure',
    'https://www.thegoodpropaganda.com/p/cinematheque-no-1-52-movies-to-see',
    'https://www.thegoodpropaganda.com/p/the-art-of-smelling-good',
    'https://www.thegoodpropaganda.com/p/today-is-the-sabbath-what-does-that',
    'https://www.thegoodpropaganda.com/p/on-drugs-and-whether-we-should-take',
    'https://www.thegoodpropaganda.com/p/q-and-a-no-3',
    'https://www.thegoodpropaganda.com/p/preparing-to-die',
    'https://www.thegoodpropaganda.com/p/shadow-integration',
    'https://www.thegoodpropaganda.com/p/submission',
    'https://www.thegoodpropaganda.com/p/changes',
    'https://www.thegoodpropaganda.com/p/q-and-a-no-2',
    'https://www.thegoodpropaganda.com/p/the-call-of-the-wild-by-jack-london',
    'https://www.thegoodpropaganda.com/p/a-brief-introduction-to-the-occult',
    'https://www.thegoodpropaganda.com/p/why-you-should-be-an-elitist-snob',
    'https://www.thegoodpropaganda.com/p/q-and-a-1',
    'https://www.thegoodpropaganda.com/p/crime-and-punishment',
    'https://www.thegoodpropaganda.com/p/the-master-of-anxiety',
    'https://www.thegoodpropaganda.com/p/the-law-of-unequal-exchange',
    'https://www.thegoodpropaganda.com/p/become-well-read-in-one-year',
    'https://www.thegoodpropaganda.com/p/the-mother-of-virtue',
    'https://www.thegoodpropaganda.com/p/the-closeness-of-all-things-far-away-4ec',
    'https://www.thegoodpropaganda.com/p/the-closeness-of-all-things-far-away-0c3',
    'https://www.thegoodpropaganda.com/p/the-closeness-of-all-things-far-away',
    'https://www.thegoodpropaganda.com/p/caravaggio-michelangelo-judith-beheading',
    'https://www.thegoodpropaganda.com/p/the-meaning-of-a-melody',
    'https://www.thegoodpropaganda.com/p/then-again',
    'https://www.thegoodpropaganda.com/p/why-men-kill-themselves',
    'https://www.thegoodpropaganda.com/p/against-the-counter-culture-desire',
    'https://www.thegoodpropaganda.com/p/paradise-lost',
    'https://www.thegoodpropaganda.com/p/money-sex-drugs-and-other-lies'
  ];
    

    const browser = await puppeteer.launch({
        executablePath: '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser', // Replace with the actual path to Brave
        userDataDir: '/Users/IliasJaddiDouieb/Library/Application Support/BraveSoftware/Brave-Browser',
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
