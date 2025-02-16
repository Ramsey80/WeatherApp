// weatherFunction.js
const makeWeatherReport = (city, temperature, condition) => {
    return `The weather in ${city} is ${condition} with a temperature of ${temperature}°C.`;
};

export { makeWeatherReport };