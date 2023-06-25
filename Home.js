const cheerio = require('cheerio')
fetch("https://www.w3schools.com/w3css/tryw3css_templates_band.htm")
  .then(response => response.text())
  .then(html => {
    const $ = cheerio.load(html);
    $('a').each((index, element) => {
      console.log($(element).attr('href'));
    });
  })
  .catch(error => {
    console.log('An error occurred:', error);
  });
