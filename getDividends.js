import axios from 'axios';

const apiUrl = `https://api.polygon.io/v2/reference/dividends/${"AAPL"}?apiKey=${"CQGFjUNond5EVUcnjpKfFqATVoVZDIFf"}`;


// This will return dividends and exdate in an array
axios.get(apiUrl)
  .then((response) => {
    const dividends = response.data.results;
    dividends.forEach((dividend) => {
      console.log(`Ex-date: ${dividend.exDate}, Amount: ${dividend.amount}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });


