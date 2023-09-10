function convertCelsiusToFahrenheit() {
  const celsiusInput = document.getElementById("celsiusInput").value;
  const fahrenheitResult = (celsiusInput * 9/5) + 32;
  document.getElementById("fahrenheitResult").textContent = `Result: ${fahrenheitResult.toFixed(2)}°F`;
}

function convertFahrenheitToCelsius() {
  const fahrenheitInput = document.getElementById("fahrenheitInput").value;
  const celsiusResult = (fahrenheitInput - 32) * 5/9;
  document.getElementById("celsiusResult").textContent = `Result: ${celsiusResult.toFixed(2)}°C`;
}
