import axios from "axios";
const APPL = 'https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=CQGFjUNond5EVUcnjpKfFqATVoVZDIFf'

function getAPPL(){
axios.get(APPL).then(function (response){
    console.log(response.data);
}).catch(function(error){
    console.log(error);
})
};

getAPPL();
