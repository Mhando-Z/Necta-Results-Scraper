---

# NECTA Results Scraper

This script scrapes results from the NECTA website for a chosen school.

## Installation and Usage Instructions

1. **Clone or Fork the Repository**
   - Ensure your computer has Node.js installed. If not, click [here](https://nodejs.org/) to install Node.js.

2. **Install Packages**
   - Run `npm install` to install the necessary packages.

3. **Choose School on NECTA Website**
   - Go to the NECTA website and choose the school whose results you want to scrape.

4. **Update URL in Script**
   - Copy the URL of the chosen school and update the `url` variable in the `index.js` file with this URL.

5. **Run the Script**
   - Execute the script by running `node index.js` in your terminal.

6. **Done!**
   - Happy scraping! You should see the results in seconds.

#Note:
This script works only on NECTA webpages.


# Web Scraping was done using Cheerio and Axios

Web scraping might sound complicated, but it's simply the process of pulling out data from websites. Most of the time, we normally use Python for the job. But that doesn’t mean JavaScript can't do the job. There are many ways to scrape a website using JavaScript. For this project, we are going to use Axios and Cheerio to complete the job.

## Why Axios and Cheerio?

Cheerio:` The fast, flexible & elegant library for parsing and manipulating HTML and XML.  
Axios:` Axios is a promise-based HTTP Client for Node.js and the browser.


## Challenges

- Formatting Results:The main challenge was formatting the results into an array of objects. This required a lot of thinking and maneuvering to make the data look as it was requested.
- Lack of CSS Classes:` The webpage had no CSS classes, which posed another challenge. When using Cheerio for scraping data, CSS selectors are crucial. Since CSS was not there, I had to collect all data with the `table` element.

## Conclusion

With Axios and Cheerio, you can effectively scrape and parse web data using JavaScript. These tools provide a simple yet powerful way to perform web scraping tasks, making it easier to collect and manipulate data as needed.

Feel free to fork this repository and experiment with different websites. Happy scraping!

---

By following these steps, you should be able to scrape web data using JavaScript effectively. This documentation is designed to guide you through the process and highlight some challenges you might face along the way. If you have any questions or need further assistance, feel free to open an issue on the repository.

---
