const axios = require("axios");
const cheerio = require("cheerio");

function getResults() {
  try {
    const toolTitle = `  
888b    888 8888888888 .d8888b. 88888888888     d8888      8888888b.  8888888888 .d8888b.  888     888 888    88888888888 .d8888b.  
8888b   888 888       d88P  Y88b    888        d88888      888   Y88b 888       d88P  Y88b 888     888 888        888    d88P  Y88b 
88888b  888 888       888    888    888       d88P888      888    888 888       Y88b.      888     888 888        888    Y88b.      
888Y88b 888 8888888   888           888      d88P 888      888   d88P 8888888    "Y888b.   888     888 888        888     "Y888b.   
888 Y88b888 888       888           888     d88P  888      8888888P"  888           "Y88b. 888     888 888        888        "Y88b. 
888  Y88888 888       888    888    888    d88P   888      888 T88b   888             "888 888     888 888        888          "888 
888   Y8888 888       Y88b  d88P    888   d8888888888      888  T88b  888       Y88b  d88P Y88b. .d88P 888        888    Y88b  d88P 
888    Y888 8888888888 "Y8888P"     888  d88P     888      888   T88b 8888888888 "Y8888P"   "Y88888P"  88888888   888     "Y8888P"  
                                                                                                                                    
                                                                                                                                    
                                                                                                                                    
                 .d8888b.   .d8888b.  8888888b.         d8888 8888888b.  8888888888 8888888b.                                       
                d88P  Y88b d88P  Y88b 888   Y88b       d88888 888   Y88b 888        888   Y88b                                      
                Y88b.      888    888 888    888      d88P888 888    888 888        888    888                                      
                 "Y888b.   888        888   d88P     d88P 888 888   d88P 8888888    888   d88P                                      
                    "Y88b. 888        8888888P"     d88P  888 8888888P"  888        8888888P"                                       
                      "888 888    888 888 T88b     d88P   888 888        888        888 T88b                                        
                Y88b  d88P Y88b  d88P 888  T88b   d8888888888 888        888        888  T88b                                       
                 "Y8888P"   "Y8888P"  888   T88b d88P     888 888        8888888888 888   T88b                                                                                                                                                                                                                    
  `;

    const url =
      "https://matokeo.necta.go.tz/results/2023/csee/CSEE2023/results/s4459.htm";

    // Step 2: Request the data with an HTTP Client
    async function getData() {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);

      const results = [];

      // Step 3: Parse the raw HTML data
      $("table").each((i, table) => {
        const rows = $(table).find("tr");
        rows.each((j, row) => {
          const columns = $(row).find("td");
          if (columns.length > 2) {
            const result = {
              examnumber: $(columns[0]).text().trim(),
              sex: $(columns[1]).text().trim(),
              points: +$(columns[2]).text().trim(),
              division: $(columns[3]).text().trim(),
              subjects: $(columns[4]).text().trim(),
            };
            results.push(result);
          }
        });
      });

      // Step 4: Collect only the data you need
      const polished = results.map((dt) => {
        const { subjects } = dt;
        const subject = subjects.split("  ").map((subjGrade) => {
          const [subject, grade] = subjGrade.split(" - ");
          return {
            subject: subject.trim(),
            grade: grade?.replace(/'/g, "").trim(),
          };
        });
        return {
          ...dt,
          subjects: subject,
        };
      });

      // Step 4: Collect only the data you need
      const yearTitle = $("h1").text();
      const nectaTitle = $("h2").text();
      const xculTitle = $("h3").text();

      // Step 5: Printing data to console
      console.log(toolTitle);
      console.log(`${nectaTitle}\n${yearTitle}\n${xculTitle}`);

      polished.map((dt) => {
        const { subjects } = dt;
        if (subjects.length !== 1) {
          console.log(dt);
        }
      });
    }
    getData();
  } catch (err) {
    console.error(err);
  }
}

getResults();
