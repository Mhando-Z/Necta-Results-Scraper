---

# Web Scraping with JavaScript using Cheerio and Axios

Web scraping might sound complicated, but it's simply the process of pulling out data from websites. Most of the time, we normally use Python for the job. But that doesn’t mean JavaScript can't do the job. There are many ways to scrape a website using JavaScript. For this project, we are going to use Axios and Cheerio to complete the job.

## Why Axios and Cheerio?

Cheerio:` The fast, flexible & elegant library for parsing and manipulating HTML and XML.  
Axios:` Axios is a promise-based HTTP Client for Node.js and the browser.


## NOTE:
## If you are interested in only using the script follow the following Steps
1.Clone or fork the repository make sure your computer has Node installed.
  if not click this link to install node [here](https://nodejs.org/).\n
2.Then run npm install to install packages\n
3.Go to Necta website choose the school you want to scrape there results\n
4.Copy Url then in index.js file you will find a variable named url, change the variable\n 
5.then run node index.js\n
6.Done! happy scraping...\n
its so easy that it will take you seconds to see the results 
Remember this Script works only on Necta webpages.


# FOR THOSE WHO WANTS TO LEARN HOW IT WAS DONE SEE DOCUMENTATION BELOW

## Prerequisites

Make sure you have Node.js installed. You can download Node.js from [here](https://nodejs.org/).

## Steps for Web Scraping

### Step 1: Preparation

First, initialize a new project:`
```bash
mkdir web-scraping
cd web-scraping
npm init -y
```

Now, install Axios and Cheerio:`
```bash
npm install axios cheerio
```

### Step 2: Request the Data with an HTTP Client

Create a new JavaScript file; let's name our file `index.js` for simplicity. In this file, we will use Axios to fetch the HTML content of a web page.

```javascript
const axios = require('axios');

const url = 'https://example.com'; // Replace with the URL you want to scrape

axios.get(url)
  .then(response => {
    console.log(response.data); // This will print the raw HTML data
  
```

### Step 3: Parse the Raw HTML Data

Next, we'll use Cheerio to parse the HTML data fetched by Axios.

```javascript
const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://example.com'; // Replace with the URL you want to scrape

axios.get(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    // Now you can use Cheerio to select elements and extract data
  
```

### Step 4: Collect Only the Data You Need
```
Use Cheerio's selectors to extract the specific data you need. For example, if you want to extract all the text within `<h2>` tags:`

```javascript
const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://example.com'; // Replace with the URL you want to scrape

axios.get(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

    const data = [];

    
```

## Challenges

- Formatting Results:The main challenge was formatting the results into an array of objects. This required a lot of thinking and maneuvering to make the data look as it was requested.
- Lack of CSS Classes:` The webpage had no CSS classes, which posed another challenge. When using Cheerio for scraping data, CSS selectors are crucial. Since CSS was not there, I had to collect all data with the `table` element.

## Conclusion

With Axios and Cheerio, you can effectively scrape and parse web data using JavaScript. These tools provide a simple yet powerful way to perform web scraping tasks, making it easier to collect and manipulate data as needed.

Feel free to fork this repository and experiment with different websites. Happy scraping!

---

By following these steps, you should be able to scrape web data using JavaScript effectively. This documentation is designed to guide you through the process and highlight some challenges you might face along the way. If you have any questions or need further assistance, feel free to open an issue on the repository.

---
