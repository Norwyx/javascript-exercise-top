const convertToCelsius = function(fahrenheit) {
  let convertedC = round((fahrenheit - 32) * (5/9), 1);
  return convertedC;
};

const convertToFahrenheit = function(celsius) {
  let convertedF = round((celsius * 9/5) + 32, 1)
  return convertedF;
};

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
