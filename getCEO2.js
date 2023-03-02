import { getCompanyInfo, extractCEO } from './getCEO.js';

async function getCEO(ticker) {
  const companyInfo = await getCompanyInfo(ticker);
  const ceo = extractCEO(companyInfo);
  console.log(`The CEO of ${ticker} is ${ceo}`);
}

getCEO('AAPL'); // Output: The CEO of AAPL is Tim Cook
