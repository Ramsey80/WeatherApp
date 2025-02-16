// main.js
import { makeWeatherReport } from './weatherFunction.js';

const city = 'New York';
const temperature = 22;
const condition = 'sunny';

// Make weather report
const weatherReport = makeWeatherReport(city, temperature, condition);

// Output the weather report to the webpage
document.getElementById('output').innerText = weatherReport;