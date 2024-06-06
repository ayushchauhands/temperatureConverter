"use strict";

const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
let temperatureEl = document.getElementById("temperature-el");

convertBtn.addEventListener("click", function () {
  let baseValue = inputEl.value;
  let temperatureCelsius = (baseValue - 32) / 1.8;
  let temperatureFareheit = baseValue * 1.8 + 32;

  temperatureEl.innerHTML = `${baseValue} Farenheit = ${temperatureCelsius.toFixed(
    3
  )} Celsius | ${baseValue} Celsius = ${temperatureFareheit.toFixed(
    3
  )} Fareheit`;

  inputEl.value = "";
});
