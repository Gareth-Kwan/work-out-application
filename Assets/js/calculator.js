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
var bmiValue = "";
var bmiHealth = "";
var bmiRange = "";

submitBtnEl.addEventListener("click", function () {
  var height = heightEl.value;
  var weight = weightEl.value;
  localStorage.clear();
  fetch("https://mega-fitness-calculator1.p.rapidapi.com/bmi?weight=" + weight + "&height=" + height, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //console.log(data);
      //console.log(data.info.bmi);
      //console.log(data.info.health);
      //console.log(data.info.healthy_bmi_range);
      bmiValue = data.info.bmi;
      bmiEl.textContent = bmiValue;
      localStorage.setItem("bmi",bmiValue)
      bmiHealth = data.info.health;
      healthEl.textContent = bmiHealth;
      localStorage.setItem("health",bmiHealth)
      bmiRange = data.info.healthy_bmi_range;
      bmiRangeEl.textContent = bmiRange;
      localStorage.setItem("bmirange",bmiRange)
    });
});

bmiValue = localStorage.getItem('bmi');
bmiEl.textContent = bmiValue;
bmiHealth = localStorage.getItem('health');
healthEl.textContent = bmiHealth;
bmiRange = localStorage.getItem('bmirange');
bmiRangeEl.textContent = bmiRange;