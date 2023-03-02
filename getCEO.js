import axios from 'axios';

async function getCompanyInfo(ticker) {
    try {
      const response = await axios.get(`https://api.polygon.io/v2/reference/tickers/${ticker}?apiKey=<"CQGFjUNond5EVUcnjpKfFqATVoVZDIFf">`);
      return response.data.description;
    } catch (error) {
      console.error(error);
    }
  }
  

  function extractCEO(description) {
    const regex = /CEO: (.*)/;
    const match = regex.exec(description);
    if (match && match.length > 1) {
      return match[1];
    } else {
      return null;
    }
  }

  export { getCompanyInfo, extractCEO };


