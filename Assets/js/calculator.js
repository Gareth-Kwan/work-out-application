const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a2a3b32e48mshcfe3303e61d0395p1e54b7jsn7fce9df6b268",
    "X-RapidAPI-Host": "mega-fitness-calculator1.p.rapidapi.com",
  },
};
var heightEl = document.querySelector("#height");
var weightEl = document.querySelector("#weight");
var submitBtnEl = document.querySelector(".submit");
var bmiEl = document.querySelector(".bmi");
var healthEl = document.querySelector(".health");
var bmiRangeEl = document.querySelector(".bmiRange");

submitBtnEl.addEventListener("click", function () {
  var height = heightEl.value;
  var weight = weightEl.value;
  fetch("https://mega-fitness-calculator1.p.rapidapi.com/bmi?weight=" + weight + "&height=" + height, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.info.bmi);
      console.log(data.info.health);
      console.log(data.info.healthy_bmi_range);
      bmiEl.textContent = data.info.bmi;
      healthEl.textContent = data.info.health;
      bmiRangeEl.textContent = data.info.healthy_bmi_range;
    });
});
